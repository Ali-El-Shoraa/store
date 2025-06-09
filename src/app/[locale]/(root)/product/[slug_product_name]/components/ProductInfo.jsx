"use client";
import { Badge } from "@/components/ui/badge";

import { Minus, Plus, RefreshCw, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ProductInfo({
  title,
  vendor,
  price,
  comparePrice,
  description,
  variants,
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (optionName, value) => {
    setSelectedOptions((prev) => ({ ...prev, [optionName]: value }));
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const discountPercentage = comparePrice
    ? Math.round(((comparePrice - price) / comparePrice) * 100)
    : 0;

  return (
    <div className="sticky top-4 space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">{vendor}</p>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">${price.toFixed(2)}</span>
          {comparePrice && (
            <>
              <span className="text-lg text-muted-foreground line-through">
                ${comparePrice.toFixed(2)}
              </span>
              <Badge variant="outline" className="text-sm">
                Save {discountPercentage}%
              </Badge>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
          <Truck className="h-6 w-6" />
          <span className="text-sm mt-2">Free Shipping</span>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
          <ShieldCheck className="h-6 w-6" />
          <span className="text-sm mt-2">2-Year Warranty</span>
        </div>
        <div className="flex flex-col items-center p-4 rounded-lg bg-muted/50">
          <RefreshCw className="h-6 w-6" />
          <span className="text-sm mt-2">Easy Returns</span>
        </div>
      </div>

      {/* <Separator /> */}

      <div
        className="prose prose-sm prose-headings:font-medium"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      {variants.map((variant) => (
        <div key={variant.id} className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">
            {variant.name}:
          </h3>
          <div className="flex flex-wrap gap-2">
            {variant.options.map((option) => (
              <Button
                key={option}
                variant={
                  selectedOptions[variant.name] === option
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => handleOptionSelect(variant.name, option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      ))}

      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">Quantity:</h3>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-medium">{quantity}</span>
          <Button variant="outline" size="icon" onClick={increaseQuantity}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex gap-4">
        <Button size="lg" className="flex-1">
          Add to Cart
        </Button>
        <Button size="lg" className="flex-1" variant="secondary">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
