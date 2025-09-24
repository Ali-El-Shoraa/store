// app/help-page.jsx
"use client";

import { useState } from "react";
import {
  Search,
  Mail,
  MessageCircle,
  Clock,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Phone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function HelpPage() {
  const [openSections, setOpenSections] = useState({});
  const [activeTab, setActiveTab] = useState("faq");

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const faqCategories = [
    {
      title: "Account & Billing",
      icon: <BookOpen className="h-5 w-5" />,
      questions: [
        {
          question: "How do I reset my password?",
          answer:
            "To reset your password, go to the login page and click 'Forgot Password'. Enter your email address and we'll send you a link to reset your password. The link will expire in 24 hours for security reasons.",
        },
        {
          question: "How can I update my billing information?",
          answer:
            "You can update your billing information by going to your Account Settings, then selecting 'Billing'. From there, you can add, remove, or update your payment methods.",
        },
        {
          question: "Why was my credit card declined?",
          answer:
            "There are several reasons why a card might be declined: insufficient funds, expired card, incorrect CVV code, or your bank may have flagged the transaction as suspicious. Please check with your bank or try a different payment method.",
        },
      ],
    },
    {
      title: "Product Support",
      icon: <MessageCircle className="h-5 w-5" />,
      questions: [
        {
          question: "How do I install the software?",
          answer:
            "After purchasing, you'll receive a download link and installation instructions. Our software is compatible with Windows 10+, macOS 10.14+, and most Linux distributions. Make sure your system meets the minimum requirements before installing.",
        },
        {
          question: "Where can I find documentation?",
          answer:
            "Comprehensive documentation is available in our Knowledge Base. You can access it by clicking the 'Documentation' link in your account dashboard or visiting our website's support section.",
        },
        {
          question: "How often do you release updates?",
          answer:
            "We release minor updates monthly with bug fixes and improvements. Major feature updates are released quarterly. All updates are free for active subscribers.",
        },
      ],
    },
    {
      title: "Shipping & Delivery",
      icon: <Clock className="h-5 w-5" />,
      questions: [
        {
          question: "How long does shipping take?",
          answer:
            "Standard shipping takes 3-5 business days within the continental US. International shipping typically takes 7-14 business days depending on the destination. Express shipping options are available at checkout.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by location. Some restrictions may apply for certain products based on local regulations.",
        },
        {
          question: "How can I track my order?",
          answer:
            "Once your order ships, you'll receive a confirmation email with a tracking number. You can also view your order status and tracking information by logging into your account and visiting the 'Order History' section.",
        },
      ],
    },
  ];

  const supportOptions = [
    {
      title: "Email Support",
      description: "Send us a message and we'll respond within 24 hours",
      icon: <Mail className="h-8 w-8" />,
      action: "Send Email",
      details: "support@example.com",
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      icon: <MessageSquare className="h-8 w-8" />,
      action: "Start Chat",
      details: "Available 9AM-6PM EST",
    },
    {
      title: "Phone Support",
      description: "Speak directly with our support agents",
      icon: <Phone className="h-8 w-8" />,
      action: "Call Now",
      details: "+1 (800) 123-4567",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How can we help you?
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Find answers to common questions or contact our support team
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for answers..."
              className="w-full pl-10 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12 px-4 -mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 mb-4">{option.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-slate-600 mb-4">{option.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {option.details}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm">
                    {option.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-b border-slate-200">
            <div className="flex space-x-8">
              <button
                className={`py-4 font-medium text-lg border-b-2 transition-colors ${
                  activeTab === "faq"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
                onClick={() => setActiveTab("faq")}
              >
                FAQ
              </button>
              <button
                className={`py-4 font-medium text-lg border-b-2 transition-colors ${
                  activeTab === "contact"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
                onClick={() => setActiveTab("contact")}
              >
                Contact Us
              </button>
              <button
                className={`py-4 font-medium text-lg border-b-2 transition-colors ${
                  activeTab === "resources"
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
                onClick={() => setActiveTab("resources")}
              >
                Resources
              </button>
            </div>
          </div>

          {/* FAQ Content */}
          {activeTab === "faq" && (
            <div className="py-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqCategories.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left font-semibold text-slate-900 bg-slate-50"
                      onClick={() => toggleSection(categoryIndex)}
                    >
                      <div className="flex items-center">
                        <span className="text-blue-600 mr-3">
                          {category.icon}
                        </span>
                        {category.title}
                      </div>
                      {openSections[categoryIndex] ? (
                        <ChevronUp className="h-5 w-5 text-slate-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-slate-500" />
                      )}
                    </button>

                    {openSections[categoryIndex] && (
                      <div className="p-6 space-y-6">
                        {category.questions.map((item, questionIndex) => (
                          <div
                            key={questionIndex}
                            className="pb-6 last:pb-0 last:mb-0 border-b border-slate-100 last:border-b-0"
                          >
                            <h3 className="font-medium text-slate-900 mb-3">
                              {item.question}
                            </h3>
                            <p className="text-slate-600">{item.answer}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Form */}
          {activeTab === "contact" && (
            <div className="py-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Get in Touch
              </h2>

              <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Please describe your issue or question in detail..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Resources */}
          {activeTab === "resources" && (
            <div className="py-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Helpful Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Documentation
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Browse our comprehensive guides and tutorials to get the
                    most out of our products.
                  </p>
                  <button className="text-blue-600 font-medium flex items-center">
                    View Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Video Tutorials
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Watch step-by-step video guides that walk you through common
                    tasks and features.
                  </p>
                  <button className="text-blue-600 font-medium flex items-center">
                    Watch Videos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Community Forum
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Join our community to ask questions, share ideas, and get
                    help from other users.
                  </p>
                  <button className="text-blue-600 font-medium flex items-center">
                    Visit Forum
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    Blog
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Read our latest articles, product updates, and industry
                    insights.
                  </p>
                  <button className="text-blue-600 font-medium flex items-center">
                    Read Blog
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Still need help?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Our customer support team is here to help you with any questions or
            issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
            <button className="border border-slate-200 bg-white hover:bg-slate-50 font-medium py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
