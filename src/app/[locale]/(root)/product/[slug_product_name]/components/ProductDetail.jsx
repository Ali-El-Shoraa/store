"use client";
// components/ProductGallery.tsx
import { useState } from "react";
import { ChevronRight, ZoomIn } from "lucide-react";
// import { Button } from "./ui/button";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ProductGallery({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails - vertical on desktop */}
      <div className="hidden md:flex flex-col gap-2 w-20 overflow-y-auto">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`relative aspect-square rounded-md overflow-hidden border-2 ${
              currentIndex === index ? "border-primary" : "border-transparent"
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={img}
              alt={alt}
              fill
              className="object-cover"
              sizes="64px"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative aspect-square w-full">
        <Image
          src={images[currentIndex]}
          alt={alt}
          fill
          className={`object-contain rounded-lg transition-transform duration-300 ${
            isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
          priority
        />

        {/* Zoom button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 right-4 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={() => setIsZoomed(!isZoomed)}
          aria-label={isZoomed ? "Zoom out" : "Zoom in"}
        >
          <ZoomIn className="h-5 w-5" />
        </Button>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <ChevronRight className="h-5 w-5 rotate-180" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={nextImage}
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Thumbnails - horizontal dots on mobile */}
      <div className="flex md:hidden justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-primary" : "bg-muted"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
