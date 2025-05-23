"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const highlights = [
  {
    icon: "mdi:lock",
    title: "Penetration Testing",
    description:
      "Learn to identify and exploit vulnerabilities in systems, networks, and applications.",
  },
  {
    icon: "mdi:code-tags",
    title: "Secure Coding",
    description:
      "Develop applications with security in mind and identify vulnerabilities in existing code.",
  },
  {
    icon: "mdi:database-lock",
    title: "Digital Forensics",
    description:
      "Investigate security incidents and recover digital evidence using industry-standard tools.",
  },
  {
    icon: "mdi:server-security",
    title: "Network Security",
    description:
      "Configure and maintain secure networks, firewalls, and intrusion detection systems.",
  },
  {
    icon: "mdi:web",
    title: "Web App Security",
    description:
      "Identify and mitigate common web vulnerabilities like XSS, CSRF, and SQL injection.",
  },
  {
    icon: "mdi:shield-account",
    title: "Security Operations",
    description:
      "Monitor, detect, and respond to security incidents in real-time environments.",
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
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden bg-black text-white">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Program Highlights
        </h2>
        <p className="text-lg text-white mb-12 max-w-3xl mx-auto">
          Our comprehensive program is designed to transform beginners into
          industry-ready cybersecurity professionals.
        </p>

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
              className="bg-[#0d0d0d] border border-green-800 rounded-xl p-6 flex items-start gap-4 transition-transform duration-300 hover:shadow-[0_0_8px_rgba(0,255,135,0.1)]"
            >
              <div className="bg-green-900 bg-opacity-20 rounded-full p-3">
                <Icon
                  icon={item.icon}
                  className="text-green-400"
                  width={28}
                  height={28}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="/apply"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 font-semibold rounded-lg bg-green-600 text-black hover:bg-green-500 transition-all duration-300"
        >
          Apply for the Program
        </motion.a>
      </div>
    </section>
  );
}
