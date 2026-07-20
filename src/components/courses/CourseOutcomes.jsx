"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function CourseOutcomes({ highlights, classTimings }) {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Highlights */}
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-8">Course Highlights</h2>
            </Reveal>
            <div className="space-y-4">
              {highlights.map((highlight, idx) => (
                <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
                  <div className="bg-background border border-border rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:border-primary transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-lg font-semibold text-heading pt-1">{highlight}</span>
                  </div>
                </Fade>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div>
            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-8">Class Timings</h2>
            </Reveal>
            <div className="space-y-4">
              {classTimings && classTimings.map((timing, idx) => (
                <Fade key={idx} direction="up" delay={0.3 + (idx * 0.1)}>
                  <div className="bg-background border border-border rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:border-accent transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <span className="text-lg font-semibold text-heading pt-1">{timing}</span>
                  </div>
                </Fade>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
