import React from "react";

const stats = [
  { icon: "📘", label: "Enrolled Courses", value: 3 },
  { icon: "📊", label: "Progress", value: "72%" },
  { icon: "⏱️", label: "Watch Time", value: "11h" },
  { icon: "📝", label: "Pending Quizzes", value: 2 },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold">Skyintern</h2>
        <nav className="flex flex-col gap-3 mt-6">
          <a href="#" className="hover:text-yellow-400">Dashboard</a> :
          <br />
          <a href="#" className="hover:text-yellow-400">Courses</a>   :
          <br />
          <a href="#" className="hover:text-yellow-400">Quizzes</a>   :
          <br />
          <a href="#" className="hover:text-yellow-400">Settings</a> 
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-grey-100 p-6 overflow-y-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Student Dashboard</h1>
          <button className="bg-green-600 text-white px-4 py-1 rounded">Logout</button>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded shadow p-4 flex items-center gap-4">
              <div className="text-2xl">{s.icon}</div>
              <div>
                <p className="text-lg font-semibold">{s.value}</p>
                <p className="text-gray-500 text-sm">{s.label}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Notice Board */}
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-3">Notice Board</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>🗓️ Assignment 3 </li>
            <li>📢 Live Webinar – Aug </li>
            <li>✅ New quiz available: Basics</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

