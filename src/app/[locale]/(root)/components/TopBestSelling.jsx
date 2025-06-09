// "use client";

// import { useState, useEffect } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { allProducts, categories } from "@/lib/productItem";
// import ProductCard from "@/components/ProductCard";
// import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";
// import HeaderSection from "@/components/HeaderSection";

// export default function TopBestSelling() {
//   const [activeCategory, setActiveCategory] = useState("groceries");
//   const [isLoading, setIsLoading] = useState(false);
//   const [products, setProducts] = useState(allProducts.groceries);

//   // Simulate loading when switching categories
//   const handleCategoryChange = async (category) => {
//     if (category === activeCategory) return;

//     setIsLoading(true);
//     setActiveCategory(category);

//     // Simulate API call delay
//     await new Promise((resolve) => setTimeout(resolve, 800));

//     setProducts(allProducts[category]);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     setProducts(allProducts[activeCategory]);
//   }, []);

//   return (
//     <Tabs
//       value={activeCategory}
//       onValueChange={handleCategoryChange}
//       className=""
//     >
//       <div className="flex flex-col gap-4 md:flex-row rtl:md:flex-row-reverse md:items-center md:justify-between">
//         <HeaderSection title={`Top Best Selling`} subTitle={`Product`} />

//         <TabsList className="grid w-full grid-cols-4 md:w-auto">
//           {categories.map((category) => (
//             <TabsTrigger
//               key={category.id}
//               value={category.id}
//               className="text-xs md:text-sm"
//             >
//               {category.label}
//             </TabsTrigger>
//           ))}
//         </TabsList>
//       </div>

//       {categories.map((category) => (
//         <TabsContent key={category.id} value={category.id} className="mt-6">
//           {/* Product Carousel */}
//           {isLoading ? (
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
//               {[...Array(6)].map((_, index) => (
//                 <ProductCardSkeleton key={index} />
//               ))}
//             </div>
//           ) : (
//             <Carousel
//               opts={{
//                 align: "start",
//               }}
//               className="w-full"
//             >
//               <CarouselContent>
//                 {products.map((product) => (
//                   <CarouselItem
//                     key={product.id}
//                     className="basis-1/2  md:basis-1/2 lg:basis-1/4 xl:basis-1/6 "
//                   >
//                     <div className="p-1 h-full">
//                       <ProductCard product={product} />
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//               {/* <CarouselPrevious />
//                   <CarouselNext /> */}
//             </Carousel>
//           )}
//         </TabsContent>
//       ))}
//     </Tabs>
//   );
// }
