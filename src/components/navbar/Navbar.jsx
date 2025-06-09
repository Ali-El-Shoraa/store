import { Layers, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import SubNavbar from "./SubNavbar";
import InputNavbar from "./InputNavbar";
import LocaleSwitcher from "../locale-switcher";

export default function Navbar() {
  return (
    <header className="bg-navbar-color mb-7">
      <nav className="container h-[100px] flex items-center justify-between gap-5">
        <div className="h-full flex items-center justify-center">
          <Image src={`/image/logo.png`} alt="logo" width={155} height={39} />
        </div>

        <div className="flex items-center justify-end md:justify-between gap-7 flex-1">
          <div className="hidden md:block w-full">
            <InputNavbar />
          </div>
          <div className="text-background flex items-center gap-6">
            <Layers size={28} />
            <Star size={28} />
            <ShoppingBag size={28} />
          </div>{" "}
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
  );
}
