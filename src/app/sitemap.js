import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// Adapt this as necessary
const host = "https://acme.com";

export default function sitemap() {
  // Adapt this as necessary
  return [...getEntries("/"), ...getEntries("/users")];
}

function getEntries(href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));
}

function getUrl(href, locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}
