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
    <div className="login-container">
      <div className="login-card">
        <h1 className="sign-in">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-input">
            <input
              type="text"
              id="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="user-password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <label className="remember-me">
            <input type="checkbox" />
            Remember Me
          </label>
          <button type="submit" onClick={handleLogin}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
