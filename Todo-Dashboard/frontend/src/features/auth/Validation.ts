interface ValidationProps {
  username: string;
  email: string;
  password: string;
}

const SignupValidation = (values: ValidationProps) => {
  let error = {
    username: "",
    email: "",
    password: "",
  };

  if (values.username === "") {
    error.username = "Username cannot be empty";
  }

  if (values.email === "") {
    error.email = "Email cannot be empty";
  }

  // validate password with the db
  if (values.password.length === 0) {
    error.password = "Password cannot be empty";
  } else if (values.password.length < 3) {
    error.password = "Password is too short";
  }

  return error;
};

export default SignupValidation;
