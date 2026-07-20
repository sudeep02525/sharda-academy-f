"use client";

import { useState } from "react";

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const phone = "919324444269"; // +91 93244 44269 without spaces/symbols
  const message = "Hello! I am interested in learning more about Sharda Academy admissions. Could you please help me?";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 group"
    >
      {/* Tooltip Label */}
      <div
        className={`bg-white dark:bg-surface text-heading font-semibold text-sm px-4 py-2 rounded-xl shadow-lg border border-border-color/40 whitespace-nowrap transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        Chat with us!
      </div>

      {/* WhatsApp Circle Button */}
      <div className="relative w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_24px_rgba(37,211,102,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-200">
        {/* Pulse Ring Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-8 h-8 relative z-10"
          fill="white"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.738 5.474 2.027 7.774L0 32l8.476-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.091a13.056 13.056 0 0 1-6.653-1.819l-.477-.284-4.954 1.169 1.195-4.818-.312-.494A13.04 13.04 0 0 1 2.909 16C2.909 9.33 8.33 3.909 16 3.909S29.091 9.33 29.091 16 23.67 29.091 16 29.091zm7.15-9.77c-.392-.196-2.32-1.145-2.68-1.274-.36-.13-.622-.196-.883.197-.261.392-1.014 1.275-1.244 1.537-.23.261-.46.294-.851.098-.392-.196-1.654-.61-3.15-1.942-1.165-1.038-1.952-2.32-2.182-2.712-.23-.392-.025-.604.173-.8.178-.175.392-.457.588-.686.196-.229.261-.392.392-.653.13-.261.065-.49-.033-.686-.098-.196-.883-2.129-1.21-2.915-.319-.765-.643-.661-.883-.673l-.751-.013c-.261 0-.686.098-.1046.49-.36.392-1.373 1.341-1.373 3.27s1.406 3.793 1.602 4.055c.196.261 2.768 4.226 6.707 5.926.937.405 1.668.646 2.238.827.94.299 1.795.257 2.471.156.754-.113 2.32-.948 2.647-1.864.327-.916.327-1.701.229-1.864-.098-.163-.36-.261-.751-.457z"/>
        </svg>
      </div>
    </a>
  );
}
