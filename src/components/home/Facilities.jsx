"use client";

import { FACILITIES_DATA } from "@/constants/homeData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { MonitorPlay, HelpCircle, ThermometerSnowflake, Fingerprint, Building2, GraduationCap, BookOpen } from "lucide-react";

function FacilitiesVisual() {
  return (
    <div className="relative w-full h-[350px] md:h-[400px] rounded-[2rem] flex items-center justify-center p-6 bg-gradient-to-br from-primary/[0.02] to-accent/[0.02] border border-border-color/40 overflow-hidden">
      
      {/* Decorative Dots Pattern */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0D5BD7 1px, transparent 0)', backgroundSize: '24px 24px' }} />

      {/* Main Center Panel */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 bg-white dark:bg-surface rounded-3xl border border-border-color/60 shadow-[0_15px_40px_-15px_rgba(13,91,215,0.15)] flex flex-col items-center justify-center gap-3 z-20 hover:-translate-y-2 transition-transform duration-500">
        <div className="w-16 h-16 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20">
          <BookOpen className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <h3 className="text-lg font-bold text-heading">Quality Education</h3>
      </div>

      {/* Top Left Floating Panel */}
      <div className="absolute top-[15%] left-[5%] md:left-[10%] w-20 h-20 md:w-24 md:h-24 bg-white/90 dark:bg-surface/90 backdrop-blur-md rounded-2xl border border-white dark:border-border shadow-xl flex items-center justify-center z-10 hover:-translate-y-1 transition-transform duration-500">
         <Building2 className="w-8 h-8 md:w-10 md:h-10 text-accent-dark" strokeWidth={1.5} />
      </div>

      {/* Bottom Right Floating Panel */}
      <div className="absolute bottom-[15%] right-[5%] md:right-[10%] w-24 h-24 md:w-28 md:h-28 bg-white/90 dark:bg-surface/90 backdrop-blur-md rounded-2xl border border-white dark:border-border shadow-xl flex items-center justify-center z-30 hover:-translate-y-1 transition-transform duration-500">
         <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-primary-deep" strokeWidth={1.5} />
      </div>
      
    </div>
  );
}

export function Facilities() {
  const ICON_MAP = {
    ThermometerSnowflake: ThermometerSnowflake,
    MonitorPlay: MonitorPlay,
    Fingerprint: Fingerprint,
    HelpCircle: HelpCircle
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] dark:bg-background relative overflow-hidden border-y border-border-color/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Text & Cards */}
          <div className="w-full lg:w-1/2">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-heading mb-4 md:mb-6 leading-[1.1]">
                World-Class <br/><span className="text-primary">Facilities</span>
              </h2>
            </Reveal>
            <Fade direction="up" delay={0.2}>
              <p className="text-base md:text-lg text-paragraph mb-8 md:mb-10 leading-relaxed font-medium">
                Experience an environment designed to foster deep learning, focus, and collaboration. Our campus is equipped with everything a student needs to succeed.
              </p>
            </Fade>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {FACILITIES_DATA.map((facility, idx) => {
                const IconComp = ICON_MAP[facility.icon] || HelpCircle;

                return (
                  <Fade key={idx} direction="up" delay={0.3 + (idx * 0.1)}>
                    <div className="bg-white dark:bg-surface border border-border-color/60 rounded-xl p-3 md:p-4 flex items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 cursor-default">
                      <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0 border border-primary/10">
                        <IconComp className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                      </div>
                      <span className="font-bold text-heading text-base md:text-lg">
                        {facility.title}
                      </span>
                    </div>
                  </Fade>
                );
              })}
            </div>
          </div>

          {/* Right Visual */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <Fade direction="left" delay={0.4} className="w-full relative">
                <FacilitiesVisual />
             </Fade>
          </div>

        </div>

      </div>
    </section>
  );
}
