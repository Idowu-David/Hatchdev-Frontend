import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useAppDispatch } from "../../hooks";
// import { loginSuccess } from "./AuthSlice";
import axios from "axios";

const LoginPage = () => {
  // const dispatch = useAppDispatch();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/auth/signup", {
        password,
        username,
        email,
      });
      
    } catch (err) {
      console.log(err);
    }
  };

  const inputStyle =
    "border border-b-2 border-x-0 border-t-0 py-2 w-full shadow-md pl-2 focus:shadow-xl focus:outline-none focus:p-3 rounded-md focus:font-semibold font-semibold focus:text-md";

  return (
    <div className="w-full bg-blue-500 h-dvh bg-[url('/login-background.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
      <div className="bg-white w-[80%] h-[85%] p-6 pt-10 rounded-3xl relative max-w-sm max-h-[610px]">
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
            <input
              placeholder="EMAIL"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputStyle}
              required
            />
            <input
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
              required
              minLength={4}
            />
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white rounded-full shadow-md w-32 mt-5"
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
