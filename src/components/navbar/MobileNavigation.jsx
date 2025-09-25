"use client";

import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Mail, Menu, Phone, Truck, X } from "lucide-react";
import LogoNavbar from "./LogoNavbar";
import { ScrollArea } from "../ui/scroll-area";
import { Link } from "@/i18n/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Badge } from "../ui/badge";
import LocaleSwitcher from "../locale-switcher";

const categories = [
  {
    id: 1,
    name: "Tablets & iPad",
    href: "/search", //"/category/tablets-ipad",
    icon: "📱",
    featured: true,
  },
  {
    id: 2,
    name: "Computers",
    href: "/search", //"/category/computers",
    icon: "💻",
    featured: true,
  },
  {
    id: 3,
    name: "Smartphones",
    href: "/search", //"/category/smartphones",
    icon: "📱",
    featured: true,
  },
  {
    id: 4,
    name: "Wearables",
    href: "/search", //"/category/wearables",
    icon: "⌚",
  },
  {
    id: 5,
    name: "Audio",
    href: "/search", //"/category/audio",
    icon: "🎧",
    featured: true,
  },
  {
    id: 6,
    name: "Cameras",
    href: "/search", //"/category/cameras",
    icon: "📷",
  },
  {
    id: 7,
    name: "Gaming",
    href: "/search", //"/category/gaming",
    icon: "🎮",
  },
  {
    id: 8,
    name: "Accessories",
    href: "/search", //"/category/accessories",
    icon: "🔌",
  },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent text-foreground rounded-full h-10 w-10"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 sm:w-96 p-0 overflow-y-auto">
          <div className="flex flex-col h-full">
            <SheetTitle className="p-5 border-b flex items-center justify-between bg-gradient-to-r from-accent to-purple-50">
              <LogoNavbar />
              {/* <SheetClose asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose> */}
            </SheetTitle>

            <ScrollArea className="flex-1 p-5 overflow-auto">
              <nav className="space-y-1">
                {/* <SheetClose asChild>
                  <Link
                    href="/"
                    className="flex items-center gap-3 p-4 font-medium hover:bg-accent rounded-xl transition-colors"
                  >
                    Home
                  </Link>
                </SheetClose> */}

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="categories" className="border-0">
                    <AccordionTrigger className="flex items-center justify-between w-full p-4 text-left font-medium hover:bg-accent rounded-xl transition-colors [&[data-state=open]]:bg-accent">
                      <div className="flex items-center gap-3">
                        {/* <Grid className="h-5 w-5" /> */}
                        <span>Categories</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="ml-4 mt-1 space-y-1 pl-2 border-l-2 border-accent">
                        {categories.map((category) => (
                          <SheetClose key={category.id} asChild>
                            <Link
                              href={category.href}
                              className="flex items-center gap-3 p-3 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                            >
                              <span className="text-lg">{category.icon}</span>
                              <span className="text-sm font-medium">
                                {category.name}
                              </span>
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <SheetClose asChild>
                  {/* <Link
                    href="/deals"
                    className="flex items-center justify-between p-4 font-medium hover:bg-accent rounded-xl transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span>Deals</span>
                    </div>
                    <Badge className="bg-destructive hover:bg-destructive/90">
                      Sale
                    </Badge>
                  </Link> */}
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/blog"
                    className="flex items-center gap-3 p-4 font-medium hover:bg-accent rounded-xl transition-colors"
                  >
                    Blog
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="flex items-center gap-3 p-4 font-medium hover:bg-accent rounded-xl transition-colors"
                  >
                    About
                  </Link>
                </SheetClose>
              </nav>

              <div className="mt-8 pt-6 border-t">
                <h3 className="font-medium mb-3">Support</h3>
                <div className="space-y-2">
                  <SheetClose asChild>
                    <Link
                      href="/help"
                      className="flex items-center gap-3 p-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Help Center</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/track-order"
                      className="flex items-center gap-3 p-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent"
                    >
                      <Truck className="h-4 w-4" />
                      <span>Track Order</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/contact"
                      className="flex items-center gap-3 p-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Contact Us</span>
                    </Link>
                  </SheetClose>
                </div>
              </div>
            </ScrollArea>

            <div className="p-5 border-t bg-muted">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">Language</span>
                <LocaleSwitcher />
              </div>
              <Button className="w-full h-11" asChild>
                <SheetClose asChild>
                  <Link href="/login">Sign In</Link>
                </SheetClose>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
