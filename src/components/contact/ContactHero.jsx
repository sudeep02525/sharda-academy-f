"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Badge } from "@/components/ui/Badge";


export function ContactHero({ data }) {
  const heroData = data || { badge: "Contact", title: "We'd Love to Hear From You", description: "We're here to help you take the next step in your educational journey." };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-surface">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <Fade direction="up" delay={0.1}>
            <Badge variant="secondary" className="mb-6">{heroData.badge}</Badge>
          </Fade>
          
          <Reveal delay={0.2} width="100%" className="w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-heading mb-6">
              {heroData.title}
            </h1>
          </Reveal>
          
          <Fade direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-paragraph leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
              {heroData.description}
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
