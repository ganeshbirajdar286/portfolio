import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Swasthya from "../assets/Swasthya.png";
import Whatsapp from "../assets/WhatsApp.png";

const projects = [
  {
    title: "Swasthya",
    description:
      "Real-time health tracking with WebSocket feeds, interactive charts dite, and a video call to doctor",
    image: Swasthya,
    tech: ["React.js", "WebSockets", "Express.js", "MongoDB", "TailwindCSS"],
    link: "https://sih-nu-ten.vercel.app/",
  },
  {
    title: "WhatsApp",
    description: "Real-time chat application",
    image: Whatsapp,
    tech: ["React", "WebSockets", "Express.js", "MongoDB", "TailwindCSS"],
    link: "https://whatsapp-three-amber.vercel.app/",
  },
];

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);

  const nextProject = () => setIndex((prev) => (prev + 1) % projects.length);

  const prevProject = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const project = projects[index];

  return (
    <section
      className="w-full bg-black text-white 
                    pt-32 md:pt-40 
                    pb-16 md:pb-24 
                    px-4 md:px-20"
    >
      {/* Heading */}
      <div className="text-center mb-14 md:mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Featured{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h1>
        <p className="mt-4 text-white/70 max-w-2xl mx-auto">
          Explore my latest work showcasing modern web technologies and creative
          solutions
        </p>
      </div>

      {/* Project Wrapper */}
      <div className="relative max-w-7xl mx-auto">
        {/* Desktop arrows */}
        <button
          onClick={prevProject}
          className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2
                     bg-white/10 p-4 rounded-full hover:bg-white/20 transition"
        >
          <FaArrowLeft size={22} />
        </button>

        <button
          onClick={nextProject}
          className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2
                     bg-white/10 p-4 rounded-full hover:bg-white/20 transition"
        >
          <FaArrowRight size={22} />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Image */}
          <div className="w-full md:w-[55%]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-w-[95%] md:max-w-none mx-auto 
                         rounded-2xl shadow-lg object-contain"
            />

            {/* Mobile arrows */}
            <div className="flex md:hidden justify-center gap-6 mt-6">
              <button
                onClick={prevProject}
                className="bg-white/10 p-4 rounded-full active:scale-95 transition"
              >
                <FaArrowLeft size={20} />
              </button>
              <button
                onClick={nextProject}
                className="bg-white/10 p-4 rounded-full active:scale-95 transition"
              >
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-[45%] text-center md:text-left space-y-5">
            <h2 className="text-3xl md:text-5xl font-bold">{project.title}</h2>

            <p className="text-white/60">{project.description}</p>

            {/* Tech */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-white/10 rounded-full border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 px-7 py-3 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
