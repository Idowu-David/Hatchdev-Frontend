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
      <div className="bg-white w-3/4 rounded-[0.4rem] pl-8 pb-40 pt-14 max-w-[700px]">
        <div className="flex flex-col w-1/2">
          <h1 className="pb-2 text-[1.6rem] font-bold m-0">Sign In</h1>
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
