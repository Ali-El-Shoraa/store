import { Poppins, Cairo } from "next/font/google";

// تهيئة خط Poppins للغة الإنجليزية
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// تهيئة خط Cairo للغة العربية
export const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
});
