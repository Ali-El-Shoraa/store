import { getDataFake } from "@/app/api/getDataFake";
import AnimatedBanner from "@/components/AnimatedBanner";
import { useQuery } from "@tanstack/react-query";

export default function AdsHero() {
  // api/ads/hero

  const { data, isLoading, error } = useQuery({
    queryKey: ["ads-hero"],
    queryFn: () => getDataFake(`api/ads/hero`),
  });
  console.log("data: ", data?.ads);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="h-28 lg:h-auto col-span-2 lg:col-span-1 flex lg:flex-col gap-5">
      {data?.ads &&
        data?.ads?.map((ad, index) => (
          <AnimatedBanner
            key={index}
            imageUrl={ad?.imageUrl} // استخدم URL الصورة مباشرة
            href={ad?.href}
            alt={ad?.alt}
            title={ad?.title}
            description={ad?.description}
          />
        ))}
      {/* <AnimatedBanner
        key={1}
        imageUrl={"/image/ads/ads6.png"}
        href="#"
        alt="Paris cityscape with Eiffel Tower"
        title="Paris"
        description="Discover the city of lights"
      />
      <AnimatedBanner
        key={2}
        imageUrl={"/image/ads/ads7.png"}
        href="#"
        alt="Paris cityscape with Eiffel Tower"
        title="Paris"
        description="Discover the city of lights"
      /> */}
    </div>
  );
}
