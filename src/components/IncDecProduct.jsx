"use client";
import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export default function IncDecProduct() {
  const [quantity, setQuantity] = useState(1);

  const minusQuantity = () => {
    setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));
  };

  const plusQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="flex items-center border rounded-md">
      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 hover:bg-gray-100"
        onClick={minusQuantity}
        disabled={quantity <= 1}
      >
        <Minus className="h-4 w-4" />
      </Button>

      <span className="px-2 text-sm font-medium">{quantity}</span>

      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-0 hover:bg-gray-100"
        onClick={plusQuantity}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
