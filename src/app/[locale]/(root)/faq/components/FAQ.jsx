"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  HelpCircle,
  MessageSquare,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  ArrowRight,
  ThumbsUp,
  ThumbsDown,
  BookOpen,
  Zap,
  Shield,
  CreditCard,
  Globe,
  Users,
  Code,
  Smartphone,
  DownloadCloud,
  BarChart3,
  Lightbulb,
  X,
  Filter,
  Sparkles,
} from "lucide-react";
import { getDataFake } from "@/app/api/getDataFake";
import { useQuery } from "@tanstack/react-query";
import HeroSubPage from "@/components/HeroSubPage";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState([]);
  const [isHelpfulFeedback, setIsHelpfulFeedback] = useState({});

  const toggleItem = (id) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((itemId) => itemId !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  const handleFeedback = (id, isHelpful) => {
    setIsHelpfulFeedback({ ...isHelpfulFeedback, [id]: isHelpful });
  };

  //   const categories = [
  //     { id: "all", name: "All Questions", count: 28, icon: HelpCircle },
  //     { id: "general", name: "General", count: 8, icon: Users },
  //     { id: "account", name: "Account & Billing", count: 6, icon: CreditCard },
  //     { id: "technical", name: "Technical Support", count: 7, icon: Code },
  //     { id: "services", name: "Our Services", count: 5, icon: Zap },
  //     { id: "security", name: "Security & Privacy", count: 4, icon: Shield },
  //   ];

  //   const faqItems = [
  //     {
  //       id: 1,
  //       question: "How do I create an account on your platform?",
  //       answer:
  //         "To create an account, click on the 'Sign Up' button in the top right corner of our website. Fill in your details including your name, email address, and a secure password. After completing the form, you'll receive a confirmation email to verify your account.",
  //       category: "account",
  //       featured: true,
  //     },
  //     {
  //       id: 2,
  //       question: "What payment methods do you accept?",
  //       answer:
  //         "We accept various payment methods including credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for larger orders. All payments are processed securely through our encrypted payment gateway.",
  //       category: "account",
  //       featured: true,
  //     },
  //     {
  //       id: 3,
  //       question: "How can I reset my password?",
  //       answer:
  //         "If you've forgotten your password, click on the 'Forgot Password' link on the login page. Enter your email address, and we'll send you a password reset link. The link will expire after 24 hours for security reasons.",
  //       category: "account",
  //     },
  //     {
  //       id: 4,
  //       question: "What is your refund policy?",
  //       answer:
  //         "We offer a 30-day money-back guarantee on all our plans. If you're not satisfied with our service, you can request a full refund within 30 days of your initial purchase. To request a refund, please contact our support team with your account details.",
  //       category: "account",
  //     },
  //     {
  //       id: 5,
  //       question: "How can I upgrade or downgrade my plan?",
  //       answer:
  //         "You can change your plan at any time from your account dashboard. Navigate to the 'Billing' section and select 'Change Plan'. You'll be able to see all available plans and choose the one that fits your needs. Changes will take effect immediately.",
  //       category: "account",
  //     },
  //     {
  //       id: 6,
  //       question: "Do you offer discounts for annual billing?",
  //       answer:
  //         "Yes, we offer a 20% discount when you choose annual billing instead of monthly billing. This discount is automatically applied when selecting the annual payment option during checkout or when changing your plan.",
  //       category: "account",
  //     },
  //     {
  //       id: 7,
  //       question: "How can I contact customer support?",
  //       answer:
  //         "You can reach our customer support team through multiple channels: 1) Live chat on our website (available 24/7), 2) Email at support@company.com, or 3) Phone at +1 (555) 123-4567 during business hours (9 AM - 6 PM EST, Monday to Friday).",
  //       category: "general",
  //       featured: true,
  //     },
  //     {
  //       id: 8,
  //       question: "What are your business hours?",
  //       answer:
  //         "Our customer support team is available 24/7 via live chat and email. Phone support is available from 9 AM to 6 PM EST, Monday to Friday. We respond to all inquiries within 24 hours, but typically much faster.",
  //       category: "general",
  //     },
  //     {
  //       id: 9,
  //       question: "Where can I find documentation?",
  //       answer:
  //         "We have comprehensive documentation available in our Help Center. You can access it by clicking the 'Documentation' link in the website footer or through your account dashboard. The documentation includes guides, tutorials, and API references.",
  //       category: "general",
  //     },
  //     {
  //       id: 10,
  //       question: "Do you offer custom solutions?",
  //       answer:
  //         "Yes, we offer custom solutions for businesses and organizations with specific needs. Please contact our sales team at sales@company.com to discuss your requirements. We'll schedule a consultation to understand your needs and provide a tailored solution.",
  //       category: "general",
  //     },
  //     {
  //       id: 11,
  //       question: "How can I cancel my subscription?",
  //       answer:
  //         "You can cancel your subscription at any time from your account dashboard. Go to the 'Billing' section and select 'Cancel Subscription'. Your account will remain active until the end of your current billing period. After cancellation, you won't be billed again.",
  //       category: "general",
  //     },
  //     {
  //       id: 12,
  //       question: "Which countries do you serve?",
  //       answer:
  //         "We currently serve customers in over 50 countries worldwide. Our services are available in North America, Europe, Middle East, Asia Pacific, and parts of Africa. If your country isn't listed during registration, please contact us as we continue to expand our coverage.",
  //       category: "general",
  //     },
  //     {
  //       id: 13,
  //       question: "Do you have an affiliate program?",
  //       answer:
  //         "Yes, we have an affiliate program that offers commissions for referring new customers. You can apply to join our affiliate program through the 'Partners' section in your account dashboard. Our standard commission rate is 20% of the first payment from referred customers.",
  //       category: "general",
  //     },
  //     {
  //       id: 14,
  //       question: "How can I integrate your API?",
  //       answer:
  //         "We provide comprehensive API documentation with code examples in multiple programming languages. You can access the API documentation from your account dashboard under the 'Developers' section. For technical assistance, our support team is available to help with integration challenges.",
  //       category: "technical",
  //       featured: true,
  //     },
  //     {
  //       id: 15,
  //       question: "What browsers are supported?",
  //       answer:
  //         "Our platform supports all modern browsers including Chrome (version 70+), Firefox (version 65+), Safari (version 12+), and Edge (version 79+). For the best experience, we recommend using the latest version of your browser.",
  //       category: "technical",
  //     },
  //     {
  //       id: 16,
  //       question: "How can I troubleshoot connection issues?",
  //       answer:
  //         "If you're experiencing connection issues, first check your internet connection. Then try clearing your browser's cache and cookies. If the problem persists, please contact our support team with details about the issue and any error messages you're receiving.",
  //       category: "technical",
  //     },
  //     {
  //       id: 17,
  //       question: "Do you have a mobile app?",
  //       answer:
  //         "Yes, we have mobile apps for both iOS and Android devices. You can download them from the Apple App Store and Google Play Store. Our mobile apps offer all the features available on the web platform with a mobile-optimized interface.",
  //       category: "technical",
  //     },
  //     {
  //       id: 18,
  //       question: "How can I export my data?",
  //       answer:
  //         "You can export your data from the 'Settings' section in your account dashboard. We provide exports in multiple formats including CSV, JSON, and XML. For large exports, the process may take some time and you'll receive an email when your export is ready.",
  //       category: "technical",
  //     },
  //     {
  //       id: 19,
  //       question: "What are your system requirements?",
  //       answer:
  //         "Our platform is web-based and requires a modern browser with JavaScript enabled. For optimal performance, we recommend an internet speed of at least 5 Mbps. There are no specific hardware requirements as processing happens on our servers.",
  //       category: "technical",
  //     },
  //     {
  //       id: 20,
  //       question: "How often do you update the platform?",
  //       answer:
  //         "We release minor updates weekly and major updates quarterly. All updates are thoroughly tested before deployment. We maintain a changelog that details all updates, which you can access from your account dashboard or our website.",
  //       category: "technical",
  //     },
  //     {
  //       id: 21,
  //       question: "What services do you offer?",
  //       answer:
  //         "We offer a comprehensive suite of services including cloud hosting, data analytics, customer relationship management, and custom software development. Our services are designed to grow with your business needs. You can view all our services on the 'Services' page of our website.",
  //       category: "services",
  //       featured: true,
  //     },
  //     {
  //       id: 22,
  //       question: "How does your pricing work?",
  //       answer:
  //         "We offer pricing plans designed for different business sizes and needs. Our plans include Basic, Professional, and Enterprise tiers. Each plan includes different features and resources. You can compare all plans on our pricing page or in your account dashboard.",
  //       category: "services",
  //     },
  //     {
  //       id: 23,
  //       question: "Do you offer training?",
  //       answer:
  //         "Yes, we offer training sessions for new customers. We have weekly onboarding webinars, and we also provide customized training sessions for enterprise clients. You can schedule a training session from your account dashboard or by contacting our support team.",
  //       category: "services",
  //     },
  //     {
  //       id: 24,
  //       question: "Can I request a new feature?",
  //       answer:
  //         "Absolutely! We welcome feature requests from our customers. You can submit feature requests through the 'Feedback' section in your account dashboard or by emailing features@company.com. We review all requests and prioritize them based on customer demand and feasibility.",
  //       category: "services",
  //     },
  //     {
  //       id: 25,
  //       question: "How do you handle data security?",
  //       answer:
  //         "We take data security seriously. All data is encrypted during transit using TLS 1.2+ and at rest using AES-256 encryption. We conduct regular security audits and penetration tests. Our infrastructure is hosted on secure data centers and is SOC 2 compliant.",
  //       category: "security",
  //       featured: true,
  //     },
  //     {
  //       id: 26,
  //       question: "Is my data backed up?",
  //       answer:
  //         "Yes, we automatically back up all customer data daily. Backups are stored in multiple geographically distributed locations for redundancy. We retain backups for 30 days. You can also trigger manual backups from your account dashboard at any time.",
  //       category: "security",
  //     },
  //     {
  //       id: 27,
  //       question: "Are you GDPR compliant?",
  //       answer:
  //         "Yes, we are fully compliant with the General Data Protection Regulation (GDPR). We provide tools to help you comply with GDPR requirements for your customers. You can review our Data Processing Agreement and Privacy Policy on our website.",
  //       category: "security",
  //     },
  //     {
  //       id: 28,
  //       question: "How can I enable two-factor authentication?",
  //       answer:
  //         "You can enable two-factor authentication from the 'Security' section in your account settings. We support authentication apps like Google Authenticator and Authy, as well as SMS-based 2FA. We highly recommend enabling 2FA for additional account security.",
  //       category: "security",
  //     },
  //   ];

  const {
    data: { categories, faqItems },
    isLoading,
    error,
  } = useQuery({
    queryKey: ["faq"],
    queryFn: () => getDataFake("api/faq"),
  });

  const filteredItems = faqItems.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredItems = faqItems.filter((item) => item.featured);

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-100 space-x-0 py-12 space-y-14 container">
      {/* Hero Section */}

      <HeroSubPage
        title={"How can we help you?"}
        icon={<Sparkles className="h-5 w-5 mr-2" />}
        titleIcon={"Frequently Asked Questions"}
        des={
          "Find answers to common questions about our products, services, and support."
        }
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search questions..."
            className="pl-12 pr-4 py-3 rounded-xl border-0 bg-white/20 backdrop-blur-sm text-white placeholder:text-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </HeroSubPage>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Categories */}
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <div className="flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-indigo-600" />
                  <CardTitle>Categories</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <div
                        key={category.id}
                        className={`flex items-center justify-between p-4 cursor-pointer rounded-lg transition-all ${
                          activeCategory === category.id
                            ? "bg-indigo-50 text-indigo-700 font-medium"
                            : "hover:bg-slate-100"
                        }`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        <div className="flex items-center">
                          <IconComponent className="h-4 w-4 mr-2" />
                          <span>{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="ml-2">
                          {category.count}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="mb-8 border-indigo-200 shadow-md">
              <CardHeader className="bg-indigo-50 pb-4">
                <CardTitle className="text-indigo-700 flex items-center">
                  <HelpCircle className="h-5 w-5 mr-2" />
                  Still need help?
                </CardTitle>
                <CardDescription>
                  Can't find the answer you're looking for? Please contact our
                  friendly team.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <MessageSquare className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Live Chat</h3>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <Mail className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-sm text-gray-500">support@company.com</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-slate-50 rounded-lg">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <Phone className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Contact Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Featured Questions */}
            {searchQuery === "" && activeCategory === "all" && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-amber-500" />
                  Popular Questions
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {featuredItems.map((item) => (
                    <Card
                      key={item.id}
                      className="group cursor-pointer border-indigo-100 hover:border-indigo-300 transition-all hover:shadow-md"
                      onClick={() => toggleItem(item.id)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg group-hover:text-indigo-600 transition-colors">
                            {item.question}
                          </CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                          >
                            {openItems.includes(item.id) ? (
                              <Minus className="h-4 w-4" />
                            ) : (
                              <Plus className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                        <Badge variant="outline" className="w-fit">
                          {categories.find((c) => c.id === item.category)?.name}
                        </Badge>
                      </CardHeader>
                      {openItems.includes(item.id) && (
                        <CardContent>
                          <p className="text-gray-600">{item.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">
                  {searchQuery
                    ? `Search results for "${searchQuery}"`
                    : activeCategory === "all"
                    ? "All Questions"
                    : categories.find((c) => c.id === activeCategory)?.name}
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    ({filteredItems.length} results)
                  </span>
                </h2>

                {searchQuery && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery("")}
                    className="flex items-center"
                  >
                    Clear search
                    <X className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>

              {filteredItems.length === 0 ? (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <HelpCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No questions found
                      </h3>
                      <p className="text-gray-500">
                        Try adjusting your search or filter to find what you're
                        looking for.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Accordion
                  type="multiple"
                  value={openItems}
                  onValueChange={setOpenItems}
                  className="space-y-4"
                >
                  {filteredItems.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id.toString()}
                      className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50">
                        <div className="flex items-start text-left w-full">
                          <Badge
                            variant="outline"
                            className="mr-3 mt-1 whitespace-nowrap"
                          >
                            {
                              categories.find((c) => c.id === item.category)
                                ?.name
                            }
                          </Badge>
                          <span className="font-medium flex-1 text-left">
                            {item.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600 mb-4">{item.answer}</p>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Was this helpful?
                          </span>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant={
                                isHelpfulFeedback[item.id] === true
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              className={`h-8 ${
                                isHelpfulFeedback[item.id] === true
                                  ? "bg-green-600 hover:bg-green-700"
                                  : ""
                              }`}
                              onClick={() => handleFeedback(item.id, true)}
                            >
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              Yes
                            </Button>
                            <Button
                              variant={
                                isHelpfulFeedback[item.id] === false
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              className={`h-8 ${
                                isHelpfulFeedback[item.id] === false
                                  ? "bg-red-600 hover:bg-red-700"
                                  : ""
                              }`}
                              onClick={() => handleFeedback(item.id, false)}
                            >
                              <ThumbsDown className="h-4 w-4 mr-1" />
                              No
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
