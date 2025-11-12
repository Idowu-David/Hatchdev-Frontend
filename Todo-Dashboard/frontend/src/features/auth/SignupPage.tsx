import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../hooks";
// import { loginSuccess } from "./AuthSlice";
import SignupValidation from "./Validation";

const LoginPage = () => {
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const validator = SignupValidation({ username, email, password });
    setErrors(validator);
    if (
      errors.email === "" &&
      errors.password === "" &&
      errors.username === ""
    ) {
      navigate("/login");
    }
    setPassword("");
    setEmail("");
    setUsername("");
  };

  const inputStyle =
    "border border-b-2 border-x-0 border-t-0 py-2 w-full shadow-md pl-2 focus:shadow-xl focus:outline-none focus:p-3 rounded-md focus:font-semibold font-semibold focus:text-md";

  const errorMessageStyle = "text-red-500 font-semibold text-sm ml-3";

  return (
    <div className="w-full bg-blue-500 h-dvh bg-[url('/login-background.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
      <div className="bg-white w-[85%] h-[85%] p-6 pt-10 rounded-3xl relative max-w-sm max-h-[620px]">
        <div className="relative z-20 ">
          <h2 className="font-bold text-[2.15rem]">Sign up</h2>
          <p className="font-semibold text-lg text-gray-500">
            Please sign up to continue
          </p>
          <form onSubmit={handleSubmit} className="py-5 gap-3 flex flex-col">
            <input
							placeholder="USERNAME"
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className={inputStyle}
							required
							minLength={3}
							maxLength={20}
            />
            {errors.username && (
              <span className={errorMessageStyle}>{errors.username}</span>
            )}
            <input
              placeholder="EMAIL"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
              required
            />
            {errors.email && (
              <span className={errorMessageStyle}>{errors.email}</span>
            )}
            <input
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
							required
							minLength={4}
            />
            {errors.password && (
              <span className={errorMessageStyle}>{errors.password}</span>
            )}
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white rounded-full shadow-md w-32 mt-5"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
