"use client";

import HolyLoader, { startHolyLoader, stopHolyLoader } from "holy-loader";
import { useLinkStatus } from "next/link";

function startLoader() {
  startHolyLoader();
}

function completeLoader() {
  stopHolyLoader();
}

export default function LoadingBarComponents() {
  const { pending } = useLinkStatus();

  return (
    <div className="">
      <HolyLoader color="linear-gradient(to right, #ff7e5f, #feb47b)" />
    </div>
  );
}

// "use client";

// import { useRef, useEffect } from "react";
// import LoadingBar from "react-top-loading-bar";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

// export default function LoadingBarComponents() {
//   const loadingBarRef = useRef();
//   const router = useRouter();

//   let pathname = usePathname();
//   let searchParams = useSearchParams();

//   const handleStart = () => {
//     if (loadingBarRef.current) {
//       loadingBarRef.current.continuousStart();
//     }
//   };

//   const handleComplete = () => {
//     if (loadingBarRef.current) {
//       loadingBarRef.current.complete();
//     }
//   };

//   useEffect(() => {
//     const originalPush = router.push;
//     router.push = async (...args) => {
//       handleStart();
//       try {
//         await originalPush(...args);
//       } catch (error) {
//         handleComplete();
//         throw error;
//       }
//     };

//     return () => {
//       router.push = originalPush;
//     };
//   }, [router]);

//   useEffect(() => {
//     handleComplete();
//   }, [pathname, searchParams]);

//   return (
//     <LoadingBar color="#29d" ref={loadingBarRef} height={5} shadow={false} />
//   );
// }
