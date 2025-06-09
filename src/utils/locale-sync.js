"use client";

// Sync localStorage with cookies for server-side access
export function syncLocaleWithCookie(locale) {
  if (typeof window !== "undefined") {
    // Set localStorage
    localStorage.setItem("preferred-locale", locale);

    // Set cookie for server-side access
    document.cookie = `preferred-locale=${locale}; path=/; max-age=${
      365 * 24 * 60 * 60
    }`;
  }
}

export function getStoredLocale() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("preferred-locale");
  }
  return null;
}
