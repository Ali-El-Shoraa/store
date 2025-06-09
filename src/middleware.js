// import { NextResponse } from "next/server";
// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// // إنشاء ميدل وير i18n
// const intlMiddleware = createMiddleware(routing);

// export default function middleware(req) {
//   // الخطوة الأولى: التشغيل التلقائي
//   const res = intlMiddleware(req);

//   // الخطوة الثانية: منطقك الإضافي
//   const url = req.nextUrl;
//   if (
//     !url.pathname.startsWith("/_next") &&
//     !url.pathname.includes("/api") &&
//     !/\..*$/.test(url.pathname)
//   ) {
//     if (req.nextUrl.locale) {
//       const locale = req.cookies.get("NEXT_LOCALE")?.value || "ar";
//       return NextResponse.redirect(
//         new URL(`/${locale}${url.pathname}${url.search}`, req.url)
//       );
//     }
//   }

//   // العائد هو استجابة i18n أو المُعدلة
//   return res;
// }

// // تحديد matcher مرة واحدة فقط
// export const config = {
//   matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
// };

import { NextResponse } from "next/server";

import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware({
  ...routing,
  localeDetection: false,
  // localeDetection: true,
});

export default function middleware(req) {
  return intlMiddleware(req);
}

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};

// import { NextResponse } from "next/server";

// const locales = ["en", "ar"];
// const defaultLocale = "en";

// function getPreferredLocale(request) {
//   // Try to get locale from cookie first (server-side equivalent of localStorage)
//   const cookieLocale = request.cookies.get("preferred-locale")?.value;
//   if (cookieLocale && locales.includes(cookieLocale)) {
//     return cookieLocale;
//   }

//   // Fallback to Accept-Language header
//   const acceptLanguage = request.headers.get("Accept-Language");
//   if (acceptLanguage) {
//     const preferredLanguage = acceptLanguage
//       .split(",")[0]
//       .split("-")[0]
//       .toLowerCase();

//     if (locales.includes(preferredLanguage)) {
//       return preferredLanguage;
//     }
//   }

//   return defaultLocale;
// }

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // Check if pathname already has a locale
//   const pathnameHasLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (!pathnameHasLocale) {
//     // Get the preferred locale
//     const preferredLocale = getPreferredLocale(request);

//     // Redirect to the preferred locale
//     const response = NextResponse.redirect(
//       new URL(`/${preferredLocale}${pathname}`, request.url)
//     );

//     // Set cookie to remember the preference
//     response.cookies.set("preferred-locale", preferredLocale, {
//       maxAge: 365 * 24 * 60 * 60, // 1 year
//       path: "/",
//     });

//     return response;
//   }

//   // If locale is in URL, update the cookie
//   const currentLocale = pathname.split("/")[1];
//   if (locales.includes(currentLocale)) {
//     const response = NextResponse.next();
//     response.cookies.set("preferred-locale", currentLocale, {
//       maxAge: 365 * 24 * 60 * 60, // 1 year
//       path: "/",
//     });
//     return response;
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     // Skip all internal paths (_next)
//     "/((?!_next|api|favicon.ico).*)",
//   ],
// };
// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// export default createMiddleware(routing);

// export const config = {
//   // Match all pathnames except for
//   // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
//   // - … the ones containing a dot (e.g. `favicon.ico`)
//   matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
// };

// import { NextRequest, NextResponse } from "next/server";

// const PUBLIC_FILE = /\.(.*)$/;

// export async function middleware(req: NextRequest) {
//   if (
//     req.nextUrl.pathname.startsWith("/_next") ||
//     req.nextUrl.pathname.includes("/api/") ||
//     PUBLIC_FILE.test(req.nextUrl.pathname)
//   ) {
//     return;
//   }

//   if (req.nextUrl.locale === "ar") {
//     const locale = req.cookies.get("NEXT_LOCALE")?.value || "ar";

//     return NextResponse.redirect(
//       new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
//     );
//   }
// }
