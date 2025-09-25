"use client";
import { getDataFake } from "@/app/api/getDataFake";
import { termsOptions } from "@/data/queryOptionsData";
import { Link } from "@/i18n/navigation";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { CalendarIcon, FileText, HomeIcon } from "lucide-react";

export default function TermsAndConditions() {
  const {
    data: { sections, lastUpdated },
    isLoading,
    error,
  } = useSuspenseQuery(termsOptions);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* جدول المحتويات الجانبي */}
      <div className="lg:w-1/4">
        <div className="sticky top-24 bg-white rounded-xl shadow-md p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Table of Contents
          </h3>
          <nav className="space-y-2">
            {sections?.map((section) => (
              <a
                key={section?.id}
                href={`#${section?.id}`}
                className="block text-sm text-gray-600 hover:text-indigo-600 transition-colors py-1.5 pl-4 border-l-2 border-transparent hover:border-indigo-400"
              >
                {section?.title}
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 font-medium"
            >
              <HomeIcon className="w-4 h-4 mr-1.5" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="lg:w-3/4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="prose prose-indigo max-w-none">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Welcome to our e-commerce store. These terms and conditions
                outline the rules and regulations for the use of our website and
                services.
              </p>

              {sections?.map((section, index) => (
                <section
                  key={section?.id}
                  id={section?.id}
                  className="mb-10 scroll-mt-20"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
                      {index + 1}
                    </span>
                    {section?.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {section?.content}
                  </p>

                  {section?.list && (
                    <ul className="text-gray-600 list-disc pl-5 space-y-2 mb-4">
                      {section?.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-gray-600 italic">
                  By using our website and services, you acknowledge that you
                  have read and understood these Terms and Conditions and agree
                  to be bound by them.
                </p>

                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <CalendarIcon className="w-4 h-4 mr-1.5" />
                  {lastUpdated && <>Last updated: {lastUpdated}</>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* زر العودة للصفحة الرئيسية للهواتف */}
        <div className="mt-8 text-center lg:hidden">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
          >
            <HomeIcon className="w-5 h-5 mr-2" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
