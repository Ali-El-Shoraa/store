// middleware.js (في الجذر أو src/)
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar"],
  defaultLocale: "en",
  localePrefix: "always", // أو 'as-needed'
});

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
