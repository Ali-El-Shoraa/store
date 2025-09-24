"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { X } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import IncDecProduct from "@/components/IncDecProduct";
import { formatCurrency } from "@/utils/formatCurrency";

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
      image: "/image/product/photo3.webp",
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
      image: "/image/product/photo2.webp",
    },
  ];

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item?.price * item?.quantity,
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
          {cartItems?.map((item) => (
            <div key={item?.id} className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="w-full sm:w-32 h-32 relative rounded-lg overflow-hidden border">
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 128px"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{item?.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Brand: {item?.brand}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        {/* <p>
                          Size:{" "}
                          <span className="text-muted-foreground">
                            {item?.size}
                          </span>
                        </p> */}
                        <div className="flex items-center gap-2">
                          <span>Quantity:</span>
                          {/* <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 hover:bg-gray-100"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="px-2 text-sm font-medium">
                              {item?.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0 hover:bg-gray-100"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div> */}

                          <IncDecProduct />
                        </div>
                      </div>
                      {/* <div className="mt-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${item?.statusColor}`}
                        >
                          {item?.status}
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">
                          Estimated delivery: {item?.deliveryDate}
                        </p>
                      </div> */}
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="font-medium text-primary">
                          ${item?.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">
                          Subtotal
                        </p>
                        <p className="font-medium">
                          {formatCurrency(item?.price * item?.quantity, "EGP")}
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
