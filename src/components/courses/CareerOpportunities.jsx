"use client";

import { CAREER_OPPORTUNITIES } from "@/constants/coursesData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

import * as Icons from "lucide-react";

export function CareerOpportunities({ data }) {
  const opportunities = data || CAREER_OPPORTUNITIES;
  
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
          {opportunities.map((opp, idx) => {
            const IconComponent = Icons[opp.icon] || Icons.CheckCircle;
            
            return (
              <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)} className="h-full">
                <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-3">{opp.title}</h3>
                  <p className="text-paragraph leading-relaxed flex-1">{opp.description}</p>
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
