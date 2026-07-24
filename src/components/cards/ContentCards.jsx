"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { HoverLift } from "@/components/animations/HoverLift";
import { Star, MapPin } from "lucide-react";

export function FacultyCard({ name, qualification, experience, subjects = [], imageUrl }) {
  return (
    <div className="group bg-white dark:bg-surface rounded-[1.5rem] border border-border-color/60 shadow-sm hover:shadow-[0_15px_40px_-15px_rgba(212,175,55,0.2)] hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 p-3 md:p-4 flex flex-col h-full cursor-default">
      
      {/* Framed Image Block */}
      <div className="relative w-full h-56 md:h-64 rounded-[1.25rem] overflow-hidden bg-surface mb-5 md:mb-6">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            
            
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-primary/30">
            Faculty
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="px-2 md:px-4 pb-2 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-heading mb-1 group-hover:text-primary transition-colors">{name}</h3>
        <p className="text-xs md:text-sm font-extrabold text-accent-dark tracking-wider uppercase mb-3">{qualification}</p>
        
        <p className="text-sm md:text-base text-paragraph mb-6 font-medium">
          {experience} Years of Teaching
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-5 border-t border-border-color/40">
          {subjects.map((sub, i) => (
            <span key={i} className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
              {sub}
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
}

export function TestimonialCard({ name, role, review, imageUrl, rating = 5 }) {
  return (
    <Card variant="default" className="h-full flex flex-col justify-between rounded-[2rem] border border-transparent dark:border-white/10 shadow-md hover:shadow-lg transition-shadow duration-500 bg-white dark:bg-white/[0.04] relative overflow-hidden">
      {/* Subtle Quote Mark Background */}
      <div className="absolute top-4 right-6 text-9xl font-serif text-primary/5 pointer-events-none leading-none select-none">
        &quot;
      </div>
      <CardContent className="p-10 relative z-10 flex-grow flex flex-col">
        <div className="flex gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-5 h-5 ${i < rating ? "fill-accent text-accent" : "fill-transparent text-border-color"}`} 
              strokeWidth={i < rating ? 0 : 2} 
            />
          ))}
        </div>
        <p className="text-heading text-lg md:text-xl font-medium leading-[1.7] mb-10 flex-grow">
          &quot;{review}&quot;
        </p>
        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border-color/30">
          <div className="w-14 h-14 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-black border border-primary/20 shadow-sm overflow-hidden">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              name ? name.charAt(0).toUpperCase() : ""
            )}
          </div>
          <div>
            <h4 className="font-bold text-heading text-lg">{name}</h4>
            <p className="text-sm text-primary font-semibold tracking-wide">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function EventCard({ title, date, location, imageUrl }) {
  return (
    <HoverLift className="w-full block">
      <Card variant="default" isHoverable={false} className="group overflow-hidden rounded-[2rem] border-transparent shadow-sm hover:shadow-lg transition-shadow duration-500 bg-white dark:bg-surface">
        <div className="relative w-full h-56 overflow-hidden bg-surface">
          {imageUrl && <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />}
          <div className="absolute top-5 left-5 z-10">
            <Badge variant="default" className="bg-white/95 dark:bg-surface/95 text-primary-deep backdrop-blur-md shadow-sm font-bold px-4 py-1.5">{date}</Badge>
          </div>
        </div>
        <CardContent className="p-8 bg-white dark:bg-surface">
          <h3 className="text-xl md:text-2xl font-black text-heading mb-4 line-clamp-2 leading-[1.25] group-hover:text-primary transition-colors">{title}</h3>
          <div className="flex items-center text-sm text-paragraph font-semibold">
            <MapPin className="w-5 h-5 mr-3 text-accent-dark stroke-[2.5]" />
            {location}
          </div>
        </CardContent>
      </Card>
    </HoverLift>
  );
}
