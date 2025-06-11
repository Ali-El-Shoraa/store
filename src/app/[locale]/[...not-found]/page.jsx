// app/not-found.tsx
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      {/* خلفية SVG (اختياري) */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="max-w-md space-y-4 text-center">
        <h1 className="text-9xl font-bold tracking-tighter text-primary animate-pulse">
          404
        </h1>

        <h2 className="text-2xl font-semibold">Page not found</h2>
        <p className="text-muted-foreground">
          Sorry, we couldn't find the page you were looking for.
        </p>
        <Button asChild variant="default" className="mt-4">
          <Link href="/">Back to Home Page</Link>
        </Button>
      </div>
    </div>
  );
}
// import { Link } from "@/i18n/navigation";

// export default function NotFound() {
//   return (
//     <div>
//       <h2>Not Found</h2>
//       <p>Could not find requested resource</p>
//       <Link href="/">Return Home.......................</Link>
//     </div>
//   );
// }
