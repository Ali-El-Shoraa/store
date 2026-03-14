import { getDataFake } from "@/app/api/getDataFake";
import { queryOptions } from "@tanstack/react-query";

export const aboutUsOptions = queryOptions({
  queryKey: ["about-us"],
  queryFn: () => getDataFake("api/about"),
});

export const blogPostsOptions = queryOptions({
  queryKey: ["blog-posts"],
  queryFn: () => getDataFake("api/posts"),
});

export const blogPostsDetailsOptions = (slug) =>
  queryOptions({
    queryKey: ["blog-posts-details"],
    queryFn: () => getDataFake(`api/posts?id=${slug}`),
  });

export const ourFeaturesOptions = () =>
  queryOptions({
    queryKey: ["our-features"],
    queryFn: () => getData("our-features"),
  });

// const queryClient = new QueryClient();

// await queryClient.prefetchQuery({
//   queryKey: ["our-features"],
//   queryFn: () => getData("our-features"),
// });

export const termsOptions = queryOptions({
  queryKey: ["terms"],
  queryFn: () => getDataFake("api/terms"),
});

export const faqOptions = queryOptions({
  queryKey: ["faq"],
  queryFn: () => getDataFake("api/faq"),
});

export const testimonialsOptions = queryOptions({
  queryKey: ["testimonials"],
  queryFn: () => getDataFake("api/testimonials"),
});

// export const aboutUsOptions = queryOptions({
//   queryKey: ["about-us"],
//   queryFn: () => getDataFake("api/about"),
// });
