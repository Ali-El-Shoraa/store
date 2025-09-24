import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function FAQSection() {
  return (
    <Card className="border-none shadow-lg rounded-2xl overflow-hidden mt-6 p-0">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 py-6">
        <CardTitle className="text-gray-900">
          Frequently Asked Questions
        </CardTitle>
        <CardDescription>Quick answers to common questions</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">
            What is your typical response time?
          </h3>
          <p className="text-gray-600">
            We aim to respond to all inquiries within 24 hours during business
            days. For urgent matters, our premium support clients receive
            responses within 2 hours.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">
            Do you offer custom solutions?
          </h3>
          <p className="text-gray-600">
            Yes, we specialize in creating tailored solutions to meet your
            specific business needs. Our team will work closely with you to
            develop exactly what you require.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">
            What are your working hours?
          </h3>
          <p className="text-gray-600">
            Our team is available Sunday through Thursday from 8AM to 6PM Arabia
            Standard Time. We offer 24/7 emergency support for critical issues.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
