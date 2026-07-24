"use client";

import { AWARDS_RECOGNITION } from "@/constants/resultsData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function AwardsRecognition({ data = AWARDS_RECOGNITION }) {
  return (
    <section className="py-24 bg-surface border-t border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-20 w-full">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 text-center">
              Awards & Recognition
            </h2>
          </Reveal>
          <Fade direction="up" delay={0.2}>
            <p className="text-lg text-paragraph max-w-2xl mx-auto text-center">
              Our commitment to quality education has been acknowledged by prestigious educational boards nationwide.
            </p>
          </Fade>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-1 bg-border/60 md:-translate-x-1/2 rounded-full hidden sm:block" />

          <div className="space-y-12">
            {data.map((award, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-14 h-14 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-md z-10 text-white font-bold text-sm">
                    {award.year}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full sm:w-1/2 pl-20 sm:pl-0 ${isEven ? 'sm:pr-16 text-left sm:text-right' : 'sm:pl-16 text-left'}`}>
                    <Fade direction={isEven ? "right" : "left"} delay={0.2 + (idx * 0.1)}>
                      <div className="bg-background border border-border shadow-sm rounded-2xl p-6 hover:shadow-md hover:border-primary/50 transition-all">
                        <h3 className="text-xl font-bold text-heading mb-2">{award.title}</h3>
                        <p className="text-paragraph leading-relaxed text-sm">
                          {award.body}
                        </p>
                      </div>
                    </Fade>
                  </div>
                  
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
