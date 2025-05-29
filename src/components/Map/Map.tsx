// app/components/MapSection.tsx
import React from "react";

const MapSection = () => {
  return (
    <section className="bg-black py-16 text-white font-blog" id="location">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Location</h2>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Visit our SkillMerge hub located in Kochi, Kerala.
        </p>

        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border-2 border-cyber-green">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2517875809303!2d76.31306797414548!3d9.996048490109152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2e8045df59%3A0x7d42aca33655f599!2sExperts%20Skillmerge%20hub%20Pvt%20ltd!5e0!3m2!1sen!2sin!4v1748495618087!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
