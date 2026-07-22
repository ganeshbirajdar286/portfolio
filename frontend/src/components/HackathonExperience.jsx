import React, { useState } from "react";
import { FaTrophy, FaUsers, FaTasks, FaCalendarAlt, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import { useTheme } from "../context/ThemeContext.jsx";

export default function HackathonExperience() {
  const { isDark } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  const hackathonImages = ["/csi-h-1.png", "/csi-h-2.png"];
  const hackathonTitles = [
    "CSI Hackathon Management - Team Briefing & Event Execution",
    "CSI Hackathon Management - Live Competition & Technical Operations",
  ];

  return (
    <section id="hackathon" className={`relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-b transition-colors duration-300 ${
      isDark ? "bg-black text-white border-white/10" : "bg-white text-slate-900 border-slate-200"
    }`}>
      {/* Background Glows */}
      <div className={`absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? "bg-purple-600/15" : "bg-blue-400/15"
      }`} />
      <div className={`absolute bottom-10 right-1/4 w-[350px] h-[350px] rounded-full blur-[130px] pointer-events-none ${
        isDark ? "bg-amber-500/10" : "bg-sky-400/15"
      }`} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-4 ${
            isDark ? "bg-amber-500/10 border-amber-500/30 text-amber-400" : "bg-blue-50 border-2 border-blue-200 text-blue-700"
          }`}>
            <FaTrophy className={isDark ? "text-amber-400" : "text-blue-600"} />
            <span>Featured Leadership Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Hackathon {" "}
            <span className={`bg-gradient-to-r ${
              isDark ? "from-amber-400 via-purple-400 to-sky-400" : "from-blue-700 via-blue-600 to-sky-500"
            } text-transparent bg-clip-text`}>
              with CSI Team
            </span>
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-white/70" : "text-slate-600"}`}>
            Organizing, managing, and driving large-scale technical hackathons alongside the Computer Society of India (CSI SFIT) committee.
          </p>
        </div>

        {/* Content Card Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border rounded-3xl p-6 sm:p-8 md:p-10 relative transition-all duration-300 ${
          isDark
            ? "bg-gradient-to-b from-[#0f121a] to-[#180d26] border-white/10 shadow-[0_0_50px_-10px_rgba(168,85,247,0.2)] text-white"
            : "bg-white border-2 border-blue-200 shadow-xl shadow-blue-500/10 text-slate-900"
        }`}>
          {/* Top Decorative Accent Line */}
          <div className={`absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r ${
            isDark ? "from-amber-400 via-purple-500 to-sky-400" : "from-blue-600 via-sky-400 to-blue-400"
          } rounded-full`} />

          {/* Left Column: Interactive Image Slider (7 cols on lg) */}
          <div className="lg:col-span-7 w-full space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${
                isDark ? "text-purple-300" : "text-blue-700"
              }`}>
                <span className={`w-2 h-2 rounded-full animate-pulse ${isDark ? "bg-amber-400" : "bg-blue-600"}`} />
                Hackathon Gallery & Highlights
              </span>
              <span className={`text-xs px-3 py-1 rounded-full border ${
                isDark ? "text-white/50 bg-black/40 border-white/10" : "text-slate-600 bg-blue-50 border-2 border-blue-200 font-semibold"
              }`}>
                2 Photos • Interactive Slider
              </span>
            </div>

            {/* Slider Component */}
            <ImageSlider
              images={hackathonImages}
              titles={hackathonTitles}
              onExpandImage={(img) => setSelectedImage(img)}
            />
          </div>

          {/* Right Column: Experience Details (5 cols on lg) */}
          <div className="lg:col-span-5 w-full flex flex-col justify-between space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs mb-2">
                <span className={`flex items-center gap-1 px-2.5 py-1 rounded-md border ${
                  isDark ? "text-white/60 bg-white/5 border-white/10" : "text-slate-600 bg-blue-50 border-2 border-blue-200 font-semibold"
                }`}>
                  <FaCalendarAlt className="text-blue-600" />
                  CSI Event Season
                </span>
                <span className={`flex items-center gap-1 px-2.5 py-1 rounded-md border ${
                  isDark ? "text-white/60 bg-white/5 border-white/10" : "text-slate-600 bg-blue-50 border-2 border-blue-200 font-semibold"
                }`}>
                  <FaMapMarkerAlt className="text-red-500" />
                  SFIT, Mumbai
                </span>
              </div>

              <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                Hackathon Management Lead
              </h3>
              <p className="text-blue-600 font-semibold text-sm mb-4">
                Computer Society of India (CSI SFIT)
              </p>

              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                isDark ? "text-white/80" : "text-slate-600"
              }`}>
                Spearheaded technical operations, venue coordination, and participant management during high-stakes hackathons. Collaborated closely with the CSI committee to ensure seamless judging workflows, real-time mentor assistance, and flawless event execution.
              </p>
            </div>

            {/* Key Responsibilities / Achievements List */}
            <div className="space-y-2.5">
              <p className={`text-xs font-semibold uppercase tracking-wider ${
                isDark ? "text-white/50" : "text-slate-500"
              }`}>
                Key Responsibilities & Impact
              </p>

              <ul className={`space-y-2 text-xs sm:text-sm ${
                isDark ? "text-white/75" : "text-slate-700"
              }`}>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>Coordinated hackathon logistics, team registrations, and portal setup for participating teams.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>Managed live technical query resolution and infrastructure support during 24-hour hackathon sprints.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <span>Streamlined judging evaluation rubrics, team pitching order, and final leaderboard announcements.</span>
                </li>
              </ul>
            </div>

            {/* Skill Tags */}
            <div className={`pt-4 border-t ${isDark ? "border-white/10" : "border-slate-200"}`}>
              <div className="flex flex-wrap gap-2">
                {[
                  "Hackathon Management",
                  "CSI Team Leadership",
                  "Event Logistics",
                  "Technical Operations",
                  "Problem Solving",
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                      isDark
                        ? "bg-amber-500/10 text-amber-300 border-amber-500/20"
                        : "bg-blue-50 text-blue-800 border border-blue-200"
                    }`}
                  >
                    ♦ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full bg-[#111] border border-white/20 rounded-2xl p-4 overflow-hidden flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-black/60 hover:bg-white/20 text-white rounded-full transition z-10 cursor-pointer"
            >
              <FaTimes size={18} />
            </button>
            <img
              src={selectedImage}
              alt="Hackathon Experience Full Preview"
              className="max-h-[80vh] w-auto object-contain rounded-lg border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
