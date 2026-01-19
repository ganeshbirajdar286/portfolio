import { NavLink } from "react-router-dom";
import Magnet from "./Magnet";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="relative mx-auto max-w-7xl px-6 py-4 top-5">
        {/* ✨ Frosted Glass Background — only blurs what's behind */}
        <div
          className="
        absolute inset-0 
        bg-black/30          /* dark transparent layer */
        backdrop-blur-xl     /* strong blur behind */
        rounded-2xl
        border border-white/5
        z-0
      "
        ></div>

        {/* ✨ Navbar Content — stays sharp */}
        <div className="relative z-10 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Ganesh Birajdar
          </h1>

          {/* Nav Links */}
          <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-white transition ${isActive ? "text-white" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-white transition ${isActive ? "text-white" : ""}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `hover:text-white transition ${isActive ? "text-white" : ""}`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-white transition ${isActive ? "text-white" : ""}`
              }
            >
              Contact
            </NavLink>
          </ul>

          {/* Button */}
          <Magnet padding={50} disabled={false} magnetStrength={6}>
            <NavLink  to="/contact">
              <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center gap-2 hover:opacity-90 transition cursor-pointer">
              <span>→</span> Let’s Talk
            </button>
            </NavLink>
          </Magnet>
        </div>
      </div>
    </nav>
  );
}
