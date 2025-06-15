import IncDecProduct from "@/components/IncDecProduct";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/formatCurrency";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function CartStep({
  cartItems,
  updateQuantity,
  removeItem,
  subtotal,
  shipping,
  tax,
  total,
  onCheckout,
}) {
  return (
    <div className="grid md:grid-cols-3 gap-6 animate-in slide-in-from-right-5 duration-500">
      <div className="md:col-span-2">
        <Card className="transform transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

            {cartItems?.length === 0 ? (
              <div className="text-center py-12 animate-in fade-in duration-500">
                <div className="animate-bounce mb-4">
                  <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground" />
                </div>
                <p className="text-muted-foreground mb-4">Your cart is empty</p>
                <Button className="transform transition-all duration-200 hover:scale-105">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems?.map((item, index) => (
                  <div
                    key={item?.id}
                    className={`flex gap-4 pb-6 border-b transition-all duration-300 hover:bg-muted/50 rounded-lg p-2 animate-in slide-in-from-left-5`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-20 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0 transform transition-transform duration-200 hover:scale-105">
                      <Image
                        src={item?.image || "/placeholder.svg"}
                        alt={item?.name}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item?.name}</h3>
                        <p className="font-medium">
                          {formatCurrency(item?.price)}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <IncDecProduct />
                        {/* <div className="flex items-center border rounded-md overflow-hidden">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none transition-colors duration-200 hover:bg-primary/10"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center transition-all duration-200">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none transition-colors duration-200 hover:bg-primary/10"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div> */}
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive transition-all duration-200 hover:scale-110"
                          onClick={() => removeItem(item?.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="animate-in slide-in-from-right-5 duration-700">
        <Card className="sticky top-4 transform transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between transition-colors duration-200 hover:text-primary">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between transition-colors duration-200 hover:text-primary">
                <span className="text-muted-foreground">Shipping</span>
                <span>{formatCurrency(shipping)}</span>
              </div>
              <div className="flex justify-between transition-colors duration-200 hover:text-primary">
                <span className="text-muted-foreground">Tax</span>
                <span>{formatCurrency(tax)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="animate-pulse">{formatCurrency(total)}</span>
              </div>
              <Button
                className="w-full mt-4 transform transition-all duration-200 hover:scale-105 active:scale-95"
                size="lg"
                onClick={onCheckout}
                disabled={cartItems?.length === 0}
              >
                Proceed to Checkout
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
