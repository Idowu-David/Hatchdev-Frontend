import { body, validationResult } from "express-validator";

const signupValidationRules = () => {
  return [
    body("username").notEmpty().withMessage("Username is required"),

    body("email").isEmail().withMessage("Please provide a valid email"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 chars long"),
  ];
};

const loginValidationRules = () => {
	return [
		body("email").isEmail().withMessage("Please provide a valid email"),
		
		body("password").notEmpty().withMessage("Password is required")
	]
};

const validate = (req: Request, res: Response, next: () => any) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	// const extractedErrors = [];
	// errors.array().map(err => extractedErrors.push({ [err.type]: err.msg }))
	
	// return res.json({
	// 	errors: extractedErrors
}

export default {signupValidationRules, loginValidationRules, validate}