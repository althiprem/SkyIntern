

import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/profile/dashboard" },
    { name: "My Courses", path: "#" },
    { name: "Quizzes", path: "#" },
    { name: "Edit Profile", path: "#" },
    { name: "Settings", path: "#" },
  ];

  return (
    <div className="w-full md:w-64 bg-white shadow-md md:h-screen p-4 flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
      {menuItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            `block px-4 py-2 rounded-md text-sm font-medium ${
              isActive ? "bg-blue-500 text-white" : "text-gray-800 hover:bg-blue-100"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
