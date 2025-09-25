"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  Star,
  ShoppingCart,
  Heart,
  Eye,
  Grid,
  List,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 124,
    image: "/placeholder-headphones.jpg",
    category: "Electronics",
    tags: ["New", "Special Offer"],
    inStock: true,
    fastDelivery: true,
    warranty: "2 years",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 349.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviewCount: 87,
    image: "/placeholder-smartwatch.jpg",
    category: "Electronics",
    tags: ["Bestseller"],
    inStock: true,
    fastDelivery: true,
    warranty: "1 year",
  },
  {
    id: 3,
    name: "Comfort Running Shoes",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.3,
    reviewCount: 201,
    image: "/placeholder-shoes.jpg",
    category: "Clothing",
    tags: ["Limited Offer"],
    inStock: true,
    fastDelivery: false,
    warranty: "6 months",
  },
  {
    id: 4,
    name: "Professional Digital Camera",
    price: 899.99,
    originalPrice: 999.99,
    rating: 4.9,
    reviewCount: 56,
    image: "/placeholder-camera.jpg",
    category: "Electronics",
    tags: ["New"],
    inStock: false,
    fastDelivery: true,
    warranty: "3 years",
  },
  {
    id: 5,
    name: "Genuine Leather Bag",
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.6,
    reviewCount: 73,
    image: "/placeholder-bag.jpg",
    category: "Accessories",
    tags: ["Special Offer"],
    inStock: true,
    fastDelivery: true,
    warranty: "1 year",
  },
  {
    id: 6,
    name: "Stylish Sunglasses",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.4,
    reviewCount: 142,
    image: "/placeholder-sunglasses.jpg",
    category: "Accessories",
    tags: ["New"],
    inStock: true,
    fastDelivery: false,
    warranty: "6 months",
  },
  {
    id: 7,
    name: "Advanced Tablet",
    price: 499.99,
    originalPrice: 549.99,
    rating: 4.7,
    reviewCount: 91,
    image: "/placeholder-tablet.jpg",
    category: "Electronics",
    tags: ["Bestseller"],
    inStock: true,
    fastDelivery: true,
    warranty: "2 years",
  },
  {
    id: 8,
    name: "Professional Gaming Headset",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviewCount: 118,
    image: "/placeholder-gaming-headset.jpg",
    category: "Electronics",
    tags: ["Special Offer"],
    inStock: true,
    fastDelivery: true,
    warranty: "1 year",
  },
];

const categories = [
  { id: "all", name: "All Categories", icon: "🛒" },
  { id: "electronics", name: "Electronics", icon: "📱" },
  { id: "clothing", name: "Clothing", icon: "👕" },
  { id: "accessories", name: "Accessories", icon: "🕶️" },
  { id: "home", name: "Home", icon: "🏠" },
];

const filters = {
  brands: ["Apple", "Samsung", "Sony", "Nike", "Adidas", "Dell"],
  colors: ["Black", "White", "Red", "Blue", "Green", "Silver"],
  sizes: ["S", "M", "L", "XL", "XXL"],
};

