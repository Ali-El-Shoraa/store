import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  experimental: {
    webVitalsAttribution: ["CLS", "LCP"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "pagedone.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ossimg.cmdgametransit.com",
      },
      {
        protocol: "https",
        hostname: "flowbite.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
    ],
  },
  // i18n: {
  //   locales: ["ar", "en"],
  //   defaultLocale: "ar",
  //   localeDetection: true,
  // },
  //   i18n: {
  //     locales: ["ar", "en"],
  //     defaultLocale: "ar",
  //     // localeDetection: false,
  //   },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n: {
//     locales: ["ar", "en"],
//     defaultLocale: "ar",
//     // localeDetection: false,
//   },
//   //   trailingSlash: true,
//   //      i18n: {
//   //     // These are all the locales you want to support in
//   //     // your application
//   //     locales: ["ar",'en-US'],
//   //     // This is the default locale you want to be used when visiting
//   //     // a non-locale prefixed path e.g. `/hello`
//   //     defaultLocale: 'ar',
//   //     // This is a list of locale domains and the default locale they
//   //     // should handle (these are only required when setting up domain routing)
//   //     // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
//   //     domains: [
//   //       {
//   //         domain: 'example.com',
//   //         defaultLocale: 'en-US',
//   //       },
//   //       {
//   //         domain: 'example.nl',
//   //         defaultLocale: 'nl-NL',
//   //       },
//   //       {
//   //         domain: 'example.fr',
//   //         defaultLocale: 'fr',
//   //         // an optional http field can also be used to test
//   //         // locale domains locally with http instead of https
//   //         http: true,
//   //       },
//   //     ],
//   //   },
// };

// export default nextConfig;
