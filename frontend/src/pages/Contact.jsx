import React, { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import VariableProximity from "../components/VariableProximity.jsx";
import ScrollFloat from "../components/ScrollFloat.jsx";
import axios from "axios";
import { useTheme } from "../context/ThemeContext.jsx";

function Contact() {
  const { isDark } = useTheme();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error message

  const containerRef = useRef(null);

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    setStatus("");
    setLoading(true);

    try {
      const backend = import.meta.env.VITE_BACKEND_URL;

      await axios.post(`${backend}/auth/sendEmail`, {
        name,
        email,
        message,
      });

      setName("");
      setEmail("");
      setMessage("");
      setStatus("✅ Message sent successfully!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`min-h-screen w-full flex flex-col items-center px-4 sm:px-6 pt-32 pb-20 transition-colors duration-300 ${
      isDark ? "bg-black text-white" : "bg-white text-slate-900"
    }`}>
      {/* CONTACT FORM */}
      <form onSubmit={onSubmitHandle} className="w-full flex justify-center">
        <div className={`w-full max-w-3xl rounded-2xl p-6 sm:p-8 md:p-10 border transition-all duration-300 ${
          isDark ? "bg-[#111] border-white/10 shadow-lg text-white" : "bg-white border-2 border-blue-200 shadow-xl shadow-blue-500/10 text-slate-900"
        }`}>
          {/* Heading */}
          <div ref={containerRef} className="relative flex justify-center">
            <VariableProximity
              label="Let’s Build Something Epic Together"
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-center"
              fromFontVariationSettings="'wght' 200, 'opsz' 10"
              toFontVariationSettings="'wght' 900, 'opsz' 70"
              containerRef={containerRef}
              radius={200}
              falloff="linear"
            />
          </div>

          <p className={`text-base sm:text-lg text-center mt-3 ${isDark ? "opacity-80" : "text-slate-600"}`}>
            Get in touch directly:
          </p>

          <a
            href="mailto:ganeshbirajdar286@gmail.com"
            className="text-blue-600 text-lg font-semibold hover:underline block text-center mb-6"
          >
            ganeshbirajdar286@gmail.com
          </a>

          {/* Inputs */}
          <div className="flex flex-col md:flex-row gap-4 mb-4 mt-6">
            <input
              type="text"
              placeholder="Name"
              value={name}
              className={`w-full p-3 sm:p-4 rounded-xl border ${
                isDark
                  ? "bg-black/40 border-white/20 text-white"
                  : "bg-blue-50/50 border-2 border-blue-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 font-medium"
              }`}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              className={`w-full p-3 sm:p-4 rounded-xl border ${
                isDark
                  ? "bg-black/40 border-white/20 text-white"
                  : "bg-blue-50/50 border-2 border-blue-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 font-medium"
              }`}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <textarea
            placeholder="Message"
            rows="5"
            value={message}
            className={`w-full p-3 sm:p-4 rounded-xl border ${
              isDark
                ? "bg-black/40 border-white/20 text-white"
                : "bg-blue-50/50 border-2 border-blue-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 font-medium"
            }`}
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />

          {/* ✅ Status Message */}
          {status && (
            <p className="mt-4 text-center text-sm opacity-80">{status}</p>
          )}

          {/* ✅ Loading Button */}
          <button
            className={`mt-6 w-full py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition cursor-pointer text-white shadow-md ${
              loading
                ? "bg-blue-400 cursor-not-allowed opacity-70"
                : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/20"
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      <div className="mt-24 text-center flex flex-col items-center">
        <ScrollFloat
          textClassName={`
    text-[42px] sm:text-[64px] md:text-[96px] lg:text-[140px]
    font-bold
    leading-none
    bg-gradient-to-r ${isDark ? "from-white via-purple-300 to-blue-400" : "from-blue-800 via-blue-600 to-sky-500"}
    text-transparent bg-clip-text
  `}
        >
          Ganesh Birajdar
        </ScrollFloat>

        {/* Social Icons */}
        <div className="flex gap-5 mt-10">
          <Link
            to="https://github.com/ganeshbirajdar286"
            target="_blank"
            className={`p-4 rounded-2xl border transition ${
              isDark
                ? "bg-black/40 border-white/10 text-white hover:bg-white/10"
                : "bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-50 shadow-sm"
            }`}
          >
            <FaGithub size={26} />
          </Link>

          <Link
            to="https://www.linkedin.com/in/ganesh-fulchand-birajdar/"
            target="_blank"
            className={`p-4 rounded-2xl border transition ${
              isDark
                ? "bg-black/40 border-white/10 text-white hover:bg-white/10"
                : "bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-50 shadow-sm"
            }`}
          >
            <FaLinkedinIn size={26} />
          </Link>

          <Link
            to="mailto:ganeshbirajdar286@gmail.com"
            className={`p-4 rounded-2xl border transition ${
              isDark
                ? "bg-black/40 border-white/10 text-white hover:bg-white/10"
                : "bg-white border-2 border-blue-200 text-blue-700 hover:bg-blue-50 shadow-sm"
            }`}
          >
            ✉️
          </Link>
        </div>

        <p className={`mt-8 text-sm ${isDark ? "opacity-60" : "text-slate-500"}`}>© 2025 Ganesh Birajdar</p>
      </div>
    </section>
  );
}

export default Contact;
