import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CategoriesCard({
  categories = [],
  blogPosts = [],
  activeCategory,
  handleCategoryChange,
}) {
  return (
    <Card className="mb-8 border-0 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {categories
            ?.filter((cat) => cat.id !== "all")
            ?.map((category) => {
              const IconComponent = category?.icon;
              const postCount = blogPosts?.filter(
                (post) => post?.category === category?.id
              ).length;

              return (
                <div
                  key={category?.id}
                  className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors duration-200 ${
                    activeCategory === category?.id
                      ? "bg-blue-50 text-blue-600"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleCategoryChange(category?.id)}
                >
                  <div className="flex items-center">
                    <IconComponent className="h-4 w-4 mr-2" />
                    <span>{category?.name}</span>
                  </div>
                  <Badge variant="secondary" className="ml-2">
                    {postCount}
                  </Badge>
                </div>
              );
            })}
        </div>
      </CardContent>
    </Card>
  );
}
