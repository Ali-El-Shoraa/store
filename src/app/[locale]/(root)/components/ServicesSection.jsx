// "use client";
// import { getData } from "@/app/api/getData";
// import { useQuery } from "@tanstack/react-query";
// import Image from "next/image";

// export default function ServicesSection() {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["our-features"],
//     queryFn: () => getData("our-features"),
//     // staleTime: 60 * 1000,
//   });

//   if (error) {
//     return (
//       <div className="text-red-500 p-4">
//         Error loading services: {error.message}
//       </div>
//     );
//   }

//   return (
//     <div className="py-8 bg-white border border-gray-300 rounded-lg">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-4">
//         {isLoading ? (
//           <SkeletonLoading count={5} />
//         ) : (
//           data?.data?.map(({ id, icon, main_title, sub_title }, index) => (
//             <ServiceItem
//               key={id}
//               id={id}
//               icon={icon}
//               main_title={main_title}
//               sub_title={sub_title}
//               index={index}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// function ServiceItem({ id, icon, main_title, sub_title, index }) {
//   return (
//     <div
//       className="
//         group flex items-center text-center p-4 gap-3
//         transform transition-all duration-500 ease-out
//         hover:scale-105 hover:-translate-y-1 hover:shadow-lg
//         animate-fade-in-up cursor-pointer
//         rounded-lg hover:bg-gray-50
//       "
//       style={{
//         animationDelay: `${index * 100}ms`,
//         animationFillMode: "both",
//       }}
//     >
//       {/* Icon Container */}
//       <div
//         className={`
//           relative p-4 rounded-full flex items-center justify-center
//           transform transition-all duration-300 ease-out
//           group-hover:scale-110 group-hover:rotate-3
//           shadow-md group-hover:shadow-lg
//         `}
//       >
//         <img
//           src={icon}
//           alt={main_title}
//           width={24}
//           height={24}
//           className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
//         />
//         {/* Pulse ring effect */}
//         <div
//           className="
//             absolute inset-0 rounded-full border-2 border-current
//             opacity-0 group-hover:opacity-30 group-hover:scale-150
//             transition-all duration-500 ease-out
//           "
//         />
//       </div>

//       {/* Content */}
//       <div className="flex-1 text-left">
//         <h4
//           className="
//             text-sm font-semibold text-gray-900
//             group-hover:text-brand-secoundry transition-colors duration-300
//             transform group-hover:translate-x-1 transition-transform duration-300
//           "
//         >
//           {main_title}
//         </h4>
//         <p
//           className="
//             text-xs text-gray-500 mt-1
//             group-hover:text-gray-700 transition-colors duration-300
//             transform group-hover:translate-x-1 transition-transform duration-300
//           "
//           style={{ transitionDelay: "50ms" }}
//         >
//           {sub_title}
//         </p>
//       </div>

//       {/* Hover indicator */}
//       <div
//         className="
//           w-1 h-8 bg-brand-secoundry rounded-full
//           opacity-0 group-hover:opacity-100
//           transform scale-y-0 group-hover:scale-y-100
//           transition-all duration-300 ease-out
//         "
//       />
//     </div>
//   );
// }

// // مكون Skeleton Loading
// function SkeletonLoading({ count }) {
//   return (
//     <>
//       {Array.from({ length: count }).map((_, i) => (
//         <div
//           key={i}
//           className="flex items-center p-4 gap-3 rounded-lg bg-gray-100 animate-pulse"
//           style={{
//             animationDelay: `${i * 100}ms`,
//           }}
//         >
//           <div className="p-4 rounded-full bg-gray-300 h-14 w-14"></div>
//           <div className="flex-1 space-y-2">
//             <div className="h-4 bg-gray-300 rounded w-3/4"></div>
//             <div className="h-3 bg-gray-300 rounded w-1/2"></div>
//           </div>
//           <div className="w-1 h-8 bg-gray-300 rounded-full"></div>
//         </div>
//       ))}
//     </>
//   );
// }

// "use client";
// import { getData } from "@/app/api/getData";
// // import { services } from "@/lib/servicesItems";
// import { useQuery } from "@tanstack/react-query";
// // import { getTranslations } from "next-intl/server";
// import Image from "next/image";

