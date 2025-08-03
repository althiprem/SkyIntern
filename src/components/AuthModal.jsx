import React from "react";
// import "./AuthModal.css"; // Optional: if you want to move styles into a separate file

const AuthModal = ({ visible, onClose, children }) => {
  if (!visible) return null;

  return (
    <div className="auth-modal-backdrop" onClick={onClose}>
      <div
        className="auth-modal-glass"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        <button className="auth-modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>

      <style jsx>{`
        .auth-modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(32, 45, 56, 0.41);
          backdrop-filter: blur(4px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .auth-modal-glass {
          background: rgba(175, 195, 249, 0.36);
          border-radius: 16px;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          animation: fadeInScale 0.4s ease;
        }

        .auth-modal-close {
          position: absolute;
          top: 12px;
          right: 16px;
          font-size: 1.5rem;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .auth-modal-close:hover {
          transform: scale(1.2);
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default AuthModal;