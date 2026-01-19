import React from "react";
import ganeshImg from "../assets/ganesh.jpg";
import TiltedCard from "../components/TiltedCard.jsx";
import  {Link} from "react-router-dom"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={<p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>}
/>;

export default function Hero() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-8 md:px-20 py-24 flex flex-col md:flex-row gap-16 justify-between relative">
      {/* LEFT SECTION */}
      <div className="max-w-2xl">
        {/* Name */}
        <h1 className="text-[65px] md:text-[90px] font-extrabold leading-[1.1]">
          <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 text-transparent bg-clip-text text-nowrap">
            Ganesh Birajdar
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-3xl md:text-4xl font-semibold mt-4 opacity-90">
          Full stack developer
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg opacity-70 leading-relaxed">
          Building high-performance, scalable applications with a strong
          foundation in front-end, back-end, and system-level development. I
          specialize in JavaScript, TypeScript, React, Node.js, Express,
          MongoDB, and relational databases — crafting clean architecture and
          fast, reliable user experiences. I also work with Java, C, Git, and
          API testing tools like Postman and Requestly, enabling me to deliver
          robust, production-ready solutions across the full stack.
          <br /> — focused on "modern UI engineering, API design, database
          architecture", and delivering exceptional "developer experience".
        </p>
      </div>

      {/* RIGHT GLASS CARD */}
      <div
        className="
    w-full md:w-[420px] min-h-[600px]
    bg-gradient-to-b from-[#0f121a] to-[#1a0f25]
    border border-white/10 rounded-3xl backdrop-blur-2xl
    shadow-[0_0_40px_-10px_rgba(120,0,255,0.4)]
    p-10 flex flex-col items-start
  "
      >
        {/* Profile Image */}
        <TiltedCard
          imageSrc={ganeshImg}
          altText="Ganesh Birajdar"
          captionText="Ganesh Birajdar"
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={<p className="tilted-card-demo-text"></p>}
        />

        {/* Title */}
        <h3 className="text-3xl font-extrabold text-white tracking-tight mt-10">
          Full stack developer
        </h3>

        {/* Subtitle */}
        <p className="text-lg text-white/70 mt-2">
          MongoDB • Express • React • Node.js • API    
        </p>
           
            <div className="flex gap-6 mt-10">
          <div className="p-4 bg-black/40 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition">
            <Link to="https://github.com/ganeshbirajdar286">
              {" "}
              <FaGithub size={28} />
            </Link>
          </div>

          <div className="p-4 bg-black/40 rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition">
            <Link to="https://www.linkedin.com/in/ganesh-fulchand-birajdar/">
              <FaLinkedinIn size={28} />
            </Link>
          </div>
         </div>
      </div>
    </div>
  );
}
