import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function QuickMenu() {
  const t = await getTranslations("Footer.quickMenu");

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{t("title")}</h4>
      <div className="grid grid-cols-2 gap-2">
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.tv")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.computers")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.cameras")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.phones")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.games")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.audio")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.photo")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.accessories")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.headphones")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.videoGames")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.clothing")}
        </Link>
        <Link href="#" className="text-gray-300 hover:text-white">
          {t("links.sneakers")}
        </Link>
      </div>
    </div>
  );
}
