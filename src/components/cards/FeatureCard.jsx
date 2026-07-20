"use client";

import { cn } from "@/lib/utils";

export function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  className 
}) {
  return (
    <div className={cn(
      "group relative w-full h-full bg-white dark:bg-white/[0.04] rounded-[1.5rem] p-8 md:p-10",
      "border border-border-color/60 dark:border-white/10 hover:border-primary/40 dark:hover:border-primary/40",
      "shadow-sm hover:shadow-[0_15px_40px_-15px_rgba(13,91,215,0.15)]",
      "transition-all duration-500 overflow-hidden cursor-default flex flex-col",
      className
    )}>
      {/* Background Watermark Icon */}
      <div className="absolute -bottom-6 -right-6 text-primary/[0.03] group-hover:text-primary/[0.06] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none z-0">
        {Icon && <Icon className="w-40 h-40" strokeWidth={1} />}
      </div>

      {/* Small Icon Box */}
      <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 border border-primary/10 group-hover:scale-110 group-hover:bg-primary/10 group-hover:shadow-[0_0_20px_rgba(13,91,215,0.2)] transition-all duration-500 relative z-10">
        {Icon && <Icon className="w-7 h-7" strokeWidth={1.5} />}
      </div>
      
      <h3 className="text-xl font-extrabold text-heading mb-4 group-hover:text-primary transition-colors duration-300 relative z-10">
        {title}
      </h3>
      
      <p className="text-paragraph text-sm md:text-base leading-relaxed font-medium relative z-10">
        {description}
      </p>

      {/* Animated Bottom Border */}
      <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-primary to-primary-deep group-hover:w-full transition-all duration-500 ease-out z-20" />
    </div>
  );
}
