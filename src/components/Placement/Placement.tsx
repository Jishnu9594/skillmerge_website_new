"use client";

import React from "react";
import { PlacedStudentsData } from "@/app/api/data";

const placementDescriptions = [
  {
    name: "Surya",
    description: `Surya – Placed at IBM, Bangalore – 3 LPA\nSurya’s journey at Skillmerge Hackers Academy began with a passion for technology and problem-solving. Through consistent effort, real-time project experience, and interview readiness support, she secured a role as Technical Support Engineer at IBM Bangalore with a package of 3 LPA. Her success proves that dedication combined with the right guidance always leads to new beginnings.`,
  },
  {
    name: "Arjun",
    description: `Arjun – Placed at IBM, Bangalore – 5 LPA\nArjun was determined to upskill and break into a high-growth IT career. With Skillmerge’s lab-based training and placement mentoring, he sharpened his technical expertise and communication skills. Today, he is placed at IBM Bangalore with a package of 5 LPA, proving that persistence and practical skills pay off.`,
  },
  {
    name: "Harris",
    description: `Harris – Placed at Bright Technologies, Abu Dhabi – 12 LPA\nHarris’s journey is a true example of aiming high and achieving it. From mastering advanced modules to taking part in real-world projects, he demonstrated leadership and technical brilliance. His hard work landed him an international opportunity at Bright Technologies, Abu Dhabi, with a package of 12 LPA. He now stands as an inspiration for fellow learners who dream of global careers.`,
  },
];

const Placement = () => {
  return (
    <section
      className="relative bg-black text-white py-20 px-4 overflow-hidden font-blog"
      id="placement-section"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient glow */}
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#0A0117] via-[#120024] to-[#0A0117] animate-pulse-slow opacity-20 rotate-12"></div>
        {/* Cyber grid pattern */}
        <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,#A855F7_1px,transparent_1px)] bg-[length:22px_22px] opacity-15 animate-movePattern"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Our Placed Students
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          Meet some of our students who have successfully started their careers
          after training with us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-stretch justify-center">
          {PlacedStudentsData.map((student, idx) => (
            <div
              key={idx}
              className="bg-[#181028] rounded-xl p-6 flex flex-col items-start shadow-lg hover:scale-105 transition-transform duration-300 min-h-[500px] max-h-[500px] min-w-[360px] max-w-[360px] mx-auto"
              style={{ boxSizing: "border-box" }}
            >
              <div className="flex items-start justify-center w-full h-[320px] mb-4 bg-transparent">
                <img
                  src={student.imgSrc}
                  alt={student.name}
                  className="w-full h-full object-contain bg-transparent"
                  style={{ background: "transparent" }}
                />
              </div>
              <span className="text-xl font-bold mb-1 text-white w-full text-center block whitespace-normal break-words">
                {student.name}
              </span>
              {student.company && (
                <span className="text-base text-purple-400 font-semibold mb-3 block w-full text-center whitespace-normal break-words">
                  {student.company}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Placement;
