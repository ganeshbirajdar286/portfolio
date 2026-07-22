import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaExpand, FaTimes, FaTrophy } from "react-icons/fa";
import { SiIeee } from "react-icons/si";
import ImageSlider from "./ImageSlider";
import { useTheme } from "../context/ThemeContext.jsx";

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    id: "csi-hackathon",
    role: "Hackathon Management Lead",
    organization: "CSI SFIT (Computer Society of India)",
    period: "2025 - Present",
    duration: "Hackathon Ops",
    location: "Mumbai, Maharashtra, India · On-site",
    type: "Hackathon Management",
    icon: <FaTrophy className="text-amber-500 text-lg sm:text-xl" />,
    description:
      "Managed end-to-end hackathon operations in collaboration with the CSI team. Oversaw logistics, team onboarding, technical troubleshooting, judge paneling workflows, and live platform operations to deliver a smooth competition experience for all participating teams.",
    skills: [
      "Hackathon Operations",
      "Event Management",
      "CSI Team Leadership",
      "Technical Coordination",
      "Judging & Rubrics Workflow",
    ],
    mediaImages: ["/csi-h-1.png", "/csi-h-2.png"],
    mediaTitles: [
      "CSI Hackathon Management - Team & Event Execution (Phase 1)",
      "CSI Hackathon Management - Live Operations & Platform (Phase 2)",
    ],
    highlightColor: "from-blue-600 via-sky-500 to-blue-400",
    badgeBorder: "border-blue-500/30",
  },
  {
    id: "ieee-head",
    role: "Joint Tech Head",
    organization: "IEEE SFIT Student Branch",
    period: "Jun 2026 - Present",
    duration: "2 mos",
    location: "Mumbai, Maharashtra, India · On-site",
    type: "Leadership & Tech",
    icon: <SiIeee className="text-blue-600 dark:text-sky-400 text-xl sm:text-2xl" />,
    description:
      "As Joint Head of the IEEE Student Branch, I collaborate with the core committee to plan and execute technical events, workshops, hackathons, and speaker sessions. I coordinate with team members, manage technical operations, and drive student technical development.",
    skills: [
      "Back-End Web Development",
      "Web Application Development",
      "Team Leadership",
      "Event Management",
    ],
    mediaImage: "/ieee.png",
    mediaTitle: "IEEE Leadership & Technical Roles",
    highlightColor: "from-sky-500 to-blue-600",
    badgeBorder: "border-sky-500/30",
  },
  {
    id: "csi-tech",
    role: "Technical Executive",
    organization: "CSI SFIT (Computer Society of India)",
    period: "May 2025 - May 2026",
    duration: "1 yr 1 mo",
    location: "Mumbai, Maharashtra, India · On-site",
    type: "Technical Executive",
    icon: <FaBriefcase className="text-blue-500 dark:text-purple-400 text-lg sm:text-xl" />,
    description:
      "As a Technical Executive at the Computer Society of India (CSI) Student Chapter, I contributed to planning and organizing technical events, workshops, and hackathons. I collaborated with the committee to build engagement, solve complex technical tasks, and build modern web solutions.",
    skills: [
      "Back-End Web Development",
      "Full-Stack Development",
      "System Architecture",
      "Workshop Hosting",
    ],
    mediaImage: "/csi.png",
    mediaTitle: "CSI Technical Executive Appointment & Activities",
    highlightColor: "from-blue-700 to-sky-400",
    badgeBorder: "border-blue-500/30",
  },
  {
    id: "education-sfit",
    role: "Information Technology Engineering (B.E.)",
    organization: "St. Francis Institute of Technology (SFIT)",
    period: "2024 - 2028",
    duration: "4 yrs",
    location: "Mumbai, Maharashtra, India · On-site",
    type: "Education",
    icon: <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-xl sm:text-2xl" />,
    description:
      "Pursuing Bachelor of Engineering degree in Information Technology Engineering. Deep diving into Data Structures, Algorithms, Object-Oriented Design, Database Engineering, and Modern Web Architecture.",
    skills: [
      "Data Structures & Algorithms",
      "Database Systems (DBMS)",
      "Web Engineering",
      "Software Engineering",
    ],
    highlightColor: "from-blue-600 to-sky-500",
    badgeBorder: "border-blue-500/30",
  },
];

