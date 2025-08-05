import React from "react";
import "./Dashboard.css"; 

const Dashboard = () => {
  const features = [
     {
      title: "Hackathons",
      description: "Explore ongoing and upcoming hackathons",
      buttonText: "Join Now",
    },
    {
      title: "Quizzes",
      description: "Test your knowledge with coding quizzes",
      buttonText: "Start Quiz",
    },
    {
      title: "Live Classes",
      description: "Join live classes and workshops",
      buttonText: "Enroll",
    },
    {
      title: "Leaderboard",
      description: "See top performers and rankings",
      buttonText: "View Rankings",
    },
    {
      title: "Assignments",
      description: "Work on real-world coding tasks",
      buttonText: "Start Assignment",
    },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to the Dashboard</h1>
      <div className="card-grid">
        {features.map((item, idx) => (
          <div key={idx} className="card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
             <button className="card-button">{item.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
