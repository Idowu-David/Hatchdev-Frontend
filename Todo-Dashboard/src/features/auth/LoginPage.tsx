import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { loginSuccess } from "./AuthSlice";
import { useState } from "react";
import "../../styles/loginPage.css";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "password123") {
      setError("");

      const mockUserData = {
        user: { name: "Test User" },
        token: "mock-simple-token-123",
      };
      dispatch(loginSuccess(mockUserData));
      navigate("/");
    } else {
      setError("Wrong password! Please try again.");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <div className="bg-[#ff6767] w-full h-dvh flex flex-col justify-center items-center bg-[url('/login-background.png')] bg-center bg-no-repeat bg-cover">
      <div className="bg-white rounded-3xl pb-40 pt-14 w-3/4 max-w-[330px]">
        <div className="flex flex-col w-full px-6">
          <h1 className="text-[1.9rem] font-bold m-0">Login</h1>
					<p className="text-gray-600 w-full text-[0.9rem] mb-2">Please sign in to continue</p>
          <form onSubmit={handleSubmit}>
            <div className="flex w-full max-w-[350px] flex-col gap-[0.8rem]">
              <input
                type="text"
                id="username"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-[1.9rem] w-full rounded border border-black pl-4 placeholder:font-bold focus:ring-2-blue-500 text-[10px]"
              />
              <input
                type="password"
                id="user-password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[1.9rem] w-full rounded border border-black pl-4 placeholder:font-bold focus:ring-2-blue-500 text-[10px]"
              />
            </div>
            <label className="inline-flex py-3 text-xs font-semibold">
              <input type="checkbox" />
              Remember Me
            </label>
            <button
              className="mt-4 flex w-fit items-center justify-center rounded-[3px] bg-[#fa8888] py-[0.6rem] px-[1.2rem] text-[10px] text-white hover:bg-[#fa6e6e]"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
        {/* <div className="image-container">
					<img src="./login-man.png"/>
				</div> */}
      </div>
    </div>
  );
};

export default LoginPage;
