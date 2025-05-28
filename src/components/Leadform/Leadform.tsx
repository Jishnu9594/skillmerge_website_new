"use client";

import { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import emailjs from "@emailjs/browser";

export default function LeadFormModal({
  brochureUrl,
}: {
  brochureUrl: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_j9yjjp5", // Your EmailJS Service ID
        "template_v2mao1b", // Your EmailJS Template ID
        formRef.current,
        "UKlZisTZGOT0L9ggF" // Your EmailJS Public Key
      );
      setIsSubmitted(true);

      // Trigger brochure download safely
      const link = document.createElement("a");
      link.href = brochureUrl;
      link.download = brochureUrl.split("/").pop() || "brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-[#1BD46C] text-black px-6 py-2 rounded-xl font-semibold hover:scale-105 transition"
      >
        Enroll Now
      </button>

      <Dialog open={isOpen} onClose={toggleModal} className="relative z-50">
        <div
          className="fixed inset-0 bg-black bg-opacity-70"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-[#0B0F0E] p-6 rounded-2xl max-w-md w-full text-white shadow-xl border border-[#1BD46C]">
            <Dialog.Title className="text-xl font-bold mb-4 text-[#1BD46C]">
              Get Course Brochure
            </Dialog.Title>

            {!isSubmitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-2 bg-[#1A1F1E] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BD46C]"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-2 bg-[#1A1F1E] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BD46C]"
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 bg-[#1A1F1E] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BD46C]"
                />
                <input
                  type="text"
                  name="user_qualification"
                  placeholder="Highest Qualification"
                  required
                  className="w-full px-4 py-2 bg-[#1A1F1E] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1BD46C]"
                />

                <button
                  type="submit"
                  className="w-full bg-[#1BD46C] text-black py-2 rounded-lg font-semibold hover:bg-[#17b65c] transition"
                >
                  Submit
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4">
                <p className="text-green-400 font-semibold">
                  Thank you! Your brochure is ready to download.
                </p>
                <a
                  href={brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-block bg-[#1BD46C] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[#17b65c] transition"
                >
                  Download Brochure
                </a>
                <button
                  onClick={toggleModal}
                  className="text-sm text-gray-400 hover:text-white underline mt-2"
                >
                  Close
                </button>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
