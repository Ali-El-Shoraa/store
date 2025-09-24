import { Card, CardContent } from "@/components/ui/card";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <Card className="text-center">
        <CardContent className="pt-6">
          <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
          <p className="text-gray-600">Customer Satisfaction</p>
        </CardContent>
      </Card>
      <Card className="text-center">
        <CardContent className="pt-6">
          <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
          <p className="text-gray-600">Happy Clients</p>
        </CardContent>
      </Card>
      <Card className="text-center">
        <CardContent className="pt-6">
          <div className="text-3xl font-bold text-indigo-600 mb-2">4.9/5</div>
          <p className="text-gray-600">Average Rating</p>
        </CardContent>
      </Card>
      <Card className="text-center">
        <CardContent className="pt-6">
          <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
          <p className="text-gray-600">Support Available</p>
        </CardContent>
      </Card>
    </div>
  );
}
