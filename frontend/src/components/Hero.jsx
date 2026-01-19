import React from "react";
import ganeshImg from "../assets/ganesh.jpg";
import TiltedCard from "../components/TiltedCard.jsx";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      className="min-h-screen w-full bg-black text-white 
                        px-6 sm:px-8 md:px-20 
                        py-20 md:py-24 
                        flex flex-col md:flex-row 
                        gap-14 md:gap-16 
                        justify-between items-center"
    >
      {/* LEFT SECTION */}
      <div className="max-w-2xl text-center md:text-left">
        <h1
          className="text-[44px] sm:text-[55px] md:text-[90px] 
                       font-extrabold leading-[1.1]"
        >
          <span
            className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 
                           text-transparent bg-clip-text whitespace-nowrap"
          >
            Ganesh Birajdar
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mt-4 opacity-90">
          Full stack developer
        </h2>

        <p className="mt-6 text-base sm:text-lg opacity-70 leading-relaxed">
          Building high-performance, scalable applications with a strong
          foundation in front-end, back-end, and system-level development. I
          specialize in JavaScript, TypeScript, React, Node.js, Express,
          MongoDB, and relational databases — crafting clean architecture and
          fast, reliable user experiences.
          <br />
          <br />
          Focused on{" "}
          <span className="text-white/90">
            modern UI engineering, API design, and database architecture
          </span>
          .
        </p>
      </div>

      {/* RIGHT CARD */}
      <div
        className="w-full max-w-[360px] sm:max-w-[400px] md:w-[420px]
                   bg-gradient-to-b from-[#0f121a] to-[#1a0f25]
                   border border-white/10 rounded-3xl backdrop-blur-2xl
                   shadow-[0_0_40px_-10px_rgba(120,0,255,0.4)]
                   p-8 sm:p-10
                   flex flex-col items-center md:items-start"
      >
        {/* Profile Image */}
        <TiltedCard
          imageSrc={ganeshImg}
          altText="Ganesh Birajdar"
          captionText="Ganesh Birajdar"
          containerHeight="260px"
          containerWidth="260px"
          imageHeight="260px"
          imageWidth="260px"
          rotateAmplitude={10}
          scaleOnHover={1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={false}
        />

        <h3 className="text-2xl sm:text-3xl font-extrabold mt-8">
          Full stack developer
        </h3>

        <p className="text-sm sm:text-lg text-white/70 mt-2 text-center md:text-left">
          MongoDB • Express • React • Node.js • API
        </p>

        {/* Social Links */}
        <div className="flex gap-5 mt-8">
          <Link
            to="https://github.com/ganeshbirajdar286"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/40 rounded-2xl 
               border border-white/10 backdrop-blur-md 
               hover:bg-white/10 transition"
          >
            <FaGithub size={26} />
          </Link>

          <Link
            to="https://www.linkedin.com/in/ganesh-fulchand-birajdar/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-black/40 rounded-2xl 
               border border-white/10 backdrop-blur-md 
               hover:bg-white/10 transition"
          >
            <FaLinkedinIn size={26} />
          </Link>
        </div>
      </div>
    </section>
  );
}
