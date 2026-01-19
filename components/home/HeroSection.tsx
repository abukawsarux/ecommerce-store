"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroSlides = [
  "/images/hero/iPhone-17-Series-5333.webp",
  "/images/hero/iPhone-17-Series-5333.webp",
  "/images/hero/iPhone-17-Series-5333.webp",
  "/images/hero/iPhone-17-Series-5333.webp",
  "/images/hero/iPhone-17-Series-5333.webp",
  "/images/hero/iPhone-17-Series-5333.webp",
  "/images/hero/iPhone-17-Series-5333.webp",
  "/images/hero/iPhone-17-Series-5333.webp",
];

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* -------- Left Main Banner / Swiper -------- */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="hero-swiper"
            >
              {heroSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={slide}
                    alt="Hero Banner"
                    width={1200}
                    height={500}
                    priority={index === 0}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* -------- Right Side Banners -------- */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Top Card */}
            <div className="relative rounded-2xl overflow-hidden h-1/2">
              <Image
                src="/images/hero/Galaxy-Watch-7-3867.webp"
                alt="Galaxy Watch"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Card */}
            <div className="relative rounded-2xl overflow-hidden h-1/2">
              <Image
                src="/images/hero/Galaxy-Watch-7-3867.webp"
                alt="Induction Cooker"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
