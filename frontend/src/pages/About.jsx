import React from "react";
import Hero from "../components/Hero.jsx";
import ExperienceTimeline from "../components/ExperienceTimeline.jsx";
import HackathonExperience from "../components/HackathonExperience.jsx";
import InteractiveTerminal from "../components/InteractiveTerminal.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function About() {
  return (
    <>
      <Hero />
      <InteractiveTerminal />
      <HackathonExperience />
      <ExperienceTimeline />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default About;
