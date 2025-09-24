import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Pause, Play, Quote } from "lucide-react";

export default function FeaturedTestimonialsCarousel({
  prevTestimonial,
  togglePlay,
  currentIndex,
  setCurrentIndex,
  featuredTestimonials,
  nextTestimonial,
  isPlaying,
  renderStars,
  categories,
}) {
  return (
    <div className="">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Featured Stories</h2>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={prevTestimonial}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={togglePlay}>
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button variant="outline" size="icon" onClick={nextTestimonial}>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden p-8 text-white">
        <Quote className="absolute top-8 right-8 h-16 w-16 text-white/10" />

        <div className="relative z-10">
          <div className="flex items-start mb-6">
            <Avatar className="h-16 w-16 mr-4 border-2 border-white/20">
              <AvatarImage src={featuredTestimonials[currentIndex].image} />
              <AvatarFallback>
                {featuredTestimonials[currentIndex].name[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">
                {featuredTestimonials[currentIndex].name}
              </h3>
              <p className="text-white/80">
                {featuredTestimonials[currentIndex].role},{" "}
                {featuredTestimonials[currentIndex].company}
              </p>
              <div className="flex mt-1">
                {renderStars(featuredTestimonials[currentIndex].rating)}
              </div>
            </div>
          </div>

          <p className="text-lg italic mb-6">
            "{featuredTestimonials[currentIndex].content}"
          </p>

          <Badge variant="secondary" className="bg-white/20 text-white">
            {
              categories.find(
                (c) => c.id === featuredTestimonials[currentIndex].category
              )?.name
            }
          </Badge>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {featuredTestimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
