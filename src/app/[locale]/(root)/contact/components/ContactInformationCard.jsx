import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactInformationCard() {
  return (
    <Card className="border-none shadow-lg rounded-2xl overflow-hidden p-0">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6">
        <CardTitle className="flex items-center gap-2 text-xl">
          <MessageCircle className="h-5 w-5" />
          Contact Information
        </CardTitle>
        <CardDescription className="text-blue-100 mt-2">
          Reach out through any of these channels
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
            <MapPin className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">Address</h3>
            <p className="text-gray-600 mt-1">
              123 Business Avenue, Suite 100
              <br />
              Riyadh, Saudi Arabia
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
            <Phone className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600 mt-1">+966 11 123 4567</p>
            <p className="text-gray-600 mt-1">+966 55 123 4567</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
            <Mail className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600 mt-1">info@company.com</p>
            <p className="text-gray-600 mt-1">support@company.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
            <Clock className="h-5 w-5 text-blue-600" />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">Business Hours</h3>
            <p className="text-gray-600 mt-1">
              Sunday - Thursday: 8AM - 6PM
              <br />
              Friday - Saturday: Closed
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
