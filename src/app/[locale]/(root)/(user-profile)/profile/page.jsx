import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Home, Heart, Upload, User, FileText } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ProfilePage() {
  return (
    <>
      {/* Main Content */}
      <div className="flex-grow bg-white rounded-lg shadow-sm border border-gray-200 p-6 ml-6">
        <div className="">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-800">My Profile</h1>
            <Button>Edit Profile</Button>
          </div>

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label>First Name</Label>
                <Input type="text" name="first_name" />
              </div>
              <div>
                <Label>Last Name</Label>
                <Input type="text" name="last_name" />
              </div>
              <div>
                <Label>Email Address</Label>
                <Input type="email" name="email" />
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input type="text" name="phone" />
              </div>
            </div>

            <div className="mb-6">
              <Label>Current Password</Label>
              <Input
                type="password"
                name="currentPassword"
                placeholder="Enter your current password"
              />
            </div>

            <div className="mb-6">
              <Label>New Password</Label>
              <Input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
              />
            </div>

            <div className="mb-6">
              <Label>Confirm New Password</Label>
              <Input
                type="password"
                name="confirmNewPassword"
                placeholder="Confirm your new password"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function NavItem({ icon, title, active = false }) {
  return (
    <li>
      <Link
        className={`flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
          active
            ? "bg-primary/10 text-primary font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }`}
        href="#"
      >
        <span>{icon}</span>
        <span>{title}</span>
      </Link>
    </li>
  );
}
