import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function TestimonialsGrid({
  filteredTestimonials,
  categories,
  renderStars,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredTestimonials.map((testimonial) => (
        <Card
          key={testimonial.id}
          className="flex flex-col h-full hover:shadow-lg transition-shadow"
        >
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role}, {testimonial.company}
                  </CardDescription>
                </div>
              </div>
            </div>
            <div className="flex">{renderStars(testimonial.rating)}</div>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
            <div className="flex justify-between items-center">
              <Badge variant="outline">
                {categories.find((c) => c.id === testimonial.category)?.name}
              </Badge>
              <span className="text-sm text-gray-500">
                {new Date(testimonial.date).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
