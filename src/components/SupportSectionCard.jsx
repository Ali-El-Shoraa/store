import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { Clock } from "lucide-react";

export default function SupportSectionCard() {
  return (
    <Card className="bg-blue-50 border-blue-200">
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <Clock className="h-6 w-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-blue-800 mb-2">
              Need Help With Your Order?
            </h3>
            <p className="text-blue-700">
              Our customer support team is here to help with any questions about
              your order.
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-blue-300 text-blue-700"
              >
                <a href="mailto:support@example.com">Email Support</a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-blue-300 text-blue-700"
              >
                <a href="tel:+15551234567">Call Support</a>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-blue-300 text-blue-700"
              >
                <Link href="/help-page">Help Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
