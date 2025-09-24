"use client";

import { Link } from "@/i18n/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Clock, TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

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

export default function DesktopNavigation() {
  const [activeCategory, setActiveCategory] = useState(null);
  const timeoutRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCategoryEnter = (categoryId) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 200);
  };

  const handleSubmenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  if (!isMounted) return;
  return (
    <div className="hidden lg:flex items-center gap-6 font-medium">
      <Link
        href="/"
        className="text-foreground hover:text-primary transition-colors duration-200 py-2 relative group px-3 rounded-lg hover:bg-accent"
      >
        Home
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-4/5"></span>
      </Link>

      {/* Categories with Enhanced Touch Experience */}
      <div
        className="relative group"
        onMouseEnter={() => handleCategoryEnter("categories")}
        onMouseLeave={handleCategoryLeave}
        onTouchStart={() => handleCategoryEnter("categories")}
      >
        <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-accent group">
          {/* <Grid className="h-4 w-4" /> */}
          <span>Categories</span>
          <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
        </button>

        {activeCategory === "categories" && (
          <div
            className="absolute top-full -left-full mt-1 w-[800px] bg-background rounded-2xl shadow-xl border p-6 z-50 animate-in fade-in-0 slide-in-from-top-2 grid grid-cols-3 gap-6"
            onMouseEnter={handleSubmenuEnter}
            onMouseLeave={handleCategoryLeave}
            onTouchStart={(e) => e.stopPropagation()}
          >
            {/* Main Categories Column */}
            <div className="space-y-2">
              <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
                {/* <Grid className="h-5 w-5" /> */}
                Shop Categories
              </h3>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent transition-all group/category"
                >
                  <span className="text-xl flex-shrink-0">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </Link>
              ))}
            </div>

            {/* Featured Categories Column */}
            <div className="space-y-4">
              <h3 className="font-semibold mb-3 text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Trending Now
              </h3>

              {categories
                .filter((cat) => cat.featured)
                .slice(0, 2)
                .map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="block p-4 rounded-xl bg-accent border hover:border-primary/30 transition-all group/featured"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="font-semibold">{category.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Latest models with special discounts
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Shop now{" "}
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/featured:translate-x-1" />
                    </div>
                  </Link>
                ))}
            </div>

            {/* Special Offers Column */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-4 text-white">
              <h3 className="font-semibold mb-3 text-lg">Special Offer</h3>
              <div className="bg-white/10 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Ends in 2 days</span>
                </div>
                <p className="text-sm">
                  Get 20% off on all smartphones with code SMART20
                </p>
              </div>

              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 h-10 font-medium">
                View All Deals
              </Button>

              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span>Need help?</span>
                  <Link
                    href="/contact"
                    className="underline hover:no-underline"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Link
        href="/blog"
        className="text-foreground hover:text-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-accent relative group"
      >
        Blog
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-4/5"></span>
      </Link>

      <Link
        href="/about-us"
        className="text-foreground hover:text-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-accent relative group"
      >
        About
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-4/5"></span>
      </Link>

      <Link
        href="/find-a-store"
        className="text-foreground hover:text-primary transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-accent relative group"
      >
        Find Store
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-4/5"></span>
      </Link>
    </div>
  );
}
