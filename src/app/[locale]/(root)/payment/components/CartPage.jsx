"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Apple MacBook Pro 14"',
      price: 1499,
      quantity: 1,
      image:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/mac-book-pro.png",
    },
    {
      id: 2,
      name: "Xbox Series X",
      price: 499,
      quantity: 1,
      image:
        "https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-series-x.png",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setItems(
      items?.map((item) =>
        item?.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) =>
      prevItems.filter((item) => {
        if (item?.id === id) {
          // Trigger remove animation
          const element = document.getElementById(`cart-item-${id}`);
          if (element) {
            element.classList.add(
              "opacity-0",
              "scale-90",
              "transition-all",
              "duration-300"
            );
            setTimeout(() => {
              return false;
            }, 300);
          }
        }
        return true;
      })
    );
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item?.price * item?.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const shipping = 99;
  const total = subtotal + tax + shipping;

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <div className="space-y-6">
          {items?.map((item, index) => (
            <div
              key={item?.id}
              id={`cart-item-${item?.id}`}
              className={`flex flex-col sm:flex-row border rounded-lg p-4 hover:shadow-md transition-all duration-300 ${
                index === 0 ? "animate-fade-in" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="flex-shrink-0 w-full sm:w-32 h-32 relative">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
                <h3 className="text-lg font-medium group-hover:text-primary-600 transition-colors duration-300">
                  {item?.name}
                </h3>
                <p className="mt-1 text-lg font-bold">
                  ${item?.price.toFixed(2)}
                </p>

                <div className="mt-4 flex items-center space-x-4">
                  <div className="flex items-center border rounded-md overflow-hidden transition-all duration-300 hover:border-primary-500">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        updateQuantity(item?.id, item?.quantity - 1)
                      }
                      className="px-3 hover:bg-gray-100 transition-colors duration-200 active:scale-95"
                    >
                      -
                    </Button>
                    <span className="px-3 transition-all duration-200">
                      {item?.quantity}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        updateQuantity(item?.id, item?.quantity + 1)
                      }
                      className="px-3 hover:bg-gray-100 transition-colors duration-200 active:scale-95"
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeItem(item?.id)}
                    className="text-red-600 hover:text-red-500 transition-colors duration-200 active:scale-95"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-300 animate-fade-in">
          <h3 className="text-lg font-medium mb-4">
            Gift card or discount code
          </h3>
          <div className="flex">
            <Input
              type="text"
              placeholder="Enter code"
              className="flex-grow rounded-r-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
            />
            <Button className="rounded-l-none bg-primary-600 hover:bg-primary-700 transition-all duration-300 active:scale-95">
              Apply
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300 animate-fade-in">
          <h3 className="text-lg font-medium mb-4">Order Summary</h3>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Button className="w-full mt-6 bg-primary-600 hover:bg-primary-700 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]">
            Proceed to Checkout
          </Button>
        </div>

        <div className="flex items-center p-4 border rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded transition-all duration-300"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree with the{" "}
            <a
              href="#"
              className="text-primary-600 hover:underline transition-colors duration-300"
            >
              terms and conditions
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}
