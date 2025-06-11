import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function FooterAbout() {
  return (
    <div className="space-y-6">
      <Link href="/">
        <Image
          src="/image/logo.png"
          alt="Logo"
          width={150}
          height={50}
          className="mb-4"
        />
      </Link>

      <div className="flex items-start gap-4">
        <Image
          src="/image/head_phone.png"
          alt="Footer Logo"
          width={40}
          height={40}
        />
        <div>
          <p className="text-sm text-gray-400">Hotline Free 24/24:</p>
          <p className="font-medium">(+100) 123 456 7890</p>
        </div>
      </div>

      <div className="flex gap-2">
        <span className="text-sm text-gray-400">Add:</span>
        <p>Walls Street 68, Mahattan, New York, USA</p>
      </div>

      <div className="flex gap-2">
        <span className="text-sm text-gray-400">Email:</span>
        <p>ali.m.elshoraa@gmail.com</p>
      </div>

      <div className="flex gap-2">
        <span className="text-sm text-gray-400">Phone:</span>
        <p>(+100) 123 456 7890 - (+100) 123 456 7891</p>
      </div>
    </div>
  );
}
