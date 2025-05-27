"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919037937434?text=Hi!%20I’m%20interested%20in%20learning%20more%20about%20the%20Cybersecurity%20course%20at%20SkillMerge.%20Could%20you%20please%20share%20more%20details%20about%20the%20curriculum,%20duration,%20and%20fees?%20Thanks!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}
