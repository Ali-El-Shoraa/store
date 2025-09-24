import BlogPostsPage from "./components/BlogPostsPage";
import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";

export default function BlogPage() {
  return (
    <LayoutWithHydrateQuery cash={"blog-posts"} endPoint={"api/posts"}>
      <BlogPostsPage />
    </LayoutWithHydrateQuery>
  );
}
