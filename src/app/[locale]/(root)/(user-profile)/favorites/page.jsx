"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";

export default function FavoritesPage() {
  const favorites = [
    {
      id: 1,
      title: "Organic Greenhouse Tomatoes New 18kg",
      image: "/image/product/photo1.webp",
      secondImage: "/image/product/photo13.jpg",
      price: 160,

      discountPrice: 120,
      discount: 47,
      rating: 100,
      reviews: 2,
      seller: "Robert's Store",
      badge: "sale",
      brand: "Razer",
      category: "groceries",
      liked: true,
    },
    {
      id: 2,
      title: "Australian Large Granny Smith Apples",
      image: "/image/product/photo2.webp",
      secondImage: "/image/product/photo7.jpg",
      price: 350,
      discountPrice: 200,
      rating: 100,
      reviews: 1,
      seller: "Young Shop",
      badge: "new",
      brand: "Razer",
      category: "groceries",
    },
    {
      id: 3,
      title: "Australian Choice Red Capsicum New 3kg",
      image: "/image/product/photo3.webp",
      secondImage: "/image/product/photo13.jpg",
      price: 266,
      rating: 93,
      reviews: 4,
      seller: "Global Office",
      brand: "Razer",
      category: "groceries",
      liked: true,
    },
    {
      id: 4,
      title: "Australian Choice Cavendish Bananas",
      image: "/image/product/photo4.webp",
      secondImage: "/image/product/photo15.jpg",
      price: 266,
      rating: 100,
      reviews: 1,
      seller: "Robert's Store",
      brand: "Razer",
      category: "groceries",
      liked: true,
    },
    {
      id: 5,
      title: "Choice Australian Broccoli News 20kg",
      image: "/image/product/photo5.jpg",
      secondImage: "/image/product/photo16.jpg",
      price: 666,
      rating: 100,
      reviews: 1,
      seller: "Young Shop",
      brand: "Razer",
      category: "groceries",
    },
  ];

  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            My Favorites ({favorites.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="mx-auto w-12 h-12 text-gray-300" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Your favorites list is empty
              </h3>
              <p className="mt-1 text-gray-500">
                Start adding products to your favorites
              </p>
              <Button className="mt-6">Browse Products</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
