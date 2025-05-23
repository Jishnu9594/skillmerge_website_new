// app/components/LeadFormModal.tsx
"use client";

import { useState, useEffect } from "react";

export default function LeadFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
  });

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Lead Submitted:", formData);

    setFormSubmitted(true);

    setTimeout(() => {
      window.open("/images/documentation/AI ML poster content.pdf", "_blank");
      setShowModal(false);
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", qualification: "" });
    }, 1000);
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
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg w-full max-w-md mx-4 relative shadow-lg">
            <button
              className="absolute top-3 right-4 text-2xl font-bold text-gray-700 hover:text-red-600"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Download Course Brochure
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full border px-4 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full border px-4 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full border px-4 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Qualification
                </label>
                <input
                  type="text"
                  value={formData.qualification}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      qualification: e.target.value,
                    })
                  }
                  required
                  className="w-full border px-4 py-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1BD46C] text-black py-2 rounded font-semibold"
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
