"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What makes SkillMerge different from other institutes?",
    answer:
      "At SkillMerge, we focus on learning by doing. Instead of just teaching theory, we give you real-world, practical training that prepares you for actual cybersecurity jobs. Our courses are affordable, fully hands-on, and designed by industry experts. Plus, we’re proud to be Kerala’s 1st fully practical-oriented cybersecurity training center.",
  },
  {
    question: "Who can join this course?",
    answer:
      "Anyone interested in cybersecurity! No technical background is needed. We start from the basics and guide you step by step.",
  },
  {
    question: "Is the program available online?",
    answer:
      "Yes, this program is available 100% online with live sessions and recorded access.",
  },
  {
    question: "Do I need to know coding?",
    answer:
      "Not at all. We’ll teach you what you need to know, and most of the tools we use don’t require deep coding skills.",
  },
  {
    question: "How long is the course?",
    answer:
      "The course usually takes 3 to 4 months, depending on the pace you choose.",
  },
  {
    question: "Is this course fully practical?",
    answer:
      "Yes! Our training is hands-on. You’ll learn by doing, not just by reading or watching.",
  },
  {
    question: "Can this course help me get a job?",
    answer:
      "Absolutely. We prepare you with real skills and also offer 100% Placement to help you connect with companies looking for cybersecurity talent.",
  },
  {
    question: "Is it online or offline?",
    answer:
      "We offer both online and Offline sessions. You can choose what works best for you.",
  },
];

const FaqContactSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-32 font-orbitron">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-400">
          Find answers to common questions about our Certified Cybersecurity
          Specialist program.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-700 pb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold hover:text-cyber-green transition"
            >
              <span>{item.question}</span>
              {activeIndex === index ? (
                <ChevronUp className="text-cyber-green" />
              ) : (
                <ChevronDown className="text-cyber-green" />
              )}
            </button>
            {activeIndex === index && (
              <p className="mt-3 text-white text-base">{item.answer}</p>
            )}
          </div>
        ))}

        {/* Contact Us Button (white text) */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-block px-6 py-3 border border-cyber-green text-white font-semibold rounded-full hover:text-cyber-green transition duration-300"
          >
            Have More Questions? Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqContactSection;
