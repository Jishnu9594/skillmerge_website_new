"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

const highlights = [
  {
    icon: "mdi:lock",
    title: "Penetration Testing",
    description:
      "Find weak spots in computers, networks, and apps before bad hackers do.",
  },
  {
    icon: "mdi:code-tags",
    title: "Secure Coding",
    description:
      "Write software the safe way and spot risky code in old programs.",
  },
  {
    icon: "mdi:database-lock",
    title: "Digital Forensics",
    description:
      "Look into cyber attacks and pull out digital clues with professional tools.",
  },
  {
    icon: "mdi:server-security",
    title: "Network Security",
    description:
      "Set up and protect networks, firewalls, and intrusion-detection systems.",
  },
  {
    icon: "mdi:web",
    title: "Web App Security",
    description: "Fix common website holes like XSS, CSRF, and SQL injection.",
  },
  {
    icon: "mdi:shield-account",
    title: "Security Operations",
    description: "Watch, detect, and react to cyber threats as they happen.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

export default function ProgramHighlights() {
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const openLeadForm = () => {
    setSuccessMessage("");
    setErrorMessage("");
    setShowLeadForm(true);
  };
  const closeLeadForm = () => setShowLeadForm(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      highest_qualification: formData.get("highest_qualification"),
    };

    const SERVICE_ID = "service_j9yjjp5";
    const TEMPLATE_ID = "template_5ubkxxo";
    const PUBLIC_KEY = "UKlZisTZGOT0L9ggF";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      () => {
        setSuccessMessage("Your application has been sent successfully!");
        setSending(false);
        form.reset();
      },
      (error) => {
        setErrorMessage("Oops! Something went wrong. Please try again.");
        setSending(false);
        console.error("EmailJS error:", error);
      }
    );
  };

  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden bg-black text-white">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Program Highlights
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          Our training turns beginners into job-ready cybersecurity pros.
        </p>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="bg-[#0d0d0d] border border-purple-800 rounded-xl p-6 flex items-start gap-4 transition-transform duration-300 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)]"
            >
              <div className="bg-purple-900 bg-opacity-20 rounded-full p-3">
                <Icon
                  icon={item.icon}
                  className="text-purple-400"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apply Button */}
        <motion.button
          onClick={openLeadForm}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-500 transition-all duration-300"
        >
          Apply for the Program
        </motion.button>
      </div>

      {/* Lead Form Modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#121212] rounded-lg p-8 max-w-lg w-full relative">
            <button
              onClick={closeLeadForm}
              className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-purple-400"
              aria-label="Close Lead Form"
            >
              &times;
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-white text-center">
              Apply Now
            </h3>

            {successMessage && (
              <p className="mb-4 text-purple-400 text-center">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="mb-4 text-red-500 text-center">{errorMessage}</p>
            )}

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 text-black"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="p-3 rounded bg-white border border-gray-300"
                disabled={sending}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="p-3 rounded bg-white border border-gray-300"
                disabled={sending}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="p-3 rounded bg-white border border-gray-300"
                disabled={sending}
              />
              <input
                type="text"
                name="highest_qualification"
                placeholder="Highest Qualification"
                required
                className="p-3 rounded bg-white border border-gray-300"
                disabled={sending}
              />
              <button
                type="submit"
                disabled={sending}
                className="bg-purple-600 text-white font-semibold rounded py-3 hover:bg-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
