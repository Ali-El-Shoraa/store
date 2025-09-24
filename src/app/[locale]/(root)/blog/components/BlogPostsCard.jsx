import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import {
  Bookmark,
  Calendar,
  Clock,
  Eye,
  Heart,
  MessageSquare,
  Share,
} from "lucide-react";
import Image from "next/image";

const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num;
};

const getCategoryColor = (category) => {
  const colors = {
    technology: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    business: "bg-green-100 text-green-800 hover:bg-green-200",
    design: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    development: "bg-orange-100 text-orange-800 hover:bg-orange-200",
    marketing: "bg-pink-100 text-pink-800 hover:bg-pink-200",
  };
  return colors[category] || "bg-gray-100 text-gray-800 hover:bg-gray-200";
};

export default function BlogPostsCard({ post }) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-0 shadow-md pt-0">
      <div className="relative">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={192}
          className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getCategoryColor(post.category)}>
            {post.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          <Link href={`/blog/${post?.id}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              <span>{formatNumber(post.views)}</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              <span>{formatNumber(post.likes)}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>{post.comments}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-3">
        <Button asChild variant="outline" size="sm">
          <Link href={`/blog/${post.slug}`}>Read More</Link>
        </Button>
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Share className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
