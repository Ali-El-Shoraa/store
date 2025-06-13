"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { syncLocaleWithCookie } from "@/utils/locale-sync";
import { Button } from "@/components/ui/button";
import { EgyptFlag, UKFlag } from "@/lib/localItem";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLocale = () => {
    const nextLocale = currentLocale === "ar" ? "en" : "ar";

    startTransition(() => {
      syncLocaleWithCookie(nextLocale);

      const newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
      router.replace(newPath, { scroll: false });
    });
  };

  return (
    <Button
      variant="outline"
      // size="icon"
      onClick={toggleLocale}
      disabled={isPending}
      className="p-2 hover:bg-gray-100 cursor-pointer text-black rounded"
      aria-label="Toggle language"
    >
      {currentLocale === "ar" ? (
        <>
          En <UKFlag />
        </>
      ) : (
        <>
          <EgyptFlag /> Ar
        </>
      )}
    </Button>
  );
}
