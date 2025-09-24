"use client";
import { useState, useEffect } from "react";

import ActionsHeader from "./ActionsHeader";
import LogoNavbar from "./LogoNavbar";
import DesktopNavigation from "./DesktopNavigation";
import SearchPopupNavbar from "./SearchPopupNavbar";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar */}
      {/* <div className="bg-gradient-to-r from-primary to-purple-600 text-primary-foreground text-sm py-2 px-4 text-center">
        <div className="container flex items-center justify-center gap-3 flex-wrap">
          <Truck className="h-4 w-4 flex-shrink-0" />
          <span>Free shipping on all orders over $50</span>
          <Button
            variant="link"
            className="text-primary-foreground underline p-0 h-auto font-medium"
            asChild
          >
            <Link href="/shipping">Details</Link>
          </Button>
        </div>
      </div> */}

      {/* Search Popup */}
      <SearchPopupNavbar
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 bg-background transition-all duration-300 ${
          isScrolled ? "shadow-lg py-2" : "shadow-sm py-3"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            <LogoNavbar />

            <div className="hidden lg:flex flex-1 justify-center max-w-2xl">
              <DesktopNavigation />
            </div>

            <ActionsHeader onOpenSearch={() => setIsSearchOpen(true)} />
          </div>
        </div>
      </header>
    </>
  );
}
