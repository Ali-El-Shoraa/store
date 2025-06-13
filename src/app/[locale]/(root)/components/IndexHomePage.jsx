import Hero from "./Hero";
import ServicesSection from "./ServicesSection";

import TopFeatured from "./TopFeatured";
import BlogSection from "./BlogSection";
import Enhanced from "./Enhanced";

import { allProducts, categories } from "@/lib/productItem";
import AnimatedBanner from "@/components/AnimatedBanner";
import HeaderSection from "@/components/HeaderSection";

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

const ads1 = [
  {
    src: "/image/ads/ads1.png",
    alt: "slider 1",
    title: "Technology",
    description: "Latest tech innovations",
  },
  {
    src: "/image/ads/ads2.png",
    alt: "slider 2",
    title: "Sports",
    description: "Athletic excellence",
  },
  {
    src: "/image/ads/ads3.png",
    alt: "slider 3",
    title: "Lifestyle",
    description: "Modern living",
  },
];

const ads2 = [
  {
    src: "/image/ads/ads4.png",
    alt: "slider 1",
    title: "Technology",
    description: "Latest tech innovations",
  },
  {
    src: "/image/ads/ads5.png",
    alt: "slider 2",
    title: "Sports",
    description: "Athletic excellence",
  },
];

export default function IndexHomePage() {
  return (
    <div className="container space-y-20">
      <Hero />

      <ServicesSection />

      {/* <Enhanced data={images1} /> */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ads1?.map((item) => (
          <AnimatedBanner
            key={item?.src}
            imageUrl={item?.src}
            href="/"
            alt="Paris cityscape with Eiffel Tower"
            title="Paris"
            description="Discover the city of lights"
          />
        ))}
      </div>

      {/* Top Best Selling */}

      <div className="my-14">
        <TopFeatured
          titleSection="Top Best Selling"
          subTitleSection="Product"
          data={allProducts}
          categories={categories}
        />
      </div>

      <div className="my-14">
        <TopFeatured
          titleSection="Top Featured"
          subTitleSection="Product"
          data={allProducts}
          categories={categories}
        />
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ads2?.map((item) => (
            <AnimatedBanner
              imageUrl={item?.src}
              key={item?.src}
              href="/destinations/paris"
              alt="Paris cityscape with Eiffel Tower"
              title="Paris"
              description="Discover the city of lights"
            />
          ))}
        </div>
      </div>
      <div className="my-14">
        <div className="mb-10">
          <HeaderSection title={`From Our`} subTitle={`Blog`} />
        </div>

        <Enhanced data={images1} />
        {/* <BlogSection /> */}
      </div>
    </div>
  );
}
