"use client";
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
  X,
  ArrowRight,
} from "lucide-react";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { formatCurrency } from "@/utils/formatCurrency";
import IncDecProduct from "../IncDecProduct";

export const initialCartItems = [
  {
    id: 1,
    name: "Minimal Sneaker",
    price: 299,
    quantity: 2,
    image: "/image/product/photo1.webp",
  },
  {
    id: 2,
    name: "Classic T-Shirt",
    price: 150,
    quantity: 1,
    image: "/image/product/photo2.webp",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 450,
    quantity: 1,
    image: "/image/product/photo3.webp",
  },
];

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [, setIsMobileMenuOpen] = useState(false);
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
        item?.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate cart totals
  const cartItemsCount = cartItems.reduce(
    (sum, item) => sum + item?.quantity,
    0
  );
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item?.price * item?.quantity,
    0
  );

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item?.id !== id));
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
                  <span className="sr-only">Shopping Cart</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:max-w-md animate-in slide-in-from-right duration-300"
              >
                <SheetHeader className="space-y-2.5 pb-6">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-xl font-bold">
                      Shopping Cart
                    </SheetTitle>
                  </div>
                  {cartItemsCount > 0 && (
                    <p className="text-sm text-muted-foreground">
                      {cartItemsCount} Item in basket
                    </p>
                  )}
                </SheetHeader>
                <div className="flex flex-col h-full">
                  {cartItems.length > 0 ? (
                    <>
                      {/* Cart Items */}
                      <div className="flex-1 overflow-y-auto space-y-4 p-6">
                        {cartItems.map((item, index) => (
                          <div
                            key={item?.id}
                            className={`flex items-center gap-4 p-4 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 animate-in slide-in-from-right-5`}
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="relative h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
                              <Image
                                src={item?.image || "/placeholder.svg"}
                                alt={item?.name}
                                fill
                                className="object-cover transition-transform duration-200 hover:scale-110"
                                sizes="64px"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                                {item?.name}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {formatCurrency(item?.price)}
                              </p>

                              {/* Quantity Controls */}
                              <div className="w-fit">
                                <IncDecProduct />
                              </div>
                            </div>

                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all duration-200 hover:scale-110"
                              onClick={() => removeItem(item?.id)}
                            >
                              <X className="h-4 w-4" />
                              <span className="sr-only">Remove</span>
                            </Button>
                          </div>
                        ))}
                      </div>

                      {/* Cart Summary */}
                      <div className="border-t p-6 space-y-4 bg-white dark:bg-gray-900">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Subtotal:
                            </span>
                            <span>{formatCurrency(cartTotal)}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Shipping:
                            </span>
                            <span>{formatCurrency(0)}</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total:</span>
                            <span className="text-primary">
                              {formatCurrency(cartTotal)}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Button
                            className="w-full h-12 text-lg bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                            asChild
                          >
                            <Link href="/payment">
                              Continue To Payment
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                          </Button>

                          <Button
                            variant="outline"
                            className="w-full transition-all duration-200 hover:scale-105"
                            asChild
                          >
                            <Link href="/products">Continue To Shopping</Link>
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
                        Cart is empty
                      </h3>
                      <p className="text-muted-foreground mb-6 max-w-sm">
                        Start adding some great products to your Cart.
                      </p>
                      <Button
                        asChild
                        className="transition-all duration-200 hover:scale-105"
                      >
                        <Link href="/products" className="px-6 py-3">
                          Browse Products
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
