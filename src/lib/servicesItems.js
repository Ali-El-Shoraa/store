import { CreditCard, LifeBuoy, ShieldCheck, Smile, Truck } from "lucide-react";

export const services = [
  {
    title: "Free Delivery",
    desc: "For all orders over $120",
    icon: Truck,
    bg: "bg-blue-100",
    fg: "text-blue-600",
  },
  {
    title: "Safe Payment",
    desc: "100% secure payment",
    icon: CreditCard,
    bg: "bg-green-100",
    fg: "text-green-600",
  },
  {
    title: "Shop With Confidence",
    desc: "If goods have problems",
    icon: ShieldCheck,
    bg: "bg-yellow-100",
    fg: "text-yellow-600",
  },
  {
    title: "24/7 Help Center",
    desc: "Dedicated 24/7 support",
    icon: LifeBuoy,
    bg: "bg-red-100",
    fg: "text-red-600",
  },
  {
    title: "Friendly Services",
    desc: "30 day satisfaction guarantee",
    icon: Smile,
    bg: "bg-purple-100",
    fg: "text-purple-600",
  },
];
