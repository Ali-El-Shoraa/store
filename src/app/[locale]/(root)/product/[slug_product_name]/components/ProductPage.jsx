"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
import IncDecProduct from "@/components/IncDecProduct";
import RatingComponent from "@/components/RatingComponent";
import { formatCurrency } from "@/utils/formatCurrency";
import ShareButtons from "@/components/ShareButtons";
import Review from "./ReviewProductDetails";
import { Tabs } from "@/components/ui/tabs";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");

  const product = {
    name: "Premium Wireless Headphones",
    sku: "WH1000XM4",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.5,
    reviews: 120,
    discount: 17,

    description:
      "Experience premium sound quality and industry-leading noise cancellation with these wireless headphones. Perfect for music lovers and frequent travelers.",
    features: [
      "Industry-leading noise cancellation",
      "30-hour battery life",
      "Touch sensor controls",
      "Speak-to-chat technology",
    ],
    colors: [
      { name: "Black", value: "black" },
      { name: "Silver", value: "gray-300" },
      { name: "Blue", value: "blue-500" },
    ],
    images: [
      "/image/product/photo1.webp",
      "/image/product/photo2.webp",
      "/image/product/photo3.webp",
      "/image/product/photo4.webp",
    ],
  };

  // const handleQuantityChange = (e) => {
  //   const value = parseInt(e.target.value);
  //   if (!isNaN(value) && value > 0) {
  //     setQuantity(value);
  //   }
  // };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Product Images Section */}
      <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-sm px-10 pt-10">
        {/* Main Image */}
        {/*  aspect-square */}

        <div className="relative w-full bg-white rounded-xl shadow-sm overflow-hidden mb-4">
          <Image
            src={product?.images?.[selectedImage]}
            alt={product?.name}
            width={1000}
            height={1000}
            className="w-full h-full object-cover max-h-[450px] shadow-sm"
            priority
          />

          {product?.discount && (
            <div className="absolute left-[-40px] top-4 w-[150px] bg-red-600 text-white text-xs font-bold text-center transform rotate-[-45deg] shadow-md z-10 py-1">
              SALE -{product?.discount}%
            </div>
          )}
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 justify-center overflow-x-auto my-7">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className="w-full lg:w-1/2">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">SKU: {product.sku}</p>

          {/* Price Section */}
          <div className="mb-4">
            <span className="text-2xl font-bold text-primary mr-2">
              {formatCurrency(product?.price)}
            </span>
            <span className="text-gray-500 line-through">
              {formatCurrency(product?.originalPrice)}
            </span>
          </div>

          {/* Rating */}
          <RatingComponent
            rating={product?.rating}
            reviews={product?.reviews}
          />
          {/* <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div> */}

          {/* Description */}
          <p className="text-gray-700 mb-6">{product?.description}</p>

          <div className="">
            <ShareButtons title={``} url={``} />
          </div>
          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Color:</h3>
            <div className="flex gap-3">
              {product?.colors?.map((color) => (
                <button
                  key={color?.value}
                  onClick={() => setSelectedColor(color?.value)}
                  className={`w-8 h-8 rounded-full bg-${color?.value} ${
                    selectedColor === color?.value
                      ? "ring-2 ring-offset-2 ring-gray-400"
                      : ""
                  }`}
                  aria-label={color?.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6 w-fit">
            <IncDecProduct />
            {/* <label
              htmlFor="quantity"
              className="block text-sm font-medium mb-1"
            >
              Quantity:
            </label>
            <Input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 text-center"
            /> */}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button className="flex-1 gap-2">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <Heart className="h-5 w-5" />
              Wishlist
            </Button>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
            <ul className="space-y-2 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
