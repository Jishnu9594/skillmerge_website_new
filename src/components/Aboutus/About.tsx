import Image from "next/image";

const teamImages = [
  "/images/team1.jpg",
  "/images/team2.jpg",
  "/images/team3.jpg",
];

const decorativeImages = ["/images/decorative1.svg", "/images/decorative2.svg"];

const AboutUsSection: React.FC = () => {
  return (
    <section className="w-screen h-screen bg-black text-white flex flex-col md:flex-row items-center md:items-start gap-12 p-6 md:p-20">
      {/* Left side: Team Images */}
      <div className="flex flex-col space-y-6 md:space-y-8 w-full md:w-1/3 h-full overflow-y-auto">
        {teamImages.map((src, idx) => (
          <div
            key={idx}
            className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg border-2 border-green-500"
          >
            <Image
              src={src}
              alt={`Team member ${idx + 1}`}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        ))}
        {/* Decorative Images */}
        <div className="flex space-x-4 mt-6 justify-center md:justify-start">
          {decorativeImages.map((src, idx) => (
            <div
              key={idx}
              className="w-14 h-14 md:w-20 md:h-20 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <Image
                src={src}
                alt={`Decorative ${idx + 1}`}
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Text content */}
      <div className="w-full md:w-2/3 space-y-8 max-h-full overflow-y-auto">
        <h2 className="text-5xl font-bold border-l-4 border-green-500 pl-4">
          Who We Are
        </h2>
        <p className="text-gray-300 leading-relaxed max-w-3xl">
          At Skill Merge, we are a passionate team dedicated to cybersecurity
          education and innovation. Our mission is to empower professionals with
          the skills and knowledge necessary to protect digital assets and build
          safer networks worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {/* Mission */}
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-400 leading-relaxed">
              To deliver world-class cybersecurity training that is accessible,
              practical, and up-to-date with the latest industry standards and
              threats.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-semibold text-green-400 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-400 leading-relaxed">
              To be the leading platform shaping the future of cybersecurity
              experts, driving innovation, and making the digital world a safer
              place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
