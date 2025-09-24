"use client";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
// import { getTranslations } from "next-intl/server";

export default function FooterSubscribe() {
  const t = useTranslations("Footer.subscribe");

  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="md:col-span-3 lg:col-span-1">
      <h4 className="text-lg font-semibold mb-4">{t("title")}</h4>
      <div className="bg-gray-800 p-6 rounded-lg">
        <p className="text-gray-300 mb-2">
          <span className="font-medium text-white">{t("joinText")}</span>{" "}
          {t("description")}
        </p>

        <div className="mb-4">
          <label className="block text-sm text-gray-400 mb-2">
            {t("newsletterLabel")}
          </label>
          <form className="flex gap-2">
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="bg-gray-700 border-gray-600 text-white"
                suppressHydrationWarning
              />
              <Button
                type="submit"
                className="bg-brand-secoundry hover:bg-brand-secoundry/90 cursor-pointer"
              >
                {t("subscribeButton")}
              </Button>
            </div>
          </form>
        </div>

        <p className="text-xs text-gray-400">{t("privacyText")}</p>
      </div>
    </div>
  );
}
