import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["ar", "en"],
  localeDetection: false,
  localePrefix: "always", //"never",
  // Used when no locale matches
  defaultLocale: "ar",
});

// import { defineRouting } from "next-intl/routing";

// export const routing = defineRouting({
//   // A list of all locales that are supported
//   locales: ["en", "ar"],
//   // Used when no locale matches
//   defaultLocale: "en",

//   localePrefix: "always",

//   // localePrefix: "as-needed", // يضيف البادئة فقط عند الحاجة
//   // localeCookie: {
//   //   name: "NEXT_LOCALE",
//   //   maxAge: 60 * 60 * 24 * 365, // سنة واحدة
//   // },
// });
