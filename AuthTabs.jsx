import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import OAuthPanel from "./OAuthPanel";

const AuthTabs = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="auth-tabs-container">
      <div className="auth-tabs">
        <button
          className={`auth-tab-btn ${activeTab === "login" ? "active" : ""}`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`auth-tab-btn ${activeTab === "register" ? "active" : ""}`}
          onClick={() => setActiveTab("register")}
        >
          Register
        </button>
      </div>
      <div className="auth-tab-content">
        {activeTab === "login" ? <LoginForm onClose={onClose} /> : <RegisterForm onClose={onClose} />}
      </div>

      <div className="auth-form-divider" style={{ marginTop: '1.5rem' }}>OR</div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <OAuthPanel onClose={onClose} />
      </div>
      <style jsx>{`
        .auth-tabs-container {
          width: 100%;
        }
        .auth-tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        .auth-tab-btn {
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          font-size: 1rem;
          position: relative;
          transition: color 0.3s ease;
          overflow: hidden; /* To contain the ::after element */
        }
        .auth-tab-btn::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background-color: #007bff;
          border-radius: 3px;
          transition: width 0.3s ease;
        }
        .auth-tab-btn.active {
          color: #fff;
        }
        .auth-tab-btn.active::after {
          width: 100%;
        }
        .auth-tab-content {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default AuthTabs;