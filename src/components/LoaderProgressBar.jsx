"use client";

import { useLoadingStore } from "@/store/useLoadingStore";
import NextTopLoader, { useTopLoader } from "nextjs-toploader";
import { useRouter } from "nextjs-toploader/app";
import { useEffect, useRef } from "react";

export default function LoadingBarComponents() {
  const { setLoading } = useLoadingStore();
  const loader = useTopLoader();
  const router = useRouter();
  const lastLoadingState = useRef(false);
  const intervalRef = useRef(null);

  console.log("intervalRef", intervalRef.current);
  // مراقبة حالة TopLoader بفترات محددة (بدلاً من requestAnimationFrame المستمر)
  useEffect(() => {
    const checkLoadingStatus = () => {
      const isLoaderActive = loader.isStarted();

      // فقط إذا تغيرت الحالة
      if (isLoaderActive !== lastLoadingState.current) {
        lastLoadingState.current = isLoaderActive;
        setLoading(isLoaderActive);

        if (isLoaderActive) {
          console.log("يبدأ مع تغيير المسار");
        } else {
          console.log("ينتهي بعد render");
        }
      }
    };

    // فحص كل 100ms بدلاً من requestAnimationFrame المستمر
    intervalRef.current = setInterval(checkLoadingStatus, 50);

    return () => {
      if (intervalRef.current) {
        console.log("intervalRef.current ", intervalRef.current);
        clearInterval(intervalRef.current);
      }
    };
  }, [loader, setLoading]);

  // تعديل router methods
  useEffect(() => {
    const originalPush = router.push;
    const originalReplace = router.replace;

    router.push = (...args) => {
      setLoading(true);
      lastLoadingState.current = true;
      console.log("يبدأ مع تغيير المسار");
      return originalPush(...args);
    };

    router.replace = (...args) => {
      setLoading(true);
      lastLoadingState.current = true;
      return originalReplace(...args);
    };

    return () => {
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [router, setLoading]);

  return (
    <NextTopLoader
      color="#2299DD"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
      zIndex={1600}
      showAtBottom={false}
    />
  );
}
