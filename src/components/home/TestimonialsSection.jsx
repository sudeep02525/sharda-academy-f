"use client";

import React, { useState, useEffect } from "react";
import { TESTIMONIALS_DATA } from "@/constants/homeData";
import { TestimonialCard } from "@/components/cards/ContentCards";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function TestimonialsSection() {
  const [sectionData, setSectionData] = useState({
    sectionTitle: "What Parents & Students Say",
    sectionDescription: "Real stories of success and transformation from our community of achievers.",
    testimonials: TESTIMONIALS_DATA
  });

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/cms/home/testimonials");
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            let activeTestimonials = [];
            if (content.data.testimonials && Array.isArray(content.data.testimonials)) {
              activeTestimonials = content.data.testimonials
                .filter(t => t.isActive !== false) // Default true if undefined
                .map((t, originalIndex) => ({ ...t, originalIndex }))
                .sort((a, b) => {
                  const orderA = Number(a.displayOrder) || 999;
                  const orderB = Number(b.displayOrder) || 999;
                  if (orderA !== orderB) return orderA - orderB;
                  return a.originalIndex - b.originalIndex; // Stable sort
                });
            }

            setSectionData({
              sectionTitle: content.data.sectionTitle || "What Parents & Students Say",
              sectionDescription: content.data.sectionDescription || "Real stories of success and transformation from our community of achievers.",
              testimonials: activeTestimonials.length > 0 ? activeTestimonials : TESTIMONIALS_DATA
            });
          }
        }
      } catch (error) {
        console.error("Failed to fetch testimonials data, falling back to static", error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border/50 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-4 md:mb-6">{sectionData.sectionTitle}</h2>
          </Reveal>
          <Fade direction="up" delay={0.1}>
            <p className="text-base md:text-lg text-paragraph leading-relaxed">
              {sectionData.sectionDescription}
            </p>
          </Fade>
        </div>

        {/* CSS Grid for masonry-like masonry layout / simple grid depending on height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {sectionData.testimonials.map((testimonial, idx) => (
            <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)} className="h-full">
              <TestimonialCard 
                name={testimonial.name}
                role={testimonial.role}
                review={testimonial.review}
                imageUrl={testimonial.imageUrl}
                rating={testimonial.rating}
              />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
