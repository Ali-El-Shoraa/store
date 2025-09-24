import { Badge } from "@/components/ui/badge";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tabs } from "@radix-ui/react-tabs";
import { Filter } from "lucide-react";

export default function TestimonialsFilter({
  categories,
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 mr-2 text-gray-600" />
        <h3 className="text-lg font-medium text-gray-900">
          Filter by category
        </h3>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex flex-wrap h-auto p-1 bg-gray-100">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 flex items-center mr-2 mb-2"
            >
              {category.name}
              <Badge
                variant="secondary"
                className="ml-2 bg-gray-200 text-gray-700"
              >
                {category.count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
