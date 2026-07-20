"use client";

import { TESTIMONIALS_DATA } from "@/constants/homeData";
import { TestimonialCard } from "@/components/cards/ContentCards";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border/50 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-4 md:mb-6">What Parents & Students Say</h2>
          </Reveal>
          <Fade direction="up" delay={0.1}>
            <p className="text-base md:text-lg text-paragraph leading-relaxed">
              Real stories of success and transformation from our community of achievers.
            </p>
          </Fade>
        </div>

        {/* CSS Grid for masonry-like masonry layout / simple grid depending on height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
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
