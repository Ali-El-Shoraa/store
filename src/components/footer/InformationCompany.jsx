import { Link } from "@/i18n/navigation";
import { RightHandPointer } from "@/lib/iconsShare";
import { getTranslations } from "next-intl/server";

export default async function InformationCompany() {
  const t = await getTranslations("Footer.information");

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{t.raw("title")}</h4>
      <div className="space-y-2">
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.testimonials")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.contact")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.location")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.guarantee")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.trackOrder")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.helpPage")}
        </Link>
      </div>
    </div>
  );
}
