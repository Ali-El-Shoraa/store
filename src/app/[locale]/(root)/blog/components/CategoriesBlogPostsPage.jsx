import { Button } from "@/components/ui/button";

export default function CategoriesBlogPostsPage({
  categories,
  activeCategory,
  handleCategoryChange,
}) {
  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex space-x-2 pb-2">
        {categories?.map((category) => {
          const IconComponent = category?.icon;
          return (
            <Button
              key={category?.id}
              variant={activeCategory === category?.id ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap flex items-center gap-2 ${
                activeCategory === category?.id
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => handleCategoryChange(category?.id)}
            >
              <IconComponent className="h-4 w-4" />
              {category?.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
