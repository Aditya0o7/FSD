import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authStyle.css";

const Register = ({ regData }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const data = { name, email, password };

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Register Successful!");
    regData(data);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="auth-title">Join Us!</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control auth-input"
              id="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control auth-input"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              className="form-control auth-input"
              id="pwd"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button onClick={handleRegister} className="btn auth-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
