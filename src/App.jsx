import React, { useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "aos/dist/aos.css";
import AOS from "aos";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);


  return  (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard"
          element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}




export default App;
