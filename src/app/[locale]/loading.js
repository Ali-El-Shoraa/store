// app/[locale]/loading.js
"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Loading() {
  const [animationData, setAnimationData] = useState(null);

  useLayoutEffect(() => {
    fetch("/animations/loading.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}

// export default function Loading() {
//   return (
//     <div className="loader">
//       <div className="circle">
//         <div className="dot"></div>
//         <div className="outline"></div>
//       </div>
//       <div className="circle">
//         <div className="dot"></div>
//         <div className="outline"></div>
//       </div>
//       <div className="circle">
//         <div className="dot"></div>
//         <div className="outline"></div>
//       </div>
//       <div className="circle">
//         <div className="dot"></div>
//         <div className="outline"></div>
//       </div>
//     </div>
//   );
// }