export default function ExperienceTimeline() {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);
  const nodesRef = useRef([]);
  
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (lineRef.current && containerRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 85%",
              scrub: 0.6,
            },
          }
        );
      }

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const node = nodesRef.current[index];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        if (node) {
          tl.fromTo(
            node,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2)" }
          );
        }

        const isEven = index % 2 === 0;
        tl.fromTo(
          card,
          {
            opacity: 0,
            y: 40,
            x: window.innerWidth >= 768 ? (isEven ? -30 : 30) : 0,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="experience"
      className={`relative min-h-screen w-full px-4 sm:px-6 md:px-12 py-24 overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-slate-900"
      }`}
    >
      {/* Background Ambient Glows */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? "bg-purple-600/10" : "bg-blue-400/15"
      }`} />
      <div className={`absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none ${
        isDark ? "bg-blue-600/10" : "bg-sky-400/15"
      }`} />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <p className="uppercase tracking-[0.25em] text-xs font-semibold text-blue-600 mb-3">
          Timeline & Leadership
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className={`bg-gradient-to-r ${
            isDark ? "from-sky-400 via-blue-500 to-purple-500" : "from-blue-700 via-blue-600 to-sky-500"
          } text-transparent bg-clip-text`}>
            Experience & Journey
          </span>
        </h2>

        <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
          isDark ? "text-white/70" : "text-slate-600"
        }`}>
          Positions of responsibility, student body leadership, and technical milestones driving web systems and developer communities.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto z-10">
        {/* Central Vertical Line */}
        <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 rounded-full overflow-hidden ${
          isDark ? "bg-white/10" : "bg-blue-100"
        }`}>
          <div
            ref={lineRef}
            className="w-full h-full bg-gradient-to-b from-blue-600 via-blue-500 to-sky-400 origin-top shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          />
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node Circle on Line */}
                <div
                  ref={(el) => (nodesRef.current[index] = el)}
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-blue-500 flex items-center justify-center shadow-lg transition-transform hover:scale-110 ${
                    isDark ? "bg-[#0d111a] shadow-purple-500/50" : "bg-white shadow-blue-500/30"
                  }`}>
                    {item.icon}
                  </div>
                </div>

                {/* Timeline Card Container */}
                <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 cursor-pointer">
                  <div
                    ref={(el) => (cardsRef.current[index] = el)}
                    className={`group relative border rounded-3xl p-6 sm:p-8 backdrop-blur-2xl transition-all duration-300 ${
                      isDark
                        ? "bg-gradient-to-b from-[#0f121a] to-[#1a0f25] border-white/10 hover:border-purple-500/40 text-white shadow-[0_0_30px_-5px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)]"
                        : "bg-white border-2 border-blue-200 hover:border-blue-400 text-slate-900 shadow-xl shadow-blue-500/10"
                    }`}
                  >
                    {/* Glowing Top Accent Line */}
                    <div
                      className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${item.highlightColor} opacity-70 rounded-full group-hover:opacity-100 transition-opacity`}
                    />

                    {/* Role Header & Type Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        isDark ? "bg-white/5 border-white/10 text-white/80" : "bg-blue-50 border-2 border-blue-200 text-blue-800"
                      }`}>
                        {item.type}
                      </span>
                      <span className={`text-xs flex items-center gap-1.5 px-3 py-1 rounded-full border ${
                        isDark ? "text-white/50 bg-black/40 border-white/5" : "text-slate-600 bg-blue-50 border-2 border-blue-200 font-semibold"
                      }`}>
                        <FaCalendarAlt className="text-blue-600" />
                        {item.period} ({item.duration})
                      </span>
                    </div>

                    {/* Role & Org */}
                    <h3 className={`text-2xl sm:text-3xl font-bold transition-colors ${
                      isDark ? "text-white group-hover:text-sky-300" : "text-slate-900 group-hover:text-blue-600"
                    }`}>
                      {item.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-purple-400 mt-1">
                      {item.organization}
                    </h4>

                    {/* Location */}
                    <p className={`flex items-center gap-1.5 text-xs sm:text-sm mt-2 mb-4 ${
                      isDark ? "text-white/50" : "text-slate-500"
                    }`}>
                      <FaMapMarkerAlt className="text-red-500" />
                      {item.location}
                    </p>

                    {/* Description */}
                    <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                      isDark ? "text-white/75" : "text-slate-600"
                    }`}>
                      {item.description}
                    </p>

                    {/* Multiple Images Slider */}
                    {item.mediaImages && item.mediaImages.length > 0 && (
                      <div className="mb-6">
                        <ImageSlider
                          images={item.mediaImages}
                          titles={item.mediaTitles}
                          onExpandImage={(img) => setSelectedImage(img)}
                        />
                      </div>
                    )}

                    {/* Single Attachment / Image Preview */}
                    {!item.mediaImages && item.mediaImage && (
                      <div className={`mb-6 rounded-2xl overflow-hidden border p-2 group/media relative ${
                        isDark ? "border-white/10 bg-black/50" : "border-2 border-blue-200 bg-blue-50/50"
                      }`}>
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/80">
                          <img
                            src={item.mediaImage}
                            alt={item.mediaTitle}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/media:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-3 opacity-90 group-hover/media:opacity-100 transition-opacity">
                            <span className="text-xs font-medium text-white/90 truncate max-w-[80%]">
                              📄 {item.mediaTitle}
                            </span>
                            <button
                              onClick={() => setSelectedImage(item.mediaImage)}
                              className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition flex items-center gap-1 text-xs cursor-pointer shadow-sm"
                              title="Expand Image"
                            >
                              <FaExpand size={12} />
                              <span>View</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Skills Pills */}
                    <div className={`flex flex-wrap gap-2 pt-2 border-t ${
                      isDark ? "border-white/10" : "border-slate-200"
                    }`}>
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`text-xs font-semibold px-3 py-1 rounded-full border transition-colors ${
                            isDark
                              ? "bg-blue-500/10 text-sky-300 border-blue-500/20 hover:bg-blue-500/20"
                              : "bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100"
                          }`}
                        >
                          ♦ {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Image Modal Lightbox */}
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
              alt="Experience preview"
              className="max-h-[80vh] w-auto object-contain rounded-lg border border-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
}
