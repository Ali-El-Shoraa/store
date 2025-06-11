import { generateSEOMetadata } from "@/utils/metadata-generator";
import IndexPaymentPage from "./components/IndexPaymentPage";

export const metadata = generateSEOMetadata({
  title: "Ayo 7 - Payment Page",
  description: "Payment Page Description",
  image: "/image/logo.png",
  url: "/my-page",
  tags: ["payment"],
});

export default function ShoppingCartFlow() {
  return (
    <>
      <IndexPaymentPage />
    </>
  );
}
