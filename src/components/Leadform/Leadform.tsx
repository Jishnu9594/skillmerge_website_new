"use client";

import { useState, useEffect, FormEvent } from "react";
import emailjs from "@emailjs/browser";

type LeadFormModalProps = {
  brochureUrl: string;
};

export default function LeadFormModal({ brochureUrl }: LeadFormModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
  });

  const serviceId = "service_j9yjjp5";
  const templateId = "template_5ubkxxo";
  const publicKey = "UKlZisTZGOT0L9ggF";

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    phone.length >= 7 && /^[0-9+()\-.\s]*$/.test(phone);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic validations
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(formData.phone)) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }
    if (!formData.qualification.trim()) {
      setErrorMsg("Please enter your qualification.");
      return;
    }

    setIsSubmitting(true);

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

      // Open brochure after a short delay
      setTimeout(() => {
        window.open(brochureUrl, "_blank");
        setShowModal(false);
        setFormData({ name: "", email: "", phone: "", qualification: "" });
        setIsSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setErrorMsg("Failed to send email. Please try again.");
      setIsSubmitting(false);
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
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-3xl font-semibold mb-6 text-center">
              Download Course Brochure
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
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

              {errorMsg && (
                <p className="text-red-600 text-sm font-medium">{errorMsg}</p>
              )}

              <button
                type="submit"
                className={`w-full bg-[#1BD46C] text-black py-3 rounded font-semibold hover:bg-opacity-90 transition ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit & Download"}
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
