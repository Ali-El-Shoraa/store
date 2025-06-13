"use client";

import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Home, Heart, Upload, User, FileText, Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

function NavItem({ icon, title, link, active = false, onClick }) {
  return (
    <li>
      <Link
        className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
          active
            ? "bg-primary/10 text-primary font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        href={link}
        onClick={onClick}
      >
        <span>{icon}</span>
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default function UserProfileLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section>
      {/* Mobile menu button (floating) */}
      <Button
        variant="outline"
        size="icon"
        className="fixed lg:hidden z-50 bottom-6 right-6 w-12 h-12 rounded-full shadow-lg"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </Button>

      <div className="container flex items-start gap-7 relative">
        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 lg:hidden z-40 right-0"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar - Desktop */}
        <div className="w-1/3 shrink-0 sticky top-5 mb-5 bg-white rounded-lg shadow-sm border border-gray-200 pb-4 h-fit hidden lg:block">
          <div className="flex flex-col items-center p-6 border-b border-gray-200">
            <div className="relative w-24 h-24 mb-3 group">
              <Avatar className="w-full h-full">
                <AvatarImage src="https://dmlygcfpc782j.cloudfront.net/media/leads/user.jpg" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                A
              </div>
            </div>
            <input accept="image/*" className="hidden" type="file" />
            <h3 className="text-lg font-medium text-gray-800">Ali</h3>
          </div>

          <nav className="p-2">
            <ul className="space-y-1">
              <NavItem
                active
                icon={<User className="w-4 h-4" />}
                title="Profile"
                link="/profile"
              />
              <NavItem
                icon={<Home className="w-4 h-4" />}
                title="My Invoices"
                link="/invoices"
              />
              <NavItem
                icon={<Heart className="w-4 h-4" />}
                title="My Favorites"
                link="/favorites"
              />
              <NavItem
                icon={<Heart className="w-4 h-4" />}
                title="My Cart"
                link="/cart"
              />
            </ul>
          </nav>
        </div>

        {/* Mobile sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-col items-center p-6 border-b border-gray-200">
              <div className="relative w-24 h-24 mb-3 group">
                <Avatar className="w-full h-full">
                  <AvatarImage src="https://dmlygcfpc782j.cloudfront.net/media/leads/user.jpg" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                  A
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Ali</h3>
            </div>

            <nav className="p-2 flex-1 overflow-y-auto">
              <ul className="space-y-1">
                <NavItem
                  active
                  icon={<User className="w-4 h-4" />}
                  title="Profile"
                  link="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <NavItem
                  icon={<Home className="w-4 h-4" />}
                  title="My Invoices"
                  link="/invoices"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <NavItem
                  icon={<Heart className="w-4 h-4" />}
                  title="My Favorites"
                  link="/favorites"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <NavItem
                  icon={<Heart className="w-4 h-4" />}
                  title="My Cart"
                  link="/cart"
                  onClick={() => setMobileMenuOpen(false)}
                />
              </ul>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0 mb-5 w-2/3">{children}</div>
      </div>
    </section>
  );
}
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Home, Heart, Upload, User, FileText } from "lucide-react";
// import { Link } from "@/i18n/navigation";

// function NavItem({ icon, title, link, active = false }) {
//   return (
//     <li>
//       <Link
//         className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
//           active
//             ? "bg-primary/10 text-primary font-medium"
//             : "text-gray-600 hover:bg-gray-100"
//         }`}
//         href={link}
//       >
//         <span>{icon}</span>
//         <span>{title}</span>
//       </Link>
//     </li>
//   );
// }

// export default async function UserProfileLayout({ children }) {
//   return (
//     <section>
//       <div className="container flex items-start gap-7 relative">

//         <div className="w-1/3  shrink-0 sticky top-5 mb-5 bg-white rounded-lg shadow-sm border border-gray-200 pb-4 h-fit hidden lg:block">
//           <div className="flex flex-col items-center p-6 border-b border-gray-200">
//             <div className="relative w-24 h-24 mb-3 group">
//               <Avatar className="w-full h-full">
//                 <AvatarImage src="https://dmlygcfpc782j.cloudfront.net/media/leads/user.jpg" />
//                 <AvatarFallback>A</AvatarFallback>
//                 {/* <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
//                   <Upload className="text-white text-xl" />
//                 </div> */}
//               </Avatar>

//               <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
//                 A
//               </div>
//             </div>
//             <input accept="image/*" className="hidden" type="file" />
//             <h3 className="text-lg font-medium text-gray-800">Ali</h3>
//           </div>

//           <nav className="p-2">
//             <ul className="space-y-1">
//               <NavItem
//                 active
//                 icon={<User className="w-4 h-4" />}
//                 title="Profile"
//                 link="/profile"
//               />

//               <NavItem
//                 icon={<Home className="w-4 h-4" />}
//                 title="My Invoices"
//                 link="/invoices"
//               />
//               <NavItem
//                 icon={<Heart className="w-4 h-4" />}
//                 title="My Favorites"
//                 link="/favorites"
//               />
//               <NavItem
//                 icon={<Heart className="w-4 h-4" />}
//                 title="My Cart"
//                 link="/cart"
//               />
//             </ul>
//           </nav>
//         </div>
//         <div className="flex-1 min-w-0 mb-5 w-2/3">{children}</div>
//       </div>
//     </section>
//   );
// }
