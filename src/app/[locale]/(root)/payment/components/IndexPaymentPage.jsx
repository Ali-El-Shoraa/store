"use client";

import { useState } from "react";
import { ShoppingCart, CreditCard, CheckCircle } from "lucide-react";

import ConfirmationStep from "./ConfirmationStep";
import StepIndicator from "./StepIndicator";
import CartStep from "./CartStep";
import CheckoutStep from "./CheckoutStep";

// Sample product data
const initialCartItems = [
  {
    id: 1,
    name: "Minimal Sneaker",
    price: 125,
    quantity: 1,
    image: "/image/product/photo1.webp",
  },
  {
    id: 2,
    name: "Classic T-Shirt",
    price: 35,
    quantity: 2,
    image: "/image/product/photo2.webp",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 89,
    quantity: 1,
    image: "/image/product/photo3.webp",
  },
];

export default function IndexPaymentPage() {
  const [step, setStep] = useState("cart");
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 10;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  // Handle step transitions with animation
  const navigateToStep = (newStep) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(newStep);
      setIsTransitioning(false);
    }, 150);
  };

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Render the current step
  const renderStep = () => {
    switch (step) {
      case "cart":
        return (
          <CartStep
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            onCheckout={() => navigateToStep("checkout")}
          />
        );
      case "checkout":
        return (
          <CheckoutStep
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            onBack={() => navigateToStep("cart")}
            onComplete={() => navigateToStep("confirmation")}
          />
        );
      case "confirmation":
        return (
          <ConfirmationStep
            orderNumber="ORD-12345"
            total={total}
            onContinueShopping={() => {
              setCartItems(initialCartItems);
              navigateToStep("cart");
            }}
          />
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Progress indicator */}
      <div className="flex justify-between mb-8 px-4">
        <StepIndicator
          step={1}
          currentStep={step === "cart" ? 1 : step === "checkout" ? 2 : 3}
          icon={<ShoppingCart className="h-5 w-5" />}
          label="Cart"
        />
        <div className="h-1 flex-1 bg-muted self-center mx-2 relative overflow-hidden">
          <div
            className={`h-full bg-primary transition-all duration-500 ease-out ${
              step === "checkout" || step === "confirmation" ? "w-full" : "w-0"
            }`}
          />
        </div>
        <StepIndicator
          step={2}
          currentStep={step === "cart" ? 1 : step === "checkout" ? 2 : 3}
          icon={<CreditCard className="h-5 w-5" />}
          label="Checkout"
        />
        <div className="h-1 flex-1 bg-muted self-center mx-2 relative overflow-hidden">
          <div
            className={`h-full bg-primary transition-all duration-500 ease-out delay-200 ${
              step === "confirmation" ? "w-full" : "w-0"
            }`}
          />
        </div>
        <StepIndicator
          step={3}
          currentStep={step === "cart" ? 1 : step === "checkout" ? 2 : 3}
          icon={<CheckCircle className="h-5 w-5" />}
          label="Confirmation"
        />
      </div>

      {/* Current step content with animation */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isTransitioning
            ? "opacity-0 translate-x-4"
            : "opacity-100 translate-x-0"
        }`}
      >
        {renderStep()}
      </div>
    </div>
  );
}