// export default function ServicesSection() {
//   // const t = await getTranslations("ServicesSection.services");
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["our-features"], // نضيف اللغة كمفتاح استعلام
//     queryFn: () => getData("our-features"),
//   });
//   console.log("our-features", data);
//   return (
//     <div className="py-8 bg-white border border-gray-300 rounded-lg">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-4">
//         {data?.data?.map(({ id, icon, main_title, sub_title }, index) => {
//           return (
//             <div
//               key={id}
//               className="
//                 group flex items-center text-center p-4 gap-3
//                 transform transition-all duration-500 ease-out
//                 hover:scale-105 hover:-translate-y-1 hover:shadow-lg
//                 animate-fade-in-up cursor-pointer
//                 rounded-lg hover:bg-gray-50
//               "
//               style={{
//                 animationDelay: `${index * 100}ms`,
//                 animationFillMode: "both",
//               }}
//             >
//               {/* Icon Container */}
//               <div
//                 className={`
//                   relative p-4 rounded-full flex items-center justify-center
//                   transform transition-all duration-300 ease-out
//                   group-hover:scale-110 group-hover:rotate-3
//                   shadow-md group-hover:shadow-lg
//                   `}
//                 // ${bg} ${fg}
//               >
//                 {/* <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" /> */}
//                 <img
//                   src={icon}
//                   alt={main_title}
//                   width={24}
//                   height={24}
//                   className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
//                 />
//                 {/* Pulse ring effect */}
//                 <div
//                   className="
//                   absolute inset-0 rounded-full border-2 border-current
//                   opacity-0 group-hover:opacity-30 group-hover:scale-150
//                   transition-all duration-500 ease-out
//                 "
//                 />
//               </div>

//               {/* Content */}
//               <div className="flex-1 text-left">
//                 <h4
//                   className="
//                   text-sm font-semibold text-gray-900
//                   group-hover:text-brand-secoundry transition-colors duration-300
//                   transform group-hover:translate-x-1 transition-transform duration-300
//                 "
//                 >
//                   {main_title}
//                   {/* {t(`${id}.title`)} */}
//                 </h4>
//                 <p
//                   className="
//                   text-xs text-gray-500 mt-1
//                   group-hover:text-gray-700 transition-colors duration-300
//                   transform group-hover:translate-x-1 transition-transform duration-300
//                 "
//                   style={{ transitionDelay: "50ms" }}
//                 >
//                   {sub_title}
//                   {/* {t(`${id}.desc`)} */}
//                 </p>
//               </div>

//               {/* Hover indicator */}
//               <div
//                 className="
//                 w-1 h-8 bg-brand-secoundry rounded-full
//                 opacity-0 group-hover:opacity-100
//                 transform scale-y-0 group-hover:scale-y-100
//                 transition-all duration-300 ease-out
//               "
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { services } from "@/lib/servicesItems";
import { getTranslations } from "next-intl/server";

export default async function ServicesSection() {
  const t = await getTranslations("ServicesSection.services");

  return (
    <div className="py-8 bg-white border border-gray-300 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-4">
        {services?.map(({ id, icon: Icon, bg, fg }, index) => {
          return (
            <div
              key={id}
              className="
                group flex items-center text-center p-4 gap-3
                transform transition-all duration-500 ease-out
                hover:scale-105 hover:-translate-y-1 hover:shadow-lg
                animate-fade-in-up cursor-pointer
                rounded-lg hover:bg-gray-50
              "
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Icon Container */}
              <div
                className={`
                  relative p-4 rounded-full flex items-center justify-center
                  ${bg} ${fg}
                  transform transition-all duration-300 ease-out
                  group-hover:scale-110 group-hover:rotate-3
                  shadow-md group-hover:shadow-lg
                `}
              >
                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />

                {/* Pulse ring effect */}
                <div
                  className="
                  absolute inset-0 rounded-full border-2 border-current
                  opacity-0 group-hover:opacity-30 group-hover:scale-150
                  transition-all duration-500 ease-out
                "
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <h4
                  className="
                  text-sm font-semibold text-gray-900
                  group-hover:text-brand-secoundry transition-colors duration-300
                  transform group-hover:translate-x-1 transition-transform duration-300
                "
                >
                  {t(`${id}.title`)}
                </h4>
                <p
                  className="
                  text-xs text-gray-500 mt-1
                  group-hover:text-gray-700 transition-colors duration-300
                  transform group-hover:translate-x-1 transition-transform duration-300
                "
                  style={{ transitionDelay: "50ms" }}
                >
                  {t(`${id}.desc`)}
                </p>
              </div>

              {/* Hover indicator */}
              <div
                className="
                w-1 h-8 bg-brand-secoundry rounded-full
                opacity-0 group-hover:opacity-100
                transform scale-y-0 group-hover:scale-y-100
                transition-all duration-300 ease-out
              "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
