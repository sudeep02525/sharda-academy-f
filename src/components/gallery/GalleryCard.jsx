"use client";

import { HoverLift } from "@/components/animations/HoverLift";

export function GalleryCard({ 
  title, 
  category, 
  date, 
  imageUrl, 
  onClick 
}) {
  return (
    <HoverLift className="h-full block w-full">
      <div 
        onClick={onClick}
        className="group relative w-full h-72 md:h-80 bg-muted rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        aria-label={`View full image for ${title}`}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
           
           
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary-deep text-white">
            <svg className="w-20 h-20 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Magnify Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-50 group-hover:scale-100">
          <div className="w-16 h-16 rounded-full bg-white/20 dark:bg-surface/20 backdrop-blur-md flex items-center justify-center text-white">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
          </div>
        </div>

        {/* Content Footer */}
        <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-white/10 dark:bg-surface/10 backdrop-blur-md px-2 py-1 rounded-sm">
              {category}
            </span>
            {date && <span className="text-xs text-white/70">{date}</span>}
          </div>
          <h3 className="text-xl font-bold leading-tight line-clamp-2 drop-shadow-md">{title}</h3>
        </div>
      </div>
    </HoverLift>
  );
}
