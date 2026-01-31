import React from "react";
import Orb from "../components/Orb";
import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import useIsMobile from "../components/useIsMobile.js";
import resume from "/Ganesh_resume.pdf";

function About() {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background Orb Effect */}
        <div className="absolute inset-0 -z-10 bg-black">
          <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
            {/* Desktop Orb */}
            {!isMobile && (
              <div className="w-full h-full relative">
                <Orb
                  hoverIntensity={2}
                  rotateOnHover
                  hue={0}
                  forceHoverState={false}
                  backgroundColor="#000000"
                />
              </div>
            )}

            {/* Mobile Background */}
            {isMobile && (
              <>
                <div className="absolute inset-0 -z-10 bg-black flex items-center justify-center overflow-hidden">
                  {/* Outer glow */}
                  <div
                    className="
    absolute
    w-[320px] h-[320px]
    sm:w-[380px] sm:h-[380px]
    rounded-full
    bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500
    blur-3xl
    opacity-40
  "
                  />

                  {/* Gradient ring */}
                  <div
                    className="
    relative
    w-[400px] h-[400px]
    sm:w-[320px] sm:h-[320px]
    rounded-full
    bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500
    flex items-center justify-center
  "
                  >
                    {/* Inner cutout */}
                    <div
                      className="
      w-[380px] h-[380px]
      sm:w-[280px] sm:h-[280px]
      rounded-full
      bg-black
    "
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Foreground Content (UNCHANGED) */}
        {/* Foreground Content */}
        <div
          className="
  pointer-events-none
  relative md:absolute md:inset-0
  z-10
  flex flex-col items-center justify-center
  text-center text-white
  px-4 sm:px-6 md:px-8
  min-h-screen
"
        >
          <h1
            className="
    font-bold mb-3
    text-4xl sm:text-5xl md:text-6xl
    bg-gradient-to-r from-blue-400 to-purple-400
    text-transparent bg-clip-text
  "
          >
            Ganesh Birajdar
          </h1>

          <p
            className="
    opacity-80 mt-2 mb-8
    text-lg sm:text-xl md:text-2xl
    max-w-xl
  "
          >
            Software Developer & Web Developer
          </p>

          {/* Buttons */}
          <div
            className="
    flex flex-wrap justify-center gap-4
    mb-10 pointer-events-auto
  "
          >
            <button
              className="
      px-6 py-3 sm:px-8
      rounded-full bg-white text-black font-semibold
      shadow-lg hover:bg-gray-200 transition
    "
            >
              <Link to="/contact">Contact Me</Link>
            </button>

            <a href={resume} download="Ganesh_Birajdar_Resume.pdf">
              <button
                className="
      px-6 py-3 sm:px-8
      rounded-full border border-gray-400
      text-white font-semibold hover:bg-white/10 transition
    "
              >
                My Resume
              </button>
            </a>
          </div>
        </div>
      </div>

      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default About;
