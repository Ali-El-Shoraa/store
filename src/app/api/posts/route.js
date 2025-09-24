import { NextResponse } from "next/server";
import { fakerAR, fakerEN } from "@faker-js/faker";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const slug = searchParams.get("slug");

  const langHeader = req.headers.get("accept-language") || "en";
  const faker = langHeader.startsWith("ar") ? fakerAR : fakerEN;

  const total = 1000;

  const posts = Array.from({ length: total }).map((_, i) => ({
    id: i + 1,
    title: faker.lorem.sentence(),
    excerpt: faker.lorem.paragraph(),
    category: faker.helpers.arrayElement([
      "technology",
      "business",
      "design",
      "development",
      "marketing",
    ]),
    author: {
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      role: faker.person.jobTitle(),
    },
    date: faker.date.recent().toISOString().split("T")[0],
    readTime: `${faker.number.int({ min: 4, max: 10 })} min read`,
    image: faker.image.urlPicsumPhotos({ width: 640, height: 480 }),
    views: faker.number.int({ min: 300, max: 3000 }),
    likes: faker.number.int({ min: 40, max: 900 }),
    comments: faker.number.int({ min: 1, max: 50 }),
    slug: faker.helpers.slugify(faker.lorem.words(5)),
    content: faker.lorem.paragraphs(6),
    tags: ["Electronics", "Smartphones", "Laptops", "Headphones", "Technology"],

    relatedProducts: Array.from({ length: 3 }).map((_, idx) => ({
      id: faker.number.int({ min: 100, max: 999 }),
      name: faker.commerce.productName(),
      price: faker.commerce.price({ min: 100, max: 5000, dec: 0, symbol: "$" }),
      image: faker.image.urlPicsumPhotos({ width: 300, height: 300 }),
      category: faker.commerce.department(),
      rating: Number(
        faker.number.float({ min: 3, max: 5, precision: 0.1 }).toFixed(1)
      ),
      reviews: faker.number.int({ min: 10, max: 500 }),
    })),

    relatedPosts: Array.from({ length: 2 }).map((_, idx) => ({
      id: faker.number.int({ min: 1, max: 1000 }),
      title: faker.lorem.sentence(),
      excerpt: faker.lorem.paragraph(),
      date: faker.date.recent().toISOString().split("T")[0],
      readTime: `${faker.number.int({ min: 3, max: 12 })} min read`,
      image: faker.image.urlPicsumPhotos({ width: 400, height: 250 }),
      slug: faker.helpers.slugify(faker.lorem.words(5)),
    })),

    commentList: Array.from({ length: 2 }).map(() => ({
      id: faker.number.int({ min: 1, max: 10000 }),
      user: {
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
      },
      text: faker.lorem.sentence(),
      date: faker.date.recent().toLocaleString(),
      likes: faker.number.int({ min: 0, max: 50 }),
      replies: Array.from({ length: faker.number.int({ min: 0, max: 2 }) }).map(
        () => ({
          id: faker.number.int({ min: 1, max: 10000 }),
          user: {
            name: faker.person.fullName(),
            avatar: faker.image.avatar(),
          },
          text: faker.lorem.sentence(),
          date: faker.date.recent().toLocaleString(),
          likes: faker.number.int({ min: 0, max: 10 }),
        })
      ),
    })),
  }));

  if (id) {
    const post = posts.find((p) => p.id === parseInt(id));
    return post
      ? NextResponse.json({ data: post })
      : NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  if (slug) {
    const post = posts.find((p) => p.slug === slug);
    return post
      ? NextResponse.json({ data: post })
      : NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return NextResponse.json({
    data: paginatedPosts,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    },
  });
}
