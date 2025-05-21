"use client";

import { useState } from "react";
import Image from "next/image";

const workshops = {
  upcoming: [
    {
      id: 1,
      title: "Cyber Threat Intelligence Workshop",
      date: "June 25, 2025",
      image: "/images/courses/cyber.jpg",
      description:
        "Learn about the latest threat intelligence techniques, malware analysis, and proactive threat hunting strategies.",
    },
    {
      id: 2,
      title: "Ethical Hacking Bootcamp",
      date: "July 10, 2025",
      image: "/images/courses/cyber.jpg",
      description:
        "A hands-on workshop covering penetration testing, vulnerability assessments, and red teaming tactics.",
    },
  ],
  completed: [
    {
      id: 3,
      title: "Network Security Essentials",
      date: "May 10, 2025",
      image: "/images/courses/cyber.jpg",
    },
    {
      id: 4,
      title: "Zero Trust Architecture Deep Dive",
      date: "April 28, 2025",
      image: "/images/courses/cyber.jpg",
    },
  ],
};

const WorkshopSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative bg-black text-white px-6 py-16 pt-28 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#011A10] via-[#010D07] to-[#011A10] animate-pulse-slow opacity-20 rotate-12"></div>
        <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,#1BD46C_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 animate-movePattern"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Cybersecurity Workshops
        </h2>

        {/* Upcoming Workshops */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-green-400">
            Upcoming Workshops
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {workshops.upcoming.map((workshop) => (
              <div
                key={workshop.id}
                className="bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-md border border-[#1BD46C]/20"
              >
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  width={800}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    {workshop.title}
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">{workshop.date}</p>

                  {expanded === workshop.id ? (
                    <p className="text-sm text-gray-300 mb-4 transition-all duration-300">
                      {workshop.description}
                    </p>
                  ) : null}

                  <div className="flex gap-4">
                    <button className="bg-green-500 hover:bg-green-600 text-black font-bold px-4 py-2 rounded-full text-sm">
                      Register Now
                    </button>
                    <button
                      className="text-green-400 underline text-sm"
                      onClick={() =>
                        setExpanded((prev) =>
                          prev === workshop.id ? null : workshop.id
                        )
                      }
                    >
                      {expanded === workshop.id ? "Hide Details" : "Learn More"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Workshops */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-300">
            Completed Workshops
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {workshops.completed.map((workshop) => (
              <div
                key={workshop.id}
                className="bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-md border border-gray-700"
              >
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  width={800}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">
                    {workshop.title}
                  </h4>
                  <p className="text-sm text-gray-400">{workshop.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSection;
