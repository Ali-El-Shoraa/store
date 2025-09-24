import { Link } from "@/i18n/navigation";
import { Sparkles } from "lucide-react";

export default function LogoNavbar({ textColor }) {
  return (
    <Link
      href="/"
      className="flex items-center transition-all duration-300 group"
    >
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 rounded-xl bg-purple-600 flex items-center justify-center text-primary-foreground font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow">
          <Sparkles className="h-5 w-5" />
          <div className="absolute inset-0 bg-purple-600 rounded-xl animate-pulse opacity-75 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="hidden sm:block">
          <span className="font-bold text-2xl bg-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Electro
          </span>
          <span className={`font-bold text-2xl text-foreground ${textColor}`}>
            Store
          </span>
        </div>
      </div>
    </Link>
  );
}
