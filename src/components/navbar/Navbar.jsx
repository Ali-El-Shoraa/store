"use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import SubNavbar from "./SubNavbar";
// import InputNavbar from "./InputNavbar";
// import LocaleSwitcher from "../locale-switcher";
// import { Link } from "@/i18n/navigation";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "../ui/sheet";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Layers,
//   ShoppingBag,
//   User,
//   Heart,
//   ArrowLeft,
//   Plus,
//   Minus,
//   X,
//   Menu,
// } from "lucide-react";
// import { Button } from "../ui/button";
// import { Badge } from "../ui/badge";
// import { Separator } from "../ui/separator";

// // Sample cart data - in real app this would come from context/store
// const initialCartItems = [
//   {
//     id: 1,
//     name: "منتج رائع",
//     price: 299,
//     quantity: 2,
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     id: 2,
//     name: "منتج مميز",
//     price: 150,
//     quantity: 1,
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     id: 3,
//     name: "منتج عالي الجودة",
//     price: 450,
//     quantity: 1,
//     image: "/placeholder.svg?height=80&width=80",
//   },
// ];

// export default function Navbar() {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [cartItems, setCartItems] = useState(initialCartItems);
//   const pathname = usePathname();

//   // Close sheet when pathname changes
//   useEffect(() => {
//     setIsCartOpen(false);
//     setIsMobileMenuOpen(false);
//   }, [pathname]);

//   // Calculate cart totals
//   const cartItemsCount = cartItems.reduce(
//     (sum, item) => sum + item.quantity,
//     0
//   );
//   const cartTotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   // Update item quantity
//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) {
//       removeItem(id);
//       return;
//     }
//     setCartItems((items) =>
//       items.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   // Remove item from cart
//   const removeItem = (id) => {
//     setCartItems((items) => items.filter((item) => item.id !== id));
//   };

//   return (
//     <header className="bg-brand-color shadow-lg sticky top-0 z-50">
//       <nav className="container h-[100px] flex items-center justify-between gap-5">
//         {/* Logo */}
//         <Link
//           href="/"
//           className="h-full flex items-center justify-center transition-transform duration-200 hover:scale-105"
//         >
//           <Image
//             src="/image/logo.png"
//             alt="logo"
//             width={155}
//             height={39}
//             className="object-contain"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="flex items-center justify-end md:justify-between gap-7 flex-1">
//           {/* Search Bar - Desktop */}
//           <div className="hidden md:block w-full max-w-md">
//             <InputNavbar />
//           </div>

//           {/* Navigation Icons */}
//           <div className="text-background flex items-center gap-4">
//             {/* Products */}
//             <Link href="/payment">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-background hover:bg-white/10 hover:text-brand-secondary transition-all duration-200 hover:scale-110"
//               >
//                 <Layers className="size-6" />
//                 <span className="sr-only">المنتجات</span>
//               </Button>
//             </Link>

//             {/* Favorites */}
//             <Link href="/favorites">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="text-background hover:bg-white/10 hover:text-brand-secondary transition-all duration-200 hover:scale-110 relative"
//               >
//                 <Heart className="size-6" />
//                 <span className="sr-only">المفضلة</span>
//               </Button>
//             </Link>

//             {/* User Menu */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-background hover:bg-white/10 hover:text-brand-secondary transition-all duration-200 hover:scale-110 focus-visible:ring-0 focus-visible:ring-offset-0"
//                 >
//                   <User className="size-6" />
//                   <span className="sr-only">قائمة المستخدم</span>
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent
//                 align="end"
//                 className="w-56 animate-in slide-in-from-top-2 duration-200"
//               >
//                 <DropdownMenuLabel>حسابي</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem className="cursor-pointer">
//                   <Link href="/profile" className="w-full">
//                     الملف الشخصي
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer">
//                   <Link href="/orders" className="w-full">
//                     طلباتي
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem className="cursor-pointer">
//                   <Link href="/settings" className="w-full">
//                     الإعدادات
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem className="cursor-pointer">
//                   <Link href="/login" className="w-full">
//                     تسجيل الدخول
//                   </Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>

