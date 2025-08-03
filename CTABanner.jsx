import React from "react";


const CTABanner = ({ onOpenAuth }) => {
  return (
    <>
      <style>{`
        .btn {
          transition: all 0.3s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
        }

      `}/</style>
      <section className="bg-gradient py-5 px-4 text-center rounded shadow-lg my-5 fade-in-up">
        <div className="container zoom-in">
          <h1 className="display-5 fw-bold mb-3">
            Transform Your Learning Journey
          </h1>
          <p className="fs-5 mb-4">
            Join thousands of learners mastering tech, business, design, and
            more. Curated by experts. Backed by results.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/courses" className="btn btn-primary fw-bold px-4 py-2">
              🔍 Explore Our Courses
            </a>
            <button
              onClick={onOpenAuth}
              className="btn  btn-primary fw-bold px-4 py-2"
            >
              ✨ Get Started
            </button>
          </div>
          <div className="mt-4">
            <small className="text-light fst-italic">
              Built by passionate educators. Crafted for impact.
            </small>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTABanner;
