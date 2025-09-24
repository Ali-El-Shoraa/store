import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";
import BlogDetail from "./components/BlogDetail";
import { Suspense } from "react";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  return (
    <LayoutWithHydrateQuery
      cash={"blog-posts-details"}
      endPoint={`api/posts?id=${slug}`}
    >
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <BlogDetail slug={slug} />
      {/* </Suspense> */}
    </LayoutWithHydrateQuery>
  );
}
