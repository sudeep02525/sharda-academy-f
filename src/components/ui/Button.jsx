"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion } from "framer-motion";

const Button = forwardRef(({ className, variant = "default", size = "default", showArrow = false, children, ...props }, ref) => {
  const variants = {
    default: "bg-primary text-[#0F2E4E] hover:bg-primary-hover shadow-[0_4px_14px_0_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.3)] border border-transparent",
    accent: "bg-accent text-[#0F2E4E] hover:bg-accent-dark shadow-[0_4px_14px_0_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.3)] border border-transparent",
    outline: "border-2 border-primary text-primary dark:border-primary dark:text-primary hover:bg-primary hover:text-[#0F2E4E] dark:hover:bg-primary dark:hover:text-[#0F2E4E] bg-transparent dark:bg-transparent shadow-sm hover:shadow-md",
    ghost: "text-paragraph hover:bg-primary/10 hover:text-primary-deep",
    secondary: "bg-surface text-heading border border-border-color hover:border-primary/40 hover:shadow-md",
  };

  const sizes = {
    default: "h-12 px-6 py-2 text-sm",
    sm: "h-10 px-4 text-xs font-semibold",
    lg: "h-14 px-8 text-base font-semibold",
    icon: "h-12 w-12 flex items-center justify-center",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      ref={ref}
      className={cn(
        "relative overflow-hidden group inline-flex items-center justify-center rounded-md font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {/* Lightning Sweep Hover Effect */}
      <span className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-[20deg]" />

      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
        {showArrow && (
          <svg 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        )}
      </span>
    </motion.button>
  );
});
Button.displayName = "Button";

export { Button };
