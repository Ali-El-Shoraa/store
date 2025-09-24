import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function NewsletterCard() {
  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-blue-600" />
          Subscribe to Newsletter
        </CardTitle>
        <CardDescription>
          Get the latest posts delivered right to your inbox.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Your email address"
            className="focus:border-blue-500"
          />
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            Subscribe
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
