import { memo, useCallback, useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@/i18n/navigation";
import { addedData } from "@/actions/addToCard.action";
// import { cn } from "@/lib/utils";
import LikedProduct from "./LikedProduct";
import { formatCurrency } from "@/utils/formatCurrency";
import RatingComponent from "./RatingComponent";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const addProductToAction = useCallback(() => {
    addedData(product);
  }, []);

  const [liked, setLiked] = useState(product?.liked ?? false);

  const handleClick = useCallback(() => {
    setLiked(!liked);
  }, [liked]);

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg h-full py-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden">
          <Link
            href={`/product/${product?.title
              ?.toLowerCase()
              .replaceAll(" ", "-")}`}
          >
            <Image
              src={
                isHovered
                  ? product?.secondImage
                  : product?.image || "/image/product/photo1.webp"
              }
              alt={product?.title}
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              width={1000}
              height={1000}
            />
          </Link>

          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {product?.badge === "sale" && product?.discount && (
              <div className="absolute left-[-40px] top-4 w-[150px] bg-red-600 text-white text-xs font-bold text-center transform rotate-[-45deg] shadow-md z-10 py-1">
                SALE -{product?.discount}%
              </div>
            )}
            {product?.badge === "new" && (
              <div className="absolute left-[-40px] top-4 w-[150px] bg-green-600 text-white text-xs font-bold text-center transform rotate-[-45deg] shadow-md z-10 py-1">
                NEW
              </div>
            )}
          </div>

          <div className="absolute right-2 top-2 z-20">
            <LikedProduct handleClick={handleClick} liked={liked} />
          </div>

          <div className="absolute bottom-2 left-2 right-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <Button
              className="w-full bg-brand-secoundry hover:bg-white hover:text-brand-secoundry cursor-pointer"
              size="sm"
              onClick={addProductToAction}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        <Link
          href={`/product/${product?.name?.toLowerCase().replaceAll(" ", "-")}`}
        >
          {/* product details */}
          <div className="p-4">
            <h3 className="text-gray-800 font-medium text-base line-clamp-1">
              {product?.title}
            </h3>
            <p className="uppercase text-green-600 text-xs font-medium mt-1">
              {product?.brand}
            </p>

            {/* التقييمات */}
            <RatingComponent rating={product?.rating} />

            {/* السعر */}
            <div className="flex items-baseline justify-between mt-3">
              <div className="flex flex-col items-baseline gap-2">
                <span className="text-blue-600 text-lg font-semibold">
                  {product?.discountPrice
                    ? formatCurrency(product?.discountPrice)
                    : formatCurrency(product?.price)}
                </span>
                {product?.discountPrice && (
                  <span className="text-gray-400 text-sm line-through">
                    {formatCurrency(product?.price)}
                  </span>
                )}
              </div>

              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10"
              >
                <ShoppingCart className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}

export default memo(ProductCard);
