import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { loginSuccess } from "./AuthSlice";
import { useState } from "react";
import "../../styles/loginPage.css";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (password === "password123") {
      const mockUserData = {
        user: { name: username },
        token: "mock-simple-token-123",
      };
      dispatch(loginSuccess(mockUserData));
      navigate("/");
    } else {
      window.alert('Default password is "password123"');
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleLogin();
  };

  const inputStyle =
    "border border-b-2 border-x-0 border-t-0 py-2 w-full shadow-sm pl-2 focus:shadow-xl focus:outline-none focus:p-3 rounded-md focus:font-semibold font-semibold focus:text-md";

  return (
    <div className="w-full bg-[#ff6767] h-dvh bg-[url('/login-background.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center">
      <div className="bg-white w-[85%] h-[85%] p-6 py-20 rounded-3xl relative max-w-sm max-h-[620px]">
        {/* <img src="./login-man.png" className="absolute z-10 opacity-80 object-contain " /> */}
        <div className="relative z-20 ">
          <h2 className="font-bold text-[2.15rem]">Login</h2>
          <p className="font-semibold text-lg text-gray-500">
            Please sign in to continue
          </p>
          <form
            onSubmit={handleSubmit}
            className="py-10 gap-4  flex flex-col relative"
          >
            <input
              placeholder="USERNAME"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputStyle}
            />
            <input
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={inputStyle}
            />
           
            <button
              type="submit"
              className="p-3 bg-[#ff6767] text-white rounded-full shadow-md w-32 mt-4"
            >
              Login
            </button>
            <p className="text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-red-500 font-bold">
                Signup here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
