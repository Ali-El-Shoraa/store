// import ProductPage from "@/app/[locale]/(root)/product/[slug_product_name]/components/ProductPage";

import { allProducts, categories } from "@/lib/productItem";
import TopFeatured from "../../components/TopFeatured";
import ProductPage from "./components/ProductPage";

export default function ProductDetailsPage() {
  return (
    <div className="bg-gray-50 mb-6">
      <div className="container space-y-14">
        <ProductPage />

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
