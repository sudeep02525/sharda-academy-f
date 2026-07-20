"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function AdmissionHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[url('/mesh-grid.svg')] opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 dark:bg-surface/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6 drop-shadow-lg">
              Take the First Step Towards Success
            </h1>
          </Reveal>
          
          <Fade direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
              Join Sharda Academy and experience a transformative educational journey. Our admission process is streamlined, transparent, and completely online.
            </p>
          </Fade>
          
        </div>
      </div>
    </section>
  );
}
