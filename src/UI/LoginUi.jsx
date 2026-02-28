import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Slices/AuthSlice";
import { useNavigate } from "react-router-dom";


const LoginUi = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      alert("Enter username & password");
      return;
    }

    const userData = {
      username,
      email: `${username}@gmail.com`,
      image: "https://i.pravatar.cc/150?img=3"
    };

    dispatch(login(userData));
    navigate("/products");
  };

  return (
    <div className="login-wrapper">

      {/* LEFT SIDE */}
      <div className="login-left">
        <h1>Welcome Back 👋</h1>
        <p>Login to explore premium shopping experience</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="login-card">

          <h2>Sign In</h2>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>

          <p className="demo">
            Demo → Username: <b>emilys</b> <br />
            Password: <b>emilyspass</b>
          </p>

        </div>
      </div>

    </div>
  );
};

export default LoginUi;