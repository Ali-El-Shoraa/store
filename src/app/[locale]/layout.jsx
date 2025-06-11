import { NextIntlClientProvider, hasLocale, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { WebVitals } from "@/components/WebVitals";
import { cairo, poppins } from "./font";
import LoaderProgressBar from "@/components/LoaderProgressBar";
import { Suspense } from "react";
import Loading from "./loading";
import ButtonToTop from "@/components/ButtonToTop";

// async function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabic = locale === "ar" || false;

  // await delay(5000);
  // if (true) throw new Error("eeeeeeeeeeeeeeeeeeeeeeeee");
  return (
    <html
      lang={isArabic ? "ar" : "en"}
      dir={isArabic ? "rtl" : "ltr"}
      className={`${isArabic ? cairo.variable : poppins.variable}`}
    >
      <body
        className={`bg-brand-bg antialiased ${
          isArabic ? "font-cairo" : "font-poppins"
        }`}
      >
        <NextIntlClientProvider locale={locale}>
          <main className="">
            <LoaderProgressBar />
            <WebVitals />
            <Suspense fallback={<Loading />}>
              {children}
              <ButtonToTop />
            </Suspense>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
