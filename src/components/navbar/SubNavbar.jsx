// "use client";
// import { Link } from "@/i18n/navigation";
// import { ChevronDown } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";

// const categories = [
//   {
//     name: "الإلكترونيات",
//     href: "/categories/electronics",
//     subcategories: [
//       { name: "الهواتف الذكية", href: "/categories/smartphones" },
//       { name: "أجهزة الكمبيوتر", href: "/categories/computers" },
//       { name: "الأجهزة المنزلية", href: "/categories/appliances" },
//     ],
//   },
//   {
//     name: "الأزياء",
//     href: "/categories/fashion",
//     subcategories: [
//       { name: "ملابس رجالية", href: "/categories/mens-clothing" },
//       { name: "ملابس نسائية", href: "/categories/womens-clothing" },
//       { name: "الأحذية", href: "/categories/shoes" },
//     ],
//   },
//   {
//     name: "المنزل والحديقة",
//     href: "/categories/home-garden",
//     subcategories: [
//       { name: "أثاث", href: "/categories/furniture" },
//       { name: "ديكور", href: "/categories/decor" },
//       { name: "أدوات الحديقة", href: "/categories/garden-tools" },
//     ],
//   },
// ];

// export default function SubNavbar() {
//   return (
//     <div className="flex items-center gap-6">
//       {categories.map((category) => (
//         <DropdownMenu key={category.name}>
//           <DropdownMenuTrigger asChild>
//             <Button
//               variant="ghost"
//               className="text-white hover:text-brand-secondary hover:bg-white/10 transition-all duration-200 flex items-center gap-1"
//             >
//               {category.name}
//               <ChevronDown className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent className="animate-in slide-in-from-top-2 duration-200">
//             <DropdownMenuItem asChild>
//               <Link href={category.href} className="cursor-pointer">
//                 عرض الكل
//               </Link>
//             </DropdownMenuItem>
//             {category.subcategories.map((sub) => (
//               <DropdownMenuItem key={sub.name} asChild>
//                 <Link href={sub.href} className="cursor-pointer">
//                   {sub.name}
//                 </Link>
//               </DropdownMenuItem>
//             ))}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       ))}
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";

const subNavbarItem = [
  {
    id: 1,
    title: "Tablets & iPad",
    link: "#",
  },
  {
    id: 2,
    title: "Computer",
    link: "#",
  },
  {
    id: 3,
    title: "Sport",
    link: "#",
  },
  {
    id: 4,
    title: "Categories",
    link: "#",
    children: [
      {
        id: 41,
        title: "Shop By Brand",
        link: "#",
      },
      {
        id: 42,
        title: "FAQ",
        link: "#",
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "#",
  },
  {
    id: 6,
    title: "About Us",
    link: "#",
  },
  {
    id: 7,
    title: "Contact",
    link: "#",
  },
  {
    id: 8,
    title: "Find a store",
    link: "#",
  },
];

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpanded = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const closeSheet = () => {
    setIsOpen(false);
    setExpandedItems([]);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6 text-sm font-semibold uppercase">
        <Link href="/" className="hover:text-brand-secoundry transition-colors">
          Tablets & iPad
        </Link>
        <Link href="/" className="hover:text-brand-secoundry transition-colors">
          Computer
        </Link>
        <Link href="/" className="hover:text-brand-secoundry transition-colors">
          Sport
        </Link>

        <HoverCard openDelay={0} closeDelay={200}>
          <HoverCardTrigger>
            <h3 className="flex items-center gap-1 cursor-pointer hover:text-brand-secoundry transition-colors">
              Categories <ChevronDown className="h-4 w-4" />
            </h3>
          </HoverCardTrigger>
          <HoverCardContent
            className="w-[200px] p-2"
            side="bottom"
            align="start"
          >
            <ul className="grid gap-2">
              <li>
                <Link
                  className="hover:bg-gray-100 block p-2 rounded transition-colors"
                  href="#"
                >
                  Shop By Brand
                </Link>
              </li>
              <hr className="opacity-65" />
              <li>
                <Link
                  className="hover:bg-gray-100 block p-2 rounded transition-colors"
                  href="#"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </HoverCardContent>
        </HoverCard>

        <Link href="/" className="hover:text-brand-secoundry transition-colors">
          Blog
        </Link>
        <Link href="/" className="hover:text-brand-secoundry transition-colors">
          About Us
        </Link>
        <Link href="/" className="hover:text-brand-secoundry transition-colors">
          Contact
        </Link>
        <Link href="/" className="hover:text-brand-secoundry transition-colors">
          Find a store
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden me-7">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              // type="button"
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
                {subNavbarItem.map((item) => (
                  <li key={item.id}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleExpanded(item.id)}
                          className="flex items-center justify-between w-full p-3 text-left font-medium hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              expandedItems.includes(item.id)
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        {expandedItems.includes(item.id) && (
                          <ul className="ml-4 mt-2 space-y-1">
                            {item.children.map((child) => (
                              <li key={child.id}>
                                <Link
                                  href={child.link}
                                  onClick={closeSheet}
                                  className="block p-2 text-sm text-gray-600 hover:bg-gray-50 rounded transition-colors"
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.link}
                        onClick={closeSheet}
                        className="block p-3 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
