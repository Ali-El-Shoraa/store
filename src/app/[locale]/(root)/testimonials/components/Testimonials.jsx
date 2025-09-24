"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import HeroSubPage from "@/components/HeroSubPage";
import StatsSection from "./StatsSection";
import FeaturedTestimonialsCarousel from "./FeaturedTestimonialsCarousel";
import TestimonialsFilter from "./TestimonialsFilter";
import TestimonialsGrid from "./TestimonialsGrid";
import { getDataFake } from "@/app/api/getDataFake";
import { useQuery } from "@tanstack/react-query";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    data: { testimonials, categories },
    isLoading,
    error,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () => getDataFake("api/testimonials"),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading testimonials</div>;
  console.log("testimonials: ", testimonials);

  const featuredTestimonials = testimonials.filter((t) => t.featured);
  const filteredTestimonials =
    activeTab === "all"
      ? testimonials
      : testimonials.filter((t) => t.category === activeTab);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === featuredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? featuredTestimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-play carousel
  useState(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12">
      <div className="container space-y-14">
        {/* Header Section */}
        <HeroSubPage
          titleIcon={"Customer Stories"}
          title={"What Our Customers Say"}
          icon={<Quote className="h-5 w-5 mr-2" />}
          des={
            "Discover how our solutions have helped businesses like yours achieve remarkable results."
          }
        />

        {/* Stats Section */}
        <StatsSection />

        {/* Featured Testimonials Carousel */}
        <FeaturedTestimonialsCarousel
          prevTestimonial={prevTestimonial}
          togglePlay={togglePlay}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          featuredTestimonials={featuredTestimonials}
          nextTestimonial={nextTestimonial}
          isPlaying={isPlaying}
          renderStars={renderStars}
          categories={categories}
        />

        {/* Testimonials Filter */}
        <TestimonialsFilter
          categories={categories}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Testimonials Grid */}
        <TestimonialsGrid
          filteredTestimonials={filteredTestimonials}
          categories={categories}
          renderStars={renderStars}
        />

        {/* CTA Section */}

        <HeroSubPage
          // titleIcon={"Customer Stories"}
          title={"Ready to share your success story?"}
          // icon={<Quote className="h-5 w-5 mr-2" />}
          des={"Join our growing list of satisfied customers."}
          classNameContent={"py-5"}
          classTitle={"text-2xl"}
          classDes={"text-sm"}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-indigo-600 hover:bg-gray-100"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
        </HeroSubPage>
      </div>
    </div>
  );
}
