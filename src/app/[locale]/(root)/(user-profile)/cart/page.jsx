"use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import Image from "next/image";
// import { useState } from "react";
// import { Progress } from "@/components/ui/progress";

// export default function CartPage() {
//   const [items, setItems] = useState([
//     {
//       id: 1,
//       name: 'Apple MacBook Pro 14"',
//       price: 1499,
//       quantity: 1,
//       image:
//         "https://flowbite.s3.amazonaws.com/blocks/e-commerce/mac-book-pro.png",
//     },
//     {
//       id: 2,
//       name: "Xbox Series X",
//       price: 499,
//       quantity: 1,
//       image:
//         "https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-series-x.png",
//     },
//   ]);

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) return;
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setItems(items.filter((item) => item.id !== id));
//   };

//   const subtotal = items.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const tax = subtotal * 0.08;
//   const shipping = 99;
//   const total = subtotal + tax + shipping;

//   return (
//     <main className="max-w-4xl mx-auto px-4 py-8">
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold text-gray-900">Your Shopping Cart</h1>
//         <Progress value={25} className="h-2 mt-4" />

//         <ol className="flex items-center w-full mt-8">
//           <li className="flex items-center text-primary-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-100 after:border-4 after:inline-block">
//             <span className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full lg:h-12 lg:w-12 shrink-0">
//               <svg
//                 className="w-4 h-4 text-primary-600 lg:w-5 lg:h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//               </svg>
//             </span>
//             <span className="ml-2 font-medium">Cart</span>
//           </li>
//           <li className="flex items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block">
//             <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
//               <span className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5">2</span>
//             </span>
//             <span className="ml-2 font-medium">Checkout</span>
//           </li>
//           <li className="flex items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block">
//             <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
//               <span className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5">3</span>
//             </span>
//             <span className="ml-2 font-medium">Order Summary</span>
//           </li>
//           <li className="flex items-center">
//             <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
//               <span className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5">4</span>
//             </span>
//             <span className="ml-2 font-medium">Payment</span>
//           </li>
//         </ol>
//       </div>

//       <div className="grid md:grid-cols-3 gap-8">
//         <div className="md:col-span-2 space-y-6">
//           {items.map((item) => (
//             <div
//               key={item.id}
//               className="flex flex-col sm:flex-row border rounded-lg p-4"
//             >
//               <div className="flex-shrink-0 w-full sm:w-32 h-32 relative">
//                 <Image
//                   src={item.image}
//                   alt={item.name}
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
//                 <h3 className="text-lg font-medium">{item.name}</h3>
//                 <p className="mt-1 text-lg font-bold">
//                   ${item.price.toFixed(2)}
//                 </p>

//                 <div className="mt-4 flex items-center space-x-4">
//                   <div className="flex items-center border rounded-md">
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       className="px-3"
//                     >
//                       -
//                     </Button>
//                     <span className="px-3">{item.quantity}</span>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       className="px-3"
//                     >
//                       +
//                     </Button>
//                   </div>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => removeItem(item.id)}
//                     className="text-red-600 hover:text-red-500"
//                   >
//                     Remove
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="border rounded-lg p-4">
//             <h3 className="text-lg font-medium mb-4">
//               Gift card or discount code
//             </h3>
//             <div className="flex">
//               <Input
//                 type="text"
//                 placeholder="Enter code"
//                 className="flex-grow rounded-r-none"
//               />
//               <Button className="rounded-l-none">Apply</Button>
//             </div>
//           </div>
//         </div>

//         <div className="space-y-6">
//           <div className="border rounded-lg p-6">
//             <h3 className="text-lg font-medium mb-4">Order Summary</h3>

//             <div className="space-y-4">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>${subtotal.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Estimated Shipping</span>
//                 <span>${shipping.toFixed(2)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Estimated Tax</span>
//                 <span>${tax.toFixed(2)}</span>
//               </div>
//               <div className="border-t pt-4 flex justify-between font-bold text-lg">
//                 <span>Total</span>
//                 <span>${total.toFixed(2)}</span>
//               </div>
//             </div>

//             <Button className="w-full mt-6 bg-primary-600 hover:bg-primary-700">
//               Proceed to Checkout
//             </Button>
//           </div>

//           <div className="flex items-center">
//             <Checkbox id="terms" className="mr-2" />
//             <Label htmlFor="terms">I agree with the terms and conditions</Label>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Premium Quality Dust Watch",
      brand: "Dust Studios",
      price: 100,
      quantity: 2,
      size: "100 ml",
      status: "Ready for Delivery",
      statusColor: "bg-emerald-50 text-emerald-600",
      deliveryDate: "23rd March 2025",
      image: "https://pagedone.io/asset/uploads/1701167607.png",
    },
    {
      id: 2,
      name: "Diamond Platinum Watch",
      brand: "Diamond Dials",
      price: 100,
      quantity: 1,
      size: "Regular",
      status: "Dispatched",
      statusColor: "bg-indigo-50 text-indigo-600",
      deliveryDate: "23rd March 2025",
      image: "https://pagedone.io/asset/uploads/1701167621.png",
    },
  ];

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Get current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <Card className="overflow-hidden">
        <CardHeader className="border-b p-6 bg-gray-50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-1.5">
              <h1 className="text-2xl font-bold tracking-tight">
                Your Shopping Cart
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600">
                <p>
                  Order ID:{" "}
                  <span className="text-primary font-medium">#10234987</span>
                </p>
                <p>
                  Order Date:{" "}
                  <span className="font-medium">
                    {formattedDate} at {formattedTime}
                  </span>
                </p>
              </div>
            </div>
            <Link href="/payment">
              <Button className="w-full md:w-auto">Continue To Payment</Button>
            </Link>
          </div>
        </CardHeader>

        <CardContent className="p-0 divide-y">
          {cartItems.map((item) => (
            <div key={item.id} className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-32 h-32 relative rounded-lg overflow-hidden border">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 128px"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Brand: {item.brand}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        {/* <p>
                          Size:{" "}
                          <span className="text-muted-foreground">
                            {item.size}
                          </span>
                        </p> */}
                        <div className="flex items-center gap-2">
                          <span>Quantity:</span>
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 hover:bg-gray-100"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="px-2 text-sm font-medium">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 hover:bg-gray-100"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      {/* <div className="mt-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">
                          Estimated delivery: {item.deliveryDate}
                        </p>
                      </div> */}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="font-medium text-primary">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          Subtotal
                        </p>
                        <p className="font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row items-center justify-between border-t p-6 gap-4">
          <Button
            variant="outline"
            className="text-destructive hover:bg-destructive/5"
          >
            <X className="mr-2 h-4 w-4" />
            Cancel Order
          </Button>

          <div className="flex flex-col items-end">
            <p className="text-lg font-semibold">
              Total Price:{" "}
              <span className="text-primary">${totalPrice.toFixed(2)}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Includes taxes and shipping
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
