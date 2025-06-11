"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardFlipped, setCardFlipped] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    // Reset card flip when changing payment method
    setCardFlipped(false);
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        {/* Payment Method Selection */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {["card", "paypal", "google"].map((method) => (
            <button
              key={method}
              onClick={() => handlePaymentMethodChange(method)}
              className={`p-4 border rounded-lg flex flex-col items-center transition-all duration-300 ${
                paymentMethod === method
                  ? "border-primary-500 bg-primary-50 ring-2 ring-primary-200 scale-[1.02]"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {method === "card" && (
                <CreditCardIcon active={paymentMethod === "card"} />
              )}
              {method === "paypal" && (
                <Image
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-symbol.svg"
                  alt="PayPal"
                  width={32}
                  height={32}
                  className={`transition-all duration-300 ${
                    paymentMethod === "paypal" ? "scale-110" : "scale-100"
                  }`}
                />
              )}
              {method === "google" && (
                <Image
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/google-symbol.svg"
                  alt="Google Pay"
                  width={32}
                  height={32}
                  className={`transition-all duration-300 ${
                    paymentMethod === "google" ? "scale-110" : "scale-100"
                  }`}
                />
              )}
              <span className="mt-2 capitalize">
                {method === "card"
                  ? "Credit Card"
                  : method === "google"
                  ? "Google Pay"
                  : method}
              </span>
            </button>
          ))}
        </div>

        {/* Credit Card Form */}
        {paymentMethod === "card" && (
          <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300">
            <h2 className="text-xl font-bold mb-6">Card Details</h2>

            {/* 3D Card Effect */}
            <div
              className={`relative mb-6 h-40 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white p-5 shadow-lg transition-all duration-500 ease-in-out transform ${
                cardFlipped ? "rotate-y-180" : ""
              }`}
              onClick={() => setCardFlipped(!cardFlipped)}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Front of Card */}
              <div
                className={`absolute inset-0 backface-hidden p-5 transition-all duration-500 ${
                  cardFlipped ? "opacity-0 rotate-y-180" : "opacity-100"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="text-sm">Credit Card</div>
                  <div className="text-xs">VISA</div>
                </div>
                <div className="mt-6 text-xl font-mono tracking-widest">
                  •••• •••• •••• 4242
                </div>
                <div className="flex justify-between mt-8">
                  <div>
                    <div className="text-xs opacity-80">Card Holder</div>
                    <div className="text-sm">JOHN DOE</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-80">Expires</div>
                    <div className="text-sm">12/24</div>
                  </div>
                </div>
              </div>

              {/* Back of Card */}
              <div
                className={`absolute inset-0 backface-hidden p-5 bg-gray-800 rounded-xl transition-all duration-500 ${
                  cardFlipped ? "opacity-100" : "opacity-0 rotate-y-180"
                }`}
              >
                <div className="h-8 bg-black -mx-5 mt-4"></div>
                <div className="mt-4 flex items-center">
                  <div className="h-8 bg-gray-700 rounded-sm w-3/4"></div>
                  <div className="ml-auto text-xs bg-white text-black px-2 py-1 rounded">
                    CVV: 123
                  </div>
                </div>
                <div className="mt-6 text-xs opacity-70">
                  This is a demo card. Flip to see front.
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="card-number">Card number</Label>
                <Input
                  id="card-number"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="mt-1 focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiry">Expiry date</Label>
                  <Input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    className="mt-1 focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <div className="relative mt-1">
                    <Input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      className="pr-12 focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                      onFocus={() => setCardFlipped(true)}
                      onBlur={() => setCardFlipped(false)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    >
                      <InfoIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="card-name">Name on card</Label>
                <Input
                  id="card-name"
                  type="text"
                  placeholder="John Doe"
                  className="mt-1 focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        )}

        {/* PayPal Content */}
        {paymentMethod === "paypal" && (
          <div className="border rounded-lg p-8 text-center hover:shadow-md transition-all duration-300">
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-symbol.svg"
              alt="PayPal"
              width={80}
              height={80}
              className="mx-auto mb-6 transition-all duration-300 hover:scale-105"
            />
            <p className="mb-6">
              You'll be redirected to PayPal to complete your payment
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02]">
              Continue to PayPal
            </Button>
          </div>
        )}

        {/* Google Pay Content */}
        {paymentMethod === "google" && (
          <div className="border rounded-lg p-8 text-center hover:shadow-md transition-all duration-300">
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/google-symbol.svg"
              alt="Google Pay"
              width={80}
              height={80}
              className="mx-auto mb-6 transition-all duration-300 hover:scale-105"
            />
            <p className="mb-6">
              You'll be redirected to Google Pay to complete your payment
            </p>
            <Button className="bg-black hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]">
              Continue to Google Pay
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300">
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

          <Button className="w-full mt-6 bg-primary-600 hover:bg-primary-700 transition-all duration-300 hover:scale-[1.01]">
            Complete Purchase
          </Button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Payment processed securely by our payment partner
          </p>
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-all duration-300">
          <h3 className="text-lg font-medium mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you have any questions about your order, please contact our
            customer support.
          </p>
          <Button
            variant="outline"
            className="w-full hover:bg-gray-50 transition-all duration-300"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}

const CreditCardIcon = ({ active }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={`w-8 h-8 transition-all duration-300 ${
      active ? "text-primary-600 scale-110" : "text-gray-500"
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
