// app/api/testimonials/route.ts
import { NextResponse } from "next/server";
import { fakerAR, fakerEN } from "@faker-js/faker";

export async function GET(req) {
  const langHeader = req.headers.get("accept-language") || "en";
  const faker = langHeader.startsWith("ar") ? fakerAR : fakerEN;

  const categoriesPool = [
    "marketing",
    "analytics",
    "ecommerce",
    "product",
    "content",
    "startup",
    "sales",
  ];

  const testimonials = Array.from({ length: 9 }).map((_, i) => {
    const category = faker.helpers.arrayElement(categoriesPool);
    return {
      id: i + 1,
      name: faker.name.fullName(),
      role: faker.name.jobTitle(),
      company: faker.company.name(),
      image: faker.image.avatar(),
      content: faker.lorem.paragraph(),
      rating: faker.number.int({ min: 3, max: 5 }),
      category,
      featured: faker.datatype.boolean(),
      date: faker.date.past(2).toISOString().split("T")[0], // yyyy-mm-dd
    };
  });

  // توليد فئات categories مع العد التلقائي
  const uniqueCategories = Array.from(
    new Set(testimonials.map((t) => t.category))
  );

  const categories = [
    {
      id: "all",
      name: langHeader.startsWith("ar") ? "كل الشهادات" : "All Testimonials",
      count: testimonials.length,
    },
    ...uniqueCategories.map((cat) => ({
      id: cat,
      name: cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " "),
      count: testimonials.filter((t) => t.category === cat).length,
    })),
  ];

  return NextResponse.json({ testimonials, categories });
}
