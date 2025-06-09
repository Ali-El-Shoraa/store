import Image from "next/image";
import Hero from "./sections/Hero";
import ServicesSection from "./sections/ServicesSection";
import TopBestSelling from "./sections/TopBestSelling";
import TopFeatured from "./sections/TopFeatured";
import BlogSection from "../blog/BlogSection";
import Enhanced from "./sections/Enhanced";

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

      <TopBestSelling />

      <TopFeatured />

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
