import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaExchangeAlt,
  FaThLarge,
  FaDesktop,
  FaSyncAlt,
} from "react-icons/fa";
import Swasthya from "../assets/Swasthya.png";
import Whatsapp from "../assets/WhatsApp.png";

const projects = [
  {
    id: "swasthya",
    title: "Swasthya",
    subtitle: "Healthcare & Real-time Diagnostics",
    description:
      "A AI-powered  health tracking web application featuring WebSocket telemetry feeds, interactive vital charts, smart dietary planning, and direct video consultation with healthcare specialists.",
    image: Swasthya,
    tech: ["React.js", "WebSockets", "Express.js", "MongoDB", "TailwindCSS", "Node.js","WebRTC","Redis"],
    link: "https://sih-nu-ten.vercel.app/",
    github: "https://github.com/ganeshbirajdar286/sih",
    category: "Full Stack / HealthTech",
    badgeColor: "from-sky-400 to-blue-500",
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
    badgeColor: "from-purple-400 to-pink-500",
  },
];

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  const [viewMode, setViewMode] = useState("showcase"); // 'showcase' or 'grid'

  const cardRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // 360-Degree Rotating Switcher Function using GSAP
  const rotateToProject = (targetIndex, direction = "next") => {
    if (isRotating || targetIndex === currentIndex) return;
    setIsRotating(true);

    const cardEl = cardRef.current;
    const rotateAngle = direction === "next" ? 360 : -360;

    // Timeline for 360-degree rotation transition
    const tl = gsap.timeline({
      onComplete: () => {
        // Reset rotation state cleanly for next interaction
        gsap.set(cardEl, { rotateY: 0, scale: 1 });
        setIsRotating(false);
      },
    });

    // 1st half: Spin to 180° & shrink slightly, fading out content
    tl.to(cardEl, {
      rotateY: direction === "next" ? 180 : -180,
      scale: 0.85,
      opacity: 0.2,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        // Change state exactly at 180° midpoint hidden from view
        setCurrentIndex(targetIndex);
      },
    });

    // 2nd half: Complete spin to 360° & expand back to full scale & opacity
    tl.to(cardEl, {
      rotateY: rotateAngle,
      scale: 1,
      opacity: 1,
      duration: 0.45,
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
      className="relative min-h-screen w-full bg-black text-white pt-28 md:pt-36 pb-24 px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Heading & View Mode Toggles */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-sky-400 rounded-full" />
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-sky-400">
              Portfolio Showcase
            </p>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/70 max-w-xl">
            Explore web applications built with scalable back-end architecture and responsive interactive interfaces.
          </p>
        </div>

        {/* Control Toolbar */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          {/* Mode Switcher */}
          <div className="flex bg-[#111] p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setViewMode("showcase")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                viewMode === "showcase"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <FaSyncAlt className={isRotating ? "animate-spin" : ""} />
              <span>360° Showcase</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-white/60 hover:text-white"
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
        <div className="relative max-w-6xl mx-auto perspective-1200 z-10">
          {/* Main 360-Degree Rotating Card Container */}
          <div
            ref={cardRef}
            className="w-full bg-gradient-to-b from-[#0f121a] to-[#1a0f25] border border-white/10 hover:border-purple-500/30 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-2xl shadow-[0_0_50px_-10px_rgba(120,0,255,0.25)] transition-shadow duration-500 transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Top Accent Gradient Line */}
            <div
              className={`absolute top-0 left-12 right-12 h-[3px] bg-gradient-to-r ${currentProject.badgeColor} rounded-full`}
            />

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              {/* Left Column: Interactive Image Preview */}
              <div className="w-full lg:w-1/2 group relative">
                <div
                  ref={imageRef}
                  className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                >
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-auto max-h-[380px] object-cover object-top"
                  />
                  {/* Subtle Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Quick Live Preview Badge */}
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-4 right-4 bg-black/70 hover:bg-purple-600 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-2 transition"
                  >
                    <span>Launch Live App</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                </div>
              </div>

              {/* Right Column: Content Details */}
              <div ref={textRef} className="w-full lg:w-1/2 flex flex-col space-y-5 text-left">
                {/* Category & Counter */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400">
                    {currentProject.category}
                  </span>
                  <span className="text-xs font-mono text-white/50 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                    0{currentIndex + 1} / 0{projects.length}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                    {currentProject.title}
                  </h2>
                  <p className="text-sm font-medium text-purple-400 mt-1">
                    {currentProject.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                  {currentProject.description}
                </p>

                {/* Tech Stack Pills */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                    Tech Stack & Tools
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 text-xs font-medium bg-blue-500/10 text-sky-300 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition active:scale-95"
                  >
                    <span>View Live Project</span>
                    <FaExternalLinkAlt size={14} />
                  </a>

                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition active:scale-95 flex items-center gap-2 text-sm"
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
            {/* Project Selector Dots / Thumbnails */}
            <div className="flex items-center gap-3">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => rotateToProject(idx, idx > currentIndex ? "next" : "prev")}
                  disabled={isRotating}
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-medium transition ${
                    idx === currentIndex
                      ? "bg-white/15 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                      : "bg-black/40 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-transform  ${
                      idx === currentIndex ? "bg-sky-400 scale-125" : "bg-white/30"
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
                className="p-4 rounded-2xl bg-[#111] hover:bg-white/15 border border-white/10 text-white transition active:scale-90 disabled:opacity-50 flex items-center gap-2 text-sm font-medium"
                title="Previous Project (360° Spin)"
              >
                <FaArrowLeft size={16} />
                <span className="hidden sm:inline">Prev</span>
              </button>

              <button
                onClick={handleNext}
                disabled={isRotating}
                className="p-4 rounded-2xl bg-[#111] hover:bg-white/15 border border-white/10 text-white transition active:scale-90 disabled:opacity-50 flex items-center gap-2 text-sm font-medium"
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
              className="group relative bg-gradient-to-b from-[#0f121a] to-[#1a0f25] border border-white/10 hover:border-purple-500/40 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 mb-6 aspect-[16/10]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Text info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sky-400">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors ">
                  {proj.title}
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-blue-500/10 text-sky-300 rounded-full border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-semibold flex items-center gap-2 transition"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt size={12} />
                </a>

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white transition "
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
