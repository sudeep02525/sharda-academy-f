"use client";

import { SUCCESS_STORIES } from "@/constants/resultsData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function SuccessStories() {
  return (
    <section className="py-24 bg-card border-t border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16 w-full">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 text-center">
              Stories That Inspire
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SUCCESS_STORIES.map((story, idx) => (
            <Fade key={story.id} direction="up" delay={0.2 + (idx * 0.2)} className="h-full">
              <div className="bg-background border border-border shadow-lg shadow-primary/5 rounded-3xl p-8 md:p-10 flex flex-col h-full group hover:border-primary transition-colors">
                
                <div className="flex items-center gap-4 mb-6 border-b border-border-color/40 pb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 flex items-center justify-center bg-primary/10 text-primary">
                    {story.imageUrl ? (
                      <img
                        src={story.imageUrl}
                        alt={story.student}
                       
                       
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-heading">{story.student}</h3>
                    <p className="text-sm font-semibold text-primary">{story.college}</p>
                  </div>
                </div>

                <div className="relative flex-grow flex items-start gap-4">
                  <svg className="w-8 h-8 text-slate-200 shrink-0 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  <p className="text-lg text-paragraph leading-relaxed italic relative z-10 pt-1">
                    &quot;{story.quote}&quot;
                  </p>
                </div>

              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
