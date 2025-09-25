"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import HeroSubPage from "@/components/HeroSubPage";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getDataFake } from "@/app/api/getDataFake";
import ValuesSection from "./ValuesSection";
import TimelineSection from "./TimelineSection";
import TeamSection from "./TeamSection";
import TestimonialsSection from "./TestimonialsSection";
import OurStorySection from "./OurStorySection";
import { aboutUsOptions } from "@/data/queryOptionsData";

export default function AboutUs() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  //   const videoRef = useRef(null);

  const { data, isLoading, error } = useSuspenseQuery(aboutUsOptions);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const { testimonials, values, stats, milestones, teamMembers, videoUrl } =
    data || {};
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="container py-12 space-y-14 bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <HeroSubPage
        title={"About Our Company"}
        des={`We work diligently to realize our clients' dreams and help them build exceptional shopping experiences`}
      />

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats?.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{stat?.icon}</div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section with Video */}
      <OurStorySection
        isVideoPlaying={isVideoPlaying}
        setIsVideoPlaying={setIsVideoPlaying}
        videoUrl={videoUrl}
        toggleVideo={toggleVideo}
      />

      {/* Values Section */}
      <ValuesSection values={values} />

      {/* Timeline Section */}
      <TimelineSection milestones={milestones} />

      {/* Team Section */}
      <TeamSection teamMembers={teamMembers} />

      {/* Testimonials Section */}
      <TestimonialsSection
        currentTestimonial={currentTestimonial}
        nextTestimonial={nextTestimonial}
        prevTestimonial={prevTestimonial}
        setCurrentTestimonial={setCurrentTestimonial}
        testimonials={testimonials}
      />

      {/* CTA Section */}
      <HeroSubPage
        title={"Join Our Journey"}
        des={`Whether you're looking for career opportunities or want to partner with us, we're always excited to meet new talents.`}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-medium rounded-xl"
          >
            Join Our Team
          </Button>
          <Button
            size="lg"
            variant=""
            className="text-white border-white hover:bg-white/10 rounded-xl"
          >
            Contact Us
          </Button>
        </div>
      </HeroSubPage>
    </div>
  );
}