export default function ProductSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    // Check if any filters are applied
    const hasFilters =
      selectedBrands.length > 0 ||
      selectedColors.length > 0 ||
      selectedSizes.length > 0 ||
      priceRange[0] > 0 ||
      priceRange[1] < 1000;

    setIsFiltered(hasFilters);
  }, [selectedBrands, selectedColors, selectedSizes, priceRange]);

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter((s) => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange([0, 1000]);
    setIsFiltered(false);
  };

  const filteredProducts = products.filter((product) => {
    // Filter by search query
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // Filter by category
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    // Filter by price
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    // Filter by brands
    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes("Apple"); // Simplified for demo

    return matchesSearch && matchesCategory && matchesPrice && matchesBrand;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.reviewCount - a.reviewCount; // Default: popularity
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Search Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Find the perfect products for your needs with our advanced search
            and filtering tools
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg rounded-full shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <Tabs
            defaultValue="all"
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <TabsList className="flex w-full justify-start overflow-x-auto pb-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center whitespace-nowrap px-4 py-2 rounded-full data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-24 shadow-md">
              <CardHeader className="pb-3 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Filters
                  </CardTitle>
                  {isFiltered && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-blue-600 hover:text-blue-700 flex items-center"
                    >
                      <RotateCcw className="h-4 w-4 mr-1" />
                      Reset
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                {/* Price Range */}
                <div>
                  <h3 className="font-medium mb-3 flex items-center justify-between">
                    <span>Price Range</span>
                    <span className="text-sm text-gray-500">
                      ${priceRange[0]} - ${priceRange[1]}
                    </span>
                  </h3>
                  <Slider
                    defaultValue={[0, 1000]}
                    max={1000}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="my-4"
                  />
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-medium mb-3">Brands</h3>
                  <div className="space-y-2">
                    {filters.brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={() => toggleBrand(brand)}
                        />
                        <Label
                          htmlFor={`brand-${brand}`}
                          className="text-sm font-normal cursor-pointer"
                        >
                          {brand}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h3 className="font-medium mb-3">Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.colors.map((color) => (
                      <div
                        key={color}
                        className={`flex items-center justify-center w-8 h-8 rounded-full border cursor-pointer ${
                          selectedColors.includes(color)
                            ? "ring-2 ring-blue-500 ring-offset-2"
                            : ""
                        }`}
                        style={{
                          backgroundColor:
                            color === "Red"
                              ? "#ef4444"
                              : color === "Blue"
                              ? "#3b82f6"
                              : color === "Green"
                              ? "#22c55e"
                              : color === "Black"
                              ? "#000"
                              : color === "White"
                              ? "#fff"
                              : "#d1d5db",
                        }}
                        onClick={() => toggleColor(color)}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h3 className="font-medium mb-3">Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {filters.sizes.map((size) => (
                      <div
                        key={size}
                        className={`flex items-center justify-center w-10 h-10 rounded-md border cursor-pointer transition-colors ${
                          selectedSizes.includes(size)
                            ? "bg-blue-500 text-white border-blue-500"
                            : "bg-white hover:bg-gray-100"
                        }`}
                        onClick={() => toggleSize(size)}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Section */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
              <div>
                <p className="text-gray-600">
                  Showing{" "}
                  <span className="font-semibold">
                    {sortedProducts?.length}
                  </span>{" "}
                  products
                </p>
                {isFiltered && (
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      Filters applied
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 flex-row max-lg:flex-col-reverse">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Popularity</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-1 ">
                  <div className="flex border rounded-md overflow-hidden">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className="h-10 w-10 rounded-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="icon"
                      onClick={() => setViewMode("list")}
                      className="h-10 w-10 rounded-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    className="lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
                <div className="absolute right-0 top-0 h-full w-3/4 bg-white p-4 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Filters</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowFilters(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <div className="space-y-6">
                    {/* Price Range */}
                    <div>
                      <h3 className="font-medium mb-3">Price Range</h3>
                      <Slider
                        defaultValue={[0, 1000]}
                        max={1000}
                        step={10}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="my-4"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>

                    {/* Brands */}
                    <div>
                      <h3 className="font-medium mb-3">Brands</h3>
                      <div className="space-y-2">
                        {filters.brands.map((brand) => (
                          <div
                            key={brand}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`mobile-brand-${brand}`}
                              checked={selectedBrands.includes(brand)}
                              onCheckedChange={() => toggleBrand(brand)}
                            />
                            <Label
                              htmlFor={`mobile-brand-${brand}`}
                              className="text-sm font-normal"
                            >
                              {brand}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
                    <Button
                      className="w-full"
                      onClick={() => setShowFilters(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Products Grid/List */}
            {sortedProducts?.length === 0 ? (
              <div className="text-center py-12">
                <div className="mx-auto h-24 w-24 text-gray-300 mb-4">
                  <Search className="h-24 w-24" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No products found
                </h3>
                <p className="text-gray-500 mb-6">
                  We couldn't find any products matching your search.
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts?.map((product) => (
                  <ProductListItem key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {sortedProducts?.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="px-3 py-1">
                    1
                  </Button>
                  <Button variant="ghost" className="px-3 py-1">
                    2
                  </Button>
                  <Button variant="ghost" className="px-3 py-1">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-lg border-0 p-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square bg-gray-100 relative overflow-hidden rounded-t-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />

          {/* Tags */}
          <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1">
            {product.tags.map((tag, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div
            className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/90 shadow-sm"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart
                className={`h-4 w-4 ${
                  isLiked ? "fill-red-500 text-red-500" : ""
                }`}
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-white/90 shadow-sm"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Product Features */}
          <div className="absolute bottom-2 left-2 flex items-center space-x-2">
            {product.fastDelivery && (
              <Badge variant="outline" className="text-xs bg-white/90">
                <Truck className="h-3 w-3 mr-1" /> Fast Delivery
              </Badge>
            )}
            {product.warranty && (
              <Badge variant="outline" className="text-xs bg-white/90">
                <Shield className="h-3 w-3 mr-1" /> {product.warranty}
              </Badge>
            )}
          </div>

          {/* Out of Stock */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <span className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-medium">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <CardContent className="p-4">
          {/* Category */}
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>

          {/* Product Name */}
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 h-14">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : star === Math.ceil(product.rating) &&
                        product.rating % 1 >= 0.5
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-1">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center mt-3">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button className="w-full" disabled={!product.inStock}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}

function ProductListItem({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row">
        {/* Product Image */}
        <div className="sm:w-48 aspect-square bg-gray-100 relative">
          {/* Tags */}
          <div className="absolute top-2 left-2 z-10 flex flex-wrap gap-1">
            {product.tags.map((tag, index) => (
              <Badge
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className="text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Out of Stock */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <span className="bg-gray-900 text-white px-3 py-1 rounded-md text-sm font-medium">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 p-4">
          <div className="flex justify-between">
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-1">{product.category}</p>
              <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>

              {/* Rating */}
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : star === Math.ceil(product.rating) &&
                            product.rating % 1 >= 0.5
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-1">
                  ({product.reviewCount})
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                High-quality product with {product.warranty} warranty. Perfect
                for daily use with a stylish and modern design.
              </p>

              {/* Features */}
              <div className="flex items-center space-x-3 mt-3">
                {product.fastDelivery && (
                  <div className="flex items-center text-sm text-green-600">
                    <Truck className="h-4 w-4 mr-1" />
                    Fast Delivery
                  </div>
                )}
                <div className="flex items-center text-sm text-blue-600">
                  <Shield className="h-4 w-4 mr-1" />
                  {product.warranty}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end ml-4">
              {/* Price */}
              <div className="flex flex-col items-end mb-4">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart
                    className={`h-4 w-4 ${
                      isLiked ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </Button>
                <Button
                  className="sm:min-w-[140px]"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
