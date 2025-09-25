"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  User,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Share,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { getDataFake } from "@/app/api/getDataFake";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import NoArticlesFound from "./NoArticlesFound";
import BlogPostsCard from "./BlogPostsCard";
import AboutCard from "./AboutCard";
import PopularPosts from "./PopularPosts";
import CategoriesCard from "./CategoriesCard";
import NewsletterCard from "./NewsletterCard";
import TagsCard from "./TagsCard";
import FeaturedPost from "./FeaturedPost";
import CategoriesBlogPostsPage from "./CategoriesBlogPostsPage";
import HeaderBlogPostsPage from "./HeaderBlogPostsPage";
import { blogPostsOptions } from "@/data/queryOptionsData";

export default function BlogPostsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  // const postsPerPage = 6;

  // if (true) return <Loading />;

  const {
    data: blogPosts,
    isLoading,
    error,
  } = useSuspenseQuery(blogPostsOptions);

  const categories = [
    { id: "all", name: "All Topics", icon: BookOpen },
    { id: "technology", name: "Technology", icon: TrendingUp },
    { id: "business", name: "Business", icon: User },
    { id: "design", name: "Design", icon: Bookmark },
    { id: "development", name: "Development", icon: Code },
    { id: "marketing", name: "Marketing", icon: Share },
  ];

  const popularPosts = [
    {
      id: 1,
      title: "The Future of E-commerce in the Middle East",
      category: "business",
      readTime: "5 min read",
      date: "May 15, 2023",
      slug: "future-ecommerce-middle-east",
    },
    {
      id: 2,
      title: "How AI is Transforming Customer Service",
      category: "technology",
      readTime: "7 min read",
      date: "April 28, 2023",
      slug: "ai-transforming-customer-service",
    },
    {
      id: 3,
      title: "UX Design Principles for Arabic Websites",
      category: "design",
      readTime: "4 min read",
      date: "June 2, 2023",
      slug: "ux-design-arabic-websites",
    },
  ];

  const tags = [
    "E-commerce",
    "AI",
    "Web Development",
    "UX Design",
    "Digital Marketing",
    "Startup",
    "Fintech",
    "Mobile Apps",
  ];

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts?.data
      : blogPosts?.data?.filter((post) => post.category === activeCategory);

  // Apply search filter
  const searchedPosts = searchQuery
    ? filteredPosts?.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredPosts;

  // const totalPages = Math.ceil(searchedPosts?.length / postsPerPage);
  // const currentPosts = searchedPosts?.slice(
  //   (currentPage - 1) * postsPerPage,
  //   currentPage * postsPerPage
  // );

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  console.log("CategoriesCardL ", blogPosts);

  // if (isLoading) return <Loading />;
  // if (true) return <Loading />;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <HeaderBlogPostsPage
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Categories */}
            <CategoriesBlogPostsPage
              activeCategory={activeCategory}
              handleCategoryChange={handleCategoryChange}
              categories={categories}
            />

            {/* Search Results Info */}
            {/* {searchQuery && (
              <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800">
                  Showing {searchedPosts.length} results for "
                  <span className="font-semibold">{searchQuery}</span>"
                </p>
              </div>
            )} */}

            {/* Featured Post */}
            <FeaturedPost />

            {/* Blog Posts Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {blogPosts?.data?.map((post) => (
                <BlogPostsCard key={post.id} post={post} />
              ))}
            </div>

            {/* No Results Message */}
            {blogPosts?.total === 0 && <NoArticlesFound />}

            {/* Pagination */}
            {/* {blogPosts?.pagination?.totalPages > 0 && (
              <div className="flex justify-center items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                {Array.from(
                  { length: blogPosts?.pagination?.totalPages },
                  (_, i) => i + 1
                ).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="h-10 w-10 p-0"
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )} */}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* About Card */}
            <AboutCard blogPosts={blogPosts} />

            {/* Popular Posts */}
            <PopularPosts PopularPostsData={popularPosts} />

            {/* Categories */}
            <CategoriesCard
              categories={categories}
              activeCategory={activeCategory}
              handleCategoryChange={handleCategoryChange}
              blogPosts={blogPosts?.data}
            />

            {/* Tags */}
            <TagsCard tags={tags} />

            {/* Newsletter */}
            <NewsletterCard />
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon component (you might need to import from lucide-react)
function Code({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}
