"use client";

import { ABOUT_HERO_DATA } from "@/constants/aboutData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      {/* Decorative dot matrix background */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to bottom, white, transparent)'
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        <Fade direction="up" delay={0.1}>
          <div className="inline-block mb-6">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-deep bg-primary/10 border-primary/20">
              {ABOUT_HERO_DATA.badge}
            </Badge>
          </div>
        </Fade>
        
        <Reveal delay={0.2} width="100%">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-heading leading-[1.1] tracking-tight mb-8">
            {ABOUT_HERO_DATA.title}
          </h1>
        </Reveal>
        
        <Fade direction="up" delay={0.4}>
          <p className="text-lg md:text-xl text-paragraph leading-relaxed max-w-3xl mx-auto font-medium">
            {ABOUT_HERO_DATA.description}
          </p>
        </Fade>

        {/* Premium Stats Grid */}
        <Fade direction="up" delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            
            <div className="bg-white dark:bg-surface border border-border-color rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center hover:shadow-[0_8px_25px_-5px_rgba(212,175,55,0.2)] hover:border-primary/40 transition-all">
               <div className="text-5xl font-black text-primary mb-2">{new Date().getFullYear() - 2021}+</div>
               <div className="text-sm font-bold text-paragraph uppercase tracking-widest">Years of Trust</div>
            </div>
            
            <div className="bg-white dark:bg-surface border border-border-color rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center hover:shadow-[0_8px_25px_-5px_rgba(212,175,55,0.2)] hover:border-primary/40 transition-all relative overflow-hidden">
               {/* Subtle accent glow */}
               <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
               <div className="text-5xl font-black text-primary mb-2">10k+</div>
               <div className="text-sm font-bold text-paragraph uppercase tracking-widest">Students Mentored</div>
            </div>
            
            <div className="bg-white dark:bg-surface border border-border-color rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center hover:shadow-[0_8px_25px_-5px_rgba(212,175,55,0.2)] hover:border-primary/40 transition-all">
               <div className="text-5xl font-black text-primary mb-2">98%</div>
               <div className="text-sm font-bold text-paragraph uppercase tracking-widest">Success Rate</div>
            </div>
            
          </div>
        </Fade>
      </div>
    </section>
  );
}