//             {/* Shopping Cart */}
//             <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
//               <SheetTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="text-background hover:bg-white/10 hover:text-brand-secondary transition-all duration-200 hover:scale-110 relative"
//                 >
//                   <ShoppingBag className="size-6" />
//                   {cartItemsCount > 0 && (
//                     <Badge
//                       variant="destructive"
//                       className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-pulse"
//                     >
//                       {cartItemsCount}
//                     </Badge>
//                   )}
//                   <span className="sr-only">سلة التسوق</span>
//                 </Button>
//               </SheetTrigger>

//               <SheetContent
//                 side="right"
//                 className="w-full sm:max-w-md animate-in slide-in-from-right duration-300"
//               >
//                 <SheetHeader className="space-y-2.5 pb-6">
//                   <div className="flex items-center justify-between">
//                     <SheetTitle className="text-xl font-bold">
//                       سلة التسوق
//                     </SheetTitle>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => setIsCartOpen(false)}
//                       className="h-8 w-8 hover:bg-gray-100"
//                     >
//                       <X className="h-4 w-4" />
//                     </Button>
//                   </div>
//                   {cartItemsCount > 0 && (
//                     <p className="text-sm text-muted-foreground">
//                       {cartItemsCount} عنصر في السلة
//                     </p>
//                   )}
//                 </SheetHeader>

//                 <div className="flex flex-col h-full">
//                   {cartItems.length > 0 ? (
//                     <>
//                       {/* Cart Items */}
//                       <div className="flex-1 overflow-y-auto space-y-4 pb-6">
//                         {cartItems.map((item, index) => (
//                           <div
//                             key={item.id}
//                             className={`flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 animate-in slide-in-from-right-5`}
//                             style={{ animationDelay: `${index * 100}ms` }}
//                           >
//                             <div className="relative h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
//                               <Image
//                                 src={item.image || "/placeholder.svg"}
//                                 alt={item.name}
//                                 fill
//                                 className="object-cover transition-transform duration-200 hover:scale-110"
//                                 sizes="64px"
//                               />
//                             </div>

//                             <div className="flex-1 min-w-0">
//                               <h4 className="font-medium text-gray-900 dark:text-gray-100 truncate">
//                                 {item.name}
//                               </h4>
//                               <p className="text-sm text-muted-foreground">
//                                 {item.price} ر.س
//                               </p>

//                               {/* Quantity Controls */}
//                               <div className="flex items-center gap-2 mt-2">
//                                 <Button
//                                   variant="outline"
//                                   size="icon"
//                                   className="h-8 w-8 transition-all duration-200 hover:scale-110"
//                                   onClick={() =>
//                                     updateQuantity(item.id, item.quantity - 1)
//                                   }
//                                 >
//                                   <Minus className="h-3 w-3" />
//                                 </Button>
//                                 <span className="w-8 text-center font-medium">
//                                   {item.quantity}
//                                 </span>
//                                 <Button
//                                   variant="outline"
//                                   size="icon"
//                                   className="h-8 w-8 transition-all duration-200 hover:scale-110"
//                                   onClick={() =>
//                                     updateQuantity(item.id, item.quantity + 1)
//                                   }
//                                 >
//                                   <Plus className="h-3 w-3" />
//                                 </Button>
//                               </div>
//                             </div>

//                             <Button
//                               variant="ghost"
//                               size="icon"
//                               className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-200 hover:scale-110"
//                               onClick={() => removeItem(item.id)}
//                             >
//                               <X className="h-4 w-4" />
//                               <span className="sr-only">إزالة</span>
//                             </Button>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Cart Summary */}
//                       <div className="border-t pt-6 space-y-4 bg-white dark:bg-gray-900">
//                         <div className="space-y-2">
//                           <div className="flex justify-between text-sm">
//                             <span className="text-muted-foreground">
//                               المجموع الفرعي:
//                             </span>
//                             <span>{cartTotal} ر.س</span>
//                           </div>
//                           <div className="flex justify-between text-sm">
//                             <span className="text-muted-foreground">
//                               الشحن:
//                             </span>
//                             <span>مجاني</span>
//                           </div>
//                           <Separator />
//                           <div className="flex justify-between text-lg font-bold">
//                             <span>المجموع:</span>
//                             <span className="text-primary">
//                               {cartTotal} ر.س
//                             </span>
//                           </div>
//                         </div>

