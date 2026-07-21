"use client";

import { TIMELINE_DATA } from "@/constants/aboutData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function Timeline() {
  return (
    <section className="py-24 bg-[#FFFDF6] dark:bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <Reveal width="100%" className="w-full text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
              Our Journey So Far
            </h2>
          </Reveal>
          <Fade direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-paragraph font-medium">
              A journey of consistent growth, unshakeable trust, and a relentless commitment to academic excellence.
            </p>
          </Fade>
        </div>

        <div className="relative">
          {/* Glowing Center Line */}
          <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 w-1 bg-gradient-to-b from-transparent via-primary/20 to-transparent md:-translate-x-1/2 rounded-full" />

          {TIMELINE_DATA.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="mb-12 md:mb-24 relative flex items-center w-full">
                
                {/* Glowing Timeline Node */}
                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-border shadow-[0_0_15px_rgba(212,175,55,0.5)] z-10" />

                {/* Content Box */}
                <Fade 
                  direction={isEven ? "right" : "left"} 
                  delay={0.2 + (idx * 0.1)} 
                  className={`w-full pl-16 md:pl-0 md:w-[45%] ${isEven ? 'md:mr-auto' : 'md:ml-auto'} text-left`}
                >
                  <div className="bg-white dark:bg-surface p-8 lg:p-10 rounded-[2rem] shadow-lg border border-primary/10 relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    
                    {/* Watermark Year Background */}
                    <div className="absolute -bottom-6 -right-4 text-[7rem] font-black text-primary/[0.03] select-none pointer-events-none group-hover:scale-110 group-hover:text-primary/[0.05] transition-all duration-500">
                      {item.year}
                    </div>
                    
                    <div className="relative z-10">
                      <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-deep font-black text-sm mb-4 tracking-wider">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-extrabold text-heading mb-3">{item.title}</h3>
                      <p className="text-base lg:text-lg text-paragraph font-medium leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Fade>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
