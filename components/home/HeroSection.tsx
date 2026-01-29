"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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

// Right side banner data
const rightBanners = [
  {
    id: 1,
    image: "/images/hero/Galaxy-Watch-7-3867.webp",
    alt: "Galaxy Watch",
    link: "/products/galaxy-watch",
  },
  {
    id: 2,
    image: "/images/hero/Printer-Web-Slider-5816.webp",
    alt: "iPhone 17",
    link: "/products/iphone-17",
  },
  {
    id: 3,
    image: "/images/hero/starlink-slider-7875.webp",
    alt: "Smart Device",
    link: "/products/smart-device",
  },
];

const HeroSection = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  );

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);

  // Right banner animation state
  const [currentBannerIndex, setCurrentBannerIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setSnapCount(api.scrollSnapList().length);
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-rotate right banners
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % rightBanners.length);
    }, 3000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white">
      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* -------- Left Main Banner / Carousel -------- */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden">
            <Carousel
              setApi={setApi}
              plugins={[autoplay.current]}
              opts={{ loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {heroSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[500px]">
                      <Image
                        src={slide}
                        alt="Hero Banner"
                        fill
                        priority={index === 0}
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* -------- Pagination Dots -------- */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: snapCount }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                      "h-2.5 w-2.5 rounded-full transition-all",
                      selectedIndex === index
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/40 hover:bg-muted-foreground/70",
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          {/* -------- Right Side Banners -------- */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Top Static Banner */}
            <div className="relative rounded-2xl overflow-hidden h-1/2">
              <Image
                src="/images/hero/Galaxy-Watch-7-3867.webp"
                alt="Galaxy Watch"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom Animated Banner */}
            <div className="relative rounded-2xl overflow-hidden h-1/2">
              <AnimatePresence initial={false}>
                <motion.div
                  key={rightBanners[currentBannerIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  <Link
                    href={rightBanners[currentBannerIndex].link}
                    className="block w-full h-full"
                  >
                    <Image
                      src={rightBanners[currentBannerIndex].image}
                      alt={rightBanners[currentBannerIndex].alt}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
