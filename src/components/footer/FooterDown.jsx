import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function FooterDown() {
  const t = await getTranslations("Footer.copyright");

  return (
    <div className="bg-gray-950 py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            <span>{t("text")}</span>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/image/logo.png"
              alt="Payment Methods"
              width={300}
              height={40}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
