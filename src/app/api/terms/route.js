// app/api/terms/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [
    {
      id: "agreement",
      title: "1. Agreement to Terms",
      content:
        "By accessing our website, you agree to be bound by these Terms and Conditions and agree that you are responsible for compliance with any applicable local laws.",
    },
    {
      id: "property",
      title: "2. Intellectual Property",
      content:
        "The content, organization, graphics, design, and other matters related to our site are protected under applicable copyrights and other proprietary laws, including but not limited to intellectual property laws.",
    },
    {
      id: "accounts",
      title: "3. User Accounts",
      content:
        "When you create an account with us, you must provide us with accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.",
    },
    {
      id: "products",
      title: "4. Products and Services",
      content:
        "All products or services are subject to availability. We reserve the right to discontinue any products at any time. We reserve the right to limit the quantities of any products or services that we offer.",
    },
    {
      id: "pricing",
      title: "5. Pricing and Payment",
      content:
        "Prices for our products are subject to change without notice. We accept various forms of payment including credit cards and other payment methods as indicated on our website.",
    },
    {
      id: "shipping",
      title: "6. Shipping and Delivery",
      content:
        "We will arrange for shipment of the products to you. Please check the individual product for estimated delivery times. You are responsible for providing accurate shipping information.",
    },
    {
      id: "returns",
      title: "7. Returns and Refunds",
      content:
        "Our Return and Refund Policy is available on our website and forms part of these Terms. Please review this policy carefully before making any purchases.",
    },
    {
      id: "liability",
      title: "8. Limitation of Liability",
      content:
        "In no event shall our company, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website.",
    },
    {
      id: "changes",
      title: "9. Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting a prominent notice on our site and updating the date at the top of these terms.",
    },
    {
      id: "contact",
      title: "10. Contact Information",
      content:
        "If you have any questions about these Terms, please contact us at:",
      list: [
        "Email: ali.m.elshoraa@gmail.com",
        "Phone: +201550859246",
        "Address: 123 Commerce Street, Business City, BC 12345",
      ],
    },
  ];

  return NextResponse.json({ lastUpdated, sections });
}
