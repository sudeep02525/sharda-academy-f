"use client";

import { PERFORMANCE_STATS } from "@/constants/resultsData";
import { Fade } from "@/components/animations/Fade";
import { AnimatedCounter } from "@/components/animations/AnimatedCounter";

export function PerformanceStats() {
  return (
    <section className="py-20 bg-background relative -mt-10 z-20">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {PERFORMANCE_STATS.map((stat, idx) => (
            <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
              <div className="bg-card border border-border shadow-xl shadow-primary/5 rounded-3xl p-8 text-center flex flex-col items-center justify-center group hover:border-primary transition-colors h-full">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 flex items-center justify-center">
                  <AnimatedCounter end={stat.value} duration={2.5} />
                  <span className="text-accent ml-1">{stat.suffix}</span>
                </div>
                <div className="text-sm md:text-base font-bold text-heading uppercase tracking-wider group-hover:text-primary transition-colors">
                  {stat.label}
                </div>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
