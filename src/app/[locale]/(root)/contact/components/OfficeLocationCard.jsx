import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, MapPin } from "lucide-react";

export default function OfficeLocationCard() {
  return (
    <Card className="border-none shadow-lg rounded-2xl overflow-hidden bg-white p-0">
      <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6">
        <CardTitle>Office Location</CardTitle>
        <CardDescription className="text-gray-300">
          Visit our headquarters
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-64 rounded-xl bg-gradient-to-br from-blue-400/20 to-indigo-500/20 flex flex-col items-center justify-center text-center p-4 border border-gray-200">
          <div className="bg-white p-4 rounded-full shadow-md mb-4">
            <MapPin className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg text-gray-900">
            Interactive Map
          </h3>
          <p className="mt-2 text-gray-600">
            Google Maps integration would appear here
          </p>
          <Button
            variant="default"
            className="mt-4 bg-blue-600 hover:bg-blue-700"
          >
            Get Directions <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
