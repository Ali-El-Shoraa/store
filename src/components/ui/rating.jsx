// components/ui/rating.tsx
"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({
  defaultValue = 0,
  max = 5,
  readOnly = false,
  className,
  id,
}) {
  const [rating, setRating] = React.useState(defaultValue);
  const [hover, setHover] = React.useState();

  return (
    <div className={cn("flex items-center", className)} id={id}>
      {[...Array(max)]?.map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => !readOnly && setRating(ratingValue)}
              className="hidden"
            />
            <Star
              className={cn(
                "h-5 w-5 cursor-pointer transition-colors",
                readOnly ? "cursor-default" : "hover:scale-110",
                (hover || rating) >= ratingValue
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground"
              )}
              onMouseEnter={() => !readOnly && setHover(ratingValue)}
              onMouseLeave={() => !readOnly && setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}
