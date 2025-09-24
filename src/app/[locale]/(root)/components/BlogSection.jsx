"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import HeaderSection from "@/components/HeaderSection";

const blogPosts = [
  {
    id: 1,
    title: "Praesent Volutpat Justo Burgundy Suspendisse",
    slug: "praesent-volutpat-justo-burgundy-suspendisse",
    image: "/image/slider1.png",
    date: { day: "01", month: "Mar", year: "2019" },
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 2,
    title: "Fringilla Suspendisse Praesent Volutpat Justo",
    slug: "fringilla-suspendisse-praesent-volutpat-justo",
    image: "/image/slider1.png",
    date: { day: "01", month: "Mar", year: "2019" },
    excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore...",
  },
  {
    id: 3,
    title: "Justo Suspendisse Praesent Volutpat Fringilla",
    slug: "justo-suspendisse-praesent-volutpat-fringilla",
    image: "/image/slider1.png",
    date: { day: "01", month: "Mar", year: "2019" },
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation...",
  },
  {
    id: 4,
    title: "Suspendisse Praesent Volutpat Justo Fringilla",
    slug: "suspendisse-praesent-volutpat-justo-fringilla",
    image: "/image/slider1.png",
    date: { day: "01", month: "Mar", year: "2019" },
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate...",
  },
  {
    id: 5,
    title: "Volutpat Justo Suspendisse Praesent Burgundy",
    slug: "volutpat-justo-suspendisse-praesent-burgundy",
    image: "/image/slider1.png",
    date: { day: "01", month: "Mar", year: "2019" },
    excerpt: "Excepteur sint occaecat cupidatat non proident...",
  },
  {
    id: 6,
    title: "Volutpat Justo Suspendisse Praesent Fringilla",
    slug: "volutpat-justo-suspendisse-praesent-fringilla",
    image: "/image/slider1.png",
    date: { day: "01", month: "Mar", year: "2019" },
    excerpt: "Sunt in culpa qui officia deserunt mollit anim...",
  },
];

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // const itemsPerView = 4;
  const totalPosts = blogPosts?.length;

  // Create an infinite loop effect by duplicating the posts array
  const extendedPosts = [...blogPosts, ...blogPosts, ...blogPosts];

  // Auto-play functionality
  const [autoPlay, setAutoPlay] = useState(true);
  const autoPlayInterval = 5000; // 5 seconds

  const nextSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => {
      // When we reach the end of the original set, we'll reset to the duplicate set
      if (prev >= totalPosts - 1) {
        return 0;
      }
      return prev + 1;
    });

    setTimeout(() => setIsAnimating(false), 500); // Match the transition duration
  }, [isAnimating, totalPosts]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prev) => {
      // When we reach the beginning, we'll jump to the end
      if (prev <= 0) {
        return totalPosts - 1;
      }
      return prev - 1;
    });

    setTimeout(() => setIsAnimating(false), 500); // Match the transition duration
  }, [isAnimating, totalPosts]);

  // Set up auto-play
  useEffect(() => {
    let interval;

    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, nextSlide, autoPlayInterval]);

  // Pause auto-play when user interacts with carousel
  const handleInteraction = () => {
    setAutoPlay(false);

    // Resume auto-play after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setAutoPlay(true);
    }, 10000);

    return () => clearTimeout(timeout);
  };

  return (
    <section className="">
      <div className="">
        <div className="mb-3">
          <HeaderSection title={`From Our`} subTitle={`Blog`} />
        </div>

        {/* Blog Carousel */}
        <div
          className="relative py-8 px-4 bg-white"
          onMouseEnter={handleInteraction}
          onTouchStart={handleInteraction}
        >
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out gap-6">
              {extendedPosts.map((post, index) => (
                <div
                  key={`${post.id}-${index}`}
                  className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4"
                >
                  <Card className="group hover:shadow-lg transition-shadow duration-300 h-full py-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <Link href={`/blog/${post.slug}`} className="block">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>

                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>Post Date: </span>
                          <span className="ml-1 font-medium">
                            <span>{post.date.day}</span>
                            <span className="mx-1">-</span>
                            <span>{post.date.month}</span>
                            <span className="mx-1">-</span>
                            <span>{post.date.year}</span>
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              prevSlide();
              handleInteraction();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full z-10 bg-white/80 hover:bg-white shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              nextSlide();
              handleInteraction();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full z-10 bg-white/80 hover:bg-white shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPosts }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  handleInteraction();
                }}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex % totalPosts
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
