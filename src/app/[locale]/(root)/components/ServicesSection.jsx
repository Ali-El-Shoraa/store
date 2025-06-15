import { services } from "@/lib/servicesItems";
import { getTranslations } from "next-intl/server";

export default async function ServicesSection() {
  const t = await getTranslations("ServicesSection.services");

  return (
    <div className="py-8 bg-white border border-gray-300 rounded-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4 px-4">
        {services?.map(({ id, icon: Icon, bg, fg }, index) => {
          return (
            <div
              key={id}
              className="
                group flex items-center text-center p-4 gap-3
                transform transition-all duration-500 ease-out
                hover:scale-105 hover:-translate-y-1 hover:shadow-lg
                animate-fade-in-up cursor-pointer
                rounded-lg hover:bg-gray-50
              "
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Icon Container */}
              <div
                className={`
                  relative p-4 rounded-full flex items-center justify-center
                  ${bg} ${fg}
                  transform transition-all duration-300 ease-out
                  group-hover:scale-110 group-hover:rotate-3
                  shadow-md group-hover:shadow-lg
                `}
              >
                <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />

                {/* Pulse ring effect */}
                <div
                  className="
                  absolute inset-0 rounded-full border-2 border-current
                  opacity-0 group-hover:opacity-30 group-hover:scale-150
                  transition-all duration-500 ease-out
                "
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-left">
                <h4
                  className="
                  text-sm font-semibold text-gray-900
                  group-hover:text-brand-secoundry transition-colors duration-300
                  transform group-hover:translate-x-1 transition-transform duration-300
                "
                >
                  {t(`${id}.title`)}
                </h4>
                <p
                  className="
                  text-xs text-gray-500 mt-1
                  group-hover:text-gray-700 transition-colors duration-300
                  transform group-hover:translate-x-1 transition-transform duration-300
                "
                  style={{ transitionDelay: "50ms" }}
                >
                  {t(`${id}.desc`)}
                </p>
              </div>

              {/* Hover indicator */}
              <div
                className="
                w-1 h-8 bg-brand-secoundry rounded-full
                opacity-0 group-hover:opacity-100
                transform scale-y-0 group-hover:scale-y-100
                transition-all duration-300 ease-out
              "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
