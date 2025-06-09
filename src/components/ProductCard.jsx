import { memo, useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Badge, BarChart3, Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@/i18n/navigation";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg h-full py-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 h-full flex flex-col">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Link
            href={`/product/${product?.name
              ?.toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            <Image
              src={isHovered ? product.secondImage : product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              width={1000}
              height={1000}
            />
          </Link>
          {/* Badges */}
          {/* Badges */}
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {product.badge === "sale" && product.discount && (
              <Badge variant="destructive" className="bg-red-500 text-white">
                -{product.discount}%
              </Badge>
            )}
            {product.badge === "new" && (
              <Badge className="bg-green-500 text-white">New</Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="absolute right-2 top-2 flex flex-col gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-8 w-8">
              <BarChart3 className="h-4 w-4" />
            </Button>
          </div>

          {/* Add to Cart Button */}
          <div className="absolute bottom-2 left-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button className="w-full" size="sm">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <Link
          href={`/product/${product?.name?.toLowerCase().replaceAll(" ", "-")}`}
        >
          <div className="p-4 flex-grow flex flex-col">
            <h3 className="mb-2 line-clamp-2 text-sm font-medium leading-tight">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="mb-2 flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating / 20)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                ({product.reviews})
              </span>
            </div>

            {/* Seller */}
            <p className="mb-2 text-xs text-muted-foreground">
              Sold by: <span className="font-medium">{product.seller}</span>
            </p>

            {/* Price - moved to mt-auto to push it to the bottom */}
            <div className="flex items-center gap-2 mt-auto">
              <span className="text-lg font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

export default memo(ProductCard);
