"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What is cybersecurity?",
    answer:
      "Cybersecurity involves protecting systems and networks from digital attacks through technology and best practices.",
  },
  {
    question: "Is job placement provided?",
    answer:
      "Yes, we offer 100% placement assistance with interview prep and resume support.",
  },
  {
    question: "Are the sessions hands-on?",
    answer:
      "Definitely. All our modules are designed with practical-oriented training.",
  },
  {
    question: "Can beginners join?",
    answer: "Yes, the course starts from basics and is suitable for beginners.",
  },
];

const FaqContactSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20 font-orbitron">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* FAQ Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">FAQs</h2>
          <div className="space-y-6">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-[#111] rounded-xl transition-all duration-300 hover:bg-[#1a1a1a]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left text-lg font-semibold"
                >
                  {item.question}
                  {activeIndex === index ? (
                    <ChevronUp className="text-cyber-green" />
                  ) : (
                    <ChevronDown className="text-cyber-green" />
                  )}
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-cyber-green text-base">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#0e0e0e] border border-cyber-green rounded-xl p-6 shadow-lg shadow-cyber-green/30">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-[#111] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-[#111] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-[#111] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-green"
            />
            <button
              type="submit"
              className="w-full py-3 bg-cyber-green text-black font-bold rounded-md hover:bg-green-400 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FaqContactSection;
