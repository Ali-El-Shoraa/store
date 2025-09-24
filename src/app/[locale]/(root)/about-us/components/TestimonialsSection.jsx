import HeroSubPage from "@/components/HeroSubPage";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection({
  testimonials,
  currentTestimonial,
  setCurrentTestimonial,
  nextTestimonial,
  prevTestimonial,
}) {
  return (
    <HeroSubPage
      title={"What Our Clients Say"}
      des={`Our clients' feedback is evidence of our success and motivation to continue developing and improving`}
    >
      <div className="max-w-4xl mx-auto font-bold text-2xl bg-blue-500 rounded-2xl p-8 relative border border-white/20">
        <Quote className="absolute top-6 left-6 h-8 w-8 text-blue-200 opacity-50" />

        <div className="text-center">
          <p className="text-xl mb-6 leading-relaxed">
            "{testimonials[currentTestimonial].content}"
          </p>
          <div className="flex items-center justify-center mb-4">
            <div className="h-14 w-14 bg-white/20 rounded-full mr-4 flex items-center justify-center">
              <span className="text-lg font-semibold">
                {testimonials[currentTestimonial].name.charAt(0)}
              </span>
            </div>
            <div>
              <h4 className="font-semibold">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-blue-200">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            size="icon"
            className="mr-2 bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-1 mx-4">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "w-6 bg-white"
                    : "w-2 bg-white/40"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </HeroSubPage>
  );
}