//                         <div className="space-y-3">
//                           <Button
//                             className="w-full h-12 text-lg bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105"
//                             asChild
//                           >
//                             <Link href="/checkout">
//                               المتابعة للدفع
//                               <ArrowLeft className="ml-2 h-5 w-5" />
//                             </Link>
//                           </Button>

//                           <Button
//                             variant="outline"
//                             className="w-full transition-all duration-200 hover:scale-105"
//                             asChild
//                           >
//                             <Link href="/products">متابعة التسوق</Link>
//                           </Button>
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
//                       <div className="animate-bounce mb-4">
//                         <ShoppingBag className="h-16 w-16 text-gray-300" />
//                       </div>
//                       <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
//                         سلة التسوق فارغة
//                       </h3>
//                       <p className="text-muted-foreground mb-6 max-w-sm">
//                         ابدأ بإضافة بعض المنتجات الرائعة إلى سلة التسوق
//                       </p>
//                       <Button
//                         asChild
//                         className="transition-all duration-200 hover:scale-105"
//                       >
//                         <Link href="/products" className="px-6 py-3">
//                           تصفح المنتجات
//                         </Link>
//                       </Button>
//                     </div>
//                   )}
//                 </div>
//               </SheetContent>
//             </Sheet>

//             {/* Mobile Menu Toggle */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="md:hidden text-background hover:bg-white/10 transition-all duration-200"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             >
//               <Menu className="size-6" />
//               <span className="sr-only">القائمة</span>
//             </Button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//         } overflow-hidden bg-brand-color/95 backdrop-blur-sm`}
//       >
//         <div className="container py-4 space-y-4">
//           <InputNavbar />
//           <div className="flex justify-center">
//             <LocaleSwitcher />
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <hr className="border-[#1c394a]" />

//       {/* Sub Navigation */}
//       <nav className="container text-white h-14 flex items-center justify-between">
//         <SubNavbar />

//         <div className="hidden md:block">
//           <LocaleSwitcher />
//         </div>
//       </nav>
//     </header>
//   );
// }

// import { Heart, Layers, ShoppingBag, Star } from "lucide-react";

import Image from "next/image";
import SubNavbar from "./SubNavbar";
import InputNavbar from "./InputNavbar";
import LocaleSwitcher from "../locale-switcher";
import { Link, usePathname } from "@/i18n/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Layers,
  Star,
  ShoppingBag,
  User,
  Heart,
  ArrowLeft,
  X,
  Minus,
  Plus,
} from "lucide-react";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";

const cartItemsCount = 3;

