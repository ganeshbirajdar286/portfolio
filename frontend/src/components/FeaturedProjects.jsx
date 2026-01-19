import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Swasthya from "../assets/Swasthya.png"
import Whatsapp from "../assets/Whatsapp.png";

const projects = [
  {
    title: "Swasthya",
    description:
      "Real-time health tracking with WebSocket feeds, interactive charts dite, and a video call to  to doctor ",
    image: Swasthya, 
    tech: ["React.js", "WebSockets", "express.js","MongoDB", "TailwindCSS"],
    link: "https://sih-nu-ten.vercel.app/",
  },
  {
    title: "WhatsApp",
    description:
      "Real time chat application ",
    image: Whatsapp,
    tech: ["REACT", "WebSockets", "express.js", "MongoDB","TailwindCSS"],
    link: "https://whatsapp-three-amber.vercel.app/",
  },
];

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);

  const nextProject = () =>
    setIndex((prev) => (prev + 1) % projects.length);

  const prevProject = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const project = projects[index];

  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-20">
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Featured{" "}
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
            Projects
          </span>
        </h1>
        <p className="mt-4 text-white/70 text-lg">
          Explore my latest work showcasing modern web technologies and creative solutions
        </p>
      </div>

      {/* Project Layout */}
      <div className="relative flex flex-col md:flex-row items-center gap-16">

        {/* Left Image */}
        <button
          onClick={prevProject}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-4 rounded-full hover:bg-white/20 transition"
        >
          <FaArrowLeft size={22} />
        </button>

        <div className="w-full md:w-[55%] flex justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[45%] space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">{project.title}</h2>

          <p className="text-white/60 text-lg">{project.description}</p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 mt-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-4 py-1 bg-white/10 rounded-full border border-white/10 text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {/* View Project Button */}
          <a
            href={project.link}
            className="inline-block mt-6 px-8 py-3 bg-red-600 rounded-full font-semibold hover:bg-red-700 transition"
          >
            View Project →
          </a>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextProject}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-4 rounded-full hover:bg-white/20 transition"
        >
          <FaArrowRight size={22} />
        </button>
      </div>
    </section>
  );
}
