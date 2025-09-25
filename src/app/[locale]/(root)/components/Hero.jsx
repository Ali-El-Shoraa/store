"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { heroItem } from "@/lib/heroItem";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import AdsHero from "./AdsHero";
import { Link } from "@/i18n/navigation";

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
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-2 lg:col-span-3">
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
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
                  <CarouselItem key={slide?.id}>
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                      <Image
                        src={slide?.image || "/placeholder.svg"}
                        alt={slide?.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                        <div className="">
                          <Badge className="mb-3 bg-primary/90 hover:bg-primary text-white">
                            {slide?.badge || "Special offer"}
                          </Badge>
                          <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
                            {slide?.title}
                          </h2>
                          <p className="text-sm md:text-base text-gray-200 mb-5 max-w-md">
                            {slide?.description}
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <Button
                              size="lg"
                              className="bg-white text-gray-900 hover:bg-gray-100 font-medium rounded-full px-6 cursor-pointer"
                            >
                              <Link
                                href={slide?.link || "/search"}
                                className="flex items-center"
                              >
                                Shop now
                              </Link>
                              <ArrowRight className="mr-2 h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="lg"
                              className="text-white border-white hover:bg-white/10 rounded-full bg-transparent"
                            >
                              <Link
                                href={slide?.link || "/search"}
                                className="flex items-center"
                              >
                                learn more
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* أزرار التنقل */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3 ltr:flex-row rtl:flex-row-reverse">
                {Array.from({ length: count })?.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === current - 1
                        ? "bg-white w-8"
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <CarouselPrevious className="left-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-900 border-none shadow-md hover:bg-white h-10 w-10 rounded-full" />
              <CarouselNext className="right-4 top-1/2 transform -translate-y-1/2 bg-white/90 text-gray-900 border-none shadow-md hover:bg-white h-10 w-10 rounded-full" />
            </Carousel>
          </div>
        </div>

        <AdsHero />
      </div>
    </div>
  );
}
