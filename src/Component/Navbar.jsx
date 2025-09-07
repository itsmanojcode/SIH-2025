
import React from "react";
import { Link } from "react-router-dom";  // <-- Missing import

const Navbar = () => {
  return (
    
      <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
              <Link to="/" className="text-2xl font-bold">CivicConnect</Link>
              <div className="space-x-6">
                <Link to="/citizen-dashboard" className="hover:text-yellow-300">Naagrik Dashboard</Link>
                <Link to="/authorities-dashboard" className="hover:text-yellow-300">Authorities Dashboard</Link>
                <Link to="/city" className="hover:text-yellow-300">Your City</Link>
                <Link to="/register" className="hover:text-yellow-300">Register</Link>
              </div>
            </div>
          </nav>
   
  )
}

export default Navbar
