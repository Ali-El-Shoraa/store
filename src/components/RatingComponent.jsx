import { Star } from "lucide-react";

export default function RatingComponent({ rating, reviews }) {
  return (
    <div>
      <div className="flex items-center mt-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        {/* <span className="text-xs text-gray-500 ml-1">({rating})</span> */}

        <span className="ml-2 text-gray-600">
          {rating} {reviews && <>({reviews} reviews)</>}
        </span>
      </div>
    </div>
  );
}
