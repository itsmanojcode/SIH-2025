import React, { useState } from "react";
import {  Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function UI() {
  return (
    <>
      <div className="font-sans bg-gray-50 min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
            <Route path="/authorities-dashboard" element={<AuthoritiesDashboard />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/register" element={<Register />} />
            <Route path="/city" element={<City />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}




// ---------------- Home Page ----------------
function Home() {
  return (
    <div>
      {/* Hero Part 1 */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-6">Empowering Citizens, Building Better Cities</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Report civic issues instantly and track their resolution. Together, we make our city smarter, cleaner, and safer.
        </p>
        <Link to="/report-issue">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition">
            Report an Issue
          </button>
        </Link>
      </section>

      {/* Hero Part 2 - Steps */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {[
            { step: "1", title: "Report an Issue", desc: "Citizens raise a complaint with text, photo, or video." },
            { step: "2", title: "Authorities Review", desc: "Officials receive the report and categorize the issue." },
            { step: "3", title: "Problem Solved", desc: "Authorities take action and mark the issue as resolved." },
          ].map((item) => (
            <motion.div
              key={item.step}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg p-6 rounded-2xl text-center"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">{item.step}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hero Part 3 - City Development */}
      <section className="py-16 bg-white text-center">
        <img src="https://source.unsplash.com/1200x500/?city,development" alt="City" className="rounded-xl shadow-lg mx-auto mb-6" />
        <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto">
          "The growth and development of a city depends on active citizen participation. This platform bridges the gap between people and governance."
        </blockquote>
      </section>

      {/* Hero Part 4 - User Reactions */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">What Citizens Say</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {["I reported a pothole and it was fixed in 3 days!", "Finally, my complaints are being heard.", "Best way to improve our city together!"].map(
            (quote, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="bg-white shadow-md p-6 rounded-2xl">
                <p className="italic text-gray-700">“{quote}”</p>
              </motion.div>
            )
          )}
        </div>
      </section>
    </div>
  );
}

// ---------------- Citizen Dashboard ----------------
function CitizenDashboard() {
  const [issues] = useState([
    { id: 1, title: "Pothole near school", status: "In Progress" },
    { id: 2, title: "Streetlight not working", status: "Resolved" },
  ]);

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Reported Issues</h2>
      <div className="space-y-4">
        {issues.map((issue) => (
          <div key={issue.id} className="bg-white p-4 shadow rounded-xl flex justify-between items-center">
            <span>{issue.title}</span>
            <span className={`px-3 py-1 rounded-full text-sm ${issue.status === "Resolved" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
              {issue.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------- Report Issue ----------------
function ReportIssue() {
  const [form, setForm] = useState({ text: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue submitted successfully!");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Report an Issue</h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow-lg rounded-xl">
        <textarea
          placeholder="Describe the issue..."
          className="w-full border p-3 rounded-lg"
          onChange={(e) => setForm({ ...form, text: e.target.value })}
        />
        <select className="w-full border p-3 rounded-lg" onChange={(e) => setForm({ ...form, category: e.target.value })}>
          <option value="">Select Category</option>
          <option>Pothole</option>
          <option>Garbage</option>
          <option>Streetlight</option>
          <option>Water Supply</option>
        </select>
        <input type="file" className="w-full border p-3 rounded-lg" />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Submit Issue
        </button>
      </form>
    </div>
  );
}

// ---------------- Authorities Dashboard ----------------
function AuthoritiesDashboard() {
  const [issues] = useState([
    { id: 1, title: "Pothole near school", category: "Road", city: "Delhi", status: "In Progress" },
    { id: 2, title: "Overflowing garbage bin", category: "Sanitation", city: "Mumbai", status: "Pending" },
  ]);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Reported Issues</h2>
      <div className="space-y-4">
        {issues.map((issue) => (
          <div key={issue.id} className="bg-white p-4 shadow rounded-xl flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{issue.title}</h3>
              <p className="text-sm text-gray-500">Category: {issue.category} | City: {issue.city}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${issue.status === "Pending" ? "bg-red-200 text-red-800" : "bg-yellow-200 text-yellow-800"}`}>
              {issue.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------------- Register ----------------
function Register() {
  const [role, setRole] = useState("citizen");

  return (
    <div className="p-8 flex justify-center items-center min-h-[80vh] bg-gradient-to-r from-blue-600 to-indigo-700">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-lg" />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded-lg" />
          <input type="password" placeholder="Password" className="w-full border p-3 rounded-lg" />
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="role" value="citizen" checked={role === "citizen"} onChange={() => setRole("citizen")} />
              <span>Citizen</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="role" value="admin" checked={role === "admin"} onChange={() => setRole("admin")} />
              <span>Admin</span>
            </label>
          </div>
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
}

// ---------------- City Section ----------------
function City() {
  const [city, setCity] = useState("");
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Choose Your City</h2>
      <select className="w-full border p-3 rounded-lg mb-6" onChange={(e) => setCity(e.target.value)}>
        <option value="">Select a City</option>
        <option>Delhi</option>
        <option>Mumbai</option>
        <option>Bangalore</option>
        <option>Chennai</option>
      </select>
      {city && <p className="text-lg">Showing issues reported in <span className="font-semibold">{city}</span>.</p>}
    </div>
  );
}

// ---------------- Footer ----------------
function Footer() {
  return (
    <footer className="bg-blue-700 text-white text-center py-6 mt-12">
      <p>© 2025 CivicConnect. All rights reserved.</p>
    </footer>
  );
}
