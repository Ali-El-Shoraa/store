"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight, Heart, Layers, ShoppingBag, User, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { formatCurrency } from "@/utils/formatCurrency";
import IncDecProduct from "../IncDecProduct";
import { Separator } from "../ui/separator";
import { Card } from "../ui/card";

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
  {
    id: 4,
    name: "Minimal Sneaker",
    price: 299,
    quantity: 2,
    image: "/image/product/photo1.webp",
  },
  {
    id: 5,
    name: "Classic T-Shirt",
    price: 150,
    quantity: 1,
    image: "/image/product/photo2.webp",
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: 450,
    quantity: 1,
    image: "/image/product/photo3.webp",
  },
  {
    id: 7,
    name: "Minimal Sneaker",
    price: 299,
    quantity: 2,
    image: "/image/product/photo1.webp",
  },
  {
    id: 8,
    name: "Classic T-Shirt",
    price: 150,
    quantity: 1,
    image: "/image/product/photo2.webp",
  },
  {
    id: 9,
    name: "Denim Jacket",
    price: 450,
    quantity: 1,
    image: "/image/product/photo3.webp",
  },
  {
    id: 10,
    name: "Minimal Sneaker",
    price: 299,
    quantity: 2,
    image: "/image/product/photo1.webp",
  },
  {
    id: 11,
    name: "Classic T-Shirt",
    price: 150,
    quantity: 1,
    image: "/image/product/photo2.webp",
  },
  {
    id: 12,
    name: "Denim Jacket",
    price: 450,
    quantity: 1,
    image: "/image/product/photo3.webp",
  },
];

