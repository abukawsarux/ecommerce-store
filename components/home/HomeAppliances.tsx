"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const tabs = [
  "Mixer Grinder & Blender",
  "Microwave Oven",
  "Geyser",
  "Air Fryer",
  "Electric Kettle",
  "Induction Cooker",
];

const products = [
  {
    title: "Philips HL7757 3 Jars Mixer Grinder - 750W",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 5,950",
  },
  {
    title: "RedSwiss RSFJ-004 Multifunction Juicer",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 5,500",
  },
  {
    title: "RedSwiss BL-DIPLOMAT Blender - 1500W",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 6,600",
  },
  {
    title: "PHILIPS HR1351/90 Hand Blender - 250W",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 4,400",
    oldPrice: "৳5,890",
    off: "৳ 1,490 OFF",
  },
  {
    title: "Panasonic MX-AC400 4 Jars Mixer Grinder",
    image: "/images/products/Galaxy-S25-Ultra-5G-Titanium-Silverblue-3141.webp",
    price: "৳ 11,600",
    oldPrice: "৳17,000",
    off: "৳ 5,400 OFF",
  },
];

const HomeAppliances = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-white py-10">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">
            <span className="text-gray-900">Home </span>
            <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
              Appliances
            </span>
          </h2>

          {/* Navigation buttons (UI only) */}
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition">
              ‹
            </button>
            <button className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/90 transition">
              ›
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm transition
                ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-white rounded-2xl border p-4 hover:shadow-lg transition group"
            >
              {/* Image */}
              <div className="relative w-full h-44 mb-4">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold mb-2 group-hover:text-primary transition">
                {product.title}
              </h3>

              {/* Price */}
              <div className="space-y-1">
                <p className="font-bold">{product.price}</p>

                {product.oldPrice && (
                  <div className="flex items-center gap-2 text-xs">
                    <span className="line-through text-gray-400">
                      {product.oldPrice}
                    </span>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      {product.off}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAppliances;
