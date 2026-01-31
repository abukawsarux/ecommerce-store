"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import Carousel from "../shared/Carosel";
import ProductCard, { Product } from "../shared/ProductCard";

// Sample featured products data
const featuredProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max - Titanium Blue",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80",
    price: 1199,
    originalPrice: 1299,
    rating: 4.9,
    reviewCount: 2847,
    category: "Smartphones",
    inStock: true,
    isNew: true,
    isFeatured: true,
    link: "/product/iphone-15-pro-max",
  },
  {
    id: "2",
    name: "MacBook Pro 16-inch M3 Max",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    price: 2499,
    originalPrice: 2799,
    rating: 4.8,
    reviewCount: 1523,
    category: "Laptops",
    inStock: true,
    isFeatured: true,
    link: "/product/macbook-pro-16",
  },
  {
    id: "3",
    name: "Sony WH-1000XM5 Noise Cancelling",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80",
    price: 349,
    originalPrice: 399,
    rating: 4.9,
    reviewCount: 4521,
    category: "Audio",
    inStock: true,
    isFeatured: true,
    link: "/product/sony-wh-1000xm5",
  },
  {
    id: "4",
    name: "iPad Air M2 11-inch with Magic Keyboard",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",
    price: 849,
    originalPrice: 999,
    rating: 4.7,
    reviewCount: 892,
    category: "Tablets",
    inStock: true,
    isNew: true,
    isFeatured: true,
    link: "/product/ipad-air-m2",
  },
  {
    id: "5",
    name: "Samsung Galaxy Watch 6 Classic",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
    price: 399,
    originalPrice: 449,
    rating: 4.6,
    reviewCount: 1245,
    category: "Wearables",
    inStock: true,
    isFeatured: true,
    link: "/product/galaxy-watch-6",
  },
  {
    id: "6",
    name: "Apple AirPods Pro 2nd Generation",
    image:
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80",
    price: 229,
    originalPrice: 249,
    rating: 4.8,
    reviewCount: 6789,
    category: "Audio",
    inStock: true,
    isFeatured: true,
    link: "/product/airpods-pro-2",
  },
  {
    id: "7",
    name: "Dell XPS 15 OLED Touch Display",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80",
    price: 1899,
    originalPrice: 2199,
    rating: 4.7,
    reviewCount: 567,
    category: "Laptops",
    inStock: true,
    isFeatured: true,
    link: "/product/dell-xps-15",
  },
  {
    id: "8",
    name: "Canon EOS R6 Mark II Mirrorless",
    image:
      "https://images.unsplash.com/photo-1606980624540-667bf0c6c93e?w=500&q=80",
    price: 2399,
    originalPrice: 2599,
    rating: 4.9,
    reviewCount: 234,
    category: "Cameras",
    inStock: true,
    isNew: true,
    isFeatured: true,
    link: "/product/canon-eos-r6",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Featured Products
              </h2>
              <p className="text-sm text-gray-600">
                Handpicked favorites just for you
              </p>
            </div>
          </div>

          {/* View All Button */}
          <Link
            href="/products/featured"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Carousel */}
        <Carousel>
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="flex-[0_0_280px] md:flex-[0_0_300px] min-w-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </Carousel>

        {/* View All Button for Mobile */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/products/featured"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Products
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
