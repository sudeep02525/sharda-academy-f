"use client";

import { WHY_CHOOSE_US_DATA } from "@/constants/homeData";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Fade } from "@/components/animations/Fade";
import * as LucideIcons from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-surface dark:bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-4 md:mb-6">{WHY_CHOOSE_US_DATA.title}</h2>
          </Fade>
          <Fade direction="up" delay={0.1}>
            <p className="text-base md:text-lg text-paragraph leading-relaxed">{WHY_CHOOSE_US_DATA.description}</p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHY_CHOOSE_US_DATA.features.map((feature, idx) => {
            // Convert 'graduation-cap' to 'GraduationCap'
            const IconName = feature.icon.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
            const Icon = LucideIcons[IconName] || LucideIcons.Zap;

            return (
              <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)} className="h-full">
                <FeatureCard 
                  title={feature.title} 
                  description={feature.description} 
                  icon={Icon} 
                />
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
