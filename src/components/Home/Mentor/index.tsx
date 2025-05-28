"use client";

import React from "react";
import Image from "next/image";

const FoundersNote = () => {
  const founder = {
    name: "MUHAMMAD ASHIQUE",
    profession: "Founder & CTO, Skillmerge",
    imgSrc: "/images/mentor/founder.png",
    note: "I started SkillMerge because I truly believe anyone can build a career in cybersecurity with the right support and hands-on training. We don’t just teach theory—we help you practice real skills that you’ll actually use in the field. Our Aim is simple: to guide and support you in becoming a confident and skilled cybersecurity professional.",
    linkedin: "/images/mentor/linkedin.svg",
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

        .decorative-shape {
          background: linear-gradient(135deg, #00ff99, #003300);
          transform: rotate(45deg);
          z-index: 0;
        }
      `}</style>

      {/* Glowing background blob */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="animated-bg w-[600px] h-[600px] absolute top-10 left-[-200px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-white text-4xl lg:text-5xl font-bold text-center mb-20">
          Hear from our Founder
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

          {/* Right: Image with Decorative Background */}
          <div className="relative w-full flex justify-center items-center">
            {/* Decorative rotated square behind the image */}
            <div className="absolute w-72 h-72 decorative-shape rounded-2xl opacity-20 blur-[2px]"></div>

            {/* Founder Image (no border or shadow) */}
            <div className="relative z-10">
              <Image
                src={founder.imgSrc}
                alt="founder"
                width={280}
                height={280}
                className="rounded-2xl object-cover"
              />
              {/* LinkedIn Icon */}
              <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md">
                <Image
                  src={founder.linkedin}
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
