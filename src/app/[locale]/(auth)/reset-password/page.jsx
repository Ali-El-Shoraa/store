"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate reset process
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
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
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Reset your password
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              {isSent
                ? "We've sent a password reset link to your email."
                : "Enter your email to receive a reset link."}
            </p>
          </div>
        </div>

        {!isSent ? (
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

            <Button
              type="submit"
              className="w-full cursor-pointer bg-brand-secoundry hover:bg-brand-secoundry/70"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send reset link"}
            </Button>
          </form>
        ) : (
          <div className="text-center">
            <Button
              variant="link"
              className="text-brand-secoundry hover:text-brand-secoundry/80 text-sm"
              onClick={() => setIsSent(false)}
            >
              Didn't receive the email? Resend
            </Button>
          </div>
        )}

        <p className="text-center text-sm text-gray-600">
          Remember your password?{" "}
          <Button
            variant="link"
            className="text-brand-secoundry hover:text-brand-secoundry/80 px-0 text-sm"
          >
            <Link href={"/login"}>Sign in</Link>
          </Button>
        </p>
      </div>
    </main>
  );
}
