"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { courseData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Courses = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
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
          .fill(0)
          .map((_, i) => (
            <Icon
              key={"full-" + i}
              icon="tabler:star-filled"
              className="text-cyber-green text-xl inline-block"
            />
          ))}
        {halfStars > 0 && (
          <Icon
            icon="tabler:star-half-filled"
            className="text-cyber-green text-xl inline-block"
          />
        )}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <Icon
              key={"empty-" + i}
              icon="tabler:star-filled"
              className="text-gray-600 text-xl inline-block"
            />
          ))}
      </>
    );
  };

  return (
    <section
      id="courses"
      className="bg-black min-h-screen py-20 relative overflow-hidden font-blog"
    >
      {/* === Custom Styles === */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        .font-blog {
          font-family: 'Inter', sans-serif;
        }

        .text-cyber-green {
          color: #00ff99;
        }

        .border-cyber-green {
          border: 1.5px solid #00ff99;
        }

        .shadow-cyber-green {
          box-shadow: 0 0 6px #00ff99aa;
        }

        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 14px #00ff99cc;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>

      {/* === Content === */}
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 relative z-10">
        <div className="sm:flex justify-between items-center mb-20">
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-5 sm:mb-0 font-blog">
            Popular Courses
          </h2>
          <Link
            href="/"
            className="text-white text-lg font-semibold hover:text-[#00cc7a] transition-colors duration-300 font-blog"
          >
            Explore Courses &gt;
          </Link>
        </div>

        <Slider {...settings}>
          {courseData.map((items, i) => (
            <div key={i}>
              <div className="bg-black border-cyber-green m-3 mb-12 px-3 pt-3 pb-12 rounded-2xl shadow-cyber-green h-full card-hover">
                <div className="relative rounded-3xl overflow-hidden">
                  <Image
                    src={`${getImagePrefix()}${items.imgSrc}`}
                    alt="course-image"
                    width={389}
                    height={262}
                    className="m-auto rounded-xl"
                  />
                  <div className="absolute right-5 -bottom-2 bg-[#008755] rounded-full p-6">
                    <h3 className="text-white uppercase text-center text-sm font-medium font-blog">
                      best <br />
                      seller
                    </h3>
                  </div>
                </div>

                <div className="px-3 pt-6">
                  <Link
                    href="#"
                    className="text-white text-2xl font-bold max-w-[75%] inline-block font-blog"
                  >
                    {items.heading}
                  </Link>
                  <h3 className="text-white text-base font-normal pt-6 opacity-90 font-blog">
                    {items.name}
                  </h3>
                  <div className="flex justify-between items-center py-6 border-b border-cyber-green">
                    <div className="flex items-center gap-4">
                      <h3 className="text-[#00cc7a] text-2xl font-medium font-blog">
                        {items.rating}
                      </h3>
                      <div className="flex">{renderStars(items.rating)}</div>
                    </div>
                    <h3 className="text-white text-3xl font-medium font-blog">
                      ${items.price}
                    </h3>
                  </div>
                  <div className="flex justify-between pt-6 font-blog">
                    <div className="flex gap-4">
                      <Icon
                        icon="solar:notebook-minimalistic-outline"
                        className="text-cyber-green text-xl inline-block me-2"
                      />
                      <h3 className="text-white text-base font-medium opacity-90">
                        {items.classes} classes
                      </h3>
                    </div>
                    <div className="flex gap-4">
                      <Icon
                        icon="solar:users-group-rounded-linear"
                        className="text-cyber-green text-xl inline-block me-2"
                      />
                      <h3 className="text-white text-base font-medium opacity-90">
                        {items.students} students
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
