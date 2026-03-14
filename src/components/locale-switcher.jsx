"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { syncLocaleWithCookie } from "@/utils/locale-sync";
import { Button } from "@/components/ui/button";
import { EgyptFlag, UKFlag } from "@/lib/localItem";
import { useLoadingStore } from "@/store/useLoadingStore";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const { setLoading, isLoading } = useLoadingStore();
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const toggleLocale = () => {
    const nextLocale = currentLocale === "ar" ? "en" : "ar";
    setLoading(true);
    startTransition(() => {
      syncLocaleWithCookie(nextLocale);
      const newPath = pathname.replace(`/${currentLocale}`, `/${nextLocale}`);
      router.replace(newPath, { scroll: false });
    });
    setLoading(false);
  };

  console.log("currentLocale: ", isLoading);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          disabled={isPending}
          variant="outline"
          size="icon"
          className="h-10 w-10 rounded-full"
        >
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40 rounded-xl">
        {[
          { code: "en", label: "English", flag: <UKFlag /> },
          { code: "ar", label: "العربية", flag: <EgyptFlag /> },
        ].map(({ code, label, flag }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => currentLocale !== code && toggleLocale()}
            className={currentLocale === code ? "bg-accent" : ""}
          >
            <span className="flex items-center justify-between w-full">
              {label}
              {flag}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
