"use client";

import Loading from "@/app/[locale]/loading";
import { useLoadingStore } from "@/store/useLoadingStore";
// import { getPathname, usePathname } from "@/i18n/navigation";
// import { useEffect } from "react";

export default function LoadingPage({ children }) {
  const { isLoading } = useLoadingStore();
  //   const pathname = usePathname();

  //   // call safely with default options
  //   const getpathname = getPathname({ forcePrefix: false });

  //   console.log("isLoading: ", isLoading);
  //   console.log("pathname: ", pathname);
  //   console.log("getPathname: ", getpathname);

  //   useEffect(() => {
  //     // بدل ما تسيبه معلق
  //     setLoading(true);

  //     return () => {
  //       setLoading(false);
  //     };
  //   }, [pathname]);

  if (isLoading) return <Loading />;

  return children;
}

// "use client";
// import Loading from "@/app/[locale]/loading";
// import { getPathname, usePathname } from "@/i18n/navigation";
// import { useLoadingStore } from "@/store/useLoadingStore";
// import { use, useEffect } from "react";

// export default function LoadingPage({ children }) {
//   const { isLoading, setLoading } = useLoadingStore();
//   const pathname = usePathname();
//   const getpathname = getPathname({ forcePrefix: true });

//   console.log("isLoading: ", isLoading);
//   console.log("pathname: ", pathname);
//   console.log("getPathname: ", getpathname);
//   //   useEffect(() => {
//   //     setLoading(true);
//   //   }, [pathname]);

//   if (isLoading) return <Loading />;

//   return children;
// }
