"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import HeroSubPage from "@/components/HeroSubPage";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <HeroSubPage
        icon={<CheckCircle2 className="h-12 w-12" />}
        title={"Message Sent Successfully!"}
        des={`Thank you for contacting us.`}
        bgColor="bg-gradient-to-r from-green-600 to-emerald-700"
      >
        <p className="text-emerald-100 mb-6">
          We've received your message and will get back to you within 24 hours.
        </p>

        <p className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-sm text-green-700">
          Your reference ID:{" "}
          <span className="font-mono">
            CT-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </span>
        </p>

        <Button
          onClick={() => setIsSubmitted(false)}
          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
        >
          Send Another Message
        </Button>
      </HeroSubPage>
    );
  }

  return (
    <Card className="border-none shadow-xl rounded-2xl overflow-hidden p-0">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-6">
        <CardTitle>Send us a Message</CardTitle>
        <CardDescription className="text-indigo-100 mt-2">
          Fill out the form below and we'll get back to you shortly
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="py-3 px-4 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg transition-colors duration-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="py-3 px-4 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg transition-colors duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-gray-700">
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="What is this regarding?"
              className="py-3 px-4 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg transition-colors duration-300"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-700">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell us how we can help you..."
              className="py-3 px-4 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-lg resize-none transition-colors duration-300"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              required
              className="rounded text-indigo-600 focus:ring-indigo-500"
            />
            <Label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the terms and privacy policy
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 py-3 rounded-lg font-medium transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
        {/* <IconsContactForm /> */}
      </CardContent>
    </Card>
  );
}
