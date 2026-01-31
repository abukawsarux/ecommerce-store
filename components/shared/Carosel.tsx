"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  slideClassName?: string;
  options?: {
    loop?: boolean;
    align?: "start" | "center" | "end";
    slidesToScroll?: number;
  };
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  className = "",
  slideClassName = "",
  options = {},
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: options.loop || false,
    align: options.align || "start",
    slidesToScroll: options.slidesToScroll || 1,
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

  return (
    <div className={`relative ${className}`}>
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all ${
          !canScrollPrev ? "opacity-0 cursor-not-allowed" : "opacity-100"
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-900" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all ${
          !canScrollNext ? "opacity-0 cursor-not-allowed" : "opacity-100"
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-900" />
      </button>

      {/* Embla Carousel */}
      <div className="overflow-hidden py-2" ref={emblaRef}>
        <div className={`flex gap-4 md:gap-6 ${slideClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
