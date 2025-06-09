// import IndexHomePage from "@/pages/hero/IndexHomePage";
import { generateSEOMetadata } from "@/utils/metadata-generator";
// import { useTranslations } from "next-intl";
import Image from "next/image";
import IndexHomePage from "./components/IndexHomePage";
// import IndexHomePage from "./components/IndexHomePage";

// import BlogSection from "@/pages/blog/BlogSection";
// import ServicesSection from "@/pages/hero/sections/ServicesSection";
// import TopBestSelling from "@/pages/hero/sections/TopBestSelling";
// import TopFeatured from "@/pages/hero/sections/TopFeatured";

export const metadata = generateSEOMetadata({
  title: "Ayo 7 - Clean, Minimal Magento 2 Theme",
  description: "My page description",
  image: "/image/logo.png",
  url: "/my-page",
  tags: ["tag1", "tag2"],
});

export default function Home() {
  // const t = useTranslations("page");

  return (
    <>
      <IndexHomePage />
      {/* <LocaleSwitcher /> */}
    </>
  );
}
