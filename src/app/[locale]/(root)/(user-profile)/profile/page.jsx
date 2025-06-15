import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

export default function ProfileForm() {
  return (
    <div className="flex justify-center">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="profile">Profile Information</TabsTrigger>
          <TabsTrigger value="security">Security Settings</TabsTrigger>
        </TabsList>

        {/* Profile Information Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Profile Information
              </CardTitle>
              <Separator />
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Avatar Section */}
              <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                <div className="relative group">
                  <Avatar className="h-40 w-40 border-4 border-primary/20">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-4xl">AE</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" className="text-white">
                      Change
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button variant="default" className="w-full sm:w-40">
                    Upload new picture
                  </Button>
                  <Button variant="outline" className="w-full sm:w-40">
                    Remove picture
                  </Button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      id="first-name"
                      placeholder="Your first name"
                      defaultValue="Jane"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      id="last-name"
                      placeholder="Your last name"
                      defaultValue="Ferguson"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                    <p className="text-sm text-muted-foreground">
                      Primary contact email
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Shipping Address</h3>
                  <Badge variant="outline">Primary</Badge>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Main St" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State/Province</Label>
                    <Input id="state" placeholder="NY" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP/Postal Code</Label>
                    <Input id="zip" placeholder="10001" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="United States" />
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-end gap-4">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Security Settings Tab */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Security Settings
              </CardTitle>
              <Separator />
            </CardHeader>

            <CardContent className="space-y-8">
              <Alert className="border-blue-500 bg-blue-50">
                <AlertDescription>
                  For security reasons, you'll need to confirm your current
                  password to make changes.
                </AlertDescription>
              </Alert>

              {/* Password Change */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Change Password</h3>

                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="Enter current password"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">
                      Confirm New Password
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  Password must be at least 8 characters long and contain a mix
                  of letters, numbers, and symbols.
                </div>
              </div>

              {/* Two-Factor Authentication */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">
                  Two-Factor Authentication
                </h3>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">SMS Authentication</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive verification codes via SMS
                    </p>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Authenticator App</h4>
                    <p className="text-sm text-muted-foreground">
                      Use an app like Google Authenticator
                    </p>
                  </div>
                  <Button variant="outline">Set Up</Button>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-end gap-4">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Update Security Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Home, Heart, Upload, User, FileText } from "lucide-react";
// import { Link } from "@/i18n/navigation";

// export default function ProfilePage() {
//   return (
//     <>
//       {/* Main Content */}
//       <div className="flex-grow bg-white rounded-lg shadow-sm border border-gray-200 p-6 ml-6">
//         <div className="">
//           <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
//             <h1 className="text-2xl font-semibold text-gray-800">My Profile</h1>
//             <Button>Edit Profile</Button>
//           </div>

//           <form>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div>
//                 <Label>First Name</Label>
//                 <Input type="text" name="first_name" />
//               </div>
//               <div>
//                 <Label>Last Name</Label>
//                 <Input type="text" name="last_name" />
//               </div>
//               <div>
//                 <Label>Email Address</Label>
//                 <Input type="email" name="email" />
//               </div>
//               <div>
//                 <Label>Phone Number</Label>
//                 <Input type="text" name="phone" />
//               </div>
//             </div>

//             <div className="mb-6">
//               <Label>Current Password</Label>
//               <Input
//                 type="password"
//                 name="currentPassword"
//                 placeholder="Enter your current password"
//               />
//             </div>

//             <div className="mb-6">
//               <Label>New Password</Label>
//               <Input
//                 type="password"
//                 name="newPassword"
//                 placeholder="Enter new password"
//               />
//             </div>

//             <div className="mb-6">
//               <Label>Confirm New Password</Label>
//               <Input
//                 type="password"
//                 name="confirmNewPassword"
//                 placeholder="Confirm your new password"
//               />
//             </div>

//             <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
//               <Button variant="outline">Cancel</Button>
//               <Button type="submit">Save Changes</Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// function NavItem({ icon, title, active = false }) {
//   return (
//     <li>
//       <Link
//         className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
//           active
//             ? "bg-primary/10 text-primary font-medium"
//             : "text-gray-600 hover:bg-gray-100"
//         }`}
//         href="#"
//       >
//         <span>{icon}</span>
//         <span>{title}</span>
//       </Link>
//     </li>
//   );
// }
