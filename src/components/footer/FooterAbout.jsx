import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import LogoNavbar from "../navbar/LogoNavbar";

export default async function FooterAbout() {
  const t = await getTranslations("Footer.about");

  return (
    <div className="space-y-6">
      {/* <Link href="/">
        <Image
          src="/image/logo.png"
          alt="Logo"
          width={150}
          height={50}
          className="mb-4"
        />
      </Link> */}
      <LogoNavbar textColor="text-white" />
      <div className="flex items-start gap-4">
        <Image
          src="/image/head_phone.png"
          alt="Footer Logo"
          width={40}
          height={40}
        />
        <div>
          <p className="text-sm text-gray-400">{t("hotline")}</p>
          <p className="font-medium">(+100) 123 456 7890</p>
        </div>
      </div>

      <div className="flex gap-2">
        <span className="text-sm text-gray-400">{t("addressLabel")}</span>
        <p>{t("address")}</p>
      </div>

      <div className="flex gap-2">
        <span className="text-sm text-gray-400">{t("emailLabel")}</span>
        <p>{t("email")}</p>
      </div>

      <div className="flex gap-2">
        <span className="text-sm text-gray-400">{t("phoneLabel")}</span>
        <p>{t("phone")}</p>
      </div>
    </div>
  );
}
