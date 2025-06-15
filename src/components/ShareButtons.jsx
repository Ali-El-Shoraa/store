"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandX,
} from "@/lib/iconsShare";

export default function ShareButtons({ url, title }) {
  const [isHovered, setIsHovered] = useState();

  // Encode the URL and title for sharing
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const sharePlatforms = [
    {
      name: "whatsapp",
      label: "WhatsApp",
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: <IconBrandWhatsapp className="w-4 h-4" />,
      color: "bg-emerald-600 hover:bg-emerald-700",
      tooltip: "Share on WhatsApp",
    },
    {
      name: "telegram",
      label: "Telegram",
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <IconBrandTelegram className="w-4 h-4" />,
      color: "bg-blue-500 hover:bg-blue-600",
      tooltip: "Share on Telegram",
    },
    {
      name: "facebook",
      label: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <IconBrandFacebook className="w-4 h-4" />,
      color: "bg-blue-600 hover:bg-blue-700",
      tooltip: "Share on Facebook",
    },
    {
      name: "twitter",
      label: "X (Twitter)",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <IconBrandX className="w-4 h-4" />,
      color: "bg-neutral-900 hover:bg-neutral-800",
      tooltip: "Share on X",
    },
  ];

  return (
    <div className="flex items-center gap-2 my-3.5">
      {sharePlatforms?.map((platform) => (
        <Tooltip key={platform?.name}>
          <TooltipTrigger asChild>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className={`${platform?.color} rounded-full p-2 text-white hover:text-white transition-all duration-200`}
              onMouseEnter={() => setIsHovered(platform?.name)}
              onMouseLeave={() => setIsHovered(null)}
              aria-label={platform?.tooltip}
            >
              <Link
                href={platform?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white"
              >
                <span
                  className={`transition-transform duration-200 ${
                    isHovered === platform?.name ? "scale-110" : "scale-100"
                  }`}
                >
                  {platform?.icon}
                </span>
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" align="center">
            <p>{platform?.tooltip}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
