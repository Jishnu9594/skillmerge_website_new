"use client";

import React, { useState, useRef } from "react";
import { successStoryShorts } from "@/app/api/data"; // Your updated data file
import { AnimatePresence, motion } from "framer-motion";
import YoutubeShortPreview from "./YoutubeShortPreview"; // Adjust path if needed

const SuccessStoriesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleToggle = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  const visibleShorts = showAll
    ? successStoryShorts
    : successStoryShorts.slice(0, 6);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-black text-white py-20 px-6 sm:px-12 md:px-16"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
          Our Success Stories
        </h2>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          <AnimatePresence initial={false}>
            {visibleShorts.map((short) => (
              <motion.div
                key={short.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <YoutubeShortPreview videoUrl={short.url} title={short.title} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center pt-6">
          <button
            onClick={handleToggle}
            className="px-6 py-2 border border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-black transition duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
