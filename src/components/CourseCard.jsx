import React from "react";
import "aos/dist/aos.css";

const CourseCard = ({ title, description, badges, aosDelay }) => {
  return (
    <>
      <style>{`
        /* 🔧 Card hover */
        .card-hover {
          transition: transform 0.3s ease;
        }

        .card-hover:hover {
          transform: scale(1.04);
        }

        /* 🏷️ Badge zoom on hover */
        .badge {
          
          display: inline-block;
        }

        

        /* 🎨 Typography styling */
        .course-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: #0d6efd;
        }

        .course-description {
          font-size: 0.95rem;
          color: #495057;
        }
      `}</style>

      <div
        className="col-md-4 mb-4"
        data-aos="zoom-in-up"
        data-aos-delay={aosDelay}
      >
        <div className="card shadow-sm h-100 card-hover">
          <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="course-title mb-2">{title}</h5>
            <p className="course-description mb-3">{description}</p>
            <div className="d-flex flex-wrap gap-2 mt-2">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className={`badge ${badge.className} `}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
