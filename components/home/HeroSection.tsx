"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

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

const HeroSection = () => {
  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setSnapCount(api.scrollSnapList().length);
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

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
                        : "bg-muted-foreground/40 hover:bg-muted-foreground/70"
                    )}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>

          {/* -------- Right Side Banners -------- */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden h-1/2">
              <Image
                src="/images/hero/Galaxy-Watch-7-3867.webp"
                alt="Galaxy Watch"
                width={400}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>

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
