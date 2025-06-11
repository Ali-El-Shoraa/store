// "use client";

// import { useEffect, useState } from "react";
// import { usePathname, useSearchParams } from "next/navigation";

// export default function EnhancedProgressBar({
//   height = 3,
//   showSpinner = true,
//   showPercentage = false,
//   theme = "gradient",
// }) {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [isLoading, setIsLoading] = useState(false);
//   const [progress, setProgress] = useState(0);

//   const themes = {
//     default: "bg-blue-500",
//     gradient: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
//     pulse: "bg-blue-500 animate-pulse",
//   };

//   useEffect(() => {
//     const handleStart = () => {
//       setIsLoading(true);
//       setProgress(0);
//     };

//     const handleComplete = () => {
//       setProgress(100);
//       setTimeout(() => {
//         setIsLoading(false);
//         setProgress(0);
//       }, 300);
//     };

//     handleStart();

//     const timer = setTimeout(() => {
//       handleComplete();
//     }, 100);

//     return () => clearTimeout(timer);
//   }, [pathname, searchParams]);

//   useEffect(() => {
//     if (!isLoading) return;

//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 90) return prev;
//         const increment = Math.random() * 8 + 2;
//         return Math.min(prev + increment, 90);
//       });
//     }, 150);

//     return () => clearInterval(interval);
//   }, [isLoading]);

//   if (!isLoading) return null;

//   return (
//     <>
//       {/* Enhanced Progress Bar */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <div
//           className={`h-${height} ${themes[theme]} transition-all duration-300 ease-out shadow-lg`}
//           style={{
//             width: `${progress}%`,
//             filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))",
//           }}
//         />
//       </div>

//       {/* Loading Indicator */}
//       {showSpinner && (
//         <div className="fixed top-6 right-6 z-50 animate-fade-in-up">
//           <div className="flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-xl border border-gray-200/50">
//             {/* Animated Spinner */}
//             <div className="relative">
//               <div className="w-5 h-5 border-2 border-gray-200 rounded-full" />
//               <div className="absolute top-0 left-0 w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
//             </div>

//             <div className="flex flex-col">
//               <span className="text-sm font-medium text-gray-900">Loading</span>
//               {showPercentage && (
//                 <span className="text-xs text-gray-500">
//                   {Math.round(progress)}%
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import HolyLoader, { startHolyLoader, stopHolyLoader } from "holy-loader";
import { useLinkStatus } from "next/link";

function startLoader() {
  startHolyLoader();
}

function completeLoader() {
  stopHolyLoader();
}

export default function RouterProgressBar() {
  const { pending } = useLinkStatus();

  console.log("from RouterProgressBar", pending);
  return (
    <div className="">
      <HolyLoader color="linear-gradient(to right, #ff7e5f, #feb47b)" />
    </div>
  );
}
