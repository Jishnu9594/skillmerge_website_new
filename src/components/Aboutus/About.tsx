import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";

const teamMembers = [
  {
    src: "/images/mentor/ceo.png",
    name: "CEO",
    linkedin: "https://linkedin.com/in/your-ceo",
    instagram: "https://instagram.com/your-ceo",
  },
  {
    src: "/images/mentor/ceo.png",
    name: "CTO",
    linkedin: "https://linkedin.com/in/your-cto",
    instagram: "https://instagram.com/your-cto",
  },
  {
    src: "/images/mentor/ceo.png",
    name: "CFO",
    linkedin: "https://linkedin.com/in/your-cfo",
    instagram: "https://instagram.com/your-cfo",
  },
];

const SocialOverlay = ({
  linkedin,
  instagram,
}: {
  linkedin: string;
  instagram: string;
}) => (
  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-6 opacity-0 hover:opacity-100 transition-opacity duration-300 z-30">
    <a
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-green-400 transition"
    >
      <Linkedin size={28} />
    </a>
    <a
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-pink-400 transition"
    >
      <Instagram size={28} />
    </a>
  </div>
);

const AboutUsHero = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white py-16 px-6 sm:px-12 md:px-16 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,0,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-10 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto mt-20 flex flex-col md:flex-row gap-20 items-center justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold border-l-4 border-green-500 pl-4 tracking-wide text-white">
            Who We Are
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            We are a dynamic cybersecurity team committed to empowering
            individuals and businesses with top-tier security education,
            strategies, and solutions. Our passion lies in building a safer
            digital future.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-black border-l-4 border-green-500 p-4 rounded shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                Our Mission
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                To provide actionable, real-world cybersecurity training and
                solutions that drive confidence and safety in a connected world.
              </p>
            </div>
            <div className="bg-black border-l-4 border-green-500 p-4 rounded shadow-md">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                Our Vision
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                To become the most trusted source for cybersecurity knowledge,
                training, and innovation globally.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-6 md:hidden w-4/5 mx-auto mt-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="relative w-full h-64 rounded-xl border-2 border-green-500 overflow-hidden shadow-[0_0_20px_rgba(0,255,0,0.3)] group"
              >
                <Image
                  src={member.src}
                  alt={`Team ${idx}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
                <SocialOverlay
                  linkedin={member.linkedin}
                  instagram={member.instagram}
                />
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-center relative h-[480px]">
            {/* Left */}
            <div className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-xl border-2 border-green-500 overflow-hidden shadow-[0_0_20px_rgba(0,255,0,0.3)] z-10 group hover:scale-105 transition-transform duration-300">
              <Image
                src={teamMembers[0].src}
                alt="Team Left"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <SocialOverlay
                linkedin={teamMembers[0].linkedin}
                instagram={teamMembers[0].instagram}
              />
            </div>

            {/* Center */}
            <div className="z-20 w-64 h-64 sm:w-72 sm:h-72 rounded-xl border-2 border-green-500 overflow-hidden shadow-[0_0_40px_rgba(0,255,0,0.5)] scale-110 group relative">
              <Image
                src={teamMembers[1].src}
                alt="Team Center"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <SocialOverlay
                linkedin={teamMembers[1].linkedin}
                instagram={teamMembers[1].instagram}
              />
            </div>

            {/* Right */}
            <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 rounded-xl border-2 border-green-500 overflow-hidden shadow-[0_0_20px_rgba(0,255,0,0.3)] z-10 group hover:scale-105 transition-transform duration-300">
              <Image
                src={teamMembers[2].src}
                alt="Team Right"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <SocialOverlay
                linkedin={teamMembers[2].linkedin}
                instagram={teamMembers[2].instagram}
              />
            </div>
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
