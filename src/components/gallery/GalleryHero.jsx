"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export function GalleryHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <Fade direction="up" delay={0.1}>
            <Badge variant="secondary" className="mb-6">Campus Life</Badge>
          </Fade>
          
          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight tracking-tight mb-6">
              Experience Sharda Academy
            </h1>
          </Reveal>
          
          <Fade direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-paragraph leading-relaxed mb-10 max-w-2xl mx-auto">
              Take a visual tour of our state-of-the-art facilities, vibrant events, and the remarkable achievements of our students.
            </p>
          </Fade>
          
        </div>
      </div>
    </section>
  );
}
