import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

export default function FeaturedPost() {
  return (
    <Card className="overflow-hidden mb-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 p-0">
      <div className="md:flex">
        <div className="md:w-2/3 relative">
          <Image
            src="/blog-featured.jpg"
            alt="Featured post"
            width={800}
            height={400}
            className="h-64 w-full object-cover md:h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <Badge className="absolute top-4 left-4 bg-white text-blue-600 border-0">
            Featured
          </Badge>
        </div>
        <div className="md:w-1/3 p-6 bg-gradient-to-b from-blue-600 to-indigo-700 text-white">
          <h2 className="text-2xl font-bold mb-4">
            The Future of Digital Transformation in the Arab World
          </h2>
          <p className="mb-6 text-blue-100">
            An in-depth look at how digital transformation is reshaping
            industries and creating new opportunities across the Middle East.
          </p>
          <div className="flex items-center text-sm mb-4">
            <Avatar className="h-8 w-8 mr-2 border-2 border-white/20">
              <AvatarImage src="/avatar-1.jpg" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Ahmed Al-Shammari</p>
              <p className="text-blue-200 text-xs">
                Digital Transformation Expert
              </p>
            </div>
          </div>
          <div className="flex items-center text-sm text-blue-100 mb-6">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="mr-4">June 25, 2023</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>10 min read</span>
          </div>
          <Button
            asChild
            className="w-full bg-white text-blue-600 hover:bg-blue-50 font-medium"
          >
            <Link href="/blog/future-digital-transformation-arab-world">
              Read Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
