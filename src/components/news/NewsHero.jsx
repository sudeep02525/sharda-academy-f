"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function NewsHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-background border-b border-border">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight tracking-tight mb-6">
              News & Events Hub
            </h1>
          </Reveal>
          
          <Fade direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-paragraph leading-relaxed mb-8 max-w-2xl mx-auto">
              Stay updated with the latest announcements, success stories, and upcoming events at Sharda Academy.
            </p>
          </Fade>
          
        </div>
      </div>
    </section>
  );
}
