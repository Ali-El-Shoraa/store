"use client";
import SubNavbar from "./SubNavbar";
import InputNavbar from "./InputNavbar";
import LocaleSwitcher from "../locale-switcher";
import LogoNavbar from "./LogoNavbar";
import ActionsHeader from "./ActionsHeader";
import { useCallback, useEffect, useState, useRef } from "react";
import DesktopNavigation from "./DesktopNavigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    setIsScrolled(currentScrollY > 150);

    if (currentScrollY > prevScrollY.current && currentScrollY > 150) {
      setIsVisible(false);
    } else if (currentScrollY < prevScrollY.current || currentScrollY < 10) {
      setIsVisible(true);
    }

    prevScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header className="bg-brand-color mb-7">
        <nav className="container h-[100px] flex items-center justify-between gap-5">
          <LogoNavbar />

          <div className="flex items-center justify-end md:justify-between gap-7 flex-1">
            <div className="hidden md:block w-full">
              <InputNavbar />
            </div>

            <ActionsHeader />
          </div>
        </nav>

        <hr className="border-[#1c394a]" />
        <nav className="container text-white h-14 flex items-center justify-between">
          <SubNavbar />

          <div className="block md:hidden">
            <InputNavbar />
          </div>

          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
        </nav>
      </header>

      <header
        className={`
        bg-brand-color w-full fixed top-0 left-0 right-0 z-30 max-lg:hidden
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "translate-y-0 opacity-100 shadow-md"
            : "-translate-y-full opacity-0"
        }
        ${
          isVisible
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
      >
        {/* <header className="bg-brand-color w-full"> */}
        <nav className="container text-white h-16 flex items-center justify-between gap-5">
          <LogoNavbar />

          <div className="text-[8px]">
            <DesktopNavigation />
          </div>
          <div className="flex items-center gap-4">
            <ActionsHeader />
            <LocaleSwitcher />
          </div>
        </nav>
        {/* </header> */}
      </header>
    </>
  );
}
// "use client";
// import SubNavbar from "./SubNavbar";
// import InputNavbar from "./InputNavbar";
// import LocaleSwitcher from "../locale-switcher";
// import LogoNavbar from "./LogoNavbar";
// import ActionsHeader from "./ActionsHeader";
// import { useCallback, useEffect, useState } from "react";
// import DesktopNavigation from "./DesktopNavigation";

// export default function Navbar() {

//   const [scroll, setScroll] = useState(false);

//   const eventScroll = useCallback(() => {
//     setScroll(() => (window.scrollY >= 150 ? true : false));
//   }, []);
//   useEffect(() => {
//     window.addEventListener("scroll", eventScroll);

//     return () => {
//       window.removeEventListener("scroll", eventScroll);
//     };
//   }, []);

//   return (
//     <>
//       <header className="bg-brand-color mb-7">
//         <nav className="container h-[100px] flex items-center justify-between gap-5">
//           <LogoNavbar />

//           <div className="flex items-center justify-end md:justify-between gap-7 flex-1">
//             <div className="hidden md:block w-full">
//               <InputNavbar />
//             </div>

//             <ActionsHeader />
//           </div>
//         </nav>

//         <hr className="border-[#1c394a]" />
//         <nav className="container text-white h-14 flex items-center justify-between">
//           <SubNavbar />

//           <div className="block md:hidden">
//             <InputNavbar />
//           </div>

//           <div className="hidden md:block">
//             <LocaleSwitcher />
//           </div>
//         </nav>
//       </header>

//       <header
//         className={`bg-brand-color w-full z-30 top-0 left-0 max-lg:hidden ${
//           scroll ? "md:fixed" : "hidden"
//         }`}
//       >
//         <nav
//           className={`container text-white h-14 flex items-center justify-between gap-5`}
//         >
//           <LogoNavbar />

//           <DesktopNavigation />
//           <div className="flex items-center gap-2.5">
//             <ActionsHeader />

//             <LocaleSwitcher />
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }

// const updateQuantity = (id, newQuantity) => {
//   if (newQuantity < 1) {
//     removeItem(id);
//     return;
//   }
//   setCartItems((items) =>
//     items.map((item) =>
//       item?.id === id ? { ...item, quantity: newQuantity } : item
//     )
//   );
// };

// Calculate cart totals
