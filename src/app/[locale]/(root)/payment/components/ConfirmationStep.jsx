"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ConfirmationStep({
  orderNumber,
  total,
  onContinueShopping,
}) {
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/invoices");
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <Card className="max-w-md mx-auto animate-in zoom-in-50 duration-500">
      <CardContent className="p-6 text-center">
        <div className="relative w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          {/* الأيقونة تظهر فقط عند انتهاء العداد */}
          {countdown === 0 ? (
            <CheckCircle className="h-10 w-10 text-primary animate-pulse" />
          ) : (
            <span className="text-2xl font-bold text-primary animate-pulse">
              {countdown}
            </span>
          )}
        </div>

        <div className="animate-in slide-in-from-bottom-5 duration-700">
          <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. Your order has been confirmed.
          </p>

          <div className="bg-muted p-4 rounded-md mb-6 transform transition-all duration-300 hover:scale-105">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Order Number:</span>
              <span className="animate-pulse">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Total Amount:</span>
              <span className="font-bold text-primary">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <Button
            onClick={onContinueShopping}
            className="w-full transform transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Continue Shopping
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
