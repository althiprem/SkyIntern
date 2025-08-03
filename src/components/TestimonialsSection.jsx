import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css"; // AOS styles — make sure it's loaded in your app

function TestimonialsSection() {
  return (
    <>
      <style>{`
        /* 🃏 Card hover zoom */
        .card.zoom-hover {
          transition: transform 0.3s ease;
        }
        .card.zoom-hover:hover {
          transform: scale(1.04);
        }

        /* 🧑‍🎓 Text hover zoom */
        .testimonial-hover .testimonial-name,
        .testimonial-hover .testimonial-role {
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .testimonial-hover:hover .testimonial-name,
        .testimonial-hover:hover .testimonial-role {
          transform: scale(1.06);
          color: #0a58ca;
        }

        /* 🎨 Styling for name & role */
        .testimonial-name {
          font-size: 1.05rem;
          font-weight: 600;
          color: #0d6efd;
        }

        .testimonial-role {
          font-size: 0.9rem;
          color: #6c757d;
        }

        /* 📱 Mobile responsiveness */
        @media (max-width: 768px) {
          .testimonial-center {
            text-align: center;
          }
          .testimonial-center .d-flex {
            flex-direction: column;
            align-items: center;
          }
          .testimonial-center .bi {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>

      <section className="container my-5">
        <h2
          className="text-center mb-5"
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="100"
        >
          💬 What Our Learners Say
        </h2>

        <div className="row">
          {/* 🧑 Testimonial 1 */}
          <div
            className="col-md-4 my-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="card shadow-sm h-100 zoom-hover testimonial-center">
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text">
                  🚀 “This course changed the way I learn Python. Super clear
                  and engaging!”
                </p>
                <div className="d-flex align-items-center mt-3 testimonial-hover">
                  <i className="bi bi-person-circle fs-3 me-2 text-primary"></i>
                  <div>
                    <div className="testimonial-name">Ananya R.</div>
                    <div className="testimonial-role">Student, Mumbai</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 👨‍💻 Testimonial 2 */}
          <div
            className="col-md-4 my-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="card shadow-sm h-100 zoom-hover testimonial-center">
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text">
                  🎯 “Skylearn’s teaching is top-notch. The visual approach
                  helped me grasp complex topics fast.”
                </p>
                <div className="d-flex align-items-center mt-3 testimonial-hover">
                  <i className="bi bi-person-circle fs-3 me-2 text-primary"></i>
                  <div>
                    <div className="testimonial-name">Kunal M.</div>
                    <div className="testimonial-role">
                      Junior Developer, Hyderabad
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 💡 Testimonial 3 */}
          <div
            className="col-md-4 my-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="card shadow-sm h-100 zoom-hover testimonial-center">
              <div className="card-body d-flex flex-column justify-content-between">
                <p className="card-text">
                  💡 “Efficient modules, relevant examples, and smooth design.
                  Highly recommend!”
                </p>
                <div className="d-flex align-items-center mt-3 testimonial-hover">
                  <i className="bi bi-person-circle fs-3 me-2 text-primary"></i>
                  <div>
                    <div className="testimonial-name">Priya S.</div>
                    <div className="testimonial-role">Freelancer, Pune</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialsSection;
