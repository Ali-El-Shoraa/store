import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Clock, Globe, Users } from "lucide-react";

export default function CompanyStats() {
  return (
    <Card className="border-none shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2">
          <Building className="h-5 w-5" />
          About Our Company
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            <span>Employees</span>
          </div>
          <span className="font-bold">50+</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            <span>Global Clients</span>
          </div>
          <span className="font-bold">200+</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            <span>Years Experience</span>
          </div>
          <span className="font-bold">10+</span>
        </div>
      </CardContent>
    </Card>
  );
}
