"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrustedCompanies } from "@/app/api/data";

const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    {/* Soft gradient animation */}
    <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#0a0110] via-[#0a0018] to-[#0a0110] animate-pulse-slow opacity-20 rotate-12"></div>

    {/* Purple cyber grid pattern */}
    <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,#A855F7_1px,transparent_1px)] bg-[length:20px_20px] opacity-15 animate-movePattern"></div>
  </div>
);

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 700, settings: { slidesToShow: 2 } },
      { breakpoint: 500, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="relative bg-black text-white text-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        {/* White heading */}
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Trusted by companies of all sizes
        </h2>

        <div className="py-14 border-b border-purple-800">
          <Slider {...settings}>
            {TrustedCompanies.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center transition duration-300 hover:scale-105"
              >
                <img
                  src={item.imgSrc}
                  alt={`Trusted company logo ${i + 1}`}
                  width={116}
                  height={36}
                  loading="lazy"
                  draggable={false}
                  className="object-contain opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Companies;
