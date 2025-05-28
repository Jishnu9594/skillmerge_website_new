"use client";

import React from "react";

const ScrollingBanner = () => {
  const text = "★ 100% Practical Oriented Learning ★ 100% Placement Assistance";

  return (
    <div className="relative overflow-hidden bg-black py-4 border-y border-[#1BD46C]">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .scrolling-wrapper {
          display: flex;
          width: max-content;
          animation: scrollLeft 35s linear infinite;
        }
      `}</style>

      <div className="w-full overflow-hidden">
        <div className="scrolling-wrapper text-white text-base md:text-2xl lg:text-2xl font-cyber font-bold tracking-wider uppercase whitespace-nowrap">
          {[...Array(10)].map((_, index) => (
            <span className="mx-6 md:mx-8" key={index}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
