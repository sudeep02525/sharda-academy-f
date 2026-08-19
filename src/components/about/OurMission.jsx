"use client";

import React, { useState, useEffect } from "react";
import { MISSION_VISION_DATA as FALLBACK_DATA } from "@/constants/aboutData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Target, Eye } from "lucide-react";

import { API_BASE_URL } from "@/utils/config";

export function OurMission() {
  const [data, setData] = useState({
    mission: FALLBACK_DATA.mission.description,
    vision: FALLBACK_DATA.vision.description
  });

  useEffect(() => {
    const fetchMissionVision = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/about/mission-vision`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setData(prev => ({ ...prev, ...content.data }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch mission and vision data", error);
      }
    };
    fetchMissionVision();
  }, []);

  return (
    <section className="py-24 bg-[#FFFDF6] dark:bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card - Light Blue Theme */}
          <Fade direction="up" delay={0.2} className="relative overflow-hidden bg-white dark:bg-surface rounded-[2rem] p-10 lg:p-14 shadow-lg border border-primary/20 group hover:shadow-xl transition-shadow">
            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0 pointer-events-none" />
            
            {/* Watermark Icon */}
            <Target 
              className="absolute -bottom-10 -right-10 w-64 h-64 text-primary/[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none" 
              strokeWidth={1}
            />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 text-primary-deep flex items-center justify-center mb-10">
                <Target className="w-8 h-8" />
              </div>
              <Reveal delay={0.3}>
                <h2 className="text-3xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
                  {FALLBACK_DATA.mission.title}
                </h2>
              </Reveal>
              <div className="w-12 h-1.5 bg-primary rounded-full mb-6" />
              <p className="text-lg md:text-xl text-paragraph leading-relaxed font-medium">
                {data.mission}
              </p>
            </div>
          </Fade>

          {/* Vision Card - Light Gold Theme */}
          <Fade direction="up" delay={0.4} className="relative overflow-hidden bg-white dark:bg-surface rounded-[2rem] p-10 lg:p-14 shadow-lg border border-accent/30 group hover:shadow-xl transition-shadow">
            {/* Subtle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent z-0 pointer-events-none" />
            
            {/* Watermark Icon */}
            <Eye 
              className="absolute -bottom-10 -right-10 w-64 h-64 text-accent/[0.07] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 pointer-events-none" 
              strokeWidth={1}
            />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 border border-accent/30 text-accent flex items-center justify-center mb-10">
                <Eye className="w-8 h-8" />
              </div>
              <Reveal delay={0.5}>
                <h2 className="text-3xl md:text-5xl font-extrabold text-heading tracking-tight mb-6">
                  {FALLBACK_DATA.vision.title}
                </h2>
              </Reveal>
              <div className="w-12 h-1.5 bg-accent rounded-full mb-6" />
              <p className="text-lg md:text-xl text-paragraph leading-relaxed font-medium">
                {data.vision}
              </p>
            </div>
          </Fade>

        </div>
      </div>
    </section>
  );
}