const initialCartItems = [
  {
    id: 1,
    name: "منتج رائع",
    price: 299,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "منتج مميز",
    price: 150,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "منتج عالي الجودة",
    price: 450,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const pathname = usePathname();

  // Close sheet when pathname changes
  useEffect(() => {
    setIsCartOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeItem(id);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate cart totals
  const cartItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const products = [
    { id: 1, name: "منتج 1", price: 100 },
    { id: 2, name: "منتج 2", price: 150 },
    { id: 3, name: "منتج 3", price: 200 },
  ];

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };
  return (
    <header className="bg-brand-color mb-7">
      <nav className="container h-[100px] flex items-center justify-between gap-5">
        <Link href={`/`} className="h-full flex items-center justify-center">
          <Image src={`/image/logo.png`} alt="logo" width={155} height={39} />
        </Link>

        <div className="flex items-center justify-end md:justify-between gap-7 flex-1">
          <div className="hidden md:block w-full">
            <InputNavbar />
          </div>

          <div className="text-background flex items-center gap-6">
            {/* زر المنتجات */}
            <Link href="/payment">
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:bg-transparent hover:text-brand-secoundry cursor-pointer"
              >
                <Layers className="size-7" />
              </Button>
            </Link>

            {/* أيقونة المفضلة */}
            <Link href="/favorites">
              <Button
                variant="ghost"
                size="icon"
                className="text-background hover:bg-transparent hover:text-brand-secoundry cursor-pointer"
              >
                <Heart className="size-7" />
              </Button>
            </Link>

            {/* أيقونة المستخدم مع القائمة المنسدلة */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background hover:bg-transparent hover:text-brand-secondary cursor-pointer focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <User className="size-7" />
                  <span className="sr-only">قائمة المستخدم</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profile" className="w-full cursor-pointer">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/login" className="w-full cursor-pointer">
                    Login
                  </Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* سلة التسوق */}
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-background hover:bg-white/10 hover:text-brand-secondary transition-all duration-200 hover:scale-110 relative"
                >
                  <ShoppingBag className="size-6" />
                  {cartItemsCount > 0 && (
                    <Badge
                      variant="destructive"
                      className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-pulse"
                    >
                      {cartItemsCount}
                    </Badge>
                  )}
                  <span className="sr-only">سلة التسوق</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:max-w-md animate-in slide-in-from-right duration-300"
              >
                <SheetHeader className="space-y-2.5 pb-6">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-xl font-bold">
                      سلة التسوق
                    </SheetTitle>
                    {/* <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsCartOpen(false)}
                      className="h-8 w-8 hover:bg-gray-100"
                    >
                      <X className="h-4 w-4" />
                    </Button> */}
                  </div>
                  {cartItemsCount > 0 && (
                    <p className="text-sm text-muted-foreground">
                      {cartItemsCount} عنصر في السلة
                    </p>
                  )}
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {cartItems.length > 0 ? (
                    <>
                      {/* Cart Items */}
                      <div className="flex-1 overflow-y-auto space-y-4 pb-6">
                        {cartItems.map((item, index) => (
                          <div
                            key={item.id}
                            className={`flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 animate-in slide-in-from-right-5`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="relative h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-200 hover:scale-110"
                                sizes="64px"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                                {item.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {item.price} ر.س
                              </p>

                              {/* Quantity Controls */}
                              <div className="flex items-center gap-2 mt-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 transition-all duration-200 hover:scale-110"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center font-medium">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 transition-all duration-200 hover:scale-110"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-200 hover:scale-110"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">إزالة</span>
                            </Button>
                          </div>
                        ))}
                      </div>

                      {/* Cart Summary */}
                      <div className="border-t pt-6 space-y-4 bg-white dark:bg-gray-900">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              المجموع الفرعي:
                            </span>
                            <span>{cartTotal} ر.س</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              الشحن:
                            </span>
                            <span>مجاني</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between text-lg font-bold">
                            <span>المجموع:</span>
                            <span className="text-primary">
                              {cartTotal} ر.س
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Button
                            className="w-full h-12 text-lg bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                            asChild
                          >
                            <Link href="/payment">
                              المتابعة للدفع
                              <ArrowLeft className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>

                          <Button
                            variant="outline"
                            className="w-full transition-all duration-200 hover:scale-105"
                            asChild
                          >
                            <Link href="/products">متابعة التسوق</Link>
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-500">
                      <div className="animate-bounce mb-4">
                        <ShoppingBag className="h-16 w-16 text-gray-300" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                        سلة التسوق فارغة
                      </h3>
                      <p className="text-muted-foreground mb-6 max-w-sm">
                        ابدأ بإضافة بعض المنتجات الرائعة إلى سلة التسوق
                      </p>
                      <Button
                        asChild
                        className="transition-all duration-200 hover:scale-105"
                      >
                        <Link href="/products" className="px-6 py-3">
                          تصفح المنتجات
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
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
