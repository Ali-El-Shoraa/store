import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function LogoNavbar() {
  return (
    <Link href={`/`} className="h-full flex items-center justify-center">
      <Image src={`/image/logo.png`} alt="logo" width={155} height={39} />
    </Link>
  );
}
