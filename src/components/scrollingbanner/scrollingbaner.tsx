"use client";

import React from "react";

const ScrollingBanner = () => {
  return (
    <div className="relative overflow-hidden bg-black py-3 border-y border-cyber-green">
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .scrolling-wrapper {
          display: flex;
          width: max-content;
          animation: scrollLeft 60s linear infinite;
        }

        .font-cyber {
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>

      <div className="w-full overflow-hidden">
        <div className="scrolling-wrapper text-white text-lg font-cyber font-semibold tracking-wide">
          <div className="flex">
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            {/* Duplicate again to ensure no break */}
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
          {/* Clone the entire block again for seamless loop */}
          <div className="flex">
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="mx-4">
              *100% practical oriented learning*&nbsp;&nbsp;&nbsp;&nbsp;*100%
              placement assistance*&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
