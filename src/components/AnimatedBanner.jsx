import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function AnimatedBanner({
  imageUrl,
  href,
  alt,
  priority = false,
}) {
  return (
    <Link
      href={href}
      className="block w-full h-full relative overflow-hidden rounded-lg shadow-lg transition-opacity group"
    >
      <div className="h-56">
        {/* Horizontal white flash effect */}
        <span
          className="
              absolute z-10 inset-0 bg-white/30 opacity-0 duration-700
              group-hover:left-1/2 group-hover:right-1/2 group-hover:opacity-100
            "
        />

        {/* Vertical white flash effect */}
        <span
          className="
              absolute z-10 inset-0 bg-white/30 opacity-0 duration-700
              group-hover:top-1/2 group-hover:bottom-1/2 group-hover:opacity-100
            "
        />

        {/* Image */}
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={alt}
          fill
          priority={priority}
          className="object-fill transition-transform duration-1000 ease-out" //group-hover:scale-105
        />
      </div>
    </Link>
  );
}
