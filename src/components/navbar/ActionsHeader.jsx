"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import {
  Heart,
  Search,
  ShoppingBag,
  User,
  X,
  ChevronRight,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { ScrollArea } from "../ui/scroll-area";
import Image from "next/image";
import LocaleSwitcher from "../locale-switcher";
import MobileNavigation from "./MobileNavigation";
import { Badge } from "../ui/badge";
import IncDecProduct from "../IncDecProduct";
import { formatCurrency } from "@/utils/formatCurrency";

const initialCartItems = [
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
];

export default function ActionsHeader({ onOpenSearch }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isUpdating, setIsUpdating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsCartOpen(false);
  }, [pathname]);

  const cartItemsCount = cartItems.reduce(
    (sum, item) => sum + item?.quantity,
    0
  );
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item?.price * item?.quantity,
    0
  );

  const removeItem = (id) => {
    setIsUpdating(true);
    setCartItems((items) => items.filter((item) => item?.id !== id));
    setTimeout(() => setIsUpdating(false), 300);
  };

  const updateQuantity = (id, newQuantity) => {
    setIsUpdating(true);
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    setTimeout(() => setIsUpdating(false), 300);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        onClick={onOpenSearch}
        className="rounded-full h-10 w-10 text-foreground hover:text-primary hover:bg-accent transition-all duration-200"
        aria-label="Search"
      >
        <Search className="h-5 w-5" />
      </Button>

      <Link href="/favorites">
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:text-primary hover:bg-accent rounded-full h-10 w-10 relative transition-all duration-200"
          aria-label="favorites"
        >
          <Heart className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-primary-foreground text-xs flex items-center justify-center">
            3
          </span>
        </Button>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-primary hover:bg-accent rounded-full h-10 w-10 transition-all duration-200"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="rounded-xl w-48 shadow-lg border"
          align="end"
        >
          <DropdownMenuLabel className="px-4 py-2.5 font-semibold">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="cursor-pointer px-4 py-2.5">
            <Link href="/profile" className="flex items-center w-full">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer px-4 py-2.5">
            <Link href="/track-order" className="flex items-center w-full">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Orders
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer px-4 py-2.5">
            <Link href="/favorites" className="flex items-center w-full">
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild className="cursor-pointer px-4 py-2.5">
            <Link
              href="/login"
              className="flex items-center w-full text-primary font-medium"
            >
              Sign In
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:text-primary hover:bg-accent relative rounded-full h-10 w-10 transition-all duration-200"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary">
                {cartItemsCount}
              </Badge>
            )}
          </Button>
        </SheetTrigger>

        <SheetContent className="w-full sm:max-w-lg flex flex-col p-0 overflow-hidden">
          {/* Header ثابت */}
          <div className="p-5 border-b flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 sticky top-0 z-10">
            <SheetTitle className="text-xl font-semibold text-foreground">
              Your Cart ({cartItemsCount})
            </SheetTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCartOpen(false)}
              className="rounded-full h-9 w-9"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {cartItems.length > 0 ? (
            <>
              {/* منطقة التمرير للمنتجات */}
              <ScrollArea className="flex-1 px-5 py-4 overflow-auto">
                {isUpdating && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10 rounded-lg">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                  </div>
                )}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 border rounded-xl bg-background hover:shadow-sm transition-all duration-200"
                    >
                      <div className="relative h-20 w-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground truncate">
                          {item.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {formatCurrency(item.price)}
                        </p>
                        <div className="mt-3">
                          <IncDecProduct
                            value={item.quantity}
                            onValueChange={(newValue) =>
                              updateQuantity(item.id, newValue)
                            }
                          />
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-full self-start transition-all duration-200"
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Footer ثابت */}
              <div className="p-5 border-t space-y-4 bg-background sticky bottom-0 z-10">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">
                      {formatCurrency(cartTotal)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-foreground">
                      {cartTotal > 50 ? "Free" : formatCurrency(10)}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold pt-3 border-t">
                    <span className="text-foreground">Total</span>
                    <span className="text-primary">
                      {formatCurrency(cartTotal + (cartTotal > 50 ? 0 : 10))}
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full h-12 rounded-xl font-medium text-base"
                >
                  <Link
                    href="/payment"
                    className="flex items-center justify-center"
                  >
                    Proceed to Checkout
                    <ChevronRight className="h-5 w-5 ml-1" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full h-11 rounded-xl"
                >
                  <Link
                    href="/cart"
                    className="flex items-center justify-center"
                  >
                    View Cart
                  </Link>
                </Button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <ShoppingBag className="h-20 w-20 text-muted-foreground/50 mb-6" />
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Your cart is empty
              </h3>
              <p className="text-muted-foreground mb-6">
                Start shopping to add items to your cart
              </p>
              <Button
                asChild
                onClick={() => setIsCartOpen(false)}
                className="h-11 rounded-xl"
              >
                <Link href="/products">Continue Shopping</Link>
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <div className="block max-lg:hidden">
        <LocaleSwitcher />
      </div>

      <div className="hidden max-lg:block">
        <MobileNavigation />
      </div>
    </div>
  );
}
