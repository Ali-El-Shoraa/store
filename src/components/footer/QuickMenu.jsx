import { Link } from "@/i18n/navigation";

export default function QuickMenu() {
  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">QUICK MENU</h4>
      <div className="grid grid-cols-2 gap-2">
        <Link href="#" className="text-gray-300 hover:text-white">
          TV & Video
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Computers & Laptops
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Cameras & Photography
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Smart Phones & Tablets
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Video Games & Consoles
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Home Audio & Theater
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Camera, Photo & Video
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Cell Phones & Accessories
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Headphones
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Video Games
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Clothing & Bags
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          Sneaker for Men's
        </Link>
      </div>
    </div>
  );
}
