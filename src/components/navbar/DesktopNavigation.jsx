// "use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "@/i18n/navigation";

import { subNavbarItem } from "@/lib/subNavbarItem";
import { ChevronDown } from "lucide-react";

export default function DesktopNavigation() {
  return (
    <div className="hidden lg:flex items-center gap-3 xl:gap-6 text-[8px] md:text-xs font-semibold uppercase">
      {subNavbarItem?.map((item) =>
        item?.children ? (
          <HoverCard key={item?.id} openDelay={0} closeDelay={200}>
            <HoverCardTrigger>
              <h3 className="flex items-center gap-1 cursor-pointer hover:text-brand-secoundry transition-colors">
                {item?.icon}
                {item?.title}
                <ChevronDown className="h-4 w-4" />
              </h3>
            </HoverCardTrigger>
            <HoverCardContent
              className="w-[200px] p-2"
              side="bottom"
              align="start"
            >
              <ul className="grid gap-2">
                {item?.children?.map((child) => (
                  <li key={child?.id}>
                    <Link
                      className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded transition-colors"
                      href={child?.link}
                    >
                      {child?.icon}
                      {child?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </HoverCardContent>
          </HoverCard>
        ) : (
          <Link
            key={item?.id}
            href={item?.link}
            className="flex items-center gap-1 hover:text-brand-secoundry transition-colors"
          >
            {item?.icon}
            {item?.title}
          </Link>
        )
      )}
    </div>
  );
}
