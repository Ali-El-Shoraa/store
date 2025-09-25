import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";
import Testimonials from "./components/Testimonials";
import { testimonialsOptions } from "@/data/queryOptionsData";

export default function TestimonialsPage() {
  return (
    <LayoutWithHydrateQuery queryOptions={testimonialsOptions}>
      <Testimonials />
    </LayoutWithHydrateQuery>
  );
}
