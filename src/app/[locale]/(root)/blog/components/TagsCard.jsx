import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TagsCard({ tags }) {
  return (
    <Card className="mb-8 border-0 shadow-md">
      <CardHeader className="pb-3">
        <CardTitle>Popular Tags</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer hover:bg-blue-50 hover:text-blue-600 px-3 py-1"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
