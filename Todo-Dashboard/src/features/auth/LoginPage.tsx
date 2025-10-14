import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { loginSuccess } from "./AuthSlice";
import { useState } from "react";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
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
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user-password">Password:</label>
        <input
          type="password"
          id="user-password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
