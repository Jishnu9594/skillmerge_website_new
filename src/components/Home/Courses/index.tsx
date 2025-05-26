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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="courses"
      className="bg-black min-h-screen py-20 relative overflow-hidden font-blog"
    >
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

      <div className="container mx-auto lg:max-w-screen-xl px-4 relative z-10">
        <div className="sm:flex justify-between items-center mb-20">
          <h2 className="text-white text-4xl lg:text-5xl font-bold mb-5 sm:mb-0">
            Popular Courses
          </h2>
          <Link
            href="/"
            className="text-white text-lg font-semibold hover:text-[#00cc7a] transition-colors duration-300"
          >
            Explore Courses &gt;
          </Link>
        </div>

        <Slider {...settings}>
          {courseData.map((items, i) => (
            <div key={i} className="px-2">
              <div className="bg-black border-cyber-green rounded-2xl shadow-cyber-green p-5 h-[530px] flex flex-col justify-between card-hover">
                <div>
                  <div className="relative rounded-3xl overflow-hidden mb-6">
                    <Image
                      src={`${getImagePrefix()}${items.imgSrc}`}
                      alt="course-image"
                      width={389}
                      height={262}
                      className="rounded-xl mx-auto"
                    />
                    <div className="absolute right-5 -bottom-2 bg-[#008755] rounded-full p-6">
                      <h3 className="text-white uppercase text-center text-sm font-medium">
                        best <br />
                        seller
                      </h3>
                    </div>
                  </div>

                  <Link
                    href="#"
                    className="text-white text-2xl font-bold block mb-3"
                  >
                    {items.heading}
                  </Link>
                  <p className="text-white text-base opacity-80 mb-6 line-clamp-3">
                    {items.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto pt-6 border-t border-cyber-green">
                  <div className="flex items-center gap-2">
                    <Icon
                      icon="solar:notebook-minimalistic-outline"
                      className="text-cyber-green text-xl"
                    />
                    <span className="text-white text-base opacity-90">
                      {items.classes} classes
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon
                      icon="solar:users-group-rounded-linear"
                      className="text-cyber-green text-xl"
                    />
                    <span className="text-white text-base opacity-90">
                      {items.students} students
                    </span>
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
