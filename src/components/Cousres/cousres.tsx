"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaClock, FaBookOpen } from "react-icons/fa6";
import { courses } from "@/app/api/data"; // import courses from data.ts

const CyberSecurityCoursesHero = () => {
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="pt-28 bg-black text-white relative z-10 min-h-screen">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Build Your Cybersecurity Career with Industry-Leading Programs
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Explore our expertly curated cybersecurity courses designed to prepare
          you for real-world cyber defense challenges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={course.slug}
                className="bg-[#0A0A0A] border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-52 object-contain"
                />
                <div className="p-6 text-left">
                  <div className="flex items-center gap-4 text-sm text-[#1BD46C] mb-2">
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{course.hours}</span>
                    </div>
                    {/* <div className="flex items-center gap-1">
                      <FaBookOpen />
                      <span>{course.lessons}</span>
                    </div> */}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {course.title}
                  </h3>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-40 mb-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-400 text-sm">{course.details}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (isExpanded) setExpandedIndex(null);
                      else setExpandedIndex(index);
                    }}
                    className="bg-[#1BD46C] text-black px-4 py-2 text-sm rounded hover:bg-opacity-80 transition mr-2"
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                  </button>

                  <button
                    type="button"
                    onClick={() => router.push(`/courses/${course.slug}`)}
                    className="bg-[#0A8F57] text-white px-4 py-2 text-sm rounded hover:bg-opacity-80 transition"
                  >
                    Go to Course
                  </button>
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
