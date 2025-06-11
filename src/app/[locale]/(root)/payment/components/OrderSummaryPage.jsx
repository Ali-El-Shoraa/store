"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function OrderSummaryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Order Summary</h1>
        <Progress value={75} className="h-2 mt-4" />

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
            <span className="ml-2 font-medium">Checkout</span>
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
            <h2 className="text-xl font-bold mb-6">Order Details</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Billing Information</h3>
                <p className="text-gray-600">John Doe</p>
                <p className="text-gray-600">john.doe@example.com</p>
                <p className="text-gray-600">123 Main St, Apt 4B</p>
                <p className="text-gray-600">New York, NY 10001</p>
                <p className="text-gray-600">United States</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Shipping Information</h3>
                <p className="text-gray-600">John Doe</p>
                <p className="text-gray-600">123 Main St, Apt 4B</p>
                <p className="text-gray-600">New York, NY 10001</p>
                <p className="text-gray-600">United States</p>
                <p className="text-gray-600 mt-2">
                  <span className="font-medium">Shipping Method:</span> Standard
                  Shipping ($9.99)
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Items</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 relative">
                      <Image
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/mac-book-pro.png"
                        alt="MacBook Pro"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Apple MacBook Pro 14"</p>
                      <p className="text-gray-600">$1,499.00 × 1</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 relative">
                      <Image
                        src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-series-x.png"
                        alt="Xbox Series X"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">Xbox Series X</p>
                      <p className="text-gray-600">$499.00 × 1</p>
                    </div>
                  </div>
                </div>
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
              Continue to Payment
            </Button>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about your order, please contact our
              customer support.
            </p>
            <Button variant="outline" className="w-full">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
