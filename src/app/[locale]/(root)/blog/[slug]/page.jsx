import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";
import BlogDetail from "./components/BlogDetail";
import { Suspense } from "react";
import { blogPostsDetailsOptions } from "@/data/queryOptionsData";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  return (
    <LayoutWithHydrateQuery queryOptions={blogPostsDetailsOptions(slug)}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <BlogDetail slug={slug} />
      {/* </Suspense> */}
    </LayoutWithHydrateQuery>
  );
}
