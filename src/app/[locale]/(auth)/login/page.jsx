"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { FormEventHandler, useState } from "react";
import { Link } from "@/i18n/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful!");
    }, 1500);
  };

  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50">
      <div className="max-w-sm w-full space-y-6">
        {/* Logo and Header */}
        <div className="text-center pb-6">
          <div className="mx-auto w-40 h-20 relative">
            <Link href={"/"}>
              <Image
                src="/image/logo_black.png"
                alt="Company Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl font-bold text-brand-color sm:text-3xl">
              Log in to your account
            </h1>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember-me"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(!!checked)}
              />
              <Label htmlFor="remember-me" className="text-sm font-medium">
                Remember me
              </Label>
            </div>
            <Button
              variant="link"
              type="button"
              className="text-brand-secoundry hover:text-brand-secoundry/70 px-0 text-sm"
            >
              <Link href={`/reset-password`}>Forgot password?</Link>
            </Button>
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer bg-brand-secoundry hover:bg-brand-secoundry/70"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Sign In */}
        <Button variant="outline" className="w-full">
          <Image
            src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
            alt="Google"
            width={20}
            height={20}
            className="mr-2"
          />
          Continue with Google
        </Button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Button
            variant="link"
            className="text-brand-secoundry hover:text-brand-secoundry/70 px-0 text-sm"
          >
            <Link href={`/sign-up`}>Sign Up</Link>
          </Button>
        </p>
      </div>
    </main>
  );
}
// import IndexLoginPage from "@/app/[locale]/(auth)/login/components/IndexLoginPage";

// import IndexLoginPage from "./components/IndexLoginPage";

// export default function SignInPage() {
//   return (
//     <>
//       <IndexLoginPage />
//     </>
//   );
// }
