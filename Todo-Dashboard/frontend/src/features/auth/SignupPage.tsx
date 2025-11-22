import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useAppDispatch } from "../../hooks";
// import { loginSuccess } from "./AuthSlice";
import axios from "axios";
import { SignupValidation } from "./Validation";

const LoginPage = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const validationErrors = SignupValidation({ username, email, password });
    setErrors(validationErrors);

    if (
      errors.email === "" &&
      errors.password === "" &&
      errors.username === ""
    ) {
      try {
        const response = await axios.post("http://localhost:5000/auth/signup", {
          password,
          username,
          email,
        });

        if (response.status === 201) {
          navigate("/login");
        }
      } catch (err) {
        console.log("ERROR FROM SIGNUP: ", err);
      }
    }
  };

  const inputStyle =
    "border border-b-2 border-x-0 border-t-0 py-2 w-full shadow-md pl-2 focus:shadow-xl focus:outline-none focus:p-3 rounded-md focus:font-semibold font-semibold focus:text-md";

  const errorMessageStyle = "text-red-500 font-semibold text-sm ml-3";

  return (
    <div className="w-full bg-blue-500 h-dvh bg-[url('/login-background.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
      <div className="bg-white w-[80%] h-[85%] p-6 pt-10 rounded-3xl relative max-w-sm max-h-[610px]">
        <div className="">
          <h2 className="font-bold text-[2.15rem]">Sign up</h2>
          <p className="font-semibold text-lg text-gray-500">
            Please sign up to continue
          </p>
          <form onSubmit={handleSubmit} className="py-5 gap-1 flex flex-col">
            <div className="flex flex-col">
              <input
                placeholder="USERNAME"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={inputStyle}
              />
              {<span className={errorMessageStyle}>{errors.username}</span>}
            </div>

            <input
              placeholder="EMAIL"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
            />
            {<span className={errorMessageStyle}>{errors.email}</span>}
            <input
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
              minLength={6}
            />
            {<span className={errorMessageStyle}>{errors.password}</span>}
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white rounded-full shadow-md w-32 mt-5 hover:bg-slate-800"
            >
              Sign up
            </button>
          </form>
          <p className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-bold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
