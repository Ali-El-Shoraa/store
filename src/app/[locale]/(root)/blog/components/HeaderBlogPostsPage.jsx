import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function HeaderBlogPostsPage({ searchQuery, setSearchQuery }) {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tech Insights Blog
            </h1>
            <p className="text-gray-600 mt-2">
              Discover the latest trends and insights in technology and business
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 w-full md:w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
