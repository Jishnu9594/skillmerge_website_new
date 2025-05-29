"use client";

export default function HeroGallery() {
  const images = [
    "/images/courses/cyber.jpg",
    "/images/courses/cyber.jpg",
    "/images/courses/cyber.jpg",
    "/images/courses/cyber.jpg",
    "/images/courses/cyber.jpg",
    "/images/courses/cyber.jpg",
  ];

  return (
    <section className="bg-black text-white pt-36 pb-20 px-6 md:px-12 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Our Cybersecurity Gallery
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          A glimpse into the practical, hands-on learning experience we provide.
        </p>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-500"
          >
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
