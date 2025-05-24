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
          Hacking refers to activities that seek to compromise digital devices,
          such as computers, smartphones, tablets, and even entire networks.
          Ethical hacking is used to improve system security, while malicious
          hacking can lead to data breaches and cybersecurity threats.
        </p>

        {/* Video Container */}
        <div className="relative pt-[56.25%] w-full rounded-xl border-2 border-green-500 shadow-[0_0_30px_rgba(0,255,0,0.3)] overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/_0QCvSg75DI"
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
