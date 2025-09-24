import { MessageCircle } from "lucide-react";
import HeroSubPage from "@/components/HeroSubPage";
import ContactFormSection from "./components/ContactFormSection";
import FAQSection from "./components/FAQSection";
import CompanyStats from "./components/CompanyStats";
import OfficeLocationCard from "./components/OfficeLocationCard";
import ContactInformationCard from "./components/ContactInformationCard";

export default function ContactPage() {
  return (
    <div className="container py-12 space-y-14 bg-gradient-to-br from-slate-50 to-blue-50/30 mb-10">
      {/* Header Section */}
      <HeroSubPage
        icon={<MessageCircle className="h-8 w-8" />}
        title={"Get in Touch With Us"}
        des={`Have questions or want to discuss a project? We'd love to hear from
          you. Send us a message and we'll respond as soon as possible.`}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Information */}

        <div className="lg:col-span-1 space-y-6">
          <ContactInformationCard />

          <OfficeLocationCard />

          {/* Company Stats */}
          <CompanyStats />
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <ContactFormSection />

          {/* FAQ Section */}
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
