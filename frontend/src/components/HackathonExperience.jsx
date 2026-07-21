import React, { useState } from "react";
import { FaTrophy, FaUsers, FaTasks, FaCalendarAlt, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import ImageSlider from "./ImageSlider";

export default function HackathonExperience() {
  const [selectedImage, setSelectedImage] = useState(null);

  const hackathonImages = ["/csi-h-1.png", "/csi-h-2.png"];
  const hackathonTitles = [
    "CSI Hackathon Management - Team Briefing & Event Execution",
    "CSI Hackathon Management - Live Competition & Technical Operations",
  ];

  return (
    <section id="hackathon" className="relative w-full bg-black text-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 overflow-hidden border-t border-b border-white/10">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <FaTrophy className="text-amber-400" />
            <span>Featured Leadership Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Hackathon {" "}
            <span className="bg-gradient-to-r from-amber-400 via-purple-400 to-sky-400 text-transparent bg-clip-text">
              with CSI Team
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Organizing, managing, and driving large-scale technical hackathons alongside the Computer Society of India (CSI SFIT) committee.
          </p>
        </div>

        {/* Content Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-[#0f121a] to-[#180d26] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_0_50px_-10px_rgba(168,85,247,0.2)] relative">
          {/* Top Decorative Accent Line */}
          <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-amber-400 via-purple-500 to-sky-400 rounded-full" />

          {/* Left Column: Interactive Image Slider (7 cols on lg) */}
          <div className="lg:col-span-7 w-full space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Hackathon Gallery & Highlights
              </span>
              <span className="text-xs text-white/50 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                2 Photos • Interactive Slider
              </span>
            </div>

            {/* Slider Component with csi-h-1.png & csi-h-2.png */}
            <ImageSlider
              images={hackathonImages}
              titles={hackathonTitles}
              onExpandImage={(img) => setSelectedImage(img)}
            />
          </div>

          {/* Right Column: Experience Details (5 cols on lg) */}
          <div className="lg:col-span-5 w-full flex flex-col justify-between space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-2">
                <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  <FaCalendarAlt className="text-amber-400" />
                  CSI Event Season
                </span>
                <span className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                  <FaMapMarkerAlt className="text-red-400" />
                  SFIT, Mumbai
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Hackathon Management Lead
              </h3>
              <p className="text-purple-400 font-semibold text-sm mb-4">
                Computer Society of India (CSI SFIT)
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                Spearheaded technical operations, venue coordination, and participant management during high-stakes hackathons. Collaborated closely with the CSI committee to ensure seamless judging workflows, real-time mentor assistance, and flawless event execution.
              </p>
            </div>

            {/* Key Responsibilities / Achievements List */}
            <div className="space-y-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Key Responsibilities & Impact
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-white/75">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-400 font-bold mt-0.5">•</span>
                  <span>Coordinated hackathon logistics, team registrations, and portal setup for participating teams.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-400 font-bold mt-0.5">•</span>
                  <span>Managed live technical query resolution and infrastructure support during 24-hour hackathon sprints.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-sky-400 font-bold mt-0.5">•</span>
                  <span>Streamlined judging evaluation rubrics, team pitching order, and final leaderboard announcements.</span>
                </li>
              </ul>
            </div>

            {/* Skill Tags */}
            <div className="pt-4 border-t border-white/10">
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
                    className="px-3 py-1 text-xs font-medium bg-amber-500/10 text-amber-300 rounded-full border border-amber-500/20"
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
              className="absolute top-4 right-4 p-3 bg-black/60 hover:bg-white/20 text-white rounded-full transition z-10"
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
