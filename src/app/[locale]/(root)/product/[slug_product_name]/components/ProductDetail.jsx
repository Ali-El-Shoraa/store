"use client";
import { useState, useCallback } from "react";
import { ChevronRight, ZoomIn, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function ProductGallery({ images = [], alt = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images?.length);
  }, [images?.length]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images?.length) % images?.length);
  }, [images?.length]);

  const selectImage = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsFullscreen(false);
    },
    [nextImage, prevImage]
  );

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* الصف الأفقي للثمبنيل على الجوال */}
      <div className="flex lg:hidden gap-2 order-3 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`h-2 w-6 rounded-full transition-all ${
              currentIndex === index ? "bg-primary w-8" : "bg-muted"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* الصورة الرئيسية */}
      <div className="relative aspect-square w-full lg:w-[calc(100%-6rem)] order-1">
        <Image
          src={images[currentIndex]}
          alt={alt}
          fill
          className={`object-contain rounded-lg transition-all duration-300 ${
            isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          }`}
          onClick={() => setIsFullscreen(true)}
          priority
          quality={100}
        />

        {/* أزرار التحكم */}
        <div className="absolute inset-0 flex items-center justify-between p-2 pointer-events-none">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 pointer-events-auto"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* زر التكبير */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 right-4 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={(e) => {
            e.stopPropagation();
            setIsFullscreen(true);
          }}
          aria-label="Zoom in"
        >
          <ZoomIn className="h-5 w-5" />
        </Button>
      </div>

      {/* الثمبنيل الرأسي على سطح المكتب */}
      <div className="hidden lg:flex flex-col gap-3 w-20 order-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => selectImage(index)}
            className={`relative aspect-square rounded-md overflow-hidden transition-all ${
              currentIndex === index
                ? "ring-2 ring-primary ring-offset-2"
                : "opacity-70 hover:opacity-100"
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={img}
              alt={alt}
              fill
              className="object-cover"
              sizes="80px"
              quality={75}
            />
          </button>
        ))}
      </div>

      {/* وضع ملء الشاشة */}
      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent
          className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[currentIndex]}
              alt={alt}
              width={1200}
              height={1200}
              className="w-full h-full object-contain"
              priority
              quality={100}
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectImage(index);
                  }}
                  className={`h-2 w-6 rounded-full transition-all ${
                    currentIndex === index ? "bg-primary w-8" : "bg-muted"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
