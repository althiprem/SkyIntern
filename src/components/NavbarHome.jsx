import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

/**
 * Renders the main navigation bar for the homepage.
 * This component includes the brand logo, navigation links, and a "Get Started" button.
 * It uses inline styles for animations and custom button styling.
 *
 * @param {object} props - The props for the component.
 * @param {Function} props.onOpenAuth - A callback function to be executed when the "Get Started" button is clicked, typically to open an authentication modal.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
const NavbarHome = ({ onOpenAuth }) => {
  return (
    <>
      <style>{`
        /* Keyframe Animations for Component Entrance */
        .fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(15px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .zoom-in {
          animation: zoomIn 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Navigation Link Hover Effects */
        .emoji-nav {
          transition: all 0.3s ease;
          font-weight: 500;
          position: relative;
        }

        .emoji-nav::before {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #0d6efd;
          transition: width 0.3s ease;
        }

        .emoji-nav:hover {
          transform: translateY(-4px);
          color: #0d6efd;
        }

        .emoji-nav:hover::before {
          width: 100%;
        }

        /* Call-to-Action (CTA) Button Styling */
        .get-started-btn {
          background-color: transparent;
          color: #000;
          border: 2px solid #0d6efd;
          transition: all 0.3s ease;
          padding: 0.5rem 2rem;
          font-weight: 500;
          border-radius: 1.5rem;
        }

        .get-started-btn:hover {
          background-color: #0d6efd;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 fade-in-up">
        <div className="container zoom-in">
          <a className="navbar-brand fw-bold text-primary" href="#">
            SkyIntern
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav w-100 flex-column flex-md-row justify-content-center justify-content-lg-end align-items-center gap-3 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link emoji-nav" href="#">
                  🏠 Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link emoji-nav" href="#">
                  📚 Courses
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link emoji-nav" href="#">
                  👨‍💼 About Us
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="btn get-started-btn d-inline-flex align-items-center"
                  onClick={onOpenAuth}
                  role="button"
                >
                  ✨ Get Started<i className="bi bi-arrow-right-short fs-5 ms-2"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarHome;
