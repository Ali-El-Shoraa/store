import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen, Mail, User } from "lucide-react";

export default function AboutCard({ blogPosts }) {
  return (
    <Card className="mb-8 border-0 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-blue-600" />
          About Our Blog
        </CardTitle>
        <CardDescription>
          Insights, trends, and expert opinions on technology, business, and
          digital transformation in the Arab world.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          We share our knowledge and experience to help businesses grow and
          thrive in the digital age.
        </p>
        <div className="flex items-center text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <User className="h-4 w-4 mr-1" />
            <span>12 Authors</span>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{blogPosts?.total} Articles</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          <Mail className="h-4 w-4 mr-2" />
          Subscribe to Newsletter
        </Button>
      </CardFooter>
    </Card>
  );
}
