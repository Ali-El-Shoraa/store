import { Link } from "@/i18n/navigation";
import { RightHandPointer } from "@/lib/iconsShare";
import { getTranslations } from "next-intl/server";

export default async function QuickMenu() {
  const t = await getTranslations("Footer.quickMenu");

  return (
    <div className="">
      <h4 className="text-lg font-semibold mb-4">{t("title")}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.tv")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.computers")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.cameras")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.phones")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.games")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.audio")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.photo")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.accessories")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.headphones")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.videoGames")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.clothing")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.sneakers")}
        </Link>
      </div>
    </div>
  );
}
