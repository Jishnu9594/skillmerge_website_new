"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaClock, FaBookOpen } from "react-icons/fa6";

const courses = [
  {
    title: "Cybersecurity Fundamentals",
    hours: "120+ hours",
    lessons: "20 lessons",
    image: "/images/courses/cyber.jpg",
    details:
      "This course introduces core cybersecurity concepts, including network security, threat analysis, and cyber hygiene best practices.",
  },
  {
    title: "Ethical Hacking and Penetration Testing",
    hours: "90+ hours",
    lessons: "18 lessons",
    image: "/images/courses/cyber.jpg",
    details:
      "Dive into ethical hacking, penetration testing, vulnerability scanning, and hands-on tools like Kali Linux and Metasploit.",
  },
  {
    title: "Advanced Network Security",
    hours: "100+ hours",
    lessons: "25 lessons",
    image: "/images/courses/cyber.jpg",
    details:
      "Master firewalls, intrusion detection/prevention systems, VPNs, and secure network architecture design.",
  },
  {
    title: "Cybersecurity for Web Applications",
    hours: "60+ hours",
    lessons: "15 lessons",
    image: "/images/courses/cyber.jpg",
    details:
      "Understand web security flaws (OWASP Top 10), secure coding practices, and real-world web vulnerability testing.",
  },
  {
    title: "Incident Response & Digital Forensics",
    hours: "75+ hours",
    lessons: "17 lessons",
    image: "/images/courses/cyber.jpg",
    details:
      "Learn how to detect, respond to, and investigate cyberattacks with modern tools and procedures.",
  },
  {
    title: "Cloud Security Essentials",
    hours: "80+ hours",
    lessons: "22 lessons",
    image: "/images/courses/cyber.jpg",
    details:
      "Gain expertise in securing cloud infrastructure, platforms (AWS, Azure), and managing cloud access policies.",
  },
];

const CyberSecurityCoursesHero = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="pt-28 bg-black text-white relative z-10 min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#011A10] via-[#010D07] to-[#011A10] animate-pulse-slow opacity-20 rotate-12"></div>
        <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,#1BD46C_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 animate-movePattern"></div>
      </div>

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
                key={index}
                className="bg-[#0A0A0A] border border-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6 text-left">
                  <div className="flex items-center gap-4 text-sm text-[#1BD46C] mb-2">
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{course.hours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBookOpen />
                      <span>{course.lessons}</span>
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
                    <p className="text-gray-400 text-sm">{course.details}</p>
                  </div>

                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="bg-[#1BD46C] text-black px-4 py-2 text-sm rounded hover:bg-opacity-80 transition"
                  >
                    {isExpanded ? "Show Less" : "Learn More"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg
          className="w-8 h-8 text-[#1BD46C] animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
};

export default CyberSecurityCoursesHero;
