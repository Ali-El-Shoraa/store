import Image from "next/image";
import Hero from "./Hero";
import ServicesSection from "./ServicesSection";
// import TopBestSelling from "./TopBestSelling";
import TopFeatured from "./TopFeatured";
import BlogSection from "./BlogSection";
import Enhanced from "./Enhanced";

import { allProducts, categories } from "@/lib/productItem";

const images1 = [
  {
    src: "/image/slider1.png",
    alt: "slider 1",
    title: "Technology",
    description: "Latest tech innovations",
  },
  {
    src: "/image/slider2.png",
    alt: "slider 2",
    title: "Sports",
    description: "Athletic excellence",
  },
  {
    src: "/image/slider3.png",
    alt: "slider 3",
    title: "Lifestyle",
    description: "Modern living",
  },
];

export default function IndexHomePage() {
  return (
    <div className="container space-y-5">
      <Hero />

      <ServicesSection />

      <Enhanced data={images1} />

      {/* <TopBestSelling /> */}

      {/* Top Best Selling */}
      <TopFeatured
        titleSection="Top Best Selling"
        subTitleSection="Product"
        data={allProducts}
        categories={categories}
      />

      <TopFeatured
        titleSection="Top Featured"
        subTitleSection="Product"
        data={allProducts}
        categories={categories}
      />

      <section className="grid md:grid-cols-2 gap-6">
        <div className="text-center border">
          <Image
            src={`/image/slider1.png`}
            width={1000}
            height={1000}
            alt="slider 1"
            className="w-full h-full rounded"
          />
        </div>
        <div className="text-center border">
          <Image
            src={`/image/slider2.png`}
            width={1000}
            height={1000}
            alt="slider 1"
            className="w-full h-full rounded"
          />
        </div>
      </section>

      <BlogSection />
    </div>
  );
}
