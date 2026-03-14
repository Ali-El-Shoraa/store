"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Heart,
  ShoppingCart,
  User,
  FileText,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function NavItem({ icon, title, link, onClick, badgeCount }) {
  const path = usePathname();
  const isActive = path.includes(link);

  return (
    <li>
      <Link
        className={`flex items-center justify-between gap-3 px-4 py-3 rounded-md transition-colors relative ${
          isActive
            ? "bg-primary/10 text-primary font-medium"
            : "text-muted-foreground hover:bg-accent"
        }`}
        href={link}
        onClick={onClick}
      >
        <div className="flex items-center gap-2.5">
          <span className="">{icon}</span>
          <span>{title}</span>
        </div>

        {badgeCount && badgeCount > 0 && (
          <Badge className="h-5 w-5 p-0 flex items-center justify-center">
            {badgeCount}
          </Badge>
        )}
        {/* {isActive && (
          <div className="absolute right-4 w-1 h-6 bg-primary rounded-full" ></div>
        )} */}
      </Link>
    </li>
  );
}

export default function UserProfileLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: <User className="w-4 h-4" />, title: "Profile", link: "/profile" },
    {
      icon: <FileText className="w-4 h-4" />,
      title: "My Invoices",
      link: "/invoices",
      badgeCount: 3,
    },
    {
      icon: <Heart className="w-4 h-4" />,
      title: "My Favorites",
      link: "/favorites",
      badgeCount: 7,
    },
    {
      icon: <ShoppingCart className="w-4 h-4" />,
      title: "My Cart",
      link: "/cart",
      badgeCount: 2,
    },
  ];

  return (
    <section className="relative py-10">
      {/* Mobile menu button (floating) */}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed lg:hidden z-50 bottom-6 right-6 w-12 h-12 rounded-full shadow-lg bg-background hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          {mobileMenuOpen ? "Close menu" : "Open menu"}
        </TooltipContent>
      </Tooltip>

      <div className="container flex items-start gap-7 relative">
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 lg:hidden z-40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar - Desktop */}
        <aside className="w-72 shrink-0 mb-5 bg-background rounded-lg shadow-sm border h-fit hidden lg:block">
          <div className="flex flex-col items-center p-6 pb-4">
            <div className="relative w-24 h-24 mb-4 group">
              <Avatar className="w-full h-full border-2 border-primary/20">
                <AvatarImage src="https://dmlygcfpc782j.cloudfront.net/media/leads/user.jpg" />
                <AvatarFallback className="text-2xl">AE</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-background"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
              </Button>
            </div>
            <input accept="image/*" className="hidden" type="file" />
            <h3 className="text-lg font-medium">Ali</h3>
            <p className="text-sm text-muted-foreground">Premium Member</p>
          </div>

          <Separator className="mb-2" />

          <nav className="p-2">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <NavItem
                  key={item.link}
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                  badgeCount={item.badgeCount}
                />
              ))}
            </ul>
          </nav>

          <Separator className="my-2" />

          <div className="p-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </Button>
          </div>
        </aside>

        {/* Mobile sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-background z-50 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-col items-center p-6 pb-4 border-b">
              <div className="relative w-20 h-20 mb-3 group">
                <Avatar className="w-full h-full border-2 border-primary/20">
                  <AvatarImage src="https://dmlygcfpc782j.cloudfront.net/media/leads/user.jpg" />
                  <AvatarFallback className="text-xl">AE</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-lg font-medium">Ali</h3>
              <p className="text-sm text-muted-foreground">Premium Member</p>
            </div>

            <nav className="p-2 flex-1 overflow-y-auto">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <NavItem
                    key={item.link}
                    icon={item.icon}
                    title={item.title}
                    link={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    badgeCount={item.badgeCount}
                  />
                ))}
              </ul>
            </nav>

            <div className="p-2 border-t">
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 mb-5 w-full lg:w-[calc(100%-19rem)]">
          <div className="bg-background rounded-lg border p-6">{children}</div>
        </main>
      </div>
    </section>
  );
}
