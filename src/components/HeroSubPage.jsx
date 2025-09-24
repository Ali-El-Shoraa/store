import { memo } from "react";

export default memo(function HeroSubPage({
  children,
  des,
  title,
  icon,
  titleIcon,
  bgColor = "bg-white", //"bg-gradient-to-r from-blue-600 to-indigo-700",
  textColor = "text-white",
  iconBgColor = "bg-white/20",
  iconTextColor = "text-white",
  alignment = "center",
  classNameContent = "py-16 md:px-8",
  classTitle = "text-4xl md:text-5xl lg:text-6xl",
  classDes = "",
}) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div
      className={`relative border-b shadow-sm overflow-hidden text-center rounded-2xl px-6 ${bgColor} ${textColor} ${classNameContent}`}
    >
      <div className="absolute inset-0 bg-white/10 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full translate-y-40 -translate-x-40" />

      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
          {title}
        </h1>
        <p
          className={`max-w-3xl mx-auto leading-relaxed font-bold text-gray-800 text-lg ${classDes}`}
        >
          {des}
        </p>
      </div>
      {children && <div className="w-full">{children}</div>}
    </div>
  );
  // return (
  //   <div
  //     className={`relative overflow-hidden rounded-2xl px-6 ${bgColor} ${textColor} ${classNameContent}`}
  //   >
  //     <div className="absolute top-0 left-0 w-full h-full opacity-10">
  //       <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white"></div>
  //       <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white"></div>
  //     </div>

  //     <div
  //       className={`relative flex flex-col ${alignmentClasses[alignment]} max-w-6xl mx-auto`}
  //     >
  //       {icon && (
  //         <div
  //           className={`inline-flex items-center justify-center rounded-full px-5 py-3 mb-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${iconBgColor} ${iconTextColor}`}
  //         >
  //           <span className="text-lg">{icon}</span>
  //           {titleIcon && <span className="font-medium">{titleIcon}</span>}
  //         </div>
  //       )}

  //       <h1 className={`font-bold mb-6 leading-tight ${classTitle}`}>
  //         {title}
  //       </h1>

  //       <p
  //         className={`opacity-90 max-w-3xl mx-auto leading-relaxed mb-8 ${classDes}`}
  //       >
  //         {des}
  //       </p>

  //       <div className="w-full">{children}</div>
  //     </div>
  //   </div>
  // );
});
