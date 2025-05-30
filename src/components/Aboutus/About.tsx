import Image from "next/image";

const AboutUsHero = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white py-16 px-6 sm:px-12 md:px-16 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 min-h-[150%] bg-[radial-gradient(circle,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-10 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto mt-20 flex flex-col-reverse md:flex-row gap-20 items-center justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold border-l-4 border-green-500 pl-4 tracking-wide text-white">
            Who We Are
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            SkillMerge is Kerala’s first hands-on cybersecurity training
            institute. We are a team of experts and trainers who believe
            learning should be practical, not just theory. Our courses focus on
            real experience with live labs and real challenges. Whether you’re a
            student, fresher, or professional, we help you build the skills
            needed for a career in cybersecurity. We’re here to support you
            every step of the way.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-black border-l-4 border-green-500 p-4 rounded shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                Our Mission
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                SkillMerge offers practical, affordable cybersecurity training
                focused on real-world skills for jobs and internships—not just
                certificates.
              </p>
            </div>
            <div className="bg-black border-l-4 border-green-500 p-4 rounded shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                Our Vision
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                We aim to be India’s most trusted cybersecurity learning
                platform. With the right support, anyone can start a great
                career, join top companies, and help build a safer internet.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section – appears first on mobile */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-80 h-80 sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] rounded-xl overflow-hidden">
            <Image
              src="/images/mentor/aboutus.png"
              alt="Team Group"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg
          className="w-8 h-8 text-[#1BD46C] animate-bounce"
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
    </section>
  );
};

export default AboutUsHero;