export default function ActionsHeader() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [cartItems, setCartItems] = useState(initialCartItems);
  const pathname = usePathname();

  // Close sheet when pathname changes
  useEffect(() => {
    setIsCartOpen(false);
    // setIsMobileMenuOpen(false);
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
    setCartItems((items) => items.filter((item) => item?.id !== id));
  };
  return (
    <div className="text-background flex items-center gap-3 xl:gap-6">
      {/* زر المنتجات */}

      <Link href="/payment">
        <Button
          variant="ghost"
          size="icon"
          className="text-background hover:bg-transparent hover:text-brand-secoundry cursor-pointer"
        >
          <Layers className="size-4 md:size-5 lg:size-7" />
        </Button>
      </Link>

      {/* أيقونة المفضلة */}
      <Link href="/favorites">
        <Button
          variant="ghost"
          size="icon"
          className="text-background hover:bg-transparent hover:text-brand-secoundry cursor-pointer"
        >
          <Heart className="size-4 md:size-5 lg:size-7" />
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
            <User className="size-4 md:size-5 lg:size-7" />
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
          <div className="flex flex-col h-full">
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

            {cartItems?.length > 0 ? (
              <>
                {/* Cart Items */}

                <div className="flex-1 overflow-y-auto space-y-4 p-6">
                  {cartItems?.map((item, index) => (
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
                      <span className="text-muted-foreground">Subtotal:</span>
                      <span>{formatCurrency(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping:</span>
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
  );
}

{
  /* سلة التسوق */
}
{
  /* <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
  <SheetTrigger asChild>
    <Button
      variant="ghost"
      size="icon"
      className="relative p-2 text-background hover:bg-white/10 hover:text-brand-secondary transition-all duration-200 group"
    >
      <div className="relative">
        <ShoppingBag className="size-6 transition-transform duration-200 group-hover:scale-110" />
        {cartItemsCount > 0 && (
          <Badge
            variant="destructive"
            className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-pulse"
          >
            {cartItemsCount}
          </Badge>
        )}
      </div>
      <span className="sr-only">Shopping Cart</span>
    </Button>
  </SheetTrigger>

  <SheetContent
    side="right"
    className="w-full sm:max-w-lg bg-white dark:bg-gray-900 p-0 overflow-hidden"
  >
    <div className="flex flex-col h-full">
      {/* Header */
}

// <SheetHeader className="px-6 pt-6 pb-4 border-b">
//   <div className="flex items-center justify-between">
//     <SheetTitle className="text-2xl font-bold text-gray-900 dark:text-white">
//       عربة التسوق
//     </SheetTitle>
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={() => setIsCartOpen(false)}
//       className="rounded-full text-gray-500 hover:text-gray-900 dark:hover:text-white"
//     >
//       <X className="h-5 w-5" />
//     </Button>
//   </div>
//   {cartItemsCount > 0 && (
//     <p className="text-sm text-gray-500 dark:text-gray-400">
//       لديك {cartItemsCount} عنصر في السلة
//     </p>
//   )}
// </SheetHeader>

{
  /* Cart Content */
}
//       <div className="flex-1 overflow-y-auto">
//         {cartItems?.length > 0 ? (
//           <>
//             {/* Items List */}
//             <div className="divide-y divide-gray-200 dark:divide-gray-800">
//               {cartItems?.map((item, index) => (
//                 <div
//                   key={item?.id}
//                   className="flex items-start p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
//                 >
//                   {/* Product Image */}
//                   <div className="relative h-20 w-20 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
//                     <Image
//                       src={item?.image || "/placeholder.svg"}
//                       alt={item?.name}
//                       fill
//                       className="object-cover"
//                       sizes="80px"
//                     />
//                   </div>

//                   {/* Product Info */}
//                   <div className="ml-4 flex-1 min-w-0">
//                     <div className="flex justify-between">
//                       <h4 className="font-medium text-gray-900 dark:text-white line-clamp-2">
//                         {item?.name}
//                       </h4>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         className="h-8 w-8 text-gray-400 hover:text-red-500 hover:bg-transparent"
//                         onClick={() => removeItem(item?.id)}
//                       >
//                         <X className="h-4 w-4" />
//                       </Button>
//                     </div>
//                     <p className="text-sm font-medium text-brand-primary dark:text-brand-secondary mt-1">
//                       {formatCurrency(item?.price)}
//                     </p>

//                     {/* Quantity Controls */}
//                     <div className="mt-3">
//                       <IncDecProduct
//                         quantity={item.quantity}
//                         onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
//                         onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           /* Empty Cart */
//           <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center">
//             <div className="mb-6">
//               <ShoppingBag className="h-20 w-20 text-gray-300 dark:text-gray-600" />
//             </div>
//             <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
//               سلة التسوق فارغة
//             </h3>
//             <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
//               لم تقم بإضافة أي منتجات بعد. ابدأ التسوق الآن!
//             </p>
//             <Button
//               asChild
//               className="px-8 py-3 bg-primary hover:bg-primary/90"
//               onClick={() => setIsCartOpen(false)}
//             >
//               <Link href="/products">تصفح المنتجات</Link>
//             </Button>
//           </div>
//         )}
//       </div>

//       {/* Footer - Order Summary */}
//       {cartItems?.length > 0 && (
//         <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/30 p-6">
//           <div className="space-y-3">
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600 dark:text-gray-400">المجموع الفرعي:</span>
//               <span className="font-medium">{formatCurrency(cartTotal)}</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600 dark:text-gray-400">التوصيل:</span>
//               <span className="font-medium">{formatCurrency(0)}</span>
//             </div>
//             <Separator className="my-2" />
//             <div className="flex justify-between text-lg font-bold">
//               <span>الإجمالي:</span>
//               <span className="text-brand-primary dark:text-brand-secondary">
//                 {formatCurrency(cartTotal)}
//               </span>
//             </div>
//           </div>

//           <div className="mt-6 space-y-3">
//             <Button
//               className="w-full h-12 text-lg bg-brand-primary hover:bg-brand-primary/90 dark:bg-brand-secondary dark:hover:bg-brand-secondary/90"
//               asChild
//               onClick={() => setIsCartOpen(false)}
//             >
//               <Link href="/payment">
//                 إتمام الشراء
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>

//             <Button
//               variant="outline"
//               className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
//               asChild
//               onClick={() => setIsCartOpen(false)}
//             >
//               <Link href="/products">متابعة التسوق</Link>
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   </SheetContent>
// </Sheet> */}
