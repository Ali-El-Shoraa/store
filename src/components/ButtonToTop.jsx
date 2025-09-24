"use client";
import { useState, useEffect } from "react";

export default function ButtonToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTotal =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrollProgress = (window.scrollY / scrollTotal) * 100;
          setProgress(Math.min(100, scrollProgress));
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed right-6 bottom-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      {/* مؤشر التقدم */}
      <svg
        className="absolute inset-0 w-full h-full transform -rotate-90"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2"
        />
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${progress} ${100 - progress}`}
          strokeDashoffset="25"
          className="transition-all duration-150"
        />
      </svg>

      {/* السهم */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transform transition-transform duration-300 group-hover:-translate-y-1"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>

      {/* تأثير عند التحويم */}
      <span className="absolute inset-0 bg-white opacity-0 rounded-full transition-opacity duration-300 group-hover:opacity-10"></span>
    </button>
  );
}
