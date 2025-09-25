import { blogPostsOptions } from "@/data/queryOptionsData";
import BlogPostsPage from "./components/BlogPostsPage";
import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";

export default function BlogPage() {
  return (
    <LayoutWithHydrateQuery queryOptions={blogPostsOptions}>
      <BlogPostsPage />
    </LayoutWithHydrateQuery>
  );
}
