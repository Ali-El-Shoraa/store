// app/our-guarantee/page.jsx
import HeroSubPage from "@/components/HeroSubPage";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Heart, ArrowRight } from "lucide-react";
import GuaranteesGrid from "./components/GuaranteesGrid";
import HowItWorksSection from "./components/HowItWorksSection";

export default function OurGuarantee() {
  const guarantees = [
    {
      icon: <CheckCircle2 className="h-10 w-10" />,
      title: "Satisfaction Guaranteed",
      description:
        "If you're not completely satisfied with our product, we'll make it right or refund your purchase.",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Quality Assured",
      description:
        "Every product undergoes rigorous testing to ensure it meets our high standards of excellence.",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Lifetime Support",
      description:
        "We provide ongoing support and updates for as long as you own our products.",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Ethically Sourced",
      description:
        "All our materials are responsibly sourced with respect for people and the planet.",
    },
  ];

  return (
    <section className="container py-12 space-y-14 bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}

      <HeroSubPage
        title={"What Our Customers Say"}
        des={` We stand behind our products with confidence. Your satisfaction is
            our top priority, backed by these promises that ensure you get the
            best experience possible.`}
      >
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center mx-auto">
          Explore Our Products
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </HeroSubPage>

      {/* Guarantees Grid */}
      <GuaranteesGrid guarantees={guarantees} />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* CTA Section */}

      <HeroSubPage
        title={"Ready to Experience Peace of Mind?"}
        des={
          "Shop our collection today and enjoy the confidence that comes with our guarantee."
        }
        classNameContent={"py-5"}
        classTitle={"text-3xl"}
        classDes={"text-xl"}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant={"btnBlue"} size={"xl"} className="">
            Shop Now
          </Button>
          <Button variant={"btnWhite"} size={"xl"} className="">
            Contact Support
          </Button>
        </div>
      </HeroSubPage>
    </section>
  );
}
