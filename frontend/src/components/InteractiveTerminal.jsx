import React, { useState, useRef, useEffect } from "react";
import { 
  FiTerminal, FiCornerDownLeft, FiTrash2, FiMaximize2, 
  FiMinimize2, FiUser, FiCode, FiBriefcase, 
  FiFolder, FiSend, FiAward, FiCpu, FiCheckCircle
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaMagic } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [commandIndex, setCommandIndex] = useState(-1);
  const [historyCommands, setHistoryCommands] = useState([]);
  const [theme, setTheme] = useState("dark"); // dark, matrix, cyberpunk, midnight
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Initial welcome message
  useEffect(() => {
    setHistory([
      {
        type: "system",
        content: (
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm sm:text-base">
              <FaMagic className="animate-pulse" />
              <span>Ganesh Birajdar's Interactive Dev Console [v2.4.0]</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Type <span className="text-pink-400 font-mono font-bold">'type'</span> or <span className="text-yellow-400 font-mono font-semibold">'help'</span> to inspect Ganesh's full profile overview (Hackathons, Skills, Projects, DSA & Contact).
            </p>
            <p className="text-xs text-gray-400">
              💡 <span className="text-sky-300">Pro tip:</span> Click <span className="text-pink-400 font-mono font-semibold">'type'</span> below to view all features at once, or try <span className="text-green-400 font-mono">'theme matrix'</span>!
            </p>
          </div>
        ),
      },
    ]);
  }, []);

  // Auto-scroll terminal body internally to bottom without scrolling browser page
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const quickCommands = [
    { label: "type (all info)", cmd: "type", icon: <FaMagic className="text-pink-400" /> },
    { label: "help", cmd: "help", icon: <FiTerminal className="text-yellow-400" /> },
    { label: "about", cmd: "about", icon: <FiUser className="text-sky-400" /> },
    { label: "skills", cmd: "skills", icon: <FiCode className="text-emerald-400" /> },
    { label: "projects", cmd: "projects", icon: <FiFolder className="text-purple-400" /> },
    { label: "hackathons", cmd: "hackathons", icon: <FiAward className="text-amber-400" /> },
    { label: "dsa", cmd: "dsa", icon: <FiCpu className="text-pink-400" /> },
    { label: "contact", cmd: "contact", icon: <FiSend className="text-blue-400" /> },
    { label: "theme matrix", cmd: "theme matrix", icon: <FaMagic className="text-green-400" /> },
    { label: "sudo hire-me", cmd: "sudo hire-me", icon: <FiCheckCircle className="text-red-400" /> },
  ];

  const handleCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const args = lower.split(" ");
    const mainCmd = args[0];

    // Add command to output history
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
          <div className="my-3 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0f1424] via-[#16102b] to-[#0a0d17] border border-purple-500/40 space-y-4 text-xs sm:text-sm">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-sky-400 via-purple-500 to-pink-500 flex items-center justify-center font-extrabold text-white text-base shadow-lg">
                  GB
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Ganesh Birajdar — Complete Portfolio Overview</h4>
                  <p className="text-xs text-purple-300 font-semibold">Software Developer & Web Developer | SFIT IT Engineering</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono border border-emerald-500/30 hidden sm:inline-block">
                ● Live Profile
              </span>
            </div>

            {/* Feature 1: About */}
            <div className="space-y-1.5 bg-white/5 p-3 rounded-xl border border-white/10">
              <p className="text-sky-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FiUser /> 1. About Me & Education
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Pursuing Bachelor of Engineering (B.E.) in IT at St. Francis Institute of Technology (SFIT, 2024–2028). Specialized in JavaScript, TypeScript, React, Node.js, Express, MongoDB, and scalable backend architecture.
              </p>
            </div>

            {/* Feature 2: Hackathons & Leadership */}
            <div className="space-y-1.5 bg-white/5 p-3 rounded-xl border border-white/10">
              <p className="text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FiAward /> 2. Hackathon Management & Leadership
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                <strong className="text-amber-400">Hackathon Management Lead @ CSI SFIT:</strong> Managed end-to-end hackathon operations, team onboarding, technical query resolution, judging workflows, and live 24-hour competition platform logistics.
                <br />
                <strong className="text-sky-400">Joint Tech Head @ IEEE SFIT:</strong> Coordinated technical events, workshops, hackathons, and speaker sessions.
              </p>
              <div className="pt-1">
                <Link to="/hackathon" className="text-xs text-amber-300 underline font-semibold hover:text-white">
                  Explore Hackathon Showcase →
                </Link>
              </div>
            </div>

            {/* Feature 3: Technical Skills */}
            <div className="space-y-1.5 bg-white/5 p-3 rounded-xl border border-white/10">
              <p className="text-emerald-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FiCode /> 3. Technical Stack & Skills
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript (ES6+)", "C++", "DSA", "Tailwind CSS", "REST APIs", "Git & GitHub"].map((s, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Feature 4: Featured Projects */}
            <div className="space-y-1.5 bg-white/5 p-3 rounded-xl border border-white/10">
              <p className="text-purple-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FiFolder /> 4. Featured Projects
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                <div className="p-2 rounded bg-black/40 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Swasthya Healthcare</span>
                    <span className="text-[10px] text-sky-300">AI & WebSockets</span>
                  </div>
                  <p className="text-gray-400 text-[11px]">Healthcare telemetry platform with patient & doctor video consultation.</p>
                  <div className="pt-0.5 flex gap-2 text-[10px] text-sky-400">
                    <a href="https://sih-nu-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Live Demo ↗</a>
                    <a href="https://github.com/ganeshbirajdar286/sih" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">GitHub ↗</a>
                  </div>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/10 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">WhatsApp Web</span>
                    <span className="text-[10px] text-purple-300">Real-time Messaging</span>
                  </div>
                  <p className="text-gray-400 text-[11px]">Web messaging application with real-time WebSockets chat & status feeds.</p>
                  <div className="pt-0.5 flex gap-2 text-[10px] text-sky-400">
                    <a href="https://whatsapp-three-amber.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Live Demo ↗</a>
                    <a href="https://github.com/ganeshbirajdar286/whatsapp" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">GitHub ↗</a>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <Link to="/projects" className="text-xs text-purple-300 underline font-semibold hover:text-white">
                  View All Projects →
                </Link>
              </div>
            </div>

            {/* Feature 5: DSA & Problem Solving */}
            <div className="space-y-1.5 bg-white/5 p-3 rounded-xl border border-white/10">
              <p className="text-pink-300 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <FiCpu /> 5. Data Structures & Algorithms
              </p>
              <p className="text-xs text-gray-300">
                Strong focus on Data Structures, Algorithms, Object-Oriented Programming, and System Architecture.
              </p>
            </div>

            {/* Feature 6: Contact Links */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs">
              <span className="text-gray-300">📧 ganeshbirajdar286@gmail.com</span>
              <div className="flex gap-3">
                <a href="https://github.com/ganeshbirajdar286" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-white underline">GitHub</a>
                <a href="https://www.linkedin.com/in/ganesh-fulchand-birajdar/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white underline">LinkedIn</a>
                <Link to="/contact" className="text-emerald-400 hover:text-white underline font-semibold">Let's Talk →</Link>
              </div>
            </div>
          </div>
        );
        break;

      case "help":
        responseOutput = (
          <div className="space-y-3 my-2 text-xs sm:text-sm">
            <p className="text-purple-300 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
              <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/10" onClick={() => runQuickCmd("type")}>
                <span className="text-pink-400 font-bold">type</span>
                <span className="text-gray-400 text-xs">Complete feature overview</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/10" onClick={() => runQuickCmd("about")}>
                <span className="text-sky-400 font-bold">about</span>
                <span className="text-gray-400 text-xs">Learn about Ganesh</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/10" onClick={() => runQuickCmd("skills")}>
                <span className="text-emerald-400 font-bold">skills</span>
                <span className="text-gray-400 text-xs">View tech stack</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/10" onClick={() => runQuickCmd("projects")}>
                <span className="text-purple-400 font-bold">projects</span>
                <span className="text-gray-400 text-xs">Explore portfolio builds</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/10" onClick={() => runQuickCmd("hackathons")}>
                <span className="text-amber-400 font-bold">hackathons</span>
                <span className="text-gray-400 text-xs">Leadership & Operations</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/10" onClick={() => runQuickCmd("dsa")}>
                <span className="text-pink-400 font-bold">dsa</span>
                <span className="text-gray-400 text-xs">Problem solving stats</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/10" onClick={() => runQuickCmd("contact")}>
                <span className="text-blue-400 font-bold">contact</span>
                <span className="text-gray-400 text-xs">Get in touch / links</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/10" onClick={() => runQuickCmd("theme matrix")}>
                <span className="text-green-400 font-bold">theme &lt;name&gt;</span>
                <span className="text-gray-400 text-xs">dark|matrix|cyberpunk|midnight</span>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex justify-between items-center cursor-pointer hover:bg-white/10" onClick={() => runQuickCmd("clear")}>
                <span className="text-red-400 font-bold">clear</span>
                <span className="text-gray-400 text-xs">Clear terminal logs</span>
              </div>
            </div>
          </div>
        );
        break;

      case "about":
        responseOutput = (
          <div className="my-3 p-4 rounded-xl bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-black border border-white/15 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-sky-400 to-purple-600 flex items-center justify-center font-extrabold text-white text-lg shadow-lg">
                GB
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Ganesh Birajdar</h4>
                <p className="text-xs text-sky-400 font-semibold">Software Developer & Web Developer</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Pursuing B.E. in Information Technology Engineering at St. Francis Institute of Technology (SFIT), Mumbai (2024 - 2028). Passionate about full-stack engineering, scalable backend systems, modern web UX, and high-stakes hackathon management.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">📍 Mumbai, India</span>
              <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">🎓 SFIT IT Engineering</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">🏆 CSI & IEEE Tech Lead</span>
            </div>
          </div>
        );
        break;

      case "skills":
        responseOutput = (
          <div className="my-3 space-y-3 text-xs sm:text-sm">
            <p className="text-emerald-300 font-semibold">Technical Expertise Matrix:</p>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">Frontend (React, JavaScript, Tailwind, HTML/CSS)</span>
                  <span className="text-emerald-400 font-mono">92%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[92%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">Backend & API (Node.js, Express, REST APIs, Auth)</span>
                  <span className="text-sky-400 font-mono">88%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-sky-500 to-blue-400 w-[88%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">Databases & Arch (MongoDB, DBMS, SQL)</span>
                  <span className="text-purple-400 font-mono">85%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[85%] rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-300">Core CS & DSA (Data Structures, Algorithms, C++, Java)</span>
                  <span className="text-amber-400 font-mono">86%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 w-[86%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      case "projects":
        responseOutput = (
          <div className="my-3 space-y-3 text-xs sm:text-sm">
            <p className="text-purple-300 font-semibold">Featured Projects:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">Full Stack / HealthTech</span>
                <h5 className="font-bold text-white text-sm">Swasthya Healthcare</h5>
                <p className="text-xs text-gray-400">AI-powered health tracking web app featuring WebSocket feeds, vital charts, and direct video consultation.</p>
                <div className="pt-1 flex gap-3 text-xs text-sky-400">
                  <a href="https://sih-nu-ten.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Live Demo ↗</a>
                  <a href="https://github.com/ganeshbirajdar286/sih" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">GitHub ↗</a>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Real-time Systems</span>
                <h5 className="font-bold text-white text-sm">WhatsApp Web</h5>
                <p className="text-xs text-gray-400">Full-featured web chat application supporting real-time WebSockets messaging, message statuses, and rich media.</p>
                <div className="pt-1 flex gap-3 text-xs text-sky-400">
                  <a href="https://whatsapp-three-amber.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Live Demo ↗</a>
                  <a href="https://github.com/ganeshbirajdar286/whatsapp" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">GitHub ↗</a>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      case "hackathons":
      case "experience":
        responseOutput = (
          <div className="my-3 p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-purple-950/40 to-black border border-amber-500/30 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <FiAward />
              <span>Hackathon Management Lead & IEEE Joint Tech Head</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-300">
              Spearheaded end-to-end hackathon operations at CSI SFIT. Managed team onboarding, venue coordination, judging evaluation rubrics, live platform troubleshooting, and 24-hour sprint support.
            </p>
            <div className="pt-2">
              <Link to="/hackathon" className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition">
                Explore Full Hackathon Showcase →
              </Link>
            </div>
          </div>
        );
        break;

      case "dsa":
        responseOutput = (
          <div className="my-3 p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-pink-400 font-bold text-sm flex items-center gap-1.5">
                <FiCpu /> LeetCode & Problem Solving
              </span>
              <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded font-mono">Strong DSA</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center font-mono">
              <div className="p-2 rounded bg-black/40 border border-white/5">
                <p className="text-xs text-gray-400">Arrays & Strings</p>
                <p className="text-base font-bold text-green-400">Advanced</p>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/5">
                <p className="text-xs text-gray-400">Trees & Graphs</p>
                <p className="text-base font-bold text-sky-400">Proficient</p>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/5">
                <p className="text-xs text-gray-400">DP & Recursion</p>
                <p className="text-base font-bold text-purple-400">Solid</p>
              </div>
            </div>
          </div>
        );
        break;

      case "contact":
        responseOutput = (
          <div className="my-3 p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 space-y-3 text-xs sm:text-sm">
            <p className="text-blue-300 font-semibold">Contact & Connections:</p>
            <div className="space-y-1.5">
              <p className="flex items-center gap-2 text-gray-300">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:ganeshbirajdar286@gmail.com" className="hover:text-white underline">ganeshbirajdar286@gmail.com</a>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <FaGithub className="text-purple-400" />
                <a href="https://github.com/ganeshbirajdar286" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">github.com/ganeshbirajdar286</a>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <FaLinkedin className="text-sky-400" />
                <a href="https://www.linkedin.com/in/ganesh-fulchand-birajdar/" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">linkedin.com/in/ganesh-fulchand-birajdar</a>
              </p>
            </div>
          </div>
        );
        break;

      case "theme":
        const selectedTheme = args[1];
        if (["dark", "matrix", "cyberpunk", "midnight"].includes(selectedTheme)) {
          setTheme(selectedTheme);
          responseOutput = (
            <p className="my-2 text-xs text-green-400 font-mono">
              ✓ Switched theme mode to <span className="font-bold uppercase">[{selectedTheme}]</span>
            </p>
          );
        } else {
          responseOutput = (
            <p className="my-2 text-xs text-amber-400 font-mono">
              Usage: theme [dark | matrix | cyberpunk | midnight]
            </p>
          );
        }
        break;

      case "sudo":
        if (args[1] === "hire-me" || args[1] === "hire") {
          responseOutput = (
            <div className="my-4 p-5 rounded-2xl bg-gradient-to-r from-emerald-900/60 via-teal-900/60 to-purple-900/60 border-2 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] text-center space-y-3 animate-pulse">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                ⚡ Sudo Access Granted!
              </div>
              <h4 className="text-xl font-extrabold text-white">Let's Build Something Great Together! 🚀</h4>
              <p className="text-xs sm:text-sm text-gray-200 max-w-md mx-auto">
                Ganesh is open for Full-Stack, Web Development, and Software Engineering opportunities!
              </p>
              <div className="pt-2">
                <Link to="/contact" className="inline-block px-6 py-2.5 rounded-xl bg-white text-black font-extrabold text-sm shadow-lg hover:bg-emerald-300 transition transform hover:scale-105">
                  Get In Touch Immediately →
                </Link>
              </div>
            </div>
          );
        } else {
          responseOutput = (
            <p className="my-2 text-xs text-red-400 font-mono">
              sudo: command not found: {args[1] || ""}. Try 'sudo hire-me'
            </p>
          );
        }
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "date":
        responseOutput = <p className="my-2 text-xs text-gray-300 font-mono">{new Date().toString()}</p>;
        break;

      case "whoami":
        responseOutput = <p className="my-2 text-xs text-sky-300 font-mono">visitor@ganesh-portfolio [Role: Developer / Recruiter]</p>;
        break;

      default:
        responseOutput = (
          <p className="my-2 text-xs text-red-400 font-mono">
            Command not recognized: <span className="text-white font-bold">{trimmed}</span>. Type <span className="text-yellow-400 font-bold">'help'</span> for available commands.
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

  // Theme styling configurations
  const themeStyles = {
    dark: "bg-[#0b0f19]/90 border-white/15 text-gray-200 shadow-[0_0_50px_-10px_rgba(120,0,255,0.3)]",
    matrix: "bg-black border-green-500/40 text-green-400 shadow-[0_0_50px_-10px_rgba(34,197,94,0.4)] font-mono",
    cyberpunk: "bg-[#180a29]/95 border-pink-500/40 text-cyan-300 shadow-[0_0_50px_-10px_rgba(236,72,153,0.4)]",
    midnight: "bg-[#051329]/95 border-blue-500/40 text-sky-200 shadow-[0_0_50px_-10px_rgba(59,130,246,0.4)]",
  };

  return (
    <section className="relative w-full bg-black text-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 overflow-hidden border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <FiTerminal />
            <span>Interactive Dev Sandbox</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Developer <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">Console & Shell</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Type commands or tap prompt chips to dynamically inspect Ganesh's skills, hackathons, LeetCode progress, or trigger site themes.
          </p>
        </div>

        {/* Quick Command Action Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 max-w-4xl mx-auto">
          {quickCommands.map((item, idx) => (
            <button
              key={idx}
              onClick={() => runQuickCmd(item.cmd)}
              disabled={isTyping}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/40 text-xs font-medium text-white/90 hover:text-white transition-all transform hover:scale-105 active:scale-95 disabled:opacity-50"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Terminal Window */}
        <div className={`relative w-full rounded-2xl border backdrop-blur-2xl transition-all duration-500 overflow-hidden ${themeStyles[theme]} ${isExpanded ? "fixed inset-4 z-50 max-w-none h-[calc(100vh-2rem)]" : "h-[480px] sm:h-[540px]"}`}>
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between px-4 py-3 bg-black/60 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setHistory([])} title="Clear Terminal"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer" title="Minimize"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} title="Toggle Fullscreen"></div>
              <span className="ml-2 text-xs font-mono text-white/60 hidden sm:inline-block">
                ganesh@sfit-server:~/$ ({theme} mode)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs transition flex items-center gap-1"
                title="Clear Output"
              >
                <FiTrash2 size={13} />
                <span className="hidden sm:inline">Clear</span>
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs transition"
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
                  <div className="flex items-center gap-2 text-sky-400">
                    <span className="text-purple-400 font-bold">ganesh-shell:~$</span>
                    <span className="text-white font-medium">{item.cmd}</span>
                  </div>
                )}
                {item.type === "response" && <div>{item.content}</div>}
                {item.type === "system" && <div>{item.content}</div>}
              </div>
            ))}

            {/* Input Prompt Row */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-purple-400 font-bold whitespace-nowrap">ganesh-shell:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isTyping ? "Running command..." : "Type 'help'..."}
                className="w-full bg-transparent outline-none text-white font-mono placeholder:text-white/30 text-xs sm:text-sm"
                autoFocus
              />
              <button
                onClick={() => handleCommand(input)}
                className="p-1 text-purple-400 hover:text-white transition"
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
