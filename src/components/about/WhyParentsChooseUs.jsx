"use client";

import { WHY_PARENTS_CHOOSE_US_DATA } from "@/constants/aboutData";
import { Fade } from "@/components/animations/Fade";
import { CheckCircle2 } from "lucide-react";

export function WhyParentsChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-background border-t border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-heading tracking-tight mb-4">
              {WHY_PARENTS_CHOOSE_US_DATA.title}
            </h2>
            <p className="text-base md:text-lg text-paragraph font-medium">
              {WHY_PARENTS_CHOOSE_US_DATA.description}
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {WHY_PARENTS_CHOOSE_US_DATA.features.map((feature, idx) => (
            <Fade key={idx} direction="up" delay={0.1 * idx} className="h-full">
              <div className="bg-white dark:bg-white/[0.04] rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 dark:border-white/10 hover:shadow-md hover:border-primary/20 dark:hover:border-primary/40 transition-all group h-full flex flex-col">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary mt-1 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-heading mb-2">{feature.title}</h3>
                    <p className="text-sm md:text-base text-paragraph leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
