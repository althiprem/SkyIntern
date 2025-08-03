import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css"; // Ensure AOS styles are loaded

function FeaturesSection() {
  return (
    <>
      <style>{`
        /* 🪄 Card zoom on hover */
        .zoom-in-card {
          transition: transform 0.3s ease;
        }

        .zoom-in-card:hover {
          transform: scale(1.05);
        }

        /* 🌟 Icon + heading zoom on hover */
        .feature-icon,
        .feature-title {
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .zoom-in-card:hover .feature-icon,
        .zoom-in-card:hover .feature-title {
          transform: scale(1.1);
          color: #0a58ca;
        }

        /* 🧵 Text styling */
        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #212529;
        }

        .feature-desc {
          font-size: 0.95rem;
          color: #6c757d;
        }

        /* 📱 Responsive fix */
        @media (max-width: 768px) {
          .text-center-mobile {
            text-align: center;
          }
        }
      `}</style>

      <section className="py-5 bg-white text-center fade-in-up">
        <div className="container" data-aos="zoom-in">
          <h2
            className="fw-bold mb-5 text-primary"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Why Choose SkyIntern?
          </h2>
          <div className="row">
            {/* ⚡ Feature 1 */}
            <div
              className="col-md-4 fade-in-up"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="p-4 shadow-sm border rounded zoom-in-card text-center-mobile">
                <i className="bi bi-lightning-charge-fill display-5 text-warning feature-icon"></i>
                <h5 className="mt-3 feature-title">
                  Industry-Relevant Courses
                </h5>
                <p className="feature-desc">
                  Learn the skills top companies seek with content designed by
                  Professionals
                </p>
              </div>
            </div>

            {/* 🏅 Feature 2 */}
            <div
              className="col-md-4 mt-4 mt-md-0 fade-in-up"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="p-4 shadow-sm border rounded zoom-in-card text-center-mobile">
                <i className="bi bi-award-fill display-5 text-success feature-icon"></i>
                <h5 className="mt-3 feature-title">
                  Certifications That Matter
                </h5>
                <p className="feature-desc">
                  Boost your credibility with verified certifications, instantly
                  shareable across LinkedIn and resumes.
                </p>
              </div>
            </div>

            {/* 📈 Feature 3 */}
            <div
              className="col-md-4 mt-4 mt-md-0 fade-in-up"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="p-4 shadow-sm border rounded zoom-in-card text-center-mobile">
                <i className="bi bi-graph-up-arrow display-5 text-info feature-icon"></i>
                <h5 className="mt-3 feature-title">Career Growth Focus</h5>
                <p className="feature-desc">
                  Get placement tips, interview prep, and mentorship so your
                  skills translate into actual opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesSection;
