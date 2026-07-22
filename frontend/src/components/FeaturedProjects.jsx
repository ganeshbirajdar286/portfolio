import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaThLarge,
  FaSyncAlt,
} from "react-icons/fa";
import Swasthya from "../assets/Swasthya.png";
import Whatsapp from "../assets/WhatsApp.png";
import { useTheme } from "../context/ThemeContext.jsx";

const projects = [
  {
    id: "swasthya",
    title: "Swasthya",
    subtitle: "Healthcare & Real-time Diagnostics",
    description:
      "An AI-powered health tracking web application featuring WebSocket telemetry feeds, interactive vital charts, smart dietary planning, and direct video consultation with healthcare specialists.",
    image: Swasthya,
    tech: ["React.js", "WebSockets", "Express.js", "MongoDB", "TailwindCSS", "Node.js","WebRTC","Redis"],
    link: "https://sih-nu-ten.vercel.app/",
    github: "https://github.com/ganeshbirajdar286/sih",
    category: "Full Stack / HealthTech",
    badgeColor: "from-blue-600 to-sky-500",
  },
  {
    id: "whatsapp",
    title: "WhatsApp Web",
    subtitle: "Real-time Messaging Platform",
    description:
      "A responsive, full-featured web chat application supporting real-time bi-directional messaging with WebSockets, instant message status indicators, active user presences, and rich media communication.",
    image: Whatsapp,
    tech: ["React.js", "WebSockets", "Express.js", "MongoDB", "TailwindCSS", "Node.js"],
    link: "https://whatsapp-three-amber.vercel.app/",
    github: "https://github.com/ganeshbirajdar286/whatsapp",
    category: "Real-time Systems",
    badgeColor: "from-blue-700 to-blue-500",
  },
];

