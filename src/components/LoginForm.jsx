import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS
import "./AuthForms.css";
import { auth } from "../firebase"; // Ensure this path is correct

const LoginForm = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate("/dashboard");
         if (onClose) onClose();
})

      .catch((error) => {
        toast.error("Login failed: " + error.message);
      });
  };

  return (
    <form onSubmit={handleLogin} className="auth-form login-form">
      <h3 className="auth-form-heading">Welcome Back!</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="auth-form-input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="auth-password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          className="auth-form-input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          className="auth-toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>
      <button type="submit" className="auth-form-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
