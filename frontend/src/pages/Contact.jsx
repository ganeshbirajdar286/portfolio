import React, { useState, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import VariableProximity from "../components/VariableProximity.jsx";
import ScrollFloat from "../components/ScrollFloat.jsx";
import axios from "axios";

function Contact() {
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
    <section className="min-h-screen w-full bg-black text-white flex flex-col items-center px-4 sm:px-6 pt-32 pb-20">
      {/* CONTACT FORM */}
      <form onSubmit={onSubmitHandle} className="w-full flex justify-center">
        <div className="w-full max-w-3xl bg-[#111] rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border border-white/10">
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

          <p className="text-base sm:text-lg opacity-80 text-center mt-3">
            Get in touch directly:
          </p>

          <a
            href="mailto:ganeshbirajdar286@gmail.com"
            className="text-blue-400 text-lg font-semibold hover:underline 
                       block text-center mb-6"
          >
            ganeshbirajdar286@gmail.com
          </a>

          {/* Inputs */}
          <div className="flex flex-col md:flex-row gap-4 mb-4 mt-6">
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-white/20 text-white"
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-white/20 text-white"
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>

          <textarea
            placeholder="Message"
            rows="5"
            value={message}
            className="w-full p-3 sm:p-4 rounded-xl bg-black/40 border border-white/20 text-white"
            onChange={(e) => setMessage(e.target.value)}
            disabled={loading}
          />

          {/* ✅ Status Message */}
          {status && (
            <p className="mt-4 text-center text-sm opacity-80">{status}</p>
          )}

          {/* ✅ Loading Button */}
          <button
            className={`mt-6 w-full py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition cursor-pointer
              ${loading ? "bg-purple-400 cursor-not-allowed opacity-70" : "bg-purple-600 hover:bg-purple-700"}
            `}
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>

      <div className="mt-24 text-center flex flex-col items-center">
        <ScrollFloat
          textClassName="
    text-[42px] sm:text-[64px] md:text-[96px] lg:text-[140px]

    font-bold
    leading-none
    bg-gradient-to-r from-white via-purple-300 to-blue-400
    text-transparent bg-clip-text
  "
        >
          Ganesh Birajdar
        </ScrollFloat>

        {/* Social Icons */}
        <div className="flex gap-5 mt-10">
          <Link
            to="https://github.com/ganeshbirajdar286"
            target="_blank"
            className="p-4 bg-black/40 rounded-2xl border border-white/10 
                       hover:bg-white/10 transition"
          >
            <FaGithub size={26} />
          </Link>

          <Link
            to="https://www.linkedin.com/in/ganesh-fulchand-birajdar/"
            target="_blank"
            className="p-4 bg-black/40 rounded-2xl border border-white/10 
                       hover:bg-white/10 transition"
          >
            <FaLinkedinIn size={26} />
          </Link>

          <Link
            to="mailto:ganeshbirajdar286@gmail.com"
            className="p-4 bg-black/40 rounded-2xl border border-white/10 
                       hover:bg-white/10 transition"
          >
            ✉️
          </Link>
        </div>

        <p className="mt-8 opacity-60 text-sm">© 2025 Ganesh Birajdar</p>
      </div>
    </section>
  );
}

export default Contact;
