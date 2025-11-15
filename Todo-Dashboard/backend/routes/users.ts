import { Router, type Request, type Response } from "express";
import express from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../db";

const router = Router();

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

      res.status(201).json({ message: "User created", user: result.rows[0] });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Database error" });
    }
  }
);

export default router;
