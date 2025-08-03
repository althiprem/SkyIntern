import { useState } from "react";

import NavbarHome from "../components/NavbarHome";
import CourseCard from "../components/CourseCard";
import CTABanner from "../components/CTABanner";
import Footer from "../components/FooterHome";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AuthModal from "../components/AuthModal"; 
import AuthTabs from "../components/AuthTabs";


const Home = () => {
  const [showAuth, setShowAuth] = useState(false);

  const openAuth = () => setShowAuth(true);
  const closeAuth = () => setShowAuth(false);

  return (
    <>
      {/* 🔓 Auth Modal */}
      <AuthModal visible={showAuth} onClose={closeAuth}>
        <AuthTabs onClose={closeAuth} />
      </AuthModal>

      {/* 📌 Navbar */}
      <NavbarHome onOpenAuth={openAuth} />

      {/* 🚀 Hero Section */}
      <HeroSection onOpenAuth={openAuth} />

      {/* 💡 Features */}
      <FeaturesSection />

      {/* 💬 Testimonials */}
      <TestimonialsSection />

      {/* 📚 Courses */}
      <section className="container py-5 fade-in-up" id="courses">
        <h2 className="text-center mb-5" data-aos="fade-down">
          Our Courses
        </h2>
        <div className="row zoom-in">
          <CourseCard
            title="Python Starter Pack"
            description="Start from scratch — variables, loops, and hands-on projects to build confidence."
            aosDelay={100}
            badges={[
              { label: "Beginner", className: "bg-success" },
              { label: "Project-based", className: "bg-info text-dark" },
            ]}
          />
          <CourseCard
            title="Modular Python Pro"
            description="Build scalable apps with functions, error handling, and modular coding practices."
            aosDelay={300}
            badges={[
              { label: "Intermediate", className: "bg-warning text-dark" },
              { label: "Scalable Modules", className: "bg-primary" },
            ]}
          />
          <CourseCard
            title="Python Career Builder"
            description="Learn API integration, automation scripts, and deployment techniques for the job market."
            aosDelay={500}
            badges={[
              { label: "Advanced", className: "bg-danger" },
              { label: "Career Focused", className: "bg-secondary" },
            ]}
          />
        </div>
      </section>

      {/* 📢 CTA Banner */}
      <CTABanner onOpenAuth={openAuth} />

      {/* 🧹 Footer */}
      <Footer />
    </>
  );
};

export default Home;
