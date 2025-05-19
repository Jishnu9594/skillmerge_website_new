"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TruestedCompanies } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

// Background animation component (you can extract this to a separate component if reused)
const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute w-[150%] h-[150%] bg-gradient-to-tr from-[#011A10] via-[#010D07] to-[#011A10] animate-pulse-slow opacity-20 rotate-12"></div>
    <div className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle,#1BD46C_1px,transparent_1px)] bg-[length:20px_20px] opacity-10 animate-movePattern"></div>
  </div>
);

// Custom animation styles (you must add these to your global CSS, e.g. in `globals.css`)
/*
@keyframes movePattern {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}
.animate-movePattern {
  animation: movePattern 60s linear infinite;
}
.animate-pulse-slow {
  animation: pulse-slow 12s ease-in-out infinite;
}
*/

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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="relative bg-black text-white text-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <h2 className="text-2xl font-semibold mb-6">
          Trusted by companies of all sizes
        </h2>
        <div className="py-14 border-b border-gray-700">
          <Slider {...settings}>
            {TruestedCompanies.map((item, i) => (
              <div key={i} className="flex justify-center items-center">
                <Image
                  src={`${getImagePrefix()}${item.imgSrc}`}
                  alt={item.imgSrc}
                  width={116}
                  height={36}
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
