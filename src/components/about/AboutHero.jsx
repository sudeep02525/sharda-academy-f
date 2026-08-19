"use client";

import React, { useState, useEffect } from "react";
import { ABOUT_HERO_DATA as FALLBACK_DATA } from "@/constants/aboutData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Badge } from "@/components/ui/Badge";

import { API_BASE_URL } from "@/utils/config";

export function AboutHero() {
  const [data, setData] = useState({
    badge: FALLBACK_DATA.badge,
    heading: FALLBACK_DATA.title,
    description: FALLBACK_DATA.description,
    stat1Value: `${new Date().getFullYear() - 2021}+`,
    stat1Label: "Years of Trust",
    stat2Value: "10k+",
    stat2Label: "Students Mentored",
    stat3Value: "98%",
    stat3Label: "Success Rate"
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/about/hero`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setData(prev => ({
              ...prev,
              ...content.data
            }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch about hero data", error);
      }
    };
    fetchHeroData();
  }, []);

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-white dark:bg-surface">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        <Fade direction="up" delay={0.1}>
          <div className="inline-block mb-6">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-primary-deep bg-primary/10 border-primary/20">
              {data.badge}
            </Badge>
          </div>
        </Fade>
        
        <Reveal delay={0.2} width="100%">
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-heading leading-[1.1] tracking-tight mb-8">
            {data.heading}
          </h1>
        </Reveal>
        
        <Fade direction="up" delay={0.4}>
          <p className="text-lg md:text-xl text-paragraph leading-relaxed max-w-3xl mx-auto font-medium">
            {data.description}
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
               <div className="text-5xl font-black text-primary mb-2">50+</div>
               <div className="text-sm font-bold text-paragraph uppercase tracking-widest">Expert Faculty</div>
            </div>
            
          </div>
        </Fade>
      </div>
    </section>
  );
}
