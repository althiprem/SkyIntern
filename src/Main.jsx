import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster
        position="bottom-right"
        containerStyle={{ zIndex: 99999 }}
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
