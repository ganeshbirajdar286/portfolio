import React, { useState } from "react";
import ganeshImg from "../assets/ganesh.jpg";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaDownload, FaCopy, FaCheck, FaGraduationCap, FaTrophy, FaCode } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext.jsx";
import resume from "/ganesh_resume.pdf";

export default function Hero() {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ganeshbirajdar286@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className={`relative min-h-screen w-full pt-32 pb-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-black text-white"
          : "bg-white text-slate-900 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px]"
      }`}
    >
      {/* Dark mode background glow ambient lighting */}
      {isDark && (
        <>
          <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16 relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Status Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-wide mb-6 backdrop-blur-md transition ${
              isDark
                ? "bg-white/5 border-white/10 text-white/80"
                : "bg-white border-2 border-blue-200 text-slate-800 shadow-sm shadow-blue-500/5 font-semibold"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Software Engineering Internships & Roles</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            <span className={isDark ? "text-white block" : "text-slate-900 block"}>
              Full Stack &
            </span>
            <span className={`bg-gradient-to-r ${
              isDark
                ? "from-sky-400 via-blue-500 to-purple-500"
                : "from-blue-700 via-blue-600 to-sky-500"
            } text-transparent bg-clip-text block mt-1`}>
              Systems Engineer
            </span>
          </h1>

          {/* Subheading / Name & Location */}
          <h2 className={`text-lg sm:text-xl md:text-2xl font-bold mt-4 mb-4 ${
            isDark ? "text-white/90" : "text-slate-800"
          }`}>
            Ganesh Birajdar • Mumbai, India
          </h2>

          {/* Main Description */}
          <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
            isDark ? "text-white/70" : "text-slate-600"
          }`}>
            Information Technology Engineering student building production-ready applications with strong computer science fundamentals. Specialized in{" "}
            <strong className={isDark ? "text-white" : "text-slate-900"}>React.js</strong>,{" "}
            <strong className={isDark ? "text-white" : "text-slate-900"}>Node.js</strong>,{" "}
            <strong className={isDark ? "text-white" : "text-slate-900"}>Express</strong>,{" "}
            <strong className={isDark ? "text-white" : "text-slate-900"}>WebSockets</strong>,{" "}
            <strong className={isDark ? "text-white" : "text-slate-900"}>WebRTC</strong>,{" "}
            <strong className={isDark ? "text-white" : "text-slate-900"}>Redis</strong>, and relational/document databases. Proven track record in student leadership as{" "}
            <strong className={isDark ? "text-white" : "text-slate-900"}>IEEE Joint Tech Head</strong> and{" "}
            <strong className={isDark ? "text-white" : "text-slate-900"}>CSI Technical Executive </strong>.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8 w-full">
            {/* Download Resume PDF */}
            <a
              href={resume}
              download="Ganesh_Birajdar_Resume.pdf"
              className={`px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base flex items-center gap-2.5 transition-all cursor-pointer active:scale-95 shadow-lg ${
                isDark
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 shadow-purple-500/25"
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25"
              }`}
            >
              <FaDownload size={14} />
              <span>Download Resume PDF</span>
            </a>

            {/* Copy Direct Email */}
            <button
              onClick={handleCopyEmail}
              className={`px-6 py-3.5 rounded-xl border font-semibold text-sm sm:text-base flex items-center gap-2.5 transition cursor-pointer active:scale-95 shadow-sm ${
                isDark
                  ? "bg-black/40 border-white/15 text-white hover:bg-white/10"
                  : "bg-white border-2 border-blue-200 text-slate-800 hover:bg-blue-50/60"
              }`}
            >
              {copied ? (
                <>
                  <FaCheck className="text-emerald-500" size={14} />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied Email!</span>
                </>
              ) : (
                <>
                  <FaCopy size={14} className={isDark ? "text-white/60" : "text-slate-500"} />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>

            {/* Get in Touch */}
            <Link
              to="/contact"
              className={`px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base flex items-center gap-2 transition cursor-pointer active:scale-95 shadow-md ${
                isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-slate-900 hover:bg-slate-800 text-white"
              }`}
            >
              <span>Get in Touch</span>
              <span>→</span>
            </Link>
          </div>

          {/* Bottom 3 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 w-full">
            {/* Education Card */}
            <div className={`p-4 rounded-2xl border backdrop-blur-md transition text-left ${
              isDark
                ? "bg-gradient-to-b from-[#0f121a] to-[#1a0f25] border-white/10 hover:border-purple-500/30 text-white"
                : "bg-white border-2 border-blue-200/90 shadow-md shadow-blue-500/5 hover:border-blue-400 hover:shadow-lg text-slate-900"
            }`}>
              <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-sky-400 mb-1">
                <FaGraduationCap size={13} />
                <span>Education</span>
              </div>
              <h3 className="font-bold text-sm sm:text-base">
                B.E. IT Engineering
              </h3>
              <p className={`text-xs mt-0.5 ${isDark ? "text-white/50" : "text-slate-500 font-medium"}`}>
                SFIT Mumbai (2024–2028)
              </p>
            </div>

            {/* Leadership Card */}
            <div className={`p-4 rounded-2xl border backdrop-blur-md transition text-left ${
              isDark
                ? "bg-gradient-to-b from-[#0f121a] to-[#1a0f25] border-white/10 hover:border-purple-500/30 text-white"
                : "bg-white border-2 border-blue-200/90 shadow-md shadow-blue-500/5 hover:border-blue-400 hover:shadow-lg text-slate-900"
            }`}>
              <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-purple-400 mb-1">
                <FaTrophy size={13} />
                <span>Leadership</span>
              </div>
              <h3 className="font-bold text-sm sm:text-base">
                IEEE Joint Tech Head
              </h3>
              <p className={`text-xs mt-0.5 ${isDark ? "text-white/50" : "text-slate-500 font-medium"}`}>
                 SFIT Mumbai (2026–2027)
              </p>
            </div>
             
             <div className={`p-4 rounded-2xl border backdrop-blur-md transition text-left ${
              isDark
                ? "bg-gradient-to-b from-[#0f121a] to-[#1a0f25] border-white/10 hover:border-purple-500/30 text-white"
                : "bg-white border-2 border-blue-200/90 shadow-md shadow-blue-500/5 hover:border-blue-400 hover:shadow-lg text-slate-900"
            }`}>
              <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-purple-400 mb-1">
                <FaTrophy size={13} />
                <span>Leadership</span>
              </div>
              <h3 className="font-bold text-sm sm:text-base">
                CSI Technical Executive 
              </h3>
              <p className={`text-xs mt-0.5 ${isDark ? "text-white/50" : "text-slate-500 font-medium"}`}>
                 SFIT Mumbai (2025–2026)
              </p>
            </div>

            {/* Core Stack Card */}
            <div className={`p-4 rounded-2xl border backdrop-blur-md transition text-left ${
              isDark
                ? "bg-gradient-to-b from-[#0f121a] to-[#1a0f25] border-white/10 hover:border-purple-500/30 text-white"
                : "bg-white border-2 border-blue-200/90 shadow-md shadow-blue-500/5 hover:border-blue-400 hover:shadow-lg text-slate-900"
            }`}>
              <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-emerald-400 mb-1">
                <FaCode size={13} />
                <span>Core Stack</span>
              </div>
              <h3 className="font-bold text-sm sm:text-base">
                MERN & Real-time
              </h3>
              <p className={`text-xs mt-0.5 ${isDark ? "text-white/50" : "text-slate-500 font-medium"}`}>
                WebSockets, WebRTC, Redis
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: PROFILE CARD */}
        <div className="w-full lg:w-5/12 flex justify-center">
          <div
            className={`w-full max-w-sm rounded-3xl border p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 flex flex-col items-center text-center ${
              isDark
                ? "bg-gradient-to-b from-[#0f121a] to-[#1a0f25] border-white/10 shadow-[0_0_40px_-10px_rgba(120,0,255,0.4)] text-white"
                : "bg-white border-2 border-blue-200 shadow-2xl shadow-blue-500/15 text-slate-900 ring-1 ring-blue-100"
            }`}
          >
            {/* Profile Photo */}
            <div className={`w-[240px] h-[240px] rounded-2xl overflow-hidden shadow-md mb-6 group border ${
              isDark ? "border-white/10" : "border-2 border-blue-200"
            }`}>
              <img
                src={ganeshImg}
                alt="Ganesh Birajdar"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Name & Role */}
            <h3 className="text-2xl font-extrabold">
              Ganesh Birajdar
            </h3>
            <p className="text-sm font-semibold text-blue-600 dark:text-purple-400 mt-1">
              Software & Full Stack Developer
            </p>
            <p className={`text-xs mt-2 leading-relaxed max-w-[260px] ${
              isDark ? "text-white/70" : "text-slate-600 font-medium"
            }`}>
              Building scalable web applications, real-time messaging systems, and diagnostic tools.
            </p>

            {/* Tech Chips Grid */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-5 max-w-[280px]">
              {["React", "Node.js", "Express", "MongoDB", "WebSockets", "TypeScript"].map((t, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 text-xs rounded-md font-medium border ${
                    isDark
                      ? "bg-blue-500/10 text-sky-300 border-blue-500/20"
                      : "bg-blue-50/80 border border-blue-200 text-blue-800 font-semibold"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/ganeshbirajdar286"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border backdrop-blur-md transition ${
                  isDark
                    ? "bg-black/40 border-white/10 text-white hover:bg-white/10"
                    : "bg-blue-50 border-2 border-blue-200 text-blue-700 hover:bg-blue-100 shadow-sm"
                }`}
                title="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ganesh-fulchand-birajdar/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border backdrop-blur-md transition ${
                  isDark
                    ? "bg-black/40 border-white/10 text-white hover:bg-white/10"
                    : "bg-blue-50 border-2 border-blue-200 text-blue-700 hover:bg-blue-100 shadow-sm"
                }`}
                title="LinkedIn Profile"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
