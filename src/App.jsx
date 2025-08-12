

import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import AOS from "aos";
import "aos/dist/aos.css";
import Payment from "./pages/Payment";


function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        >
          
          
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        <Route
          path="/payment"
          element={
              <Payment />}/>

        <Route path="/payment" element={<Navigate to ="/Payment" />} />
          
        

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    
  );
}

export default App;
