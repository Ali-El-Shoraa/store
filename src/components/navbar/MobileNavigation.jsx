"use client";

import { subNavbarItem } from "@/lib/subNavbarItem";
import { Link } from "@/i18n/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);

  const closeSheet = () => {
    setIsOpen(false);
    setExpandedItems([]);
  };

  const toggleExpanded = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="lg:hidden me-7">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-transparent hover:text-brand-secoundry cursor-pointer"
          >
            <Menu className="size-7" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-6">
            <ul className="space-y-2">
              {subNavbarItem?.map((item) => (
                <li key={item?.id}>
                  {item?.children ? (
                    <div>
                      <button
                        onClick={() => toggleExpanded(item?.id)}
                        className="flex items-center justify-between w-full p-3 text-left font-medium hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          {item?.icon}
                          {item?.title}
                        </div>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expandedItems.includes(item?.id) ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedItems.includes(item?.id) && (
                        <ul className="ml-4 mt-2 space-y-1">
                          {item?.children?.map((child) => (
                            <li key={child?.id}>
                              <Link
                                href={child?.link}
                                onClick={closeSheet}
                                className="flex items-center gap-2 p-2 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors"
                              >
                                {child?.icon}
                                {child?.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item?.link}
                      onClick={closeSheet}
                      className="flex items-center gap-2 p-3 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      {item?.icon}
                      {item?.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
