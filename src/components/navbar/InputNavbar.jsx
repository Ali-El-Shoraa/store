"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Combobox } from "../Combobox";
import { useTranslations } from "next-intl";

export default function ImprovedSearchNavbar() {
  const t = useTranslations("ImprovedSearchNavbar");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const frameworks = [
    { value: "", label: t("allCategories") },
    { value: "next.js", label: t("categories.nextjs") },
    { value: "sveltekit", label: t("categories.sveltekit") },
    { value: "nuxt.js", label: t("categories.nuxtjs") },
    { value: "remix", label: t("categories.remix") },
    { value: "astro", label: t("categories.astro") },
    { value: "react", label: t("categories.react") },
    { value: "vue", label: t("categories.vue") },
    { value: "angular", label: t("categories.angular") },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 max-md:px-0">
      <form className="space-y-4">
        <div className="relative">
          <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
            {/* Category Combobox */}
            <div className="flex-shrink-0 md:pl-4 hidden md:block">
              <Combobox
                data={frameworks}
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                placeholder={t("allCategories")}
                disabled={isSubmitting}
                className="border-0 bg-transparent hover:bg-transparent focus:ring-0 focus:ring-offset-0 min-w-[160px] max-w-[180px]"
              />
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-300 mx-2 hidden md:block" />

            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-transparent border-0 text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
                placeholder={t("searchPlaceholder")}
                disabled={isSubmitting}
                required
              />
            </div>

            {/* Search Button */}
            <div className="flex-shrink-0 px-2">
              <button
                type="submit"
                disabled={isSubmitting || !searchQuery.trim()}
                className="px-6 py-2 bg-brand-secoundry hover:bg-brand-secoundry/50 disabled:bg-gray-400 text-white text-sm font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed min-w-[100px]"
              >
                {t("searchButton")}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
// "use client";

// import { useState } from "react";
// import { Search } from "lucide-react";
// import { Combobox } from "../Combobox";

// const frameworks = [
//   { value: "", label: "All Categories" },
//   { value: "next.js", label: "Next.js" },
//   { value: "sveltekit", label: "SvelteKit" },
//   { value: "nuxt.js", label: "Nuxt.js" },
//   { value: "remix", label: "Remix" },
//   { value: "astro", label: "Astro" },
//   { value: "react", label: "React" },
//   { value: "vue", label: "Vue.js" },
//   { value: "angular", label: "Angular" },
// ];

// export default function ImprovedSearchNavbar() {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   //   const handleSubmit = async (e) => {
//   //     e.preventDefault()

//   //     if (!searchQuery.trim()) return

//   //     setIsSubmitting(true)

//   //     try {
//   //       // Simulate API call
//   //       await new Promise((resolve) => setTimeout(resolve, 1000))

//   //       console.log("Search:", {
//   //         category: selectedCategory,
//   //         query: searchQuery.trim(),
//   //       })

//   //       // Handle search logic here
//   //     } catch (error) {
//   //       console.error("Search error:", error)
//   //     } finally {
//   //       setIsSubmitting(false)
//   //     }
//   //   }

//   return (
//     <div className="w-full max-w-4xl mx-auto p-4 max-md:px-0">
//       <form
//         //   onSubmit={handleSubmit}
//         className="space-y-4"
//       >
//         {/* Search Bar Container */}
//         <div className="relative">
//           <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
//             {/* Category Combobox */}
//             <div className="flex-shrink-0 md:pl-4 hidden md:block">
//               <Combobox
//                 data={frameworks}
//                 value={selectedCategory}
//                 onValueChange={setSelectedCategory}
//                 placeholder="All Categories"
//                 disabled={isSubmitting}
//                 className="border-0 bg-transparent hover:bg-transparent focus:ring-0 focus:ring-offset-0 min-w-[160px] max-w-[180px]"
//               />
//             </div>

//             {/* Separator */}
//             <div className="h-6 w-px bg-gray-300 mx-2 hidden md:block" />

//             {/* Search Input */}
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
//               <input
//                 type="search"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 bg-transparent border-0 text-sm text-gray-900 placeholder-gray-500 focus:outline-none"
//                 placeholder="Search products, brands, or keywords..."
//                 disabled={isSubmitting}
//                 required
//               />
//             </div>

//             {/* Search Button */}
//             <div className="flex-shrink-0 px-2">
//               <button
//                 type="submit"
//                 disabled={isSubmitting || !searchQuery.trim()}
//                 className="px-6 py-2 bg-brand-secoundry hover:bg-brand-secoundry/50 disabled:bg-gray-400 text-white text-sm font-medium rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed min-w-[100px]"
//               >
//                 Search
//                 {/* {isSubmitting ? (
//                   <>
//                     <Loader2 className="w-4 h-4 animate-spin mr-2" />
//                     Searching...
//                   </>
//                 ) : (
//                   <>
//                     <Search className="w-4 h-4 mr-2" />
//                     Search
//                   </>
//                 )} */}
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
