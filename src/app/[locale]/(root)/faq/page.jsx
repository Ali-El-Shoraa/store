import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";
import FAQ from "./components/FAQ";
import { faqOptions } from "@/data/queryOptionsData";

export default async function FAQPage() {
  return (
    <LayoutWithHydrateQuery queryOptions={faqOptions}>
      <FAQ />
    </LayoutWithHydrateQuery>
  );
}
