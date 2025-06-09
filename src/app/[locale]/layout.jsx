import { NextIntlClientProvider, hasLocale, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
import { WebVitals } from "@/components/WebVitals";
// import { headers } from "next/headers";
import { cairo, poppins } from "./font";
// import { setRequestLocale } from "next-intl/server";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// import { poppins, cairo } from "./fonts";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // setRequestLocale("ar");

  // const headersList = await headers();
  // const acceptLanguage = headersList.get("accept-language");

  // const locale = useLocale()
  const isArabic = locale === "ar" || false;
  console.log("acceptLanguage", locale);
  return (
    <html
      // dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}
      lang={isArabic ? "ar" : "en"}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${isArabic ? cairo.variable : poppins.variable}`}
    >
      <body
        // className="bg-brand-bg antialiased"
        className={`bg-brand-bg antialiased ${
          isArabic ? "font-cairo" : "font-poppins"
        }`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale}>
          <main className="">
            <WebVitals />
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
