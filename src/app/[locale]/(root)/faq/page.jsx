import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";
import FAQ from "./components/FAQ";

export default async function FAQPage() {
  return (
    <LayoutWithHydrateQuery cash={"faq"} endPoint={"api/faq"}>
      <FAQ />
    </LayoutWithHydrateQuery>
  );
}
