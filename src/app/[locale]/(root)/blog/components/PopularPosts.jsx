import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { Calendar, Clock, TrendingUp } from "lucide-react";

export default function PopularPosts({ PopularPostsData }) {
  return (
    <Card className="mb-8 border-0 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          Popular Posts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {PopularPostsData?.map((post) => (
          <div
            key={post?.id}
            className="flex items-start space-x-3 group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded mt-1 flex-shrink-0">
              {post?.id}
            </div>
            <div>
              <Link href={`/blog/${post?.slug}`}>
                <h3 className="font-medium group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {post?.title}
                </h3>
              </Link>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <Calendar className="h-3 w-3 mr-1" />
                <span>{post?.date}</span>
                <span className="mx-2">•</span>
                <Clock className="h-3 w-3 mr-1" />
                <span>{post?.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
