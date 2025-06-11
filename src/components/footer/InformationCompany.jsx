import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function InformationCompany() {
  const t = await getTranslations("Footer.information");

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{t.raw("title")}</h4>
      <div className="space-y-2">
        <Link href="#" className="block text-gray-300 hover:text-white">
          {t("links.testimonials")}
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white">
          {t("links.contact")}
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white">
          {t("links.location")}
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white">
          {t("links.guarantee")}
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white">
          {t("links.trackOrder")}
        </Link>
        <Link href="#" className="block text-gray-300 hover:text-white">
          {t("links.helpPage")}
        </Link>
      </div>
    </div>
  );
}
