"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function CourseSyllabus({ syllabus }) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4">Syllabus Overview</h2>
          </Reveal>
          <Fade direction="up" delay={0.2}>
            <p className="text-lg text-paragraph">Structured phases to ensure comprehensive coverage and timely revision.</p>
          </Fade>
        </div>

        <div className="space-y-6">
          {syllabus.map((phase, idx) => (
            <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center shadow-sm hover:border-primary/50 transition-colors">
                <div className="shrink-0 w-full md:w-48">
                  <div className="text-xl font-bold text-primary mb-1">{phase.term}</div>
                  <div className="h-1 w-12 bg-primary rounded-full" />
                </div>
                <div className="w-full">
                  <p className="text-lg text-heading font-medium leading-relaxed">{phase.topics}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
