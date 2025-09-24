"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

export default function IncDecProduct({ value = 1, onValueChange }) {
  const [quantity, setQuantity] = useState(value);

  const increment = () => {
    const newValue = quantity + 1;
    setQuantity(newValue);
    onValueChange && onValueChange(newValue);
  };

  const decrement = () => {
    if (quantity > 1) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onValueChange && onValueChange(newValue);
    }
  };

  return (
    <div className="flex items-center border rounded-lg w-fit">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-r-none"
        onClick={decrement}
        disabled={quantity <= 1}
      >
        <Minus className="h-3 w-3" />
      </Button>
      <span className="flex items-center justify-center w-8 h-8 text-sm font-medium border-x">
        {quantity}
      </span>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-l-none"
        onClick={increment}
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  );
}
