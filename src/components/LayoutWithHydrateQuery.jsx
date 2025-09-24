import { getDataFake } from "@/app/api/getDataFake";
import HydrateQuery from "@/providers/HydrateQuery";
import { dehydrate, QueryClient } from "@tanstack/react-query";

export default async function LayoutWithHydrateQuery({
  children,
  endPoint,
  cash,
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [cash],
    queryFn: () => getDataFake(endPoint),
  });
  return <HydrateQuery state={dehydrate(queryClient)}>{children}</HydrateQuery>;
}
