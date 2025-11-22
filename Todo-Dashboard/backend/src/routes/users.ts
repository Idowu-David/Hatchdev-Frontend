import { Router, type Request, type Response } from "express";
import express from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../../db";

const router = Router();
const JWT_SECRET = String(process.env.JWT_SECRET);

const signupValidation = [
  body("email").isEmail().withMessage("Please enter a valid email"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

/**
 * @route POST /auth/users/signup
 * @desc Register a new user
 */

router.post(
  "/signup",
  signupValidation,
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await db.query(
        `INSERT INTO users (username, email, password)
			VALUES ($1, $2, $3) RETURNING *`,
        [username, email, hashedPassword]
      );

      const newUser = result.rows[0];
      const tokenPayload = {
        id: newUser.id,
        username: newUser.username,
      };

      const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "1h" });

      res.status(201).json({ message: "User signed up successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Database error" });
    }
  }
);

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // res.status(200).json({ message: "Login" });

  const user = await db.query(
    `SELECT * FROM users
		WHERE email = ($1)`,
    [email]
  );

  if (user.rows.length === 0) {
    return res.status(404).json({ message: "User does not exist" });
  }

  try {
    const userData = user.rows[0];
    const userEmail = userData.email;
    const userPassword = userData.password;
    const userName = userData.username;
    const userId = userData.id;

    const isMatch = await bcrypt.compare(password, userPassword);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const tokenPayload = {
      id: userId,
      email: userEmail,
    };

    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      user: {
        id: userId,
        username: userName,
        email: userEmail,
      },
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "SERVER ERROR" });
  }
});

export default router;
