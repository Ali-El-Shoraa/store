import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";
import AboutUs from "./components/AboutUs";

export default function AboutUsPage() {
  return (
    <LayoutWithHydrateQuery cash={"about-us"} endPoint={"api/about"}>
      <AboutUs />
    </LayoutWithHydrateQuery>
  );
}
