import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(false);

  const openAuth = () => setShowAuth(true);
  const closeAuth = () => setShowAuth(false);

const handleLogin = () => {
  setShowAuth(true); // open login modal first
};


  return (
    <>
      {/* 🔓 Auth Modal */}
      <AuthModal visible={showAuth} onClose={closeAuth}>
  <AuthTabs onClose={closeAuth} onLoginSuccess={() => navigate("/profile")} />
</AuthModal>


      {/* 📌 Navbar */}
      <NavbarHome onOpenAuth={handleLogin} />

      {/* 🚀 Hero Section */}
      <HeroSection onOpenAuth={handleLogin} />
      


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

               <div>
      {/* Your current home layout and design untouched */}
      <button onClick={handleLogin}>Get Started</button>
    </div>

        </div>
      </section>

      {/* 📢 CTA Banner */}
      <CTABanner onOpenAuth={handleLogin} />

      {/* 🧹 Footer */}
      <Footer />
    </>

 
  );
};

export default Home;
