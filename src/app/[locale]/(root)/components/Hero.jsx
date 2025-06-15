"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { heroItem } from "@/lib/heroItem";
import Image from "next/image";

export default function Hero() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api?.scrollSnapList()?.length);
    setCurrent(api?.selectedScrollSnap() + 1);

    api?.on("select", () => {
      setCurrent(api?.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);
  return (
    <div className="">
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className={`ltr:flex-row rtl:flex-row-reverse`}>
            {heroItem?.map((slide) => (
              <CarouselItem key={slide?.id} className="w-full">
                <div
                  className={`relative overflow-hidden rounded-lg w-full ${slide?.color}`}
                >
                  <Image
                    dir="ltr"
                    width={1000}
                    height={1000}
                    src={slide?.image || "/placeholder.svg"}
                    alt={slide?.title}
                    className="w-full h-full opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {slide?.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/80 max-w-lg">
                      {slide?.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {Array.from({ length: count })?.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index + 1 === current
                ? "bg-primary w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
