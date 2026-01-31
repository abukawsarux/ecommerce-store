"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Zap } from "lucide-react";
import ProductCard, { Product } from "../shared/ProductCard";
import Carousel from "../shared/Carosel";

// Sample new arrivals products data
const newArrivals: Product[] = [
  {
    id: "na-1",
    name: "iPhone 16 Pro Max - Desert Titanium",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80",
    price: 1399,
    rating: 4.9,
    reviewCount: 127,
    category: "Smartphones",
    inStock: true,
    isNew: true,
    link: "/product/iphone-16-pro-max",
  },
  {
    id: "na-2",
    name: "Samsung Galaxy S24 Ultra 5G",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80",
    price: 1299,
    rating: 4.8,
    reviewCount: 89,
    category: "Smartphones",
    inStock: true,
    isNew: true,
    link: "/product/galaxy-s24-ultra",
  },
  {
    id: "na-3",
    name: "Meta Quest 3 VR Headset 512GB",
    image:
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=500&q=80",
    price: 649,
    rating: 4.7,
    reviewCount: 234,
    category: "VR & AR",
    inStock: true,
    isNew: true,
    link: "/product/meta-quest-3",
  },
  {
    id: "na-4",
    name: "DJI Mini 4 Pro Drone with RC 2",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80",
    price: 1099,
    rating: 4.9,
    reviewCount: 156,
    category: "Drones",
    inStock: true,
    isNew: true,
    link: "/product/dji-mini-4-pro",
  },
  {
    id: "na-5",
    name: "Sony A7C II Full-Frame Mirrorless",
    image:
      "https://images.unsplash.com/photo-1606980624540-667bf0c6c93e?w=500&q=80",
    price: 2199,
    rating: 4.8,
    reviewCount: 67,
    category: "Cameras",
    inStock: true,
    isNew: true,
    link: "/product/sony-a7c-ii",
  },
  {
    id: "na-6",
    name: "Nothing Ear (2) Active Noise Cancelling",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    price: 149,
    rating: 4.6,
    reviewCount: 445,
    category: "Audio",
    inStock: true,
    isNew: true,
    link: "/product/nothing-ear-2",
  },
  {
    id: "na-7",
    name: "Microsoft Surface Pro 10 with Pen",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",
    price: 1499,
    rating: 4.7,
    reviewCount: 98,
    category: "Tablets",
    inStock: true,
    isNew: true,
    link: "/product/surface-pro-10",
  },
  {
    id: "na-8",
    name: "Logitech MX Master 4 Wireless Mouse",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    price: 129,
    rating: 4.9,
    reviewCount: 1234,
    category: "Accessories",
    inStock: true,
    isNew: true,
    link: "/product/mx-master-4",
  },
  {
    id: "na-9",
    name: "Apple Watch Ultra 2 - Black Titanium",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80",
    price: 849,
    rating: 4.8,
    reviewCount: 567,
    category: "Wearables",
    inStock: true,
    isNew: true,
    link: "/product/watch-ultra-2",
  },
  {
    id: "na-10",
    name: "Bose QuietComfort Ultra Earbuds",
    image:
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80",
    price: 299,
    rating: 4.7,
    reviewCount: 789,
    category: "Audio",
    inStock: true,
    isNew: true,
    link: "/product/bose-qc-ultra",
  },
];

const NewArrivals = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                New Arrivals
              </h2>
              <p className="text-sm text-gray-600">
                Just landed - Fresh picks for you
              </p>
            </div>
          </div>

          {/* View All Button */}
          <Link
            href="/products/new-arrivals"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Carousel */}
        <Carousel>
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="flex-[0_0_280px] md:flex-[0_0_300px] min-w-0"
            >
              <ProductCard product={product} showQuickActions={true} />
            </div>
          ))}
        </Carousel>

        {/* View All Button for Mobile */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/products/new-arrivals"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All New Arrivals
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
