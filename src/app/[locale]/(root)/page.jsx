import { generateSEOMetadata } from "@/utils/metadata-generator";
import IndexHomePage from "./components/IndexHomePage";
import HydrateQuery from "@/providers/HydrateQuery";
import { getData } from "@/app/api/getData";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";
import { Suspense } from "react";
import { ourFeaturesOptions } from "@/data/queryOptionsData";

export const metadata = generateSEOMetadata({
  title: "Ayo 7 - Clean, Minimal Magento 2 Theme",
  description: "My page description",
  image: "/image/slider1.png",
  url: "/",
  tags: ["tag1", "tag2"],
});

export default async function Home() {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["our-features"],
  //   queryFn: () => getData("our-features"),
  // });

  return (
    // <HydrateQuery state={dehydrate(queryClient)}>
    <LayoutWithHydrateQuery queryOptions={ourFeaturesOptions}>
      <IndexHomePage />
      {/* <LocaleSwitcher /> */}
    </LayoutWithHydrateQuery>
    // </HydrateQuery>
  );
}
