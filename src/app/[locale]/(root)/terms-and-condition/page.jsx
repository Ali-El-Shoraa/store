import HeroSubPage from "@/components/HeroSubPage";
import { FileText } from "lucide-react";
import TermsAndConditions from "./components/TermsAndConditions";
import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";
import { termsOptions } from "@/data/queryOptionsData";

export default async function TermsAndConditionsPage() {
  return (
    <LayoutWithHydrateQuery queryOptions={termsOptions}>
      <div className="space-y-14 container py-12 bg-gray-50">
        <HeroSubPage
          title="Terms and Conditions"
          // des={`Last updated: ${lastUpdated}`}
          icon={<FileText className="w-5 h-5" />}
          // bgColor="bg-gradient-to-r from-blue-600 to-indigo-700"
        />

        <TermsAndConditions />
      </div>
    </LayoutWithHydrateQuery>
  );
}
