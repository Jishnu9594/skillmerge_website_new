"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    question: "What are the prerequisites for this program?",
    answer:
      "Basic understanding of computer networks is helpful, but no formal prerequisites are required.",
  },
  {
    question: "How long is the program?",
    answer:
      "The program typically runs for 12 weeks with flexible learning options.",
  },
  {
    question: "Is the program available online?",
    answer:
      "Yes, this program is available 100% online with live sessions and recorded access.",
  },
  {
    question: "What certification will I receive?",
    answer:
      "Upon completion, you'll receive a Certified Cybersecurity Specialist certificate.",
  },
  {
    question: "Do you offer job placement assistance?",
    answer:
      "Yes, we offer full placement support including resume reviews and interview preparation.",
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
