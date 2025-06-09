"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition, useEffect } from "react";
import { Check, Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { syncLocaleWithCookie } from "@/utils/locale-sync";
import { usePersistedLocale } from "@/hooks/use-persisted-locale";
import { locales } from "@/lib/localItem";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  //   const { saveLocale } = usePersistedLocale();

  const onSelectChange = (value) => {
    const nextLocale = value;
    startTransition(() => {
      // Sync locale with both localStorage and cookie
      syncLocaleWithCookie(nextLocale);
      router.replace(`/${nextLocale}`);
    });
  };

  // Update the useEffect to use the sync utility
  useEffect(() => {
    if (localActive) {
      syncLocaleWithCookie(localActive);
    }
  }, [localActive]);

  const currentLocale = locales.find((locale) => locale.value === localActive);

  return (
    <Select
      defaultValue={localActive}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-[180px] gap-2 bg-white text-black">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="flex items-center gap-2">
            <span>{currentLocale?.flag}</span>
            <span>{currentLocale?.label}</span>
          </span>
        </div>
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale.value} value={locale.value}>
            <div className="flex items-center gap-2">
              <span>{locale.flag}</span>
              <span>{locale.label}</span>
              {locale.value === localActive && (
                <Check className="h-4 w-4 ml-auto" />
              )}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
