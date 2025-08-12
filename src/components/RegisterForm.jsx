import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "./AuthForms.css";

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

    // try {
    //   const res = await fetch("http://localhost/skyintern/db.php", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   const data = await res.json();

  //     if (data.success) {
  //       toast.success("Account created successfully!");
  //       setEmail("");
  //       setPassword("");
  //       setConfirm("");
  //       if (onClose) onClose();
  //     } else {
  //       toast.error("Registration failed: " + data.message);
  //     }
  //   } catch (error) {
  //     toast.error("Error: " + error.message);
  //   }
  };

  return (
    <form onSubmit={handleRegister} className="auth-form register-form">
      <h3 className="auth-form-heading">Create an Account</h3>

      <input
        type="email"
        placeholder="Email"
        value={email}
        className="auth-form-input"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="auth-password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          className="auth-form-input"
          name="pass"
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
        name="confirmpass"
        onChange={(e) => setConfirm(e.target.value)}
      />

      <button type="submit" className="auth-form-button" name="register">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
