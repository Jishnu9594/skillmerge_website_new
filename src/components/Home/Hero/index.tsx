"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const rotatingWords = [
  "Cybersecurity",
  "Ethical Hacking",
  "Penetration Testing",
  "Threat Analysis",
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && letterIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, letterIndex));
        setLetterIndex((prev) => prev + 1);
      }, 150);
    } else if (isDeleting && letterIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, letterIndex));
        setLetterIndex((prev) => prev - 1);
      }, 100);
    } else if (letterIndex === currentWord.length + 1) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (letterIndex === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, currentWordIndex]);

  return (
    <section
      id="home-section"
      className="relative bg-[#010D07] text-white overflow-hidden"
    >
      {/* Cybersecurity Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,#00ff88_1px,transparent_1px)] [background-size:24px_24px] opacity-5 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-green-800/10 animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto lg:max-w-screen-xl px-4 py-28 flex flex-col justify-center min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="bg-[#0A2218] text-[#70EF9C] px-4 py-2 rounded-full text-sm font-semibold w-fit">
              Become an Ethical Hacker
            </span>

            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Certified{" "}
              <span className="text-[#1BD46C]">
                {displayedText}
                <span className="blinking-cursor">|</span>
              </span>{" "}
              Specialist (CCS) Program
            </h1>

            <p className="text-gray-400 text-lg max-w-xl">
              Master the art of ethical hacking and launch your career in the
              high-demand field of cybersecurity.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#1BD46C] hover:bg-[#16b55b] text-black font-semibold py-3 px-6 rounded-md">
                Book a Free Demo Session
              </button>
              <button className="bg-transparent border border-white hover:border-[#1BD46C] text-white font-semibold py-3 px-6 rounded-md">
                Apply Now
              </button>
            </div>

            <div className="flex gap-6 pt-4 flex-wrap">
              {[
                "Industry Recognized",
                "Placement Assistance",
                "Hands-on Training",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Icon
                    icon="mdi:check-circle"
                    className="text-[#1BD46C] text-lg"
                  />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:col-span-5 bg-[#0A2218] p-8 rounded-xl shadow-lg">
            <h2 className="text-white text-xl font-semibold mb-4 text-center">
              Get a free consultation Today
            </h2>
            <p className="text-gray-400 text-sm mb-6 text-center">
              Fill out the form below to receive program details and a free
              consultation.
            </p>

            <form className="flex flex-col gap-4">
              {[
                "Full Name",
                "Email Address",
                "Phone Number",
                "Your Highest Qualification",
              ].map((placeholder, index) => (
                <input
                  key={index}
                  type={index === 1 ? "email" : index === 2 ? "tel" : "text"}
                  placeholder={placeholder}
                  className="bg-[#010D07] text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1BD46C]"
                />
              ))}
              <button
                type="submit"
                className="bg-[#1BD46C] hover:bg-[#16b55b] text-black font-semibold py-3 rounded-md"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg
          className="w-8 h-8 text-[#1BD46C] animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {/* Extra Tailwind CSS for blinking cursor */}
      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1.2rem;
          color: #1BD46C;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
