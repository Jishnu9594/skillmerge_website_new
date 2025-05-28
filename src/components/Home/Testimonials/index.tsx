"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { TestimonialData } from "@/app/api/data";

const Testimonial = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3, slidesToScroll: 1, dots: false },
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: false },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: false },
      },
    ],
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {Array(fullStars)
          .fill(null)
          .map((_, i) => (
            <Icon
              key={`full-${i}`}
              icon="tabler:star-filled"
              className="text-green-400 text-xl inline-block"
            />
          ))}
        {halfStars > 0 && (
          <Icon
            icon="tabler:star-half-filled"
            className="text-green-400 text-xl inline-block"
          />
        )}
        {Array(emptyStars)
          .fill(null)
          .map((_, i) => (
            <Icon
              key={`empty-${i}`}
              icon="tabler:star-filled"
              className="text-gray-600 text-xl inline-block"
            />
          ))}
      </>
    );
  };

  return (
    <section id="testimonial" className="bg-black py-20 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-12 tracking-wider">
          Real Stories from Our Students
        </h2>

        <Slider {...settings}>
          {TestimonialData.map((items, i) => (
            <div key={i}>
              <div
                className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-green-500/30 rounded-xl m-4 p-6 shadow-lg transition-all duration-300 hover:scale-[1.01] 
                flex flex-col justify-between h-[340px] overflow-hidden"
              >
                {/* Top: Image */}
                <div className="flex items-center mb-4">
                  <Image
                    src={items.imgSrc}
                    alt={items.name}
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-green-400"
                  />
                </div>

                {/* Middle: Comment */}
                <p className="text-sm text-gray-300 mb-4 font-light leading-relaxed line-clamp-4">
                  {items.comment}
                </p>

                {/* Bottom: Name, Profession, Rating */}
                <div className="flex justify-between items-center mt-auto pt-4">
                  <div>
                    <h3 className="text-md font-semibold text-green-400">
                      {items.name}
                    </h3>
                    <p className="text-xs font-light text-gray-500">
                      {items.profession}
                    </p>
                  </div>
                  <div className="flex">{renderStars(items.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
