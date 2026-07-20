"use client";

import { CAREER_OPPORTUNITIES } from "@/constants/coursesData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function CareerOpportunities() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-accent/5 rounded-l-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4">
              Unlock Boundless Opportunities
            </h2>
          </Reveal>
          <Fade direction="up" delay={0.2}>
            <p className="text-lg text-paragraph">
              Our courses are not just about passing exams; they are stepping stones to prestigious careers globally.
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {CAREER_OPPORTUNITIES.map((opp, idx) => (
            <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)} className="h-full">
              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {opp.icon === "Building" && (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  )}
                  {opp.icon === "Heart" && (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  )}
                  {opp.icon === "Globe" && (
                     <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  )}
                </div>
                <h3 className="text-xl font-bold text-heading mb-3">{opp.title}</h3>
                <p className="text-sm text-paragraph leading-relaxed">{opp.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
