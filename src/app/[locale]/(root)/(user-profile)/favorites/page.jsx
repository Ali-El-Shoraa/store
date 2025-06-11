// app/favorites/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FavoritesPage() {
  // بيانات المنتجات المفضلة (يمكن استبدالها بطلب API)
  const [favorites, setFavorites] = useState([
    {
      id: "1",
      title: "Wireless Headphones",
      brand: "Sony",
      price: 199.99,
      discountPrice: 149.99,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Smart Watch Series 5",
      brand: "Apple",
      price: 399.99,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop",
    },
    {
      id: "3",
      title: "DSLR Camera",
      brand: "Canon",
      price: 899.99,
      discountPrice: 799.99,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop",
    },
    {
      id: "4",
      title: "Gaming Keyboard",
      brand: "Razer",
      price: 129.99,
      rating: 3,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop",
    },
  ]);

  // إزالة منتج من المفضلة
  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((product) => product.id !== id));
  };

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
              {favorites.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="relative">
                    {/* شارة الخصم */}
                    {product.discountPrice && (
                      <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        {Math.round(
                          ((product.price - product.discountPrice) /
                            product.price) *
                            100
                        )}
                        % OFF
                      </span>
                    )}

                    {/* زر الإزالة من المفضلة */}
                    <button
                      onClick={() => removeFromFavorites(product.id)}
                      className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* صورة المنتج */}
                    <div className="aspect-square bg-gray-100 relative">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* تفاصيل المنتج */}
                  <div className="p-4">
                    <h3 className="text-gray-800 font-medium text-base line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="uppercase text-green-600 text-xs font-medium mt-1">
                      {product.brand}
                    </p>

                    {/* التقييمات */}
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < product.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 ml-1">
                        ({product.rating}.0)
                      </span>
                    </div>

                    {/* السعر */}
                    <div className="flex items-end justify-between mt-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-blue-600 text-lg font-semibold">
                          $
                          {product.discountPrice
                            ? product.discountPrice.toFixed(2)
                            : product.price.toFixed(2)}
                        </span>
                        {product.discountPrice && (
                          <span className="text-gray-400 text-sm line-through">
                            ${product.price.toFixed(2)}
                          </span>
                        )}
                      </div>

                      {/* زر إضافة إلى السلة */}
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-10 h-10"
                      >
                        <ShoppingCart className="w-4 h-4" />
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
  );
}
// export default function FavoritesPage() {
//   return <div>FavoritesPage</div>;
// }
