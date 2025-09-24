import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Link } from "@/i18n/navigation";

const categories = [
  {
    id: 1,
    name: "Tablets & iPad",
    href: "/category/tablets-ipad",
    icon: "📱",
    featured: true,
  },
  {
    id: 2,
    name: "Computers",
    href: "/category/computers",
    icon: "💻",
    featured: true,
  },
  {
    id: 3,
    name: "Smartphones",
    href: "/category/smartphones",
    icon: "📱",
    featured: true,
  },
  {
    id: 4,
    name: "Wearables",
    href: "/category/wearables",
    icon: "⌚",
  },
  {
    id: 5,
    name: "Audio",
    href: "/category/audio",
    icon: "🎧",
    featured: true,
  },
  {
    id: 6,
    name: "Cameras",
    href: "/category/cameras",
    icon: "📷",
  },
  {
    id: 7,
    name: "Gaming",
    href: "/category/gaming",
    icon: "🎮",
  },
  {
    id: 8,
    name: "Accessories",
    href: "/category/accessories",
    icon: "🔌",
  },
];

export default function SearchPopupNavbar({ isOpen, onClose }) {
  const [searchValue, setSearchValue] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "iPhone 15",
    "MacBook Pro",
    "Wireless Earbuds",
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [isOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      setIsLoading(true);
      setRecentSearches((prev) => {
        const newSearches = [
          searchValue,
          ...prev.filter((item) => item !== searchValue),
        ];
        return newSearches.slice(0, 5);
      });

      // محاكاة بحث
      setTimeout(() => {
        setIsLoading(false);
        onClose();
        // التوجيه لصفحة نتائج البحث
      }, 1000);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-0">
      <div className="container flex items-start justify-center pt-20">
        <div className="bg-background rounded-2xl shadow-2xl w-full max-w-2xl animate-in zoom-in-95 border">
          <div className="p-4 border-b flex items-center">
            <form onSubmit={handleSearch} className="flex-1 flex">
              <div className="relative flex-1">
                {isLoading ? (
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                  </div>
                ) : (
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                )}
                <Input
                  ref={inputRef}
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="pl-10 pr-4 py-3 h-12 text-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  disabled={isLoading}
                />
              </div>
              <Button type="submit" className="ml-2" disabled={isLoading}>
                Search
              </Button>
            </form>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="ml-2 rounded-full h-10 w-10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="p-4 max-h-96 overflow-y-auto">
            {recentSearches.length > 0 && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-medium">Recent Searches</h3>
                  <Button
                    variant="ghost"
                    className="h-auto p-0"
                    onClick={clearRecentSearches}
                  >
                    Clear all
                  </Button>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start h-10"
                      onClick={() => setSearchValue(search)}
                    >
                      <Search className="h-4 w-4 mr-2" />
                      {search}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h3 className="font-medium mb-3">Popular Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(0, 4).map((category) => (
                  <Button
                    key={category.id}
                    variant="outline"
                    className="h-10 justify-start"
                    asChild
                  >
                    <Link href={category.href} onClick={onClose}>
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
