import React, { useEffect} from "react";
import Home from "./pages/Home";
import "aos/dist/aos.css";
import AOS from "aos";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoggedIn ? (
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Home onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );

}



export default App;
