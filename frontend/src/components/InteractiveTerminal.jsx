import React, { useState, useRef, useEffect } from "react";
import { 
  FiTerminal, FiCornerDownLeft, FiTrash2, FiMaximize2, 
  FiMinimize2, FiUser, FiCode, FiBriefcase, 
  FiFolder, FiSend, FiAward, FiCpu, FiCheckCircle
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaMagic } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

export default function InteractiveTerminal() {
  const { isDark } = useTheme();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const [historyCommands, setHistoryCommands] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setHistory([
      {
        type: "system",
        content: (
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 font-bold text-sm sm:text-base text-blue-600 dark:text-purple-400">
              <FaMagic className="animate-pulse" />
              <span>Ganesh Birajdar's Interactive Dev Console [v2.4.0]</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-gray-300">
              Type <span className="font-mono font-bold text-blue-600 dark:text-pink-400">'type'</span> or <span className="font-mono font-semibold text-blue-700 dark:text-yellow-400">'help'</span> to inspect Ganesh's full profile overview (Hackathons, Skills, Projects, DSA & Contact).
            </p>
            <p className="text-xs text-slate-500 dark:text-gray-400">
              💡 <span className="text-blue-600 dark:text-sky-300 font-medium">Pro tip:</span> Click <span className="font-mono font-semibold text-blue-600 dark:text-pink-400">'type'</span> below to view all features at once!
            </p>
          </div>
        ),
      },
    ]);
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const quickCommands = [
    { label: "type (all info)", cmd: "type", icon: <FaMagic className="text-blue-600 dark:text-pink-400" /> },
    { label: "help", cmd: "help", icon: <FiTerminal className="text-blue-600 dark:text-yellow-400" /> },
    { label: "about", cmd: "about", icon: <FiUser className="text-blue-600 dark:text-sky-400" /> },
    { label: "skills", cmd: "skills", icon: <FiCode className="text-blue-600 dark:text-emerald-400" /> },
    { label: "projects", cmd: "projects", icon: <FiFolder className="text-blue-600 dark:text-purple-400" /> },
    { label: "hackathons", cmd: "hackathons", icon: <FiAward className="text-blue-600 dark:text-amber-400" /> },
    { label: "dsa", cmd: "dsa", icon: <FiCpu className="text-blue-600 dark:text-pink-400" /> },
    { label: "contact", cmd: "contact", icon: <FiSend className="text-blue-600 dark:text-blue-400" /> },
    { label: "sudo hire-me", cmd: "sudo hire-me", icon: <FiCheckCircle className="text-blue-600 dark:text-red-400" /> },
  ];

  const handleCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const args = lower.split(" ");
    const mainCmd = args[0];

    const newHistory = [...history, { type: "user", cmd: trimmed }];
    setHistoryCommands((prev) => [...prev, trimmed]);
    setCommandIndex(-1);

    let responseOutput = null;

    switch (mainCmd) {
      case "type":
      case "all":
      case "overview":
      case "summary":
      case "profile":
      case "info":
      case "features":
        responseOutput = (
          <div className={`my-3 p-4 sm:p-5 rounded-2xl border space-y-4 text-xs sm:text-sm ${
            isDark
              ? "bg-gradient-to-br from-[#0f1424] via-[#16102b] to-[#0a0d17] border-purple-500/40 text-white"
              : "bg-blue-50/70 border-2 border-blue-200 text-slate-800 shadow-sm"
          }`}>
            {/* Header */}
            <div className={`flex items-center justify-between border-b pb-3 ${isDark ? "border-white/10" : "border-blue-200"}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center font-extrabold text-white text-base shadow-lg">
                  GB
                </div>
                <div>
                  <h4 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Ganesh Birajdar — Complete Portfolio Overview</h4>
                  <p className="text-xs text-blue-600 dark:text-purple-300 font-semibold">Software Developer & Web Developer | SFIT IT Engineering</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-emerald-500/20 text-blue-800 dark:text-emerald-300 text-xs font-mono border border-blue-200 dark:border-emerald-500/30 hidden sm:inline-block font-semibold">
                ● Live Profile
              </span>
            </div>

            {/* Feature 1: About */}
            <div className={`space-y-1.5 p-3 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-2 border-blue-200 shadow-sm"}`}>
              <p className="text-blue-700 dark:text-sky-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FiUser /> 1. About Me & Education
              </p>
              <p className={`text-xs leading-relaxed ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                Pursuing Bachelor of Engineering (B.E.) in IT at St. Francis Institute of Technology (SFIT, 2024–2028). Specialized in JavaScript, TypeScript, React, Node.js, Express, MongoDB, and scalable backend architecture.
              </p>
            </div>

            {/* Feature 2: Hackathons & Leadership */}
            <div className={`space-y-1.5 p-3 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-2 border-blue-200 shadow-sm"}`}>
              <p className="text-blue-700 dark:text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FiAward /> 2. Hackathon Management & Leadership
              </p>
              <p className={`text-xs leading-relaxed ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                <strong className="text-blue-700 dark:text-amber-400">Hackathon Management Lead @ CSI SFIT:</strong> Managed end-to-end hackathon operations, team onboarding, technical query resolution, judging workflows, and live 24-hour competition platform logistics.
                <br />
                <strong className="text-blue-600 dark:text-sky-400">Joint Tech Head @ IEEE SFIT:</strong> Coordinated technical events, workshops, hackathons, and speaker sessions.
              </p>
              <div className="pt-1">
                <Link to="/hackathon" className="text-xs text-blue-600 dark:text-amber-300 underline font-semibold hover:text-blue-800">
                  Explore Hackathon Showcase →
                </Link>
              </div>
            </div>

            {/* Feature 3: Technical Skills */}
            <div className={`space-y-1.5 p-3 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-2 border-blue-200 shadow-sm"}`}>
              <p className="text-blue-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FiCode /> 3. Technical Stack & Skills
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "C++", "DSA", "Tailwind CSS", "REST APIs", "Git & GitHub"].map((s, idx) => (
                  <span key={idx} className={`px-2 py-0.5 rounded text-xs font-mono border ${
                    isDark ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/20" : "bg-blue-50 text-blue-700 border border-blue-200 font-semibold"
                  }`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature 4: Featured Projects */}
            <div className={`space-y-1.5 p-3 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-2 border-blue-200 shadow-sm"}`}>
              <p className="text-blue-700 dark:text-purple-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FiFolder /> 4. Featured Projects
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                <div className={`p-2 rounded border space-y-1 ${isDark ? "bg-black/40 border-white/10" : "bg-blue-50/50 border border-blue-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Swasthya Healthcare</span>
                    <span className="text-[10px] text-blue-600 dark:text-sky-300 font-semibold">AI & WebSockets</span>
                  </div>
                  <p className={`text-[11px] ${isDark ? "text-gray-400" : "text-slate-600"}`}>Healthcare telemetry platform with patient & doctor video consultation.</p>
                  <div className="pt-0.5 flex gap-2 text-[10px] text-blue-600">
                    <a href="https://sih-nu-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-800">Live Demo ↗</a>
                    <a href="https://github.com/ganeshbirajdar286/sih" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-800">GitHub ↗</a>
                  </div>
                </div>
                <div className={`p-2 rounded border space-y-1 ${isDark ? "bg-black/40 border-white/10" : "bg-blue-50/50 border border-blue-200"}`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>WhatsApp Web</span>
                    <span className="text-[10px] text-blue-600 dark:text-purple-300 font-semibold">Real-time Messaging</span>
                  </div>
                  <p className={`text-[11px] ${isDark ? "text-gray-400" : "text-slate-600"}`}>Web messaging application with real-time WebSockets chat & status feeds.</p>
                  <div className="pt-0.5 flex gap-2 text-[10px] text-blue-600">
                    <a href="https://whatsapp-three-amber.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-800">Live Demo ↗</a>
                    <a href="https://github.com/ganeshbirajdar286/whatsapp" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-blue-800">GitHub ↗</a>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <Link to="/projects" className="text-xs text-blue-600 dark:text-purple-300 underline font-semibold hover:text-blue-800">
                  View All Projects →
                </Link>
              </div>
            </div>

            {/* Feature 5: DSA */}
            <div className={`space-y-1.5 p-3 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-2 border-blue-200 shadow-sm"}`}>
              <p className="text-blue-700 dark:text-pink-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FiCpu /> 5. Data Structures & Algorithms
              </p>
              <p className={`text-xs ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                Strong focus on Data Structures, Algorithms, Object-Oriented Programming, and System Architecture.
              </p>
            </div>

            {/* Feature 6: Contact */}
            <div className={`flex flex-wrap items-center justify-between gap-2 pt-2 border-t text-xs ${isDark ? "border-white/10" : "border-blue-200"}`}>
              <span className={isDark ? "text-gray-300" : "text-slate-700 font-medium"}>📧 ganeshbirajdar286@gmail.com</span>
              <div className="flex gap-3">
                <a href="https://github.com/ganeshbirajdar286" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">GitHub</a>
                <a href="https://www.linkedin.com/in/ganesh-fulchand-birajdar/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">LinkedIn</a>
                <Link to="/contact" className="text-blue-700 underline font-extrabold">Let's Talk →</Link>
              </div>
            </div>
          </div>
        );
        break;

      case "help":
        responseOutput = (
          <div className="space-y-3 my-2 text-xs sm:text-sm">
            <p className={`font-semibold ${isDark ? "text-purple-300" : "text-blue-700"}`}>Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
              {[
                { name: "type", desc: "Complete feature overview" },
                { name: "about", desc: "Learn about Ganesh" },
                { name: "skills", desc: "View tech stack" },
                { name: "projects", desc: "Explore portfolio builds" },
                { name: "hackathons", desc: "Leadership & Operations" },
                { name: "dsa", desc: "Problem solving stats" },
                { name: "contact", desc: "Get in touch / links" },
                { name: "clear", desc: "Clear terminal logs" },
              ].map((cmdItem, i) => (
                <div
                  key={i}
                  onClick={() => runQuickCmd(cmdItem.name)}
                  className={`p-2 rounded-lg border flex justify-between items-center cursor-pointer transition ${
                    isDark ? "bg-white/5 border-white/10 hover:bg-white/10" : "bg-white border-2 border-blue-200 hover:bg-blue-50"
                  }`}
                >
                  <span className="font-bold text-blue-600 dark:text-sky-400">{cmdItem.name}</span>
                  <span className={isDark ? "text-gray-400 text-xs" : "text-slate-500 text-xs"}>{cmdItem.desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "about":
        responseOutput = (
          <div className={`my-3 p-4 rounded-xl border space-y-3 ${
            isDark ? "bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-black border-white/15" : "bg-white border-2 border-blue-200 text-slate-800 shadow-sm"
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center font-extrabold text-white text-lg shadow-lg">
                GB
              </div>
              <div>
                <h4 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Ganesh Birajdar</h4>
                <p className="text-xs text-blue-600 font-semibold">Software Developer & Web Developer</p>
              </div>
            </div>
            <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-slate-700"}`}>
              Pursuing B.E. in Information Technology Engineering at St. Francis Institute of Technology (SFIT), Mumbai (2024 - 2028). Passionate about full-stack engineering, scalable backend systems, modern web UX, and high-stakes hackathon management.
            </p>
          </div>
        );
        break;

      case "skills":
        responseOutput = (
          <div className="my-3 space-y-3 text-xs sm:text-sm">
            <p className={`font-semibold ${isDark ? "text-emerald-300" : "text-blue-700"}`}>Technical Expertise Matrix:</p>
            <div className="space-y-2">
              {[
                { name: "Frontend (React, JavaScript, Tailwind, HTML/CSS)", pct: "92%" },
                { name: "Backend & API (Node.js, Express, REST APIs, Auth)", pct: "88%" },
                { name: "Databases & Arch (MongoDB, DBMS, SQL)", pct: "85%" },
                { name: "Core CS & DSA (Data Structures, Algorithms, C++, Java)", pct: "86%" },
              ].map((sk, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className={isDark ? "text-gray-300" : "text-slate-700 font-medium"}>{sk.name}</span>
                    <span className="text-blue-600 font-mono font-bold">{sk.pct}</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? "bg-gray-800" : "bg-blue-100"}`}>
                    <div className="h-full bg-gradient-to-r from-blue-600 to-sky-500 rounded-full" style={{ width: sk.pct }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "projects":
        responseOutput = (
          <div className="my-3 space-y-3 text-xs sm:text-sm">
            <p className={`font-semibold ${isDark ? "text-purple-300" : "text-blue-700"}`}>Featured Projects:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className={`p-3 rounded-xl border space-y-1.5 ${isDark ? "bg-white/5 border-white/10" : "bg-white border-2 border-blue-200"}`}>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700">Full Stack / HealthTech</span>
                <h5 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>Swasthya Healthcare</h5>
                <p className={`text-xs ${isDark ? "text-gray-400" : "text-slate-600"}`}>AI-powered health tracking web app featuring WebSocket feeds, vital charts, and direct video consultation.</p>
                <div className="pt-1 flex gap-3 text-xs text-blue-600">
                  <a href="https://sih-nu-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Live Demo ↗</a>
                  <a href="https://github.com/ganeshbirajdar286/sih" target="_blank" rel="noopener noreferrer" className="underline font-semibold">GitHub ↗</a>
                </div>
              </div>
              <div className={`p-3 rounded-xl border space-y-1.5 ${isDark ? "bg-white/5 border-white/10" : "bg-white border-2 border-blue-200"}`}>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700">Real-time Systems</span>
                <h5 className={`font-bold text-sm ${isDark ? "text-white" : "text-slate-900"}`}>WhatsApp Web</h5>
                <p className={`text-xs ${isDark ? "text-gray-400" : "text-slate-600"}`}>Full-featured web chat application supporting real-time WebSockets messaging, message statuses, and rich media.</p>
                <div className="pt-1 flex gap-3 text-xs text-blue-600">
                  <a href="https://whatsapp-three-amber.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Live Demo ↗</a>
                  <a href="https://github.com/ganeshbirajdar286/whatsapp" target="_blank" rel="noopener noreferrer" className="underline font-semibold">GitHub ↗</a>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      case "hackathons":
      case "experience":
        responseOutput = (
          <div className={`my-3 p-4 rounded-xl border space-y-2 ${isDark ? "bg-gradient-to-r from-amber-950/40 via-purple-950/40 to-black border-amber-500/30" : "bg-white border-2 border-blue-200"}`}>
            <div className="flex items-center gap-2 text-blue-700 font-bold">
              <FiAward />
              <span>Hackathon Management Lead & IEEE Joint Tech Head</span>
            </div>
            <p className={`text-xs sm:text-sm ${isDark ? "text-gray-300" : "text-slate-700"}`}>
              Spearheaded end-to-end hackathon operations at CSI SFIT. Managed team onboarding, venue coordination, judging evaluation rubrics, live platform troubleshooting, and 24-hour sprint support.
            </p>
            <div className="pt-2">
              <Link to="/hackathon" className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600 text-white shadow-sm">
                Explore Full Hackathon Showcase →
              </Link>
            </div>
          </div>
        );
        break;

      case "contact":
        responseOutput = (
          <div className={`my-3 p-4 rounded-xl border space-y-3 text-xs sm:text-sm ${isDark ? "bg-blue-950/40 border-blue-500/30" : "bg-white border-2 border-blue-200"}`}>
            <p className="text-blue-700 font-bold">Contact & Connections:</p>
            <div className="space-y-1.5">
              <p className="flex items-center gap-2 text-slate-700 dark:text-gray-300">
                <FaEnvelope className="text-blue-600" />
                <a href="mailto:ganeshbirajdar286@gmail.com" className="hover:underline font-semibold">ganeshbirajdar286@gmail.com</a>
              </p>
              <p className="flex items-center gap-2 text-slate-700 dark:text-gray-300">
                <FaGithub className="text-blue-600" />
                <a href="https://github.com/ganeshbirajdar286" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">github.com/ganeshbirajdar286</a>
              </p>
              <p className="flex items-center gap-2 text-slate-700 dark:text-gray-300">
                <FaLinkedin className="text-blue-600" />
                <a href="https://www.linkedin.com/in/ganesh-fulchand-birajdar/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">linkedin.com/in/ganesh-fulchand-birajdar</a>
              </p>
            </div>
          </div>
        );
        break;

      case "sudo":
        if (args[1] === "hire-me" || args[1] === "hire") {
          responseOutput = (
            <div className="my-4 p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-xl text-center space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                ⚡ Sudo Access Granted!
              </div>
              <h4 className="text-xl font-extrabold text-white">Let's Build Something Great Together! 🚀</h4>
              <p className="text-xs sm:text-sm text-blue-50 max-w-md mx-auto">
                Ganesh is open for Full-Stack, Web Development, and Software Engineering opportunities!
              </p>
              <div className="pt-2">
                <Link to="/contact" className="inline-block px-6 py-2.5 rounded-xl bg-white text-blue-700 font-extrabold text-sm shadow-lg hover:bg-blue-50 transition transform hover:scale-105">
                  Get In Touch Immediately →
                </Link>
              </div>
            </div>
          );
        } else {
          responseOutput = (
            <p className="my-2 text-xs text-red-500 font-mono">
              sudo: command not found: {args[1] || ""}. Try 'sudo hire-me'
            </p>
          );
        }
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        responseOutput = (
          <p className="my-2 text-xs text-red-500 font-mono">
            Command not recognized: <span className="font-bold">{trimmed}</span>. Type <span className="text-blue-600 font-bold">'help'</span> for available commands.
          </p>
        );
        break;
    }

    setHistory([...newHistory, { type: "response", content: responseOutput }]);
    setInput("");
  };

  const runQuickCmd = (cmdText) => {
    setIsTyping(true);
    let i = 0;
    setInput("");
    const timer = setInterval(() => {
      if (i < cmdText.length) {
        setInput((prev) => prev + cmdText.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        handleCommand(cmdText);
      }
    }, 40);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyCommands.length === 0) return;
      const nextIdx = commandIndex + 1;
      if (nextIdx < historyCommands.length) {
        setCommandIndex(nextIdx);
        setInput(historyCommands[historyCommands.length - 1 - nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandIndex > 0) {
        const nextIdx = commandIndex - 1;
        setCommandIndex(nextIdx);
        setInput(historyCommands[historyCommands.length - 1 - nextIdx]);
      } else if (commandIndex === 0) {
        setCommandIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <section className={`relative w-full py-16 sm:py-24 px-4 sm:px-6 md:px-12 overflow-hidden border-b transition-colors duration-300 ${
      isDark ? "bg-black text-white border-white/10" : "bg-white text-slate-900 border-slate-200"
    }`}>
      {/* Background ambient lighting */}
      <div className={`absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? "bg-purple-600/10" : "bg-blue-400/15"
      }`} />
      <div className={`absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? "bg-blue-600/10" : "bg-sky-400/15"
      }`} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-4 ${
            isDark ? "bg-purple-500/10 border-purple-500/30 text-purple-400" : "bg-white border-2 border-blue-200 text-blue-700 shadow-sm"
          }`}>
            <FiTerminal />
            <span>Interactive Dev Sandbox</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Developer <span className={`bg-gradient-to-r ${
              isDark ? "from-sky-400 via-purple-400 to-pink-500" : "from-blue-700 via-blue-600 to-sky-500"
            } text-transparent bg-clip-text`}>Console & Shell</span>
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? "text-white/70" : "text-slate-600"}`}>
            Type commands or tap prompt chips to dynamically inspect Ganesh's skills, hackathons, LeetCode progress, or trigger options.
          </p>
        </div>

        {/* Quick Command Action Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 max-w-4xl mx-auto">
          {quickCommands.map((item, idx) => (
            <button
              key={idx}
              onClick={() => runQuickCmd(item.cmd)}
              disabled={isTyping}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer ${
                isDark
                  ? "bg-white/5 hover:bg-purple-600/20 border-white/10 text-white"
                  : "bg-white hover:bg-blue-50 border-2 border-blue-200 text-slate-800 shadow-sm"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className={`relative w-full rounded-2xl border backdrop-blur-2xl transition-all duration-500 overflow-hidden ${
          isDark
            ? "bg-[#0b0f19]/95 border-white/15 text-gray-200 shadow-[0_0_50px_-10px_rgba(120,0,255,0.3)]"
            : "bg-white border-2 border-blue-200 text-slate-800 shadow-xl shadow-blue-500/10"
        } ${isExpanded ? "fixed inset-4 z-50 max-w-none h-[calc(100vh-2rem)]" : "h-[480px] sm:h-[540px]"}`}>
          {/* Terminal Titlebar */}
          <div className={`flex items-center justify-between px-4 py-3 border-b ${
            isDark ? "bg-black/60 border-white/10" : "bg-blue-50/80 border-2 border-blue-200"
          }`}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setHistory([])} title="Clear Terminal"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" title="Minimize"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} title="Toggle Fullscreen"></div>
              <span className={`ml-2 text-xs font-mono hidden sm:inline-block ${
                isDark ? "text-white/60" : "text-blue-900/60"
              }`}>
                ganesh@sfit-server:~/$
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className={`p-1.5 rounded-lg text-xs transition flex items-center gap-1 cursor-pointer font-semibold ${
                  isDark ? "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white" : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
                }`}
                title="Clear Output"
              >
                <FiTrash2 size={13} />
                <span className="hidden sm:inline">Clear</span>
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`p-1.5 rounded-lg text-xs transition cursor-pointer font-semibold ${
                  isDark ? "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white" : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-50"
                }`}
                title={isExpanded ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isExpanded ? <FiMinimize2 size={13} /> : <FiMaximize2 size={13} />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            className="p-4 sm:p-6 overflow-y-auto font-mono text-xs sm:text-sm space-y-3"
            style={{ height: "calc(100% - 50px)" }}
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, index) => (
              <div key={index} className="space-y-1">
                {item.type === "user" && (
                  <div className="flex items-center gap-2 text-blue-600 dark:text-sky-400">
                    <span className="font-bold text-blue-700 dark:text-purple-400">ganesh-shell:~$</span>
                    <span className="font-medium text-slate-900 dark:text-white">{item.cmd}</span>
                  </div>
                )}
                {item.type === "response" && <div>{item.content}</div>}
                {item.type === "system" && <div>{item.content}</div>}
              </div>
            ))}

            {/* Input Prompt Row */}
            <div className="flex items-center gap-2 pt-2">
              <span className="font-bold text-blue-600 dark:text-purple-400 whitespace-nowrap">ganesh-shell:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isTyping ? "Running command..." : "Type 'help'..."}
                className={`w-full bg-transparent outline-none font-mono text-xs sm:text-sm ${
                  isDark ? "text-white placeholder:text-white/30" : "text-slate-900 placeholder:text-slate-400"
                }`}
              />
              <button
                onClick={() => handleCommand(input)}
                className="p-1 text-blue-600 dark:text-purple-400 hover:text-blue-800 transition cursor-pointer"
              >
                <FiCornerDownLeft size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
