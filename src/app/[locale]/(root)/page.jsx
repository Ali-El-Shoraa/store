import { generateSEOMetadata } from "@/utils/metadata-generator";
import IndexHomePage from "./components/IndexHomePage";
export const metadata = generateSEOMetadata({
  title: "Ayo 7 - Clean, Minimal Magento 2 Theme",
  description: "My page description",
  image: "/image/slider1.png",
  url: "/",
  tags: ["tag1", "tag2"],
});

export default async function Home() {
  // const t = useTranslations("page");

  return (
    <>
      <IndexHomePage />
      {/* <LocaleSwitcher /> */}
    </>
  );
}
