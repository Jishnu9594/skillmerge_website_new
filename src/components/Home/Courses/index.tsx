"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { courseData } from "@/app/api/data";

const Courses = () => {
  return (
    <section
      id="courses"
      className="bg-black min-h-screen py-20 relative overflow-hidden font-blog"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        .font-blog {
          font-family: 'Inter', sans-serif;
        }

        /* Cyber Purple Theme */
        .text-cyber-purple {
          color: #A855F7;
        }

        .border-cyber-purple {
          border: 1.5px solid #A855F7;
        }

        .shadow-cyber-purple {
          box-shadow: 0 0 6px #A855F7aa;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 14px #A855F7cc;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>

      <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
        {/* Heading */}
        <div className="sm:flex justify-between items-center mb-20">
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-5 sm:mb-0">
            Popular Courses
          </h2>
          <Link
            href="/"
            className="text-white text-lg font-semibold hover:text-cyber-purple transition-colors duration-300"
          >
            Explore Courses &gt;
          </Link>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courseData.map((items, i) => (
            <div
              key={i}
              className="bg-black border-cyber-purple rounded-2xl shadow-cyber-purple p-6 min-h-[550px] flex flex-col justify-between card-hover"
            >
              <div>
                {/* Course Image */}
                <div className="relative rounded-3xl overflow-hidden mb-6">
                  <Image
                    src={items.imgSrc}
                    alt="course-image"
                    width={400}
                    height={260}
                    className="rounded-xl mx-auto"
                  />
                </div>

                {/* Heading + Description */}
                <Link
                  href="#"
                  className="text-white text-2xl font-bold block mb-4 hover:text-cyber-purple transition"
                >
                  {items.heading}
                </Link>
                <p className="text-white text-base opacity-80 mb-4 line-clamp-3">
                  {items.description}
                </p>
              </div>

              {/* Duration + Button */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <Icon
                    icon="solar:calendar-outline"
                    className="text-cyber-purple text-xl"
                  />
                  <span className="text-white text-base opacity-90">
                    Duration: {items.duration}
                  </span>
                </div>

                <Link
                  href={`/courses`}
                  className="bg-[#A855F7] text-black text-sm font-semibold py-2 px-4 rounded-lg hover:bg-[#9333EA] transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
