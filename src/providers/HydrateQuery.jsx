"use client";

import {
  HydrationBoundary,
  //   HydrationBoundaryProps,
} from "@tanstack/react-query";

export default function HydrateQuery(props) {
  return <HydrationBoundary {...props} />;
}
