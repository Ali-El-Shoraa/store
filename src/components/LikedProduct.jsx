import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

export default function LikedProduct({ handleClick, liked }) {
  return (
    <label className="relative group cursor-pointer">
      <input
        type="checkbox"
        className="peer hidden"
        onChange={handleClick}
        checked={liked}
      />

      <div
        className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm 
        flex items-center justify-center transition-all duration-300 
        hover:scale-110 active:scale-95 
        peer-checked:bg-gradient-to-br peer-checked:from-red-100 peer-checked:to-red-200 
        peer-checked:border-red-400 peer-checked:shadow-md"
      >
        <Heart
          className={cn(
            "w-5 h-5 transition-colors duration-300",
            liked ? "text-red-500 fill-red-500" : "text-gray-400"
          )}
        />
      </div>

      <div
        className="absolute inset-0 rounded-full bg-red-200 opacity-0 
        scale-75 peer-checked:animate-ping z-[-1]"
      ></div>
    </label>
  );
}
