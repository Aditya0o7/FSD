import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboardStyle.css"; 
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";

const DashBoard = ({ regDash }) => {
  const navigate = useNavigate();
  const [notification, setNotification] = useState(null);
  const handleLogout = () => {
    setNotification({ message: "Logged out successfully!", type: "info" });
    setTimeout(() => {
      setNotification(null);
      navigate("/");
    }, 1000);
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>🚀 User Dashboard</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
      <div className="dashboard-content">
        <div className="user-info-card">
          <p className="welcome-message">
            Welcome, <span className="highlight">{regDash.name}</span>
          </p>
          <p className="email-info">
            Your Login Email: <span className="highlight">{regDash.email}</span>
          </p>
        </div>
        <div className="action-section">
          <p className="fetch-message">Click the button below to fetch weather updates:</p>
          <button className="fetch-btn">Fetch Weather</button>
        </div>
      </div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default DashBoard;
