import LayoutWithHydrateQuery from "@/components/LayoutWithHydrateQuery";
import Testimonials from "./components/Testimonials";

export default function TestimonialsPage() {
  return (
    <LayoutWithHydrateQuery cash={"testimonials"} endPoint={"api/testimonials"}>
      <Testimonials />
    </LayoutWithHydrateQuery>
  );
}
