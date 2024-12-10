import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authStyle.css"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ regLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (regLogin.email === email && regLogin.password === password) {
      alert("Login Successful!");
      navigate("/dashboard");
    } else {
      alert("Login Failed! Please check your credentials.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Welcome Back!</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control auth-input"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control auth-input"
              id="pwd"
              placeholder="Enter your password"
            />
          </div>
          <button onClick={handleLogin} className="btn auth-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
