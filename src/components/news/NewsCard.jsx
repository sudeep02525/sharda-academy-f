"use client";

import { HoverLift } from "@/components/animations/HoverLift";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export function NewsCard({ 
  title, 
  shortDescription, 
  category, 
  publishDate, 
  readingTime, 
  imageUrl, 
  featured, 
  href 
}) {
  const CardContent = (
    <div className={`bg-surface border border-border-color shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col h-full group ${featured ? 'md:flex-row md:col-span-2' : ''}`}>
      
      <div className={`relative ${featured ? 'w-full md:w-1/2 h-64 md:h-full' : 'w-full h-56'} overflow-hidden bg-background`}>
        <img 
          src={imageUrl} 
          alt={title} 
          
         
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {featured && (
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="accent" className="shadow-md">Featured</Badge>
          </div>
        )}
      </div>

      <div className={`p-6 md:p-8 flex flex-col flex-grow ${featured ? 'w-full md:w-1/2 justify-center' : ''}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-deep">{category}</span>
          <span className="w-1 h-1 rounded-full bg-paragraph/50" />
          <span className="text-xs text-paragraph">{readingTime}</span>
        </div>
        
        <h3 className={`font-bold text-heading mb-3 group-hover:text-primary transition-colors line-clamp-3 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
          {title}
        </h3>
        
        <p className={`text-paragraph mb-6 line-clamp-3 ${featured ? 'text-lg' : 'text-sm'}`}>
          {shortDescription}
        </p>

        <div className="mt-auto pt-4 border-t border-border-color flex items-center justify-between">
          <span className="text-sm font-medium text-paragraph">{publishDate}</span>
          <span className="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </span>
        </div>
      </div>
      
    </div>
  );

  return (
    <HoverLift className="h-full block">
      {href ? (
        <Link href={href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2rem]">
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </HoverLift>
  );
}
