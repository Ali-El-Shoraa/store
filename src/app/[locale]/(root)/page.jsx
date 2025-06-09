import IndexHomePage from "@/pages/hero/IndexHomePage";
import { generateSEOMetadata } from "@/utils/metadata-generator";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export const metadata = generateSEOMetadata({
  title: "Ayo 7 - Clean, Minimal Magento 2 Theme",
  description: "My page description",
  image: "/image/logo.png",
  url: "/my-page",
  tags: ["tag1", "tag2"],
});

// import {
//   Truck,
//   Shield,
//   ShoppingBag,
//   Heart,
//   HeadphonesIcon,
// } from "lucide-react";

// const services = [
//   {
//     id: 1,
//     icon: Truck,
//     title: "Free Delivery",
//     description: "For all orders over $120",
//     color: "bg-green-100 text-green-600",
//   },
//   {
//     id: 2,
//     icon: Shield,
//     title: "Safe Payment",
//     description: "100% secure payment",
//     color: "bg-blue-100 text-blue-600",
//   },
//   {
//     id: 3,
//     icon: ShoppingBag,
//     title: "Shop With Confidence",
//     description: "If goods have problems",
//     color: "bg-purple-100 text-purple-600",
//   },
//   {
//     id: 4,
//     icon: HeadphonesIcon,
//     title: "24/7 Help Center",
//     description: "Dedicated 24/7 support",
//     color: "bg-orange-100 text-orange-600",
//   },
//   {
//     id: 5,
//     icon: Heart,
//     title: "Friendly Services",
//     description: "30 day satisfaction guarantee",
//     color: "bg-pink-100 text-pink-600",
//   },
// ];

// function ServicesSection() {
//   return (
//     <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
//         {services.map((service, index) => {
//           const IconComponent = service.icon;
//           return (
//             <div key={service.id} className="group relative">
//               <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
//                 <div
//                   className={`flex items-center justify-center w-20 h-20 mb-6 rounded-full ${service.color} group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <IconComponent className="w-10 h-10" />
//                 </div>
//                 <div className="space-y-3">
//                   <h4 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
//                     {service.title}
//                   </h4>
//                   <p className="text-gray-600 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// components/ServicesGrid.tsx
// "use client";

import { Truck, CreditCard, ShieldCheck, LifeBuoy, Smile } from "lucide-react";
import BlogSection from "@/pages/blog/BlogSection";
// import BlogSectionAlternative from "@/pages/blog/blog-section-alternative";
import FeaturedProducts from "@/pages/hero/sections/featured-products";

const services = [
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

function ServicesSection() {
  return (
    // <div className="py-12 bg-white">
    <div className="py-3 bg-white border border-gray-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4">
        {services.map(({ title, desc, icon: Icon, bg, fg }) => (
          <div key={title} className="flex items-center text-center p-4 gap-2">
            <div
              className={`p-4 rounded-full flex items-center justify-center ${bg} ${fg}`}
            >
              <Icon className="h-6 w-6" />
            </div>

            <div className="">
              <h4 className="text-sm font-semibold">{title}</h4>
              <p className="text-xs text-gray-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
}

export default function Home() {
  const t = useTranslations("page");

  return (
    <>
      <IndexHomePage />
      {/* <LocaleSwitcher /> */}
      <div className="container mx-auto px-4 py-8 space-y-5">
        <ServicesSection />

        {/* <BlogSectionAlternative /> */}
        <div className="space-y-8">
          {/* Features */}
          <section className="grid md:grid-cols-3 gap-6">
            <div className="text-center border">
              <Image
                src={`/image/slider1.png`}
                width={1000}
                height={1000}
                alt="slider 1"
                className="w-full h-full rounded"
              />
            </div>
            <div className="text-center border">
              <Image
                src={`/image/slider1.png`}
                width={1000}
                height={1000}
                alt="slider 1"
                className="w-full h-full rounded"
              />
            </div>
            <div className="text-center border">
              <Image
                src={`/image/slider1.png`}
                width={1000}
                height={1000}
                alt="slider 1"
                className="w-full h-full rounded"
              />
            </div>
          </section>
          <FeaturedProducts />
          <FeaturedProducts />
          <section className="grid md:grid-cols-2 gap-6">
            <div className="text-center border">
              <Image
                src={`/image/slider1.png`}
                width={1000}
                height={1000}
                alt="slider 1"
                className="w-full h-full rounded"
              />
            </div>
            <div className="text-center border">
              <Image
                src={`/image/slider1.png`}
                width={1000}
                height={1000}
                alt="slider 1"
                className="w-full h-full rounded"
              />
            </div>
          </section>

          <BlogSection />
        </div>
      </div>
    </>
  );
}
