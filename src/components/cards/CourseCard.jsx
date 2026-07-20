"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { HoverLift } from "@/components/animations/HoverLift";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function CourseCard({ 
  title, 
  category,
  description,
  duration,
  eligibility,
  badge,
  fees, 
  imageUrl,
  href,
  features = [],
  subjects = [],
  classTimings = [],
  batchSize,
  mode
}) {
  const CardBody = (
    <Card variant="elevated" isHoverable={false} className="h-full flex flex-col group rounded-xl cursor-pointer overflow-hidden border border-border-color/50 dark:border-white/10 bg-white dark:bg-white/[0.04] shadow-sm hover:shadow-xl hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300">
      
      {/* Header Section without Image */}
      <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 border-b border-border-color/40 flex flex-col items-start gap-3 relative">
        <div className="flex justify-between items-start w-full">
          {category && <span className="text-xs font-bold text-primary uppercase tracking-widest">{category}</span>}
          {badge && (
            <Badge variant={badge === "Popular" ? "accent" : badge === "Trending" ? "success" : "default"} className="shadow-sm font-bold px-2 py-0.5 rounded text-[10px] uppercase">
              {badge}
            </Badge>
          )}
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-heading leading-tight group-hover:text-primary transition-colors">{title}</h3>
        {description && <p className="text-sm text-paragraph leading-relaxed line-clamp-2">{description}</p>}
      </div>

      <CardContent className="p-6 flex-grow flex flex-col">
        {/* Features / Highlights */}
        {features && features.length > 0 && (
          <div className="mb-6">
             <div className="flex flex-col gap-2.5">
                {features.map((feature, i) => (
                  <span key={i} className="text-sm font-semibold flex items-start gap-2 text-heading">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5"/> {feature}
                  </span>
                ))}
             </div>
          </div>
        )}
        
        {/* Core Info Grid */}
        <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6">
          {duration && (
            <div>
              <span className="block text-[10px] text-paragraph uppercase tracking-wider font-bold mb-1">Duration</span>
              <span className="text-sm text-heading font-semibold">{duration}</span>
            </div>
          )}
          {mode && (
            <div>
              <span className="block text-[10px] text-paragraph uppercase tracking-wider font-bold mb-1">Mode</span>
              <span className="text-sm text-heading font-semibold">{mode}</span>
            </div>
          )}
          {batchSize && (
            <div>
              <span className="block text-[10px] text-paragraph uppercase tracking-wider font-bold mb-1">Batch Size</span>
              <span className="text-sm text-heading font-semibold">{batchSize}</span>
            </div>
          )}
          {eligibility && (
            <div>
              <span className="block text-[10px] text-paragraph uppercase tracking-wider font-bold mb-1">Eligibility</span>
              <span className="text-sm text-heading font-semibold">{eligibility}</span>
            </div>
          )}
        </div>

        {/* Subjects list */}
        {subjects && subjects.length > 0 && (
          <div className="mb-4">
             <span className="block text-[10px] text-paragraph uppercase tracking-wider font-bold mb-2">Subjects Covered</span>
             <div className="flex flex-wrap gap-2">
                {subjects.map((sub, i) => (
                  <span key={i} className="text-xs px-2 py-1 bg-surface border border-border rounded-md text-heading font-medium">{sub}</span>
                ))}
             </div>
          </div>
        )}
        
        {/* Timings list */}
        {classTimings && classTimings.length > 0 && (
          <div className="mb-6">
             <span className="block text-[10px] text-paragraph uppercase tracking-wider font-bold mb-2">Class Timings</span>
             <div className="flex flex-col gap-1.5">
                {classTimings.map((time, i) => (
                  <span key={i} className="text-xs flex items-center gap-1.5 text-paragraph"><CheckCircle2 className="w-3.5 h-3.5 text-primary"/> {time}</span>
                ))}
             </div>
          </div>
        )}

        {/* Footer / CTA */}
        <div className="mt-auto pt-5 border-t border-border-color/40 flex flex-col space-y-4">
          {fees && fees !== "View Details" && (
            <div className="flex items-center justify-between text-sm">
              <span className="text-paragraph font-bold">Fees</span> 
              <span className="text-primary-deep font-black">{fees}</span>
            </div>
          )}
          
          <div className="w-full flex items-center justify-center bg-primary text-white py-3 rounded-md text-sm font-bold group-hover:bg-primary-deep transition-colors shadow-md">
            View Details 
            <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <HoverLift className="w-full block h-full">
      {href ? (
        <Link href={href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
          {CardBody}
        </Link>
      ) : (
        CardBody
      )}
    </HoverLift>
  );
}
