// import ProductPage from "@/app/[locale]/(root)/product/[slug_product_name]/components/ProductPage";

import { allProducts, categories } from "@/lib/productItem";
import TopFeatured from "../../components/TopFeatured";
import ProductPage from "./components/ProductPage";
import { generateSEOMetadata } from "@/utils/metadata-generator";
import Review from "./components/ReviewProductDetails";

export async function generateMetadata({ params }) {
  const { slug_product_name } = await params;

  const formatData = await slug_product_name.replaceAll("-", " ");
  return generateSEOMetadata({
    title: `Ayo 7 - Product ${formatData}`,
    description: `Details for product ${formatData}`,
    image: "/image/logo.png",
    url: `/products/${formatData}`,
    tags: [formatData, "details"],
  });
}
export default function ProductDetailsPage() {
  return (
    <div className="bg-gray-50 mb-6">
      <div className="container space-y-14">
        <ProductPage />

        <Review />
        <TopFeatured
          titleSection="Similar"
          subTitleSection="Product"
          data={allProducts}
          categories={categories}
        />
      </div>
    </div>
  );
}
