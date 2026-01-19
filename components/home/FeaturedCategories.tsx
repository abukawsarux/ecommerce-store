"use client";

import React from "react";
import Image from "next/image";

const categories = [
  {
    title: "Mobile Phone",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Tablet",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Laptop",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Airpods",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Wireless Headphone",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Wired Headphone",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Headphone",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Speakers",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },

  {
    title: "Starlink",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Smart Watch",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Smart Pen",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Power Adapter",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Cables",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Power Bank",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Hubs & Docks",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
  {
    title: "Wireless Charger",
    icon: "/images/categories/iPhone-17-Pro-Max-cosmic-orange-8534.webp",
  },
];

const FeaturedCategories = () => {
  return (
    <section className="bg-white py-10">
      <div className="">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10">
          <span className="text-gray-900">Featured </span>
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Categories
          </span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
          {categories.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center group cursor-pointer py-5 border-1 border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <p className="text-sm text-gray-800 group-hover:text-orange-500 transition-colors">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
