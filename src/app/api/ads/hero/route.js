// src/app/api/ads/hero/route.js
import { NextResponse } from "next/server";
import { faker } from "@faker-js/faker";

export async function GET() {
  const ads = Array.from({ length: 2 }).map(() => ({
    imageUrl: faker.image.urlPicsumPhotos({ width: 250, height: 250 }), //faker.image.urlLoremFlickr(640, 480, "city", true),
    href: faker.internet.url(),
    alt: faker.lorem.words(5),
    title: faker.location.city(),
    description: faker.lorem.sentence(),
  }));

  return NextResponse.json({ ads });
}
