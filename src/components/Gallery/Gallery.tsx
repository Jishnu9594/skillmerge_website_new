"use client";

export default function HeroGallery() {
  const images = [
    "/images/gallery/ga21.jpeg",
    "/images/gallery/ga20.jpeg",
    "/images/gallery/ga19.jpeg",
    "/images/gallery/ga2.jpeg",
    "/images/gallery/ga3.jpeg",
    "/images/gallery/ga4.jpeg",
    "/images/gallery/ga5.jpeg",
    "/images/gallery/ga6.jpeg",
    "/images/gallery/ga7.jpeg",
    "/images/gallery/ga8.jpeg",
    "/images/gallery/ga9.jpeg",
    "/images/gallery/ga10.jpeg",
    "/images/gallery/ga13.jpeg",
    "/images/gallery/ga14.jpeg",
    "/images/gallery/ga15.jpeg",
    "/images/gallery/ga16.jpeg",
    "/images/gallery/ga17.jpeg",
    "/images/gallery/ga18.jpeg",
    "/images/gallery/ga1.jpeg",
    "/images/gallery/ga22.jpeg",
    "/images/gallery/ga23.jpeg",
    "/images/gallery/ga24.jpeg",
    "/images/gallery/ga25.jpeg",
    "/images/gallery/ga26.jpeg",
    "/images/gallery/ga27.jpeg",
    "/images/gallery/ga28.jpeg",
    "/images/gallery/ga29.jpeg",
    "/images/gallery/ga30.jpeg",
    "/images/gallery/ga31.jpeg",
    "/images/gallery/ga51.jpeg",
    "/images/gallery/ga2.jpeg",
    "/images/gallery/ga34.jpeg",
    "/images/gallery/ga35.jpeg",
    "/images/gallery/ga36.jpeg",
    "/images/gallery/ga37.jpeg",
    "/images/gallery/ga38.jpeg",
    "/images/gallery/ga39.jpeg",
    "/images/gallery/ga40.jpeg",
    "/images/gallery/ga41.jpeg",
    "/images/gallery/ga42.jpeg",
    "/images/gallery/ga43.jpeg",
    "/images/gallery/ga44.jpeg",
    "/images/gallery/ga45.jpeg",
    "/images/gallery/ga52.jpeg",
    "/images/gallery/ga53.jpeg",
    "/images/gallery/ga54.jpeg",
    "/images/gallery/ga55.jpeg",
    "/images/gallery/ga56.jpeg",
    "/images/gallery/ga57.jpeg",
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
              className="w-full h-80 sm:h-96 md:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
