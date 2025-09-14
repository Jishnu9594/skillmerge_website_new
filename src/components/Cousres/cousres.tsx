"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaClock } from "react-icons/fa6";
import { courses } from "@/app/api/data";

const CyberSecurityCoursesHero = () => {
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const accentPurple = "#9b59b6";

  return (
    <section className="pt-40 bg-black text-white relative z-10 min-h-screen overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#0a001a] via-[#0a000a] to-[#0a001a] animate-pulse-slow opacity-20 rotate-12"></div>
        <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,#9b59b6_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 animate-movePattern"></div>
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Build Your Cybersecurity Career with Industry-Leading Programs
        </h2>
        <p className="text-white text-opacity-80 text-lg md:text-xl mb-16">
          Explore our expertly curated cybersecurity courses designed to prepare
          you for real-world cyber defense challenges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={course.slug}
                className={`bg-[#0A0A0A] rounded-xl shadow-lg border-2 border-[#9b59b6] overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_#9b59b6]`}
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-52 object-contain bg-[#000000]"
                />
                <div className="p-6 text-left">
                  <div className="flex items-center gap-4 text-sm text-[#9b59b6] mb-2">
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{course.hours}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {course.title}
                  </h3>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-40 mb-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-white text-opacity-80 text-sm">
                      {course.details}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedIndex(isExpanded ? null : index)
                      }
                      className="bg-[#9b59b6] text-black px-4 py-2 text-sm rounded hover:bg-opacity-80 transition"
                    >
                      {isExpanded ? "Show Less" : "Learn More"}
                    </button>

                    <button
                      type="button"
                      onClick={() => router.push(`/courses/${course.slug}`)}
                      className="bg-[#7d3c98] text-white px-4 py-2 text-sm rounded hover:bg-opacity-80 transition"
                    >
                      Go to Course
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CyberSecurityCoursesHero;
