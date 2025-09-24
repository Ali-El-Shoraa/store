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

