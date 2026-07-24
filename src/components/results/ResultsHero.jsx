"use client";

import { RESULTS_HERO } from "@/constants/resultsData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export function ResultsHero({ data }) {
  const heroData = data || RESULTS_HERO;
  
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-surface">
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
