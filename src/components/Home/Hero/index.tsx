"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import emailjs from "@emailjs/browser";

const rotatingWords = [
  "Cybersecurity",
  "Ethical Hacking",
  "Penetration Testing",
  "Threat Analysis",
];

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && letterIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, letterIndex));
        setLetterIndex((prev) => prev + 1);
      }, 150);
    } else if (isDeleting && letterIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, letterIndex));
        setLetterIndex((prev) => prev - 1);
      }, 100);
    } else if (letterIndex === currentWord.length + 1) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (letterIndex === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting, currentWordIndex]);

  const validateForm = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const newErrors: { [key: string]: string } = {};

    if (!formData.get("name")?.toString().trim())
      newErrors.name = "Name is required";
    if (!formData.get("email")?.toString().trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email")!.toString())) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.get("phone")?.toString().trim())
      newErrors.phone = "Phone number is required";
    if (!formData.get("qualification")?.toString().trim())
      newErrors.qualification = "Qualification is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!validateForm(form)) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_j9yjjp5",
        "template_5ubkxxo",
        form,
        "UKlZisTZGOT0L9ggF"
      );

      alert("Inquiry sent successfully!");
      form.reset();
      setErrors({});
    } catch (error) {
      console.error("Email send error:", error);
      alert("Failed to send inquiry. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const openWhatsApp = (message: string) => {
    const phoneNumber = "+919037937434";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="home-section"
      className="relative bg-black text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,#a855f7_1px,transparent_1px)] [background-size:24px_24px] opacity-10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-purple-800/10 animate-[pulse_10s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 container mx-auto lg:max-w-screen-xl px-4 py-28 flex flex-col justify-center min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="bg-[#1A0B1F] text-purple-400 px-4 py-2 rounded-full text-sm font-semibold w-fit">
              Become an Ethical Hacker
            </span>

            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-purple-400">
                {displayedText}
                <span className="blinking-cursor">|</span>
              </span>{" "}
              Kerala’s First Fully Practical Oriented Cybersecurity Training
              Institute
            </h1>

            <p className="text-gray-400 text-lg max-w-xl">
              Join Kerala’s 1st Hands On Cybersecurity Training Institute and
              gain real world skills to kickstart your career in Ethical Hacking
              and Cybersecurity.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  openWhatsApp("Hi, I’m interested in a free demo session.")
                }
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-md"
              >
                Book a Free Demo Session
              </button>
              <button
                onClick={() =>
                  openWhatsApp("Hi, I’m interested in applying for the course.")
                }
                className="bg-transparent border border-white hover:border-purple-400 text-white font-semibold py-3 px-6 rounded-md"
              >
                Apply Now
              </button>
            </div>

            <div className="flex gap-6 pt-4 flex-wrap">
              {[
                "Industry Recognized",
                "Placement Assistance",
                "Hands-on Training",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Icon
                    icon="mdi:check-circle"
                    className="text-purple-400 text-lg"
                  />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-5 bg-[#1A0B1F] p-8 rounded-xl shadow-lg">
            <h2 className="text-white text-xl font-semibold mb-4 text-center">
              Get a free consultation Today
            </h2>
            <p className="text-gray-400 text-sm mb-6 text-center">
              Fill out the form below to receive program details and a free
              consultation.
            </p>

            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="qualification"
                  placeholder="Your Highest Qualification"
                  className="w-full bg-black text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.qualification && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.qualification}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-md"
              >
                {isSending ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg
          className="w-8 h-8 text-purple-400 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Cursor Animation */}
      <style>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 1.2rem;
          color: #a855f7;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
