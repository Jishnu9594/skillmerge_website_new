"use client";

import React from "react";
import Image from "next/image";

const FoundersNote = () => {
  const founder = {
    name: "MUHAMMED ASHIQUE",
    profession: "Chief Technology Officer, SkillMerge",
    imgSrc: "/images/mentor/founder.png",
    note: "I started SkillMerge because I truly believe anyone can build a career in cybersecurity with the right support and hands-on training. We don’t just teach theory—we help you practice real skills that you’ll actually use in the field. Our aim is simple: to guide and support you in becoming a confident and skilled cybersecurity professional.",
  };

  return (
    <section
      className="relative bg-black py-24 font-blog overflow-hidden"
      id="founder-note"
    >
      {/* Background animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient glow */}
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#0A0117] via-[#120024] to-[#0A0117] animate-pulse-slow opacity-20 rotate-12"></div>

        {/* Purple cyber grid */}
        <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,#A855F7_1px,transparent_1px)] bg-[length:22px_22px] opacity-15 animate-movePattern"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-white text-4xl lg:text-5xl font-bold text-center mb-20">
          Hear from our CTO
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Message */}
          <div>
            <h3 className="text-white text-2xl md:text-3xl font-semibold">
              {founder.name}
            </h3>
            <h4 className="text-purple-400 text-lg md:text-xl mt-2">
              {founder.profession}
            </h4>
            <p className="text-white text-opacity-90 mt-6 text-base leading-relaxed">
              “{founder.note}”
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative w-full flex justify-center items-center">
            <Image
              src={founder.imgSrc}
              alt="founder"
              width={280}
              height={280}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersNote;
