import Image from "next/image";

export default function Enhanced({ data = [] }) {
  return (
    <section className="grid md:grid-cols-3 gap-6 p-6">
      {data.map((image, index) => (
        <article
          key={index}
          className="
            group relative overflow-hidden rounded-xl border border-gray-200
            bg-white shadow-lg
            transform transition-all duration-700 ease-out
            hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1
            animate-fade-in-up hover-glow
            cursor-pointer
          "
          style={{
            animationDelay: `${index * 150}ms`,
            animationFillMode: "both",
          }}
        >
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-t-xl aspect-[3/1]">
            <Image
              src={image.src || "/placeholder.svg"}
              width={1000}
              height={750}
              alt={image.alt}
              className="
                w-full h-full object-cover
                transition-all duration-700 ease-out
                group-hover:scale-110 group-hover:brightness-110
              "
              priority={index === 0}
            />

            {/* Gradient overlay */}
            <div
              className="
              absolute inset-0 bg-gradient-to-t
              from-black/40 via-transparent to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            "
            />

            {/* Shine effect */}
            <div
              className="
              absolute inset-0 -translate-x-full group-hover:translate-x-full
              bg-gradient-to-r from-transparent via-white/30 to-transparent
              transition-transform duration-1200 ease-in-out
            "
            />

            {/* Floating badge */}
            <div
              className="
              absolute top-3 right-3
              bg-white/90 backdrop-blur-sm rounded-full p-2
              transform transition-all duration-300
              group-hover:scale-110 group-hover:bg-brand-secoundry group-hover:text-white
            "
            >
              <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-2">
            <h3
              className="
              font-semibold text-lg text-gray-900
              group-hover:text-brand-secoundry transition-colors duration-300
            "
            >
              {image.title}
            </h3>
            <p className="text-gray-600 text-sm">{image.description}</p>
          </div>

          {/* Bottom border animation */}
          <div
            className="
            absolute bottom-0 left-0 h-1 bg-brand-secoundry
            w-0 group-hover:w-full transition-all duration-500 ease-out
          "
          />
        </article>
      ))}
    </section>
  );
}