export default function FeaturedProjects() {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [viewMode, setViewMode] = useState("showcase"); // 'showcase' or 'grid'

  const cardRef = useRef(null);

  const rotateToProject = (targetIndex, direction = "next") => {
    if (isRotating || targetIndex === currentIndex) return;
    setIsRotating(true);

    const cardEl = cardRef.current;
    const startAngle = direction === "next" ? 90 : -90;
    const endAngle = direction === "next" ? -90 : 90;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(cardEl, { rotateY: 0, scale: 1, opacity: 1 });
        setIsRotating(false);
      },
    });

    // Phase 1: Spin current project out to edge-on (90deg)
    tl.to(cardEl, {
      rotateY: startAngle,
      scale: 0.88,
      opacity: 0,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        // Change project state while hidden edge-on
        setCurrentIndex(targetIndex);
        // Position card to spin in from opposite side (-90deg)
        gsap.set(cardEl, { rotateY: endAngle });
      },
    });

    // Phase 2: Spin new project in from -90deg back to 0deg
    tl.to(cardEl, {
      rotateY: 0,
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    rotateToProject(nextIdx, "next");
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    rotateToProject(prevIdx, "prev");
  };

  const currentProject = projects[currentIndex];

  return (
    <section
      id="projects"
      className={`relative min-h-screen w-full pt-28 md:pt-36 pb-24 px-4 sm:px-6 md:px-16 overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-slate-900"
      }`}
    >
      {/* Background ambient lighting */}
      <div className={`absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? "bg-blue-600/10" : "bg-blue-400/15"
      }`} />
      <div className={`absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? "bg-purple-600/10" : "bg-sky-400/15"
      }`} />

      {/* Heading & View Mode Toggles */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-blue-600">
              Portfolio Showcase
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Featured{" "}
            <span className={`bg-gradient-to-r ${
              isDark ? "from-sky-400 via-blue-500 to-purple-500" : "from-blue-700 via-blue-600 to-sky-500"
            } text-transparent bg-clip-text`}>
              Projects
            </span>
          </h1>
          <p className={`mt-3 text-base sm:text-lg max-w-xl ${isDark ? "text-white/70" : "text-slate-600"}`}>
            Explore web applications built with scalable back-end architecture and responsive interactive interfaces.
          </p>
        </div>

        {/* Control Toolbar */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <div className={`flex p-1.5 rounded-2xl border backdrop-blur-xl ${
            isDark ? "bg-[#111] border-white/10" : "bg-white border-2 border-blue-200 shadow-sm"
          }`}>
            <button
              onClick={() => setViewMode("showcase")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                viewMode === "showcase"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : isDark
                  ? "text-white/60 hover:text-white"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              <FaSyncAlt className={isRotating ? "animate-spin" : ""} />
              <span>360° Showcase</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : isDark
                  ? "text-white/60 hover:text-white"
                  : "text-slate-700 hover:text-blue-600"
              }`}
            >
              <FaThLarge />
              <span>Grid View</span>
            </button>
          </div>
        </div>
      </div>

      {/* SHOWCASE MODE (360° ROTATING EFFECT) */}
      {viewMode === "showcase" ? (
        <div className="relative max-w-6xl mx-auto z-10" style={{ perspective: "1200px" }}>
          {/* Main 360-Degree Rotating Card Container */}
          <div
            ref={cardRef}
            className={`w-full border rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-2xl transform-gpu ${
              isDark
                ? "bg-gradient-to-b from-[#0f121a] to-[#1a0f25] border-white/10 hover:border-purple-500/30 shadow-[0_0_50px_-10px_rgba(120,0,255,0.25)] text-white"
                : "bg-white border-2 border-blue-200 hover:border-blue-400 shadow-2xl shadow-blue-500/10 text-slate-900"
            }`}
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
          >
            {/* Top Accent Gradient Line */}
            <div
              className={`absolute top-0 left-12 right-12 h-[3px] bg-gradient-to-r ${currentProject.badgeColor} rounded-full`}
            />

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              {/* Left Column: Interactive Image Preview */}
              <div className="w-full lg:w-1/2 group relative">
                <div
                  className={`relative rounded-2xl overflow-hidden border shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${
                    isDark ? "border-white/10 bg-black/60" : "border-2 border-blue-200 bg-slate-50"
                  }`}
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-auto max-h-[380px] object-cover object-top"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent transition-opacity ${
                    isDark ? "from-black/80 opacity-60 group-hover:opacity-30" : "from-slate-900/40 opacity-30 group-hover:opacity-10"
                  }`} />

                  {/* Quick Live Preview Badge */}
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2 transition shadow-md"
                  >
                    <span>Launch Live App</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>

              {/* Right Column: Content Details */}
              <div className="w-full lg:w-1/2 flex flex-col space-y-5 text-left">
                {/* Category & Counter */}
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${
                    isDark
                      ? "bg-white/5 border-white/10 text-sky-400"
                      : "bg-blue-50 border-2 border-blue-200 text-blue-700 font-bold"
                  }`}>
                    {currentProject.category}
                  </span>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full border ${
                    isDark
                      ? "text-white/50 bg-black/40 border-white/5"
                      : "text-slate-600 bg-blue-50 border-2 border-blue-200 font-semibold"
                  }`}>
                    0{currentIndex + 1} / 0{projects.length}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}>
                    {currentProject.title}
                  </h2>
                  <p className="text-sm font-semibold text-blue-600 mt-1">
                    {currentProject.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-white/75" : "text-slate-600"
                }`}>
                  {currentProject.description}
                </p>

                {/* Tech Stack Pills */}
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                    isDark ? "text-white/40" : "text-slate-500"
                  }`}>
                    Tech Stack & Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-colors ${
                          isDark
                            ? "bg-blue-500/10 text-sky-300 border-blue-500/20 hover:bg-blue-500/20"
                            : "bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className={`flex flex-wrap items-center gap-4 pt-4 border-t ${
                  isDark ? "border-white/10" : "border-slate-200"
                }`}>
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition active:scale-95 cursor-pointer"
                  >
                    <span>View Live Project</span>
                    <FaExternalLinkAlt size={14} />
                  </a>

                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-3.5 rounded-xl border transition active:scale-95 flex items-center gap-2 text-sm ${
                        isDark
                          ? "bg-white/5 hover:bg-white/15 border-white/10 text-white"
                          : "bg-white hover:bg-blue-50 border-2 border-blue-200 text-slate-800 shadow-sm"
                      }`}
                      title="View GitHub Repository"
                    >
                      <FaGithub size={18} />
                      <span className="hidden sm:inline">Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls Bar below Card */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 px-2">
            {/* Project Selector Dots */}
            <div className="flex items-center gap-3">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => rotateToProject(idx, idx > currentIndex ? "next" : "prev")}
                  disabled={isRotating}
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold transition cursor-pointer ${
                    idx === currentIndex
                      ? isDark
                        ? "bg-white/15 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                        : "bg-blue-600 border-2 border-blue-600 text-white shadow-md shadow-blue-500/20"
                      : isDark
                        ? "bg-black/40 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                        : "bg-white border-2 border-blue-200 text-slate-700 hover:bg-blue-50"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-transform ${
                      idx === currentIndex
                        ? isDark ? "bg-sky-400 scale-125" : "bg-white scale-125"
                        : isDark ? "bg-white/30" : "bg-blue-400"
                    }`}
                  />
                  <span>{proj.title}</span>
                </button>
              ))}
            </div>

            {/* Next / Prev 360 Spin Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={isRotating}
                className={`p-4 rounded-2xl border transition active:scale-90 disabled:opacity-50 flex items-center gap-2 text-sm font-semibold cursor-pointer ${
                  isDark
                    ? "bg-[#111] hover:bg-white/15 border-white/10 text-white"
                    : "bg-white hover:bg-blue-50 border-2 border-blue-200 text-slate-800 shadow-sm"
                }`}
                title="Previous Project (360° Spin)"
              >
                <FaArrowLeft size={16} />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <button
                onClick={handleNext}
                disabled={isRotating}
                className={`p-4 rounded-2xl border transition active:scale-90 disabled:opacity-50 flex items-center gap-2 text-sm font-semibold cursor-pointer ${
                  isDark
                    ? "bg-[#111] hover:bg-white/15 border-white/10 text-white"
                    : "bg-white hover:bg-blue-50 border-2 border-blue-200 text-slate-800 shadow-sm"
                }`}
                title="Next Project (360° Spin)"
              >
                <span className="hidden sm:inline">Next</span>
                <FaArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* GRID MODE */
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 z-10 relative">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className={`group relative border rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                isDark
                  ? "bg-gradient-to-b from-[#0f121a] to-[#1a0f25] border-white/10 hover:border-purple-500/40 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] text-white"
                  : "bg-white border-2 border-blue-200 hover:border-blue-400 shadow-xl shadow-blue-500/10 text-slate-900"
              }`}
            >
              {/* Image */}
              <div className={`relative rounded-2xl overflow-hidden border mb-6 aspect-[16/10] ${
                isDark ? "border-white/10 bg-black/60" : "border-2 border-blue-200 bg-slate-50"
              }`}>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent transition-opacity ${
                  isDark ? "from-black/80 opacity-60 group-hover:opacity-40" : "from-slate-900/40 opacity-30 group-hover:opacity-10"
                }`} />
              </div>

              {/* Text info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                    isDark ? "bg-white/5 border-white/10 text-sky-400" : "bg-blue-50 border-2 border-blue-200 text-blue-700"
                  }`}>
                    {proj.category}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold transition-colors ${
                  isDark ? "text-white group-hover:text-sky-300" : "text-slate-900 group-hover:text-blue-600"
                }`}>
                  {proj.title}
                </h3>

                <p className={`text-sm leading-relaxed ${
                  isDark ? "text-white/70" : "text-slate-600"
                }`}>
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs rounded-full border font-medium ${
                        isDark
                          ? "bg-blue-500/10 text-sky-300 border-blue-500/20"
                          : "bg-blue-50 text-blue-800 border border-blue-200"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className={`pt-6 mt-6 border-t flex items-center justify-between ${
                isDark ? "border-white/10" : "border-slate-200"
              }`}>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold flex items-center gap-2 transition cursor-pointer shadow-md shadow-blue-500/20"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt size={12} />
                </a>

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-2.5 rounded-xl border transition ${
                      isDark
                        ? "bg-white/5 hover:bg-white/15 border-white/10 text-white"
                        : "bg-white hover:bg-blue-50 border-2 border-blue-200 text-slate-800 shadow-sm"
                    }`}
                    title="View Code on GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
