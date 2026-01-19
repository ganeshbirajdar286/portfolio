import React, { useEffect, useState } from "react";
import Ballpit from '../components/Ballpit.jsx';
import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";


function About() {

   const [ballCount, setBallCount] = useState(100);

   
  useEffect(() => {
    const updateBallCount = () => {
      if (window.innerWidth < 640) {
        setBallCount(40);        // mobile
      } else if (window.innerWidth < 1024) {
        setBallCount(70);        // tablet
      } else {
        setBallCount(100);       // desktop
      }
    };

    updateBallCount();
    window.addEventListener("resize", updateBallCount);

    return () => window.removeEventListener("resize", updateBallCount);
  }, []); 

  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background Ballpit Effect */}
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-black"
        style={{ pointerEvents: "auto" }}
      >
        <div
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }}
>
 <Ballpit
  count={ballCount}
  gravity={0.05}
  friction={0.9975}
  wallBounce={0.95}
  followCursor={true}
/>

</div>


      </div>

      {/* Foreground Content */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">

        <h1 className="text-6xl font-bold mb-3  bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Ganesh Birajdar
        </h1>

        <p className="text-2xl opacity-80 mb-8 mt-2">
          Software Developer & Web Developer
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mb-10 pointer-events-auto">
          <button className="px-8 py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:bg-gray-200 transition">
            <Link to="/contact"> Contact Me</Link>
          </button>

          <button className="px-8 py-3 rounded-full border border-gray-400 text-white font-semibold hover:bg-white/10 transition">
            My Resume
          </button>
        </div>
      </div>

    </div>
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default About;
