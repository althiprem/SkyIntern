import React from "react";
import Course from "../pages/Courses";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5 fade-in-up">
      <div className="container zoom-in">
        <p className="mb-2 fw-semibold">
          SkyIntern &copy; {new Date().getFullYear()} | Built for Future
          Learners
        </p>
        <div>
          <a href="#home" className="text-white me-3 text-decoration-none">
            Home
          </a>
          <a href="#courses" className="text-white me-3 text-decoration-none">
            Courses
            <Course />
          </a>
          <a href="#contact" className="text-white text-decoration-none">
            Contact
          </a>
        </div>
        <div className="mt-3">
          <i className="bi bi-facebook me-3 fs-5"></i>
          <i className="bi bi-twitter me-3 fs-5"></i>
          <i className="bi bi-instagram fs-5"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
