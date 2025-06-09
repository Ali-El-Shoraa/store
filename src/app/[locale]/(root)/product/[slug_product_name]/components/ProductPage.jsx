// app/product/[slug]/page.tsx
// import { ProductGallery } from '@/components/ProductGallery';
// import { ProductInfo } from '@/components/ProductInfo';

import { ProductGallery } from "./ProductDetail";
import { ProductInfo } from "./ProductInfo";

export default function ProductPage({ params }) {
  // In a real app, you would fetch this data based on the slug
  const product = {
    title: "Metallica Washed T-shirt",
    vendor: "theqaaf",
    price: 400,
    comparePrice: 650,
    description: `
      <div style="text-align: left;">
        <span>* This casual T-shirt features a drop shoulder, loose fit.</span><br>
        <span>* Wearing this outfit will give you a comfy feeling.</span><br>
        <span>* Machine Wash.</span><br>
        <span>* Suitable for casual, weekend, holiday, party, club, house, and outdoor.</span><br>
        <span>* Crew neck, 100% Cotton.</span>
      </div>
      <div style="text-align: left;">
        <span>* Acid Washed Oversized.<br>* Please refer to the size chart.</span>
      </div>
    `,
    images: [
      "/image/mobile1.jpg",
      "/image/mobile2.jpg",
      // Add more images as needed
    ],
    variants: [
      {
        id: "size",
        name: "Size",
        options: ["S", "M", "L", "XL", "XXL"],
      },
    ],
  };

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery images={product.images} alt={product.title} />
        <ProductInfo
          title={product.title}
          vendor={product.vendor}
          price={product.price}
          comparePrice={product.comparePrice}
          description={product.description}
          variants={product.variants}
        />
      </div>
    </div>
  );
}
