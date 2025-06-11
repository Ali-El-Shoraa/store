"use client";

import { useState } from "react";
import {
  ShoppingCart,
  CreditCard,
  CheckCircle,
  Trash2,
  Plus,
  Minus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample product data
const initialCartItems = [
  {
    id: 1,
    name: "Minimal Sneaker",
    price: 125,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Classic T-Shirt",
    price: 35,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Denim Jacket",
    price: 89,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
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

// Step indicator component
function StepIndicator({ step, currentStep, icon, label }) {
  const isActive = step <= currentStep;
  const isCompleted = step < currentStep;

  return (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-full w-10 h-10 flex items-center justify-center mb-2 transition-all duration-300 transform ${
          isActive
            ? "bg-primary text-primary-foreground scale-110"
            : "bg-muted text-muted-foreground scale-100"
        } ${isCompleted ? "animate-pulse" : ""}`}
      >
        {icon}
      </div>
      <span
        className={`text-sm transition-all duration-300 ${
          isActive ? "text-primary font-medium" : "text-muted-foreground"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

// Cart step component
function CartStep({
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

            {cartItems.length === 0 ? (
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
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`flex gap-4 pb-6 border-b transition-all duration-300 hover:bg-muted/50 rounded-lg p-2 animate-in slide-in-from-left-5`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-20 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0 transform transition-transform duration-200 hover:scale-105">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-md overflow-hidden">
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
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-destructive transition-all duration-200 hover:scale-110"
                          onClick={() => removeItem(item.id)}
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
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between transition-colors duration-200 hover:text-primary">
                <span className="text-muted-foreground">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between transition-colors duration-200 hover:text-primary">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="animate-pulse">${total.toFixed(2)}</span>
              </div>
              <Button
                className="w-full mt-4 transform transition-all duration-200 hover:scale-105 active:scale-95"
                size="lg"
                onClick={onCheckout}
                disabled={cartItems.length === 0}
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

// Checkout step component
function CheckoutStep({ subtotal, shipping, tax, total, onBack, onComplete }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 animate-in slide-in-from-right-5 duration-500">
      <div className="md:col-span-2">
        <Card className="transform transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>

            <div className="space-y-6">
              <div className="animate-in slide-in-from-left-5 duration-500">
                <h3 className="text-lg font-medium mb-4">
                  Shipping Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger className="transition-all duration-200 hover:scale-[1.02]">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="animate-in slide-in-from-left-5 duration-700">
                <h3 className="text-lg font-medium mb-4">Payment Method</h3>
                <RadioGroup defaultValue="card" className="space-y-3">
                  <div className="flex items-center space-x-2 border rounded-md p-4 transition-all duration-200 hover:bg-muted/50 hover:scale-[1.02]">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      Credit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4 transition-all duration-200 hover:bg-muted/50 hover:scale-[1.02]">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                      PayPal
                    </Label>
                  </div>
                </RadioGroup>

                <div className="mt-4 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="transition-all duration-200 focus:scale-[1.02]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        className="transition-all duration-200 focus:scale-[1.02]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        className="transition-all duration-200 focus:scale-[1.02]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between transition-colors duration-200 hover:text-primary">
                <span className="text-muted-foreground">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between transition-colors duration-200 hover:text-primary">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span className="animate-pulse">${total.toFixed(2)}</span>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <Button
                  onClick={onComplete}
                  size="lg"
                  className="transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Complete Order
                </Button>
                <Button
                  variant="outline"
                  onClick={onBack}
                  className="transform transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Back to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Confirmation step component
function ConfirmationStep({ orderNumber, total, onContinueShopping }) {
  return (
    <Card className="max-w-md mx-auto animate-in zoom-in-50 duration-500">
      <CardContent className="p-6 text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <CheckCircle className="h-10 w-10 text-primary animate-pulse" />
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

          <p className="text-sm text-muted-foreground mb-6 animate-in fade-in duration-1000">
            A confirmation email has been sent to your email address. You can
            track your order status in your account.
          </p>

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
