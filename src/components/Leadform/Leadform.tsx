"use client";

import { useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function LeadFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
  });

  // Hardcoded EmailJS config
  const serviceId = "service_j9yjjp5";
  const templateId = "template_5ubkxxo";
  const publicKey = "UKlZisTZGOT0L9ggF";

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          qualification: formData.qualification,
        },
        publicKey
      );

      console.log("Email sent successfully:", result.text);

      setTimeout(() => {
        window.open("/images/documentation/AI ML poster content.pdf", "_blank");
        setShowModal(false);
        setFormSubmitted(false);
        setFormData({ name: "", email: "", phone: "", qualification: "" });
      }, 1000);
    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send email. Please try again.");
      setFormSubmitted(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-[#1BD46C] text-black px-6 py-3 rounded text-lg font-medium hover:bg-opacity-80 transition"
      >
        Download Brochure
      </button>

      {showModal && (
        <div className="fixed inset-0 z-[99999] bg-black bg-opacity-70 backdrop-blur-sm overflow-y-auto flex items-center justify-center px-4 py-10">
          <div className="relative bg-white text-black p-8 rounded-xl w-full max-w-xl shadow-2xl z-[999999]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-red-500"
            >
              &times;
            </button>

            <h2 className="text-3xl font-semibold mb-6 text-center">
              Download Course Brochure
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Name"
                value={formData.name}
                onChange={(val) => setFormData({ ...formData, name: val })}
              />
              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(val) => setFormData({ ...formData, email: val })}
              />
              <Input
                label="Phone"
                type="tel"
                value={formData.phone}
                onChange={(val) => setFormData({ ...formData, phone: val })}
              />
              <Input
                label="Qualification"
                value={formData.qualification}
                onChange={(val) =>
                  setFormData({ ...formData, qualification: val })
                }
              />

              <button
                type="submit"
                className="w-full bg-[#1BD46C] text-black py-3 rounded font-semibold hover:bg-opacity-90 transition"
              >
                {formSubmitted ? "Submitting..." : "Submit & Download"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

type InputProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
};

function Input({ label, type = "text", value, onChange }: InputProps) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#1BD46C]"
      />
    </div>
  );
}
