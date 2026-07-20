"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-10" />
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        <Reveal>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-heading leading-tight tracking-tight mb-6 text-center">
            We&apos;d Love to Hear From You
          </h1>
        </Reveal>
        
        <Fade direction="up" delay={0.2}>
          <p className="text-lg md:text-xl text-paragraph max-w-2xl mx-auto leading-relaxed">We&apos;re here to help you take the next step in your educational journey.</p>
        </Fade>
        
      </div>
    </section>
  );
}
