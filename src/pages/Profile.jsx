
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import avatar from "../assets/naruto.png"
import "../Styles/Dashboard.css";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const user = {
    name: "naruto uzumaki",
    email: "uzumaki@example.com",
    progress: 65,
  };

  const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("is authenticated");
  navigate("/");
};


  const handlePayment = () => {
    const options = {
      key: "rzp_test_yourKeyHere", 
      amount: 499, 
      currency: "INR",
      name: "Skyintern-1",
      description: "Unlock Full Access",
      handler: function (response) {
        alert("Payment Successful: " + response.razorpay_payment_id);
        localStorage.setItem("isPaidUser", "true");
        window.location.reload();
      },
      prefill: {
        name: user.name,
        email: user.email,
      },
      theme: {
        color: "#0f172a",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-4">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <img 
            src ={avatar} alt="profile avatar"
            className="w-16 h-16 rounded-full 0bject-cover"
               style={{ borderRadius: "100%" }}
               width={110}
               height={110}
            />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          </div>

          {/* Progress */}
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <div className="text-sm text-gray-700 mb-1">Course Progress</div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${user.progress}%` }}
              ></div>
            </div>
            <div className="text-right text-xs mt-1 text-gray-600">
              {user.progress}% complete
            </div>
          </div>
        </div>

        <button
         onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600">
          Logout
          </button>   <button
          onClick={handlePayment}
          className="mt-4 px-6 py-2 bg-green-500 text-black rounded hover:bg-green-100"
        >
          Unlock All Features
          Pay ₹499
        </button>


        <div className="bg-white rounded-lg shadow-md p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Profile;
