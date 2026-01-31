"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Mobile Phone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80",
    link: "/category/mobile-phone",
  },
  {
    title: "Tablet",
    image:
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&q=80",
    link: "/category/tablet",
  },
  {
    title: "Laptop",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80",
    link: "/category/laptop",
  },
  {
    title: "Airpods",
    image:
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&q=80",
    link: "/category/airpods",
  },
  {
    title: "Wireless Headphone",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80",
    link: "/category/wireless-headphone",
  },
  {
    title: "Wired Headphone",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80",
    link: "/category/wired-headphone",
  },
  {
    title: "Headphone",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
    link: "/category/headphone",
  },
  {
    title: "Speakers",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80",
    link: "/category/speakers",
  },
  {
    title: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80",
    link: "/category/smart-watch",
  },
  {
    title: "Power Bank",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80",
    link: "/category/power-bank",
  },
  {
    title: "Wireless Charger",
    image:
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&q=80",
    link: "/category/wireless-charger",
  },
  {
    title: "Cables",
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&q=80",
    link: "/category/cables",
  },
];

const FeaturedCategories = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Featured Categories
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              href={category.link}
              key={`${category.title}-${index}`}
              className="group block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="relative h-48 md:h-56 rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />

                {/* Animated Arrow - Top Right */}
                <div className="absolute top-3 right-3">
                  <motion.div
                    className="bg-white rounded-full p-1.5 shadow-lg"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{
                      x: hoveredIndex === index ? 0 : -50,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-900" />
                  </motion.div>
                </div>

                {/* Category Name - Bottom Center */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center">
                  <h3 className="text-white font-semibold text-sm md:text-base text-center line-clamp-2">
                    {category.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
