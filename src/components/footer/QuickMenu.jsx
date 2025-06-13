// import { Link } from "@/i18n/navigation";
// import {
//   Camera,
//   CameraIcon,
//   Gamepad,
//   Headphones,
//   Joystick,
//   Monitor,
//   Music,
//   Shirt,
//   Smartphone,
//   Tv,
//   Watch,
// } from "lucide-react";
// import { getTranslations } from "next-intl/server";
// // import {
// //   Tv,
// //   Monitor,
// //   Camera,
// //   Smartphone,
// //   Gamepad,
// //   Headphones,
// //   Music,
// //   CameraIcon,
// //   Watch,
// //   Joystick,
// //   Shirt,
// //   Sneaker,
// // } from "lucide-react";

// const linkIcons = {
//   tv: Tv,
//   computers: Monitor,
//   cameras: Camera,
//   phones: Smartphone,
//   games: Gamepad,
//   audio: Music,
//   photo: CameraIcon,
//   accessories: Watch,
//   headphones: Headphones,
//   videoGames: Joystick,
//   clothing: Shirt,
//   // sneakers: Sneaker,
// };

// export default async function QuickMenu() {
//   const t = await getTranslations("Footer.quickMenu");

//   const links = [
//     "tv",
//     "computers",
//     "cameras",
//     "phones",
//     "games",
//     "audio",
//     "photo",
//     "accessories",
//     "headphones",
//     "videoGames",
//     "clothing",
//     // "sneakers",
//   ];

//   return (
//     <div className="space-y-4">
//       <h4 className="text-lg font-semibold text-white mb-4">{t("title")}</h4>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//         {links.map((link) => {
//           const Icon = linkIcons[link];

//           return (
//             <Link
//               key={link}
//               href={`/category/${link}`}
//               className="
//                 flex items-center gap-3
//                 text-gray-300 hover:text-white
//                 transition-all duration-300
//                 p-2 rounded-lg
//                 hover:bg-white/10
//                 transform hover:scale-[1.02]
//                 active:scale-95
//                 group
//               "
//             >
//               <Icon className="h-5 w-5 flex-shrink-0 group-hover:text-primary" />
//               <span className="group-hover:translate-x-1 transition-transform duration-200">
//                 {t(`links.${link}`)}
//               </span>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { Link } from "@/i18n/navigation";
import { RightHandPointer } from "@/lib/iconsShare";
import { getTranslations } from "next-intl/server";

export default async function QuickMenu() {
  const t = await getTranslations("Footer.quickMenu");

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">{t("title")}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.tv")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.computers")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.cameras")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />{" "}
          {t("links.phones")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.games")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.audio")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.photo")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.accessories")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.headphones")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.videoGames")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.clothing")}
        </Link>
        <Link
          href="#"
          className="text-gray-300 hover:text-white flex items-center gap-2"
        >
          <RightHandPointer className="w-4 h-4 rtl:rotate-y-180" />
          {t("links.sneakers")}
        </Link>
      </div>
    </div>
  );
}

// import { Link } from "@/i18n/navigation";
// import { getTranslations } from "next-intl/server";

// export default async function QuickMenu() {
//   const t = await getTranslations("Footer.quickMenu");

//   return (
//     <div>
//       <h4 className="text-lg font-semibold mb-4">{t("title")}</h4>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.tv")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.computers")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.cameras")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.phones")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.games")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.audio")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.photo")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.accessories")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.headphones")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.videoGames")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.clothing")}
//         </Link>
//         <Link href="#" className="text-gray-300 hover:text-white">
//           {t("links.sneakers")}
//         </Link>
//       </div>
//     </div>
//   );
// }
