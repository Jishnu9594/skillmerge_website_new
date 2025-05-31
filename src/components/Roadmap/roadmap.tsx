"use client";

import React from "react";

const SkillMergeRoadmap = () => {
  return (
    <section className="relative bg-black text-white py-16 px-4 text-center overflow-hidden">
      {/* Background animation (optional) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#011A10] via-[#010D07] to-[#011A10] animate-pulse-slow opacity-20 rotate-12"></div>
        <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,#1BD46C_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 animate-movePattern"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">
          Your SkillMerge Roadmap
        </h2>

        {/* Desktop image (hidden on small screens) */}
        <img
          src="/images/logo/11.png"
          alt="Roadmap for large screens"
          className="hidden md:block w-full h-auto mx-auto"
        />

        {/* Mobile image (visible only on small screens) */}
        <img
          src="/images/logo/2 copy.png"
          alt="Roadmap for mobile screens"
          className="block md:hidden w-full h-auto mx-auto"
        />
      </div>
    </section>
  );
};

export default SkillMergeRoadmap;
