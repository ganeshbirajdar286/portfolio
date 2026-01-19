import { NavLink } from "react-router-dom";
import Magnet from "./Magnet";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `hover:text-white transition ${
      isActive ? "text-white" : "text-gray-300"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-4 top-5">
        
        {/* Frosted glass background */}
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-xl
                     rounded-2xl border border-white/5 z-0"
        />

        {/* Navbar content */}
        <div className="relative z-10 flex justify-between items-center">
          
          {/* Logo */}
          <h1 className="text-xl sm:text-2xl font-bold 
                         bg-gradient-to-r from-blue-400 to-purple-400 
                         text-transparent bg-clip-text">
            Ganesh Birajdar
          </h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 font-medium">
            <NavLink to="/" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/skills" className={navLinkClass}>
              Skills
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Magnet padding={50} disabled={false} magnetStrength={6}>
              <NavLink to="/contact">
                <button className="px-6 py-2 rounded-xl 
                                   bg-gradient-to-r from-blue-500 to-purple-600 
                                   text-white font-semibold flex items-center gap-2 
                                   hover:opacity-90 transition">
                  <span>→</span> Let’s Talk
                </button>
              </NavLink>
            </Magnet>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="relative z-10 mt-4 md:hidden 
                       bg-black/40 backdrop-blur-xl 
                       rounded-2xl border border-white/10 p-6"
          >
            <ul className="flex flex-col gap-5 text-lg">
              <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>
                About
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/projects" className={navLinkClass}>
                Projects
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/skills" className={navLinkClass}>
                Skills
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </ul>

            <NavLink to="/contact" onClick={() => setOpen(false)}>
              <button
                className="w-full mt-6 px-6 py-3 rounded-xl 
                           bg-gradient-to-r from-blue-500 to-purple-600 
                           text-white font-semibold flex items-center 
                           justify-center gap-2 hover:opacity-90 transition"
              >
                <span>→</span> Let’s Talk
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
