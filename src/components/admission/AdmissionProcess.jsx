"use client";

import { ADMISSION_PROCESS_STEPS } from "@/constants/admissionData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function AdmissionProcess() {
  return (
    <section className="py-24 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">
              4 Simple Steps to Enroll
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-1 bg-border -z-10" />

          {ADMISSION_PROCESS_STEPS.map((step, idx) => (
            <Fade key={step.id} direction="up" delay={0.2 + (idx * 0.1)} className="relative">
              <div className="bg-background border border-border shadow-sm rounded-3xl p-8 text-center h-full flex flex-col items-center hover:border-primary hover:shadow-lg transition-all group">
                
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  {step.id}
                </div>
                
                <h3 className="text-xl font-bold text-heading mb-3">{step.title}</h3>
                <p className="text-paragraph text-sm">{step.description}</p>
                
              </div>
            </Fade>
          ))}

        </div>

      </div>
    </section>
  );
}
