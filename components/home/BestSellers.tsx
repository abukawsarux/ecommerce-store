"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, TrendingUp } from "lucide-react";
import ProductCard, { Product } from "../shared/ProductCard";
import Carousel from "../shared/Carosel";

// Sample best selling products data
const bestSellers: Product[] = [
  {
    id: "bs-1",
    name: "Apple AirPods Pro 2nd Generation",
    image:
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80",
    price: 249,
    originalPrice: 279,
    rating: 4.9,
    reviewCount: 12847,
    category: "Audio",
    inStock: true,
    link: "/product/airpods-pro-2",
  },
  {
    id: "bs-2",
    name: "Samsung Galaxy Buds 2 Pro",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    price: 199,
    originalPrice: 229,
    rating: 4.7,
    reviewCount: 8934,
    category: "Audio",
    inStock: true,
    link: "/product/galaxy-buds-2-pro",
  },
  {
    id: "bs-3",
    name: "Apple Watch Series 9 GPS 45mm",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500&q=80",
    price: 429,
    originalPrice: 459,
    rating: 4.8,
    reviewCount: 9567,
    category: "Wearables",
    inStock: true,
    link: "/product/apple-watch-9",
  },
  {
    id: "bs-4",
    name: "Anker PowerCore 20000mAh Power Bank",
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
    price: 49,
    originalPrice: 65,
    rating: 4.9,
    reviewCount: 15234,
    category: "Accessories",
    inStock: true,
    link: "/product/anker-powercore-20000",
  },
  {
    id: "bs-5",
    name: "Logitech MX Keys Wireless Keyboard",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    price: 119,
    originalPrice: 149,
    rating: 4.8,
    reviewCount: 7821,
    category: "Accessories",
    inStock: true,
    link: "/product/mx-keys",
  },
  {
    id: "bs-6",
    name: "Sony WH-1000XM5 Headphones",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80",
    price: 349,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 11456,
    category: "Audio",
    inStock: true,
    link: "/product/sony-wh-1000xm5",
  },
  {
    id: "bs-7",
    name: "Apple USB-C to Lightning Cable 2m",
    image:
      "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80",
    price: 29,
    originalPrice: 39,
    rating: 4.6,
    reviewCount: 18923,
    category: "Accessories",
    inStock: true,
    link: "/product/usb-c-lightning-cable",
  },
  {
    id: "bs-8",
    name: "Samsung 25W USB-C Fast Charger",
    image:
      "https://images.unsplash.com/photo-1625248772276-87e4ad1934a0?w=500&q=80",
    price: 34,
    originalPrice: 49,
    rating: 4.7,
    reviewCount: 9234,
    category: "Accessories",
    inStock: true,
    link: "/product/samsung-25w-charger",
  },
  {
    id: "bs-9",
    name: "Belkin 3-in-1 Wireless Charging Stand",
    image:
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=500&q=80",
    price: 129,
    originalPrice: 149,
    rating: 4.8,
    reviewCount: 5678,
    category: "Accessories",
    inStock: true,
    link: "/product/belkin-3in1-charger",
  },
  {
    id: "bs-10",
    name: "Logitech MX Master 3S Wireless Mouse",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    price: 99,
    originalPrice: 129,
    rating: 4.9,
    reviewCount: 13445,
    category: "Accessories",
    inStock: true,
    link: "/product/mx-master-3s",
  },
];

const BestSellers = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8  gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Best Sellers
              </h2>
              <p className="text-sm text-gray-600">
                Most popular products loved by our customers
              </p>
            </div>
          </div>

          {/* View All Button */}
          <Link
            href="/products/best-sellers"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Carousel */}
        <Carousel>
          {bestSellers.map((product) => (
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
            href="/products/best-sellers"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Best Sellers
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
