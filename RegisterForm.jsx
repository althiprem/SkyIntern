import React, { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-hot-toast";
import "./AuthForms.css"; // Import shared styles

const RegisterForm = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password || !confirm) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      toast.success("Account created! Please check your email to verify your account.");
      if (onClose) onClose();
    } catch (error) {
      toast.error("Registration failed: " + error.message);
    }
  };

  return (
    <form onSubmit={handleRegister} className="auth-form register-form">
      <h3 className="auth-form-heading">Create an Account</h3>
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
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirm}
        className="auth-form-input"
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button type="submit" className="auth-form-button">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
