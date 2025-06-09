"use client";

import { useEffect, useState } from "react";

const LOCALE_STORAGE_KEY = "preferred-locale";

export function usePersistedLocale(defaultLocale = "ar") {
  const [persistedLocale, setPersistedLocale] = useState(defaultLocale);

  // Load persisted locale on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored) {
        setPersistedLocale(stored);
      }
    }
  }, []);

  // Save locale to localStorage
  const saveLocale = (locale) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
      setPersistedLocale(locale);
    }
  };

  // Get the preferred locale (from storage or default)
  const getPreferredLocale = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(LOCALE_STORAGE_KEY) || defaultLocale;
    }
    return defaultLocale;
  };

  return {
    persistedLocale,
    saveLocale,
    getPreferredLocale,
  };
}
