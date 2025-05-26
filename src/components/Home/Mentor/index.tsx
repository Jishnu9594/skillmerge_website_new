"use client";

import React from "react";
import Image from "next/image";
import { getImagePrefix } from "@/utils/util";

const FoundersNote = () => {
  const founder = {
    name: "MUHAMMAD ASHIQUE",
    profession: "Founder & CTO, Skillmerge",
    imgSrc: "/images/mentor/ashi-removebg-preview (1).png",
    note: "At our core, we believe cybersecurity is a path to empowerment—not just protection. Our mission is to inspire, educate, and equip tomorrow’s cyber defenders through hands-on learning and real-world experience.",
    linkedin: "images/mentor/linkedin.svg",
  };

  return (
    <section
      className="relative overflow-hidden bg-black py-24 font-blog"
      id="founder-note"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        .font-blog {
          font-family: 'Inter', sans-serif;
        }

        .text-cyber-green {
          color: #00ff99;
        }

        .animated-bg {
          background: radial-gradient(circle at 30% 30%, #00ff99 0%, #000 100%);
          filter: blur(200px);
          opacity: 0.15;
        }
      `}</style>

      {/* Glowing background blob */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="animated-bg w-[600px] h-[600px] absolute top-10 left-[-200px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-white text-4xl lg:text-5xl font-bold text-center mb-20">
          Founder Note
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Message */}
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold">
              {founder.name}
            </h3>
            <h4 className="text-cyber-green text-lg md:text-xl mt-2">
              {founder.profession}
            </h4>
            <p className="text-white text-opacity-90 mt-6 text-base leading-relaxed">
              “{founder.note}”
            </p>
          </div>

          {/* Right: Image with glow underlay */}
          <div className="relative w-full flex justify-center">
            <div className="relative z-10">
              <Image
                src={`${getImagePrefix()}${founder.imgSrc}`}
                alt="founder"
                width={280}
                height={280}
                className="rounded-full object-cover border-4 border-cyber-green shadow-xl"
              />
              {/* LinkedIn Icon */}
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md">
                <Image
                  src={`${getImagePrefix()}${founder.linkedin}`}
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </div>
            </div>

            {/* Background glow below image */}
            <div className="absolute top-28 w-72 h-72 bg-cyber-green opacity-20 blur-3xl rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
