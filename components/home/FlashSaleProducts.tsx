"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Clock, Flame } from "lucide-react";

// Product data type
interface FlashSaleProduct {
  id: string;
  name: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  discountPercentage: number;
  rating: number;
  soldCount: number;
  stock: number;
  link: string;
}

// Sample flash sale products data
const flashSaleProducts: FlashSaleProduct[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max 256GB",
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80",
    originalPrice: 1299,
    discountPrice: 999,
    discountPercentage: 23,
    rating: 4.8,
    soldCount: 1234,
    stock: 45,
    link: "/product/iphone-15-pro-max",
  },
  {
    id: "2",
    name: "Sony WH-1000XM5 Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80",
    originalPrice: 399,
    discountPrice: 299,
    discountPercentage: 25,
    rating: 4.9,
    soldCount: 2156,
    stock: 23,
    link: "/product/sony-wh-1000xm5",
  },
  {
    id: "3",
    name: "Samsung Galaxy Watch 6 Classic",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
    originalPrice: 449,
    discountPrice: 329,
    discountPercentage: 27,
    rating: 4.7,
    soldCount: 856,
    stock: 67,
    link: "/product/galaxy-watch-6",
  },
  {
    id: "4",
    name: "MacBook Air M2 13-inch",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    originalPrice: 1199,
    discountPrice: 949,
    discountPercentage: 21,
    rating: 4.9,
    soldCount: 945,
    stock: 12,
    link: "/product/macbook-air-m2",
  },
  {
    id: "5",
    name: "Apple AirPods Pro 2nd Gen",
    image:
      "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80",
    originalPrice: 249,
    discountPrice: 199,
    discountPercentage: 20,
    rating: 4.8,
    soldCount: 3421,
    stock: 89,
    link: "/product/airpods-pro-2",
  },
  {
    id: "6",
    name: "iPad Pro 11-inch M2",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",
    originalPrice: 899,
    discountPrice: 749,
    discountPercentage: 17,
    rating: 4.8,
    soldCount: 678,
    stock: 34,
    link: "/product/ipad-pro-11",
  },
];

const FlashSaleSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Countdown timer (example: 6 hours)
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 6,
    minutes: 30,
    seconds: 45,
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-xl">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Flash Sale
              </h2>
              <p className="text-sm text-gray-600">Limited time offers</p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-red-500" />
            <div className="flex items-center gap-2">
              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-center min-w-[3rem]">
                <div className="text-xl font-bold">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400">Hours</div>
              </div>
              <span className="text-xl font-bold text-gray-900">:</span>
              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-center min-w-[3rem]">
                <div className="text-xl font-bold">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400">Mins</div>
              </div>
              <span className="text-xl font-bold text-gray-900">:</span>
              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-center min-w-[3rem]">
                <div className="text-xl font-bold">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-400">Secs</div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <Link
            href="/flash-sale"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all ${
              !canScrollPrev ? "opacity-0 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all ${
              !canScrollNext ? "opacity-0 cursor-not-allowed" : "opacity-100"
            }`}
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden py-2" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {flashSaleProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-[0_0_280px] md:flex-[0_0_300px] min-w-0"
                >
                  <Link href={product.link}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full border border-gray-100">
                      {/* Product Image */}
                      <div className="relative aspect-square overflow-hidden bg-gray-100 group">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Discount Badge */}
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          -{product.discountPercentage}%
                        </div>
                        {/* Stock Progress */}
                        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-600">Stock</span>
                            <span className="text-xs font-semibold text-red-500">
                              {product.stock} left
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{
                                width: `${(product.stock / 100) * 100}%`,
                              }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm md:text-base">
                          {product.name}
                        </h3>

                        {/* Rating & Sold */}
                        <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            <span>{product.rating}</span>
                          </div>
                          <span>•</span>
                          <span>{product.soldCount} sold</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-end gap-2">
                          <span className="text-2xl font-bold text-red-500">
                            ${product.discountPrice}
                          </span>
                          <span className="text-sm text-gray-400 line-through mb-1">
                            ${product.originalPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button for Mobile */}
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/flash-sale"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Deals
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
