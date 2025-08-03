import React from "react";


const HeroSection = ({ onOpenAuth }) => {
  return (
    <>
      <style>{`
        .hero-get-started-btn {
          transition: all 0.3s ease;
        }

        .hero-get-started-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

      `}
        
      </style>
      <section className="py-5 bg-light text-center position-relative overflow-hidden fade-in-up">
        <div className="container zoom-in">
          <h1 className="display-4 fw-bold text-primary" data-aos="fade-down">
            Level Up With SkyIntern
          </h1>
          <p
            className="lead mt-3 text-muted"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore curated courses and unlock real-world skills with
            confidence.
          </p>
          <button
            className="btn btn-primary btn-lg mt-4 px-5 shadow-sm hero-get-started-btn"
            onClick={onOpenAuth}
          >
            🚀 Get Started
          </button>
        </div>

        <div className="position-absolute top-0 end-0 me-3 mt-3 d-none d-md-block opacity-10">
          {/* Optional Hero Graphic */}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
