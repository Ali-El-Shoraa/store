import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { WebVitals } from "@/components/WebVitals";
// import { setRequestLocale } from "next-intl/server";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // setRequestLocale("ar");

  return (
    <html dir={locale === "ar" ? "rtl" : "ltr"} lang={locale}>
      <body
        className="bg-brand-bg antialiased"
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
