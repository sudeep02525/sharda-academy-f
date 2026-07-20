"use client";

import { RESULTS_DATA } from "@/constants/homeData";
import { RankerCard } from "@/components/results/RankerCard";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Button } from "@/components/ui/Button";

export function StudentResults() {
  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-4 md:mb-6">{RESULTS_DATA.title}</h2>
          </Reveal>
          <Fade direction="up" delay={0.2}>
            <p className="text-base md:text-lg text-paragraph leading-relaxed">{RESULTS_DATA.description}</p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {RESULTS_DATA.rankers.map((ranker, idx) => (
            <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)} className="h-full">
              <RankerCard 
                name={ranker.name}
                category={ranker.category}
                school={ranker.school}
                score={ranker.score}
                rank={ranker.rank}
                year={ranker.year}
                imageUrl={ranker.imageUrl}
              />
            </Fade>
          ))}
        </div>
        
        <Fade direction="up" delay={0.5}>
          <div className="mt-12 md:mt-16 flex justify-center w-full">
            <Button variant="outline" className="group">
              <span className="flex items-center gap-2">
                View All Results
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Button>
          </div>
        </Fade>

      </div>
    </section>
  );
}
