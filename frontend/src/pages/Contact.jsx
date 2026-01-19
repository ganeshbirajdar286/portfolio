import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useRef } from "react";
import VariableProximity from "../components/VariableProximity.jsx";
import ScrollFloat from "../components/ScrollFloat.jsx";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const containerRef = useRef(null);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(message);
    handleEmail(name,email,message)
    setEmail("");
    setName("");
    setmessage("");
  };


  const handleEmail=async(name,email,message)=>{
     try {
    const backend = import.meta.env.VITE_BACKEND_URL;

    const res = await axios.post(`${backend}/auth/sendEmail`, {
      name,
      email,
      message,
    });

    console.log("Sent:", res.data);
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
  }

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center px-6 py-20">
      {/* CONTACT FORM (TOP SECTION) */}
      <form onSubmit={onSubmitHandle}>
        <div className="w-full max-w-3xl bg-[#111] rounded-2xl p-10 shadow-lg border border-white/10 text-2xl">
          <div ref={containerRef} style={{ position: "relative" }}>
            <div
              ref={containerRef}
              className="relative w-full flex justify-center cursor-pointer"
            >
              <VariableProximity
                label="Let’s Build Something Epic To gether"
                className="text-5xl md:text-7xl font-bold leading-tight text-center"
                fromFontVariationSettings="'wght' 200, 'opsz' 10"
                toFontVariationSettings="'wght' 900, 'opsz' 70"
                containerRef={containerRef}
                radius={250}
                falloff="linear"
              />
            </div>
          </div>

          <p className="text-lg opacity-80 text-center mt-2">
            Get in touch directly:
          </p>

          <a
            href="mailto:ganeshbirajdar286@gmail.com"
            className="text-blue-400 text-xl font-semibold mt-1 hover:underline block text-center mb-6"
          >
            ganeshbirajdar286@gmail.com
          </a>

          {/* Inputs */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <input
              type="text"
              placeholder="Name"
              value={name}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/20 text-white"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              className="w-full p-4 rounded-xl bg-black/40 border border-white/20 text-white"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            placeholder="Message"
            rows="6"
            value={message}
            className="w-full p-4 rounded-xl bg-black/40 border border-white/20 text-white"
            onChange={(e) => setmessage(e.target.value)}
          ></textarea>

          <button
            className="mt-6 w-full py-4 text-lg font-semibold bg-purple-600 rounded-xl hover:bg-purple-700 transition"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>

      {/* SPACING */}
      <div className="h-[64vh]"></div>

      {/* ⭐ FOOTER SECTION (BOTTOM) ⭐ */}
      <div className="text-center flex flex-col items-center  ">
        {/* Big Gradient Name */}
<ScrollFloat
  textClassName=" text-[120px] md:text-[180px] font-bold
    bg-gradient-to-r from-white via-purple-300 to-blue-400
    text-transparent bg-clip-text
    drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
>
  Ganesh Birajdar
</ScrollFloat>




        {/* Social Icons */}
        <div className="flex gap-6 mt-10">
          <div className="p-4 bg-black/40 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition  cursor-pointer">
            <Link to="https://github.com/ganeshbirajdar286">
              {" "}
              <FaGithub size={28} />
            </Link>
          </div>

          <div className="p-4 bg-black/40 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition cursor-pointer">
            <Link to="https://www.linkedin.com/in/ganesh-fulchand-birajdar/">
              <FaLinkedinIn size={28} />
            </Link>
          </div>

          <div className="p-4 bg-black/40 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition cursor-pointer">
            <Link to="mailto:ganeshbirajdar286@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="white"
                width="28"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M4 4l8 8 8-8" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-10 opacity-60">© 2025 Ganesh Birajdar</p>
      </div>
    </div>
  );
}

export default Contact;
