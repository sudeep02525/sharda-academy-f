"use client";

import { HoverLift } from "@/components/animations/HoverLift";
import { Badge } from "@/components/ui/Badge";

export function RankerCard({ 
  name, 
  school, 
  category,
  score, 
  rank, 
  year, 
  imageUrl 
}) {
  return (
    <div className="group bg-white dark:bg-white/[0.04] rounded-[1.5rem] border border-border-color/60 dark:border-white/10 shadow-sm hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.2)] hover:border-primary/50 dark:hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 p-3 md:p-4 flex flex-col h-full cursor-default">
      
      {/* Image Block */}
      <div className="relative w-full h-64 md:h-72 rounded-[1.25rem] overflow-hidden bg-surface mb-5 md:mb-6">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            
            
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 bg-slate-100/50 dark:bg-white/[0.02]">
            <svg className="w-20 h-20 mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
        )}

        {/* Year Badge (Top Left) */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 dark:bg-surface/90 backdrop-blur-md text-accent-dark font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-sm border border-white/50 dark:border-border/50">
            {year}
          </span>
        </div>

        {/* Rank Badge (Bottom Center overlay) */}
        {rank && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max">
             <div className="bg-white/95 dark:bg-surface/95 backdrop-blur-md text-primary font-black px-5 py-2 rounded-xl shadow-lg border border-primary/10 flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300">
               <span className="text-sm md:text-base tracking-wide uppercase">{rank}</span>
             </div>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="px-2 md:px-4 pb-2 flex flex-col items-center text-center flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-heading mb-1 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-xs md:text-sm font-extrabold text-primary tracking-wider uppercase mb-5">{category}</p>
        
        <div className="text-3xl md:text-4xl font-black text-heading leading-none mb-6 group-hover:scale-110 transition-transform duration-300">
          {score}
        </div>
        
        {school && (
          <div className="mt-auto pt-5 border-t border-border-color/40 w-full">
            <p className="text-sm text-paragraph font-medium leading-relaxed">
              {school}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
