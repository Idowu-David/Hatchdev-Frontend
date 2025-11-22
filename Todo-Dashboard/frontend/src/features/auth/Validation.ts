interface ValidationProps {
  username: string;
  email: string;
  password: string;
}

const SignupValidation = (values: ValidationProps) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

  let error = {
    username: "",
    email: "",
    password: "",
  };

  if (values.username.trim() === "") {
    error.username = "Username cannot be empty";
  } else if (values.username.length < 3) {
		error.username = "Username is too short"
	}

  if (values.email.trim() === "") {
    error.email = "Email cannot be empty";
  } else if (!emailPattern.test(values.email)) {
    error.email = "Invalid email format.";
  }

  // validate password with the db
  if (values.password.length === 0) {
    error.password = "Password cannot be empty";
  } else if (values.password.length < 4) {
    error.password = "Password is too short";
	}
  return error;
};

export default SignupValidation;
