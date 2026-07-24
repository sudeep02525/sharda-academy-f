"use client";

import { SUBJECT_PERFORMANCE } from "@/constants/resultsData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SubjectPerformance({ data = SUBJECT_PERFORMANCE }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24 bg-background border-t border-border" ref={ref}>
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          
          <div className="w-full lg:w-1/2">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-6">
                Subject-wise Mastery
              </h2>
            </Reveal>
            <Fade direction="up" delay={0.2}>
              <p className="text-lg text-paragraph leading-relaxed mb-8">
                Our highly specialized faculty ensures that students gain deep conceptual clarity across all core subjects. The performance metrics reflect the exceptional teaching standards at Sharda Academy.
              </p>
            </Fade>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            {data.map((subject, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-lg font-bold text-heading">{subject.subject}</span>
                  <span className="text-lg font-bold text-primary">{subject.percentage}%</span>
                </div>
                <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${subject.percentage}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.2 + (idx * 0.2), ease: "easeOut" }}
                    className={`h-full ${subject.color} rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
