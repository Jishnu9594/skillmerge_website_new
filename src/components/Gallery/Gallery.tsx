// app/components/GalleryCarousel.tsx
"use client";

import { useEffect, useRef } from "react";

const images = [
  "/images/courses/cyber.jpg",
  "/images/courses/cyber.jpg",
  "/images/courses/cyber.jpg",
  "/images/courses/cyber.jpg",
  "/images/courses/cyber.jpg",
  "/images/courses/cyber.jpg",
];

export default function GalleryCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        const scrollAmount = container.clientWidth;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="min-w-[300px] h-64 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
