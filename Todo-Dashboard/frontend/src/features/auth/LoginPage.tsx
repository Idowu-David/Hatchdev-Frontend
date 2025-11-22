import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { loginSuccess } from "./AuthSlice";
import { useState } from "react";
import "../../styles/loginPage.css";
import axios from "axios";
import { LoginValidation } from "./Validation";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const validator = LoginValidation({ email, password });
    setErrors(validator);
    if (errors.email === "" && errors.password === "") {
      try {
        const response = await axios.post("http://localhost:5000/auth/login", {
          email,
          password,
        });
        if (response.status === 200) {
          const { user, token } = response.data;
          dispatch(loginSuccess({ user, token }));
          navigate("/dashboard");
        }
      } catch (err) {
        console.log("ERROR FROM LOGIN: ", err);
      }
    }
  };

  const inputStyle =
    "border border-b-2 border-x-0 border-t-0 py-2 w-full shadow-sm pl-2 focus:shadow-xl focus:outline-none focus:p-3 rounded-md focus:font-semibold font-semibold focus:text-md";
  const errorMessageStyle = "text-red-500 font-semibold text-sm ml-3";

  return (
    <div className="w-full bg-[#ff6767] h-dvh bg-[url('/login-background.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
      <div className="bg-white w-[85%] h-[85%] p-6 py-20 rounded-3xl relative max-w-sm max-h-[620px]">
        <div className="relative z-20 ">
          <h2 className="font-bold text-[2.15rem]">Login</h2>
          <p className="font-semibold text-lg text-gray-500">
            Please sign in to continue
          </p>
          <form
            onSubmit={handleSubmit}
            className="py-10 gap-2 flex flex-col relative"
          >
            <input
              placeholder="EMAIL"
              type="text"
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
            />
            {<span className={errorMessageStyle}>{errors.password}</span>}

            <button
              type="submit"
              className="p-3 bg-[#ff6767] text-white rounded-full shadow-md w-32 mt-4"
            >
              Login
            </button>
            <span className="text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-red-500 font-bold">
                Signup here
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
