import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative aspect-square">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="p-4 space-y-3 flex-grow">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <div className="flex items-center gap-1">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3 w-8" />
          </div>
          <Skeleton className="h-3 w-20" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
