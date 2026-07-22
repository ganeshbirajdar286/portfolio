import { NavLink } from "react-router-dom";
import Magnet from "./Magnet";
import React, { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon, FiFileText } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import resume from "/ganesh_resume.pdf";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  const navLinkClass = ({ isActive }) =>
    `px-3.5 py-1.5 rounded-full transition-all duration-200 text-sm font-semibold ${
      isActive
        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
        : isDark
          ? "text-gray-300 hover:text-white hover:bg-white/5"
          : "text-slate-700 hover:text-blue-600 hover:bg-blue-100/60"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-3.5 top-3">
        
        {/* Frosted glass background */}
        <div
          className={`absolute inset-0 backdrop-blur-xl rounded-2xl transition-colors duration-300 z-0 ${
            isDark
              ? "bg-black/40 border border-white/10"
              : "bg-white/90 border-2 border-blue-200/90 shadow-md shadow-blue-500/10"
          }`}
        />

        {/* Navbar content */}
        <div className="relative z-10 flex justify-between items-center">
          
          {/* Logo & Status Badge */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
              GB
            </div>
            <div>
              <h1 className={`text-base font-bold leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                Ganesh Birajdar
              </h1>
              <p className={`text-[11px] flex items-center gap-1.5 font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Full Stack Engineer
              </p>
            </div>
          </NavLink>

          {/* Desktop Center Pill Links */}
          <div className={`hidden lg:flex items-center p-1 rounded-full border backdrop-blur-md ${
            isDark ? "bg-white/5 border-white/10" : "bg-blue-50 border-2 border-blue-200"
          }`}>
            <NavLink to="/" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/experience" className={navLinkClass}>
              Experience
            </NavLink>
            <NavLink to="/hackathon" className={navLinkClass}>
              Hackathons
            </NavLink>
            <NavLink to="/projects" className={navLinkClass}>
              Projects
            </NavLink>
            <NavLink to="/skills" className={navLinkClass}>
              Skills
            </NavLink>
            <NavLink to="/terminal" className={navLinkClass}>
              Terminal
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Desktop Right Controls: Resume, Theme Toggle & Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            {/* Resume Button */}
            <a
              href={resume}
              download="Ganesh_Birajdar_Resume.pdf"
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition cursor-pointer ${
                isDark
                  ? "bg-white/5 border-white/15 text-white hover:bg-white/15"
                  : "bg-white border-2 border-blue-200 text-slate-800 hover:bg-blue-50 shadow-sm"
              }`}
            >
              <FiFileText size={14} className="text-blue-600" />
              <span>Resume</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-center ${
                isDark
                  ? "bg-white/10 border-white/15 text-amber-300 hover:bg-white/20"
                  : "bg-white border-2 border-blue-200 text-blue-600 hover:bg-blue-50 shadow-sm"
              }`}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            >
              {isDark ? (
                <FiSun size={17} className="transform hover:rotate-45 transition-transform duration-300" />
              ) : (
                <FiMoon size={17} className="transform hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            <Magnet padding={50} disabled={false} magnetStrength={6}>
              <NavLink to="/contact">
                <button className={`px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-md ${
                  isDark
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20"
                }`}>
                  <span>Let’s Talk</span>
                  <span>→</span>
                </button>
              </NavLink>
            </Magnet>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-xl border transition cursor-pointer flex items-center justify-center ${
                isDark
                  ? "bg-white/10 border-white/15 text-amber-300"
                  : "bg-white border-2 border-blue-200 text-blue-600 shadow-sm"
              }`}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            >
              {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className={`text-2xl cursor-pointer p-1 ${isDark ? 'text-white' : 'text-slate-800'}`}
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className={`relative z-10 mt-3 lg:hidden backdrop-blur-xl rounded-2xl border p-5 transition-colors duration-300 ${
              isDark
                ? "bg-black/90 border-white/10 text-white"
                : "bg-white border-2 border-blue-200 text-slate-900 shadow-xl shadow-blue-500/10"
            }`}
          >
            <ul className="flex flex-col gap-2.5 text-base font-medium">
              <NavLink onClick={() => setOpen(false)} to="/" className={navLinkClass}>
                About
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/experience" className={navLinkClass}>
                Experience
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/hackathon" className={navLinkClass}>
                Hackathons
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/projects" className={navLinkClass}>
                Projects
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/skills" className={navLinkClass}>
                Skills
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/terminal" className={navLinkClass}>
                Terminal
              </NavLink>
              <NavLink onClick={() => setOpen(false)} to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </ul>

            <div className="flex gap-3 mt-5 pt-4 border-t border-slate-200 dark:border-white/10">
              <a
                href={resume}
                download="Ganesh_Birajdar_Resume.pdf"
                className={`flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border ${
                  isDark
                    ? "bg-white/10 border-white/15 text-white"
                    : "bg-white border-2 border-blue-200 text-slate-800"
                }`}
              >
                <FiFileText size={14} className="text-blue-600" />
                <span>Resume</span>
              </a>

              <NavLink to="/contact" onClick={() => setOpen(false)} className="flex-1">
                <button
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1 text-white shadow-md ${
                    isDark
                      ? "bg-gradient-to-r from-blue-500 to-purple-600"
                      : "bg-blue-600"
                  }`}
                >
                  <span>Let’s Talk</span>
                  <span>→</span>
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
