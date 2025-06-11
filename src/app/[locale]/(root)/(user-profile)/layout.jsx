// app/profile/page.tsx
// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { User, Home, Heart, ShoppingCart, Upload, Menu, X } from "lucide-react";

// export default function ProfilePage({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Mobile sidebar toggle button */}
//       <div className="lg:hidden flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-semibold">My Profile</h1>
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={toggleSidebar}
//           className="lg:hidden"
//         >
//           {sidebarOpen ? (
//             <X className="h-5 w-5" />
//           ) : (
//             <Menu className="h-5 w-5" />
//           )}
//         </Button>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-6 relative">
//         {/* Sidebar - Hidden on mobile by default */}
//         <aside
//           className={`w-full lg:w-1/3 64 bg-white rounded-lg shadow-sm border border-gray-200 pb-4 h-fit lg:sticky lg:top-5 transition-all duration-300 ease-in-out ${
//             sidebarOpen
//               ? "fixed inset-0 !w-64 h-full z-50 translate-x-0"
//               : "hidden lg:block -translate-x-full lg:translate-x-0"
//           }`}
//         >
//           <div className="p-4 flex justify-end lg:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleSidebar}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               <X className="h-5 w-5" />
//             </Button>
//           </div>

//           <div className="flex flex-col items-center p-6 border-b border-gray-200">
//             <div className="relative w-24 h-24 mb-3 group">
//               <div className="relative flex size-8 shrink-0 overflow-hidden rounded-full w-full h-full">
//                 <img
//                   className="aspect-square size-full object-cover"
//                   src="https://dmlygcfpc782j.cloudfront.net/media/leads/user.jpg"
//                   alt="User avatar"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
//                   <Upload className="text-white text-xl" />
//                 </div>
//               </div>
//               <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
//                 A
//               </div>
//             </div>
//             <input accept="image/*" className="hidden" type="file" />
//             <h3 className="text-lg font-medium text-gray-800">Ali</h3>
//           </div>

//           <nav className="p-2">
//             <ul className="space-y-1">
//               <li>
//                 <a
//                   className="flex items-center gap-3 px-4 py-3 rounded-md transition-colors bg-primary/10 text-primary font-medium"
//                   href="#"
//                 >
//                   <User className="w-4 h-4" />
//                   <span>Profile</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-gray-600 hover:bg-gray-100"
//                   href="#"
//                 >
//                   <Home className="w-4 h-4" />
//                   <span>My Orders</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-gray-600 hover:bg-gray-100"
//                   href="#"
//                 >
//                   <Heart className="w-4 h-4" />
//                   <span>My Favorites</span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   className="flex items-center gap-3 px-4 py-3 rounded-md transition-colors text-gray-600 hover:bg-gray-100"
//                   href="#"
//                 >
//                   <ShoppingCart className="w-4 h-4" />
//                   <span>My Cart</span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </aside>

//          {/* Main content */}
//         <main className="flex-1 min-w-0 w-2/3">
//           <Card className="bg-white rounded-lg shadow-sm border border-gray-200">
//             <CardHeader className="border-b border-gray-200">
//               <div className="flex justify-between items-center">
//                 <CardTitle className="text-2xl font-semibold">
//                   My Profile
//                 </CardTitle>
//                 <Button>Edit Profile</Button>
//               </div>
//             </CardHeader>
//             <CardContent className="p-6">
//               <form>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="first_name">First Name</Label>
//                     <Input type="text" id="first_name" name="first_name" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="last_name">Last Name</Label>
//                     <Input type="text" id="last_name" name="last_name" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email Address</Label>
//                     <Input type="email" id="email" name="email" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input type="text" id="phone" name="phone" />
//                   </div>
//                 </div>

//                 <div className="space-y-2 mb-6">
//                   <Label htmlFor="currentPassword">Current Password</Label>
//                   <Input
//                     type="password"
//                     id="currentPassword"
//                     placeholder="Enter your current password"
//                   />
//                 </div>

//                 <div className="space-y-2 mb-6">
//                   <Label htmlFor="newPassword">New Password</Label>
//                   <Input
//                     type="password"
//                     id="newPassword"
//                     placeholder="Enter new password"
//                   />
//                 </div>

//                 <div className="space-y-2 mb-6">
//                   <Label htmlFor="confirmNewPassword">
//                     Confirm New Password
//                   </Label>
//                   <Input
//                     type="password"
//                     id="confirmNewPassword"
//                     placeholder="Confirm your new password"
//                   />
//                 </div>

//                 <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
//                   <Button variant="outline">Cancel</Button>
//                   <Button type="submit">Save Changes</Button>
//                 </div>
//               </form>
//             </CardContent>
//           </Card>
//         </main>
//       </div>
//     </div>
//   );
// }
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Home, Heart, Upload, User, FileText } from "lucide-react";
import { Link } from "@/i18n/navigation";

function NavItem({ icon, title, link, active = false }) {
  return (
    <li>
      <Link
        className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
          active
            ? "bg-primary/10 text-primary font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        href={link}
      >
        <span>{icon}</span>
        <span>{title}</span>
      </Link>
    </li>
  );
}

export default async function UserProfileLayout({ children }) {
  return (
    <section>
      <div className="container flex items-start gap-7 relative">
        <div className="w-1/3  shrink-0 sticky top-5 mb-5 bg-white rounded-lg shadow-sm border border-gray-200 pb-4 h-fit hidden lg:block">
          <div className="flex flex-col items-center p-6 border-b border-gray-200">
            <div className="relative w-24 h-24 mb-3 group">
              <Avatar className="w-full h-full">
                <AvatarImage src="https://dmlygcfpc782j.cloudfront.net/media/leads/user.jpg" />
                <AvatarFallback>A</AvatarFallback>
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Upload className="text-white text-xl" />
                </div> */}
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
                title="My Orders"
                link="/orders"
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
              {/* <NavItem
                icon={<FileText className="w-4 h-4" />}
                title="Invoices"
                link="/"

              /> */}
            </ul>
          </nav>
        </div>
        <div className="flex-1 min-w-0 mb-5 w-2/3">{children}</div>
      </div>
    </section>
  );
}
