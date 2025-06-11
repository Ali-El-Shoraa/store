import { Link } from "@/i18n/navigation";

export default function InformationCompany() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Information Company</h4>
      <div className="space-y-2">
        <Link href="#" className="block text-gray-300 hover:text-white">
          Testimonials
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white">
          Contact Us
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white">
          Location & Working Hours
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white">
          Our Guarantee
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white">
          Track Your Order
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white">
          Help Page
        </Link>
      </div>
    </div>
  );
}
