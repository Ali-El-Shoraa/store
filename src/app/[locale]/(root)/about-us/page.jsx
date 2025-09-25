import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";
import AboutUs from "./components/AboutUs";
import { aboutUsOptions } from "@/data/queryOptionsData";

export default function AboutUsPage() {
  return (
    <LayoutWithHydrateQuery queryOptions={aboutUsOptions}>
      <AboutUs />
    </LayoutWithHydrateQuery>
  );
}
