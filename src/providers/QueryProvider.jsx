"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";

export default function QueryProvider({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 60 * 1000,
            // cacheTime: 10 * 60 * 1000,
            staleTime: 0,
            cacheTime: 0,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: 2,

            // suspense: true,
          },
          mutations: {
            retry: 2,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
