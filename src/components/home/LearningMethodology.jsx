"use client";

import React, { useState, useEffect } from "react";
import { METHODOLOGY_DATA } from "@/constants/homeData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

import { API_BASE_URL } from "@/utils/config";

export function LearningMethodology() {
  const [content, setContent] = useState(METHODOLOGY_DATA);

  useEffect(() => {
    const fetchMethodologyData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/learning-process`);
        if (res.ok) {
          const fetchedContent = await res.json();
          if (fetchedContent && fetchedContent.data) {
            setContent(fetchedContent.data);
          }
        }
      } catch (error) {
        console.warn("Failed to fetch live learning process data, falling back to static");
      }
    };
    fetchMethodologyData();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border/50 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-4 md:mb-6">{content.title}</h2>
          </Reveal>
          <Fade direction="up" delay={0.1}>
            <p className="text-base md:text-lg text-paragraph leading-relaxed">{content.description}</p>
          </Fade>
        </div>

        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary/10 via-accent/30 to-primary/10 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {(content.steps || []).map((step, idx) => (
              <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)} className="relative z-10">
                <div className="bg-white dark:bg-[#1E293B] border border-border-color/60 dark:border-white/10 rounded-[1.5rem] p-8 lg:p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-start text-left group relative overflow-hidden">
                  
                  {/* Elegant Number Typography */}
                  <div className="text-5xl md:text-6xl font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors duration-500">
                    0{idx + 1}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-extrabold text-heading mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-paragraph text-sm md:text-base leading-relaxed font-medium">
                    {step.desc}
                  </p>

                  {/* Animated Bottom Border */}
                  <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out" />
                  
                  {/* Subtle Top Right Corner Accent */}
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />
                </div>
              </Fade>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
