"use client";

import React from "react";
import Image from "next/image";

const FoundersNote = () => {
  const founder = {
    name: "MUHAMMED ASHIQUE",
    profession: "Chief Technology Officer, Skillmerge",
    imgSrc: "/images/mentor/founder.png",
    note: "I started SkillMerge because I truly believe anyone can build a career in cybersecurity with the right support and hands-on training. We don’t just teach theory—we help you practice real skills that you’ll actually use in the field. Our Aim is simple: to guide and support you in becoming a confident and skilled cybersecurity professional.",
  };

  return (
    <section className="bg-black py-24 font-blog" id="founder-note">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        .font-blog {
          font-family: 'Inter', sans-serif;
        }

        .text-cyber-green {
          color: #00ff99;
        }
      `}</style>

      <div className="container mx-auto px-6">
        <h2 className="text-white text-4xl lg:text-5xl font-bold text-center mb-20">
          Hear from our CTO
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

          {/* Right: Image */}
          <div className="relative w-full flex justify-center items-center">
            <div className="relative z-10">
              <Image
                src={founder.imgSrc}
                alt="founder"
                width={280}
                height={280}
                className="rounded-2xl object-cover"
              />
              {/* <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md">
                <Image
                  src={founder.linkedin}
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
