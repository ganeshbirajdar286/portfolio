import React from "react";
import LogoLoop from "../components/LogoLoop.jsx";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiC,
  SiPython,
  SiGit,
  SiPostman,
  SiExpress,
  SiRedux,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Skills() {
  const { isDark } = useTheme();

  const techLogos = [
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },

    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },

    { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://postgresql.org" },
    { node: <SiMysql />, title: "MySQL", href: "https://mysql.com" },

    { node: <SiC />, title: "C Language", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
    { node: <SiPython />, title: "Python", href: "https://python.org" },

    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <DiJava />, title: "Java", href: "https://www.java.com" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  ];

  return (
    <div className={`min-h-screen w-full px-6 md:px-16 py-24 transition-colors duration-300 ${
      isDark ? "bg-black text-white" : "bg-white text-slate-900"
    }`}>
      
      {/* === HEADING SECTION === */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className={`uppercase tracking-[0.25em] text-xs font-semibold mb-3 ${
          isDark ? "text-white/40" : "text-blue-600"
        }`}>
          Tech Stack
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Skills I build with
        </h1>

        <p className={`text-lg md:text-xl leading-relaxed ${
          isDark ? "text-white/60" : "text-slate-600"
        }`}>
          A mix of frontend engineering, animation, and backend systems.
          <br />
          These are the technologies I use to build modern, production-ready
          applications.
        </p>
      </div>

      {/* === LOGO SCROLLER SECTION === */}
      <div className="relative h-[150px] md:h-[180px] overflow-hidden mt-10">
        <LogoLoop
          logos={techLogos}
          speed={40}
          direction="left"
          logoHeight={70}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor={isDark ? "#000000" : "#ffffff"}
          ariaLabel="Technologies I use"
        />
      </div>
    </div>
  );
}
