"use client";

import { DIRECTOR_MESSAGE_DATA } from "@/constants/aboutData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function DirectorMessage() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-1/4 h-1/2 bg-accent/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-sm flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <Fade direction="right" delay={0.2} className="w-full lg:w-2/5 shrink-0">
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-[2rem] overflow-hidden border-8 border-background shadow-2xl rotate-2">
              <img 
                src={DIRECTOR_MESSAGE_DATA.imageUrl}
                alt={DIRECTOR_MESSAGE_DATA.name}
               
               
                className="w-full h-full object-cover"
              />
            </div>
          </Fade>
          
          <div className="w-full lg:w-3/5">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-8">
                {DIRECTOR_MESSAGE_DATA.title}
              </h2>
            </Reveal>
            
            <div className="space-y-6 mb-10 relative">
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 text-primary/10">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              
              {DIRECTOR_MESSAGE_DATA.message.map((para, idx) => (
                <Fade key={idx} direction="up" delay={0.3 + (idx * 0.1)}>
                  <p className="text-lg md:text-xl text-paragraph leading-relaxed relative z-10 font-medium">
                    {para}
                  </p>
                </Fade>
              ))}
            </div>
            
            <Fade direction="up" delay={0.6} className="flex items-center gap-6">
              <div>
                <h4 className="text-xl font-bold text-heading">{DIRECTOR_MESSAGE_DATA.name}</h4>
                <p className="text-primary font-semibold">{DIRECTOR_MESSAGE_DATA.role}</p>
              </div>
              {DIRECTOR_MESSAGE_DATA.signatureUrl ? (
                <div className="relative w-32 h-16 opacity-50">
                  <img 
                    src={DIRECTOR_MESSAGE_DATA.signatureUrl}
                    alt="Signature"
                   
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : DIRECTOR_MESSAGE_DATA.signature ? (
                <div className="ml-6 border-l-2 border-border pl-6">
                  <p className="font-serif text-2xl italic text-primary/70">{DIRECTOR_MESSAGE_DATA.signature}</p>
                </div>
              ) : null}
            </Fade>
          </div>

        </div>
      </div>
    </section>
  );
}
