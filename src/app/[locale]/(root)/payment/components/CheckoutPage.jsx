"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

export default function CheckoutPage() {
  const [shippingSameAsBilling, setShippingSameAsBilling] = useState(true);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
        <Progress value={50} className="h-2 mt-4" />

        <ol className="flex items-center w-full mt-8">
          <li className="flex items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-100 after:border-4 after:inline-block">
            <span className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full lg:h-12 lg:w-12 shrink-0">
              <svg
                className="w-4 h-4 text-primary-600 lg:w-5 lg:h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            </span>
            <span className="ml-2 font-medium">Cart</span>
          </li>
          <li className="flex items-center text-primary-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-100 after:border-4 after:inline-block">
            <span className="flex items-center justify-center w-10 h-10 bg-primary-100 rounded-full lg:h-12 lg:w-12 shrink-0">
              <svg
                className="w-4 h-4 text-primary-600 lg:w-5 lg:h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            </span>
            <span className="ml-2 font-medium">Checkout</span>
          </li>
          <li className="flex items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-4 after:inline-block">
            <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
              <span className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5">3</span>
            </span>
            <span className="ml-2 font-medium">Order Summary</span>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 shrink-0">
              <span className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5">4</span>
            </span>
            <span className="ml-2 font-medium">Payment</span>
          </li>
        </ol>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">Billing Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" type="text" required />
              </div>
              <div>
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" type="text" required />
              </div>
            </div>

            <div className="mt-4">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>

            <div className="mt-4">
              <Label htmlFor="address">Address</Label>
              <Input id="address" type="text" required />
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div>
                <Label htmlFor="country">Country</Label>
                <Input id="country" type="text" required />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" type="text" required />
              </div>
              <div>
                <Label htmlFor="zip">ZIP Code</Label>
                <Input id="zip" type="text" required />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="shipping-same"
                  checked={shippingSameAsBilling}
                  onCheckedChange={(checked) =>
                    setShippingSameAsBilling(!!checked)
                  }
                />
                <Label htmlFor="shipping-same">
                  Shipping address is the same as billing
                </Label>
              </div>
            </div>
          </div>

          {!shippingSameAsBilling && (
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-6">Shipping Information</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="shipping-first-name">First Name</Label>
                  <Input id="shipping-first-name" type="text" required />
                </div>
                <div>
                  <Label htmlFor="shipping-last-name">Last Name</Label>
                  <Input id="shipping-last-name" type="text" required />
                </div>
              </div>

              <div className="mt-4">
                <Label htmlFor="shipping-address">Address</Label>
                <Input id="shipping-address" type="text" required />
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div>
                  <Label htmlFor="shipping-country">Country</Label>
                  <Input id="shipping-country" type="text" required />
                </div>
                <div>
                  <Label htmlFor="shipping-state">State</Label>
                  <Input id="shipping-state" type="text" required />
                </div>
                <div>
                  <Label htmlFor="shipping-zip">ZIP Code</Label>
                  <Input id="shipping-zip" type="text" required />
                </div>
              </div>
            </div>
          )}

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-bold mb-6">Shipping Method</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Checkbox id="standard-shipping" checked />
                  <Label htmlFor="standard-shipping">Standard Shipping</Label>
                </div>
                <span>$9.99</span>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Checkbox id="express-shipping" />
                  <Label htmlFor="express-shipping">Express Shipping</Label>
                </div>
                <span>$19.99</span>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Checkbox id="pickup" />
                  <Label htmlFor="pickup">Store Pickup</Label>
                </div>
                <span>Free</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Order Summary</h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal (2 items)</span>
                <span>$1,998.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$9.99</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$159.84</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$2,167.83</span>
              </div>
            </div>

            <Button className="w-full mt-6 bg-primary-600 hover:bg-primary-700">
              Continue to Order Summary
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
