import React from "react";

const WhatIsHackingSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6 sm:px-12 md:px-16">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold border-l-4 border-green-500 pl-4">
          What is Hacking?
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          Hacking means getting into computers, phones, or networks — sometimes
          in a good way, and sometimes in a bad way. Bad hackers try to steal
          information or break things. But ethical hackers use their skills to
          find and fix problems before bad hackers can attack. At SkillMerge, we
          teach ethical hacking to help protect people and companies from cyber
          threats.
        </p>

        {/* Video Container */}
        <div className="relative pt-[56.25%] w-full rounded-xl border-2 border-green-500 shadow-[0_0_30px_rgba(0,255,0,0.3)] overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/iWbbLXRl0K8?si"
            title="What is Hacking"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHackingSection;
