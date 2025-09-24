// /api/about/route.js

import { fakerAR, fakerEN } from "@faker-js/faker";

export async function GET(req) {
  const langHeader = req.headers.get("accept-language") || "en";
  const faker = langHeader.startsWith("ar") ? fakerAR : fakerEN;

  const generateTeamMembers = () =>
    Array.from({ length: 4 }).map(() => ({
      name: faker.name.fullName(),
      role: faker.name.jobTitle(),
      image: faker.image.avatar(),
      bio: faker.lorem.sentence(),
    }));

  const generateMilestones = () =>
    Array.from({ length: 6 }).map(() => ({
      year: faker.date.past(10).getFullYear().toString(),
      event: faker.lorem.sentence(),
    }));

  const generateTestimonials = () =>
    Array.from({ length: 3 }).map(() => ({
      name: faker.name.fullName(),
      role: faker.name.jobTitle(),
      content: faker.lorem.paragraph(),
      avatar: faker.image.avatar(),
    }));

  const generateValues = () => [
    {
      title: "Innovation",
      color: "from-blue-500 to-blue-600",
      iconName: "Lightbulb",
    },
    { title: "Passion", color: "from-rose-500 to-rose-600", iconName: "Heart" },
    {
      title: "Integrity",
      color: "from-emerald-500 to-emerald-600",
      iconName: "Shield",
    },
    {
      title: "Global Mindset",
      color: "from-purple-500 to-purple-600",
      iconName: "Globe",
    },
  ];

  const generateStats = () => [
    { value: "500K+", label: "Happy Customers", iconName: "Users" },
    { value: "10K+", label: "Active Stores", iconName: "TrendingUp" },
    { value: "15+", label: "Countries", iconName: "Globe" },
    { value: "98%", label: "Satisfaction Rate", iconName: "Star" },
  ];

  const data = {
    teamMembers: generateTeamMembers(),
    milestones: generateMilestones(),
    testimonials: generateTestimonials(),
    values: generateValues(),
    stats: generateStats(),
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // مثال فيديو خارجي
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
