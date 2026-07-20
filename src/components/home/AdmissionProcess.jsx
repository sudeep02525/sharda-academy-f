"use client";

import { motion } from "framer-motion";
import { MapPin, Users, MonitorPlay, CheckCircle2, ArrowRight } from "lucide-react";
import { Fade } from "@/components/animations/Fade";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const PROCESS_STEPS = [
  {
    id: 1,
    title: "Visit Academy",
    description: "Take a campus tour and explore our facilities.",
    icon: MapPin
  },
  {
    id: 2,
    title: "Counselling",
    description: "One-on-one session to understand student needs.",
    icon: Users
  },
  {
    id: 3,
    title: "Demo Class",
    description: "Experience our teaching methodology live.",
    icon: MonitorPlay
  },
  {
    id: 4,
    title: "Admission Confirmed",
    description: "Complete the formalities and start learning.",
    icon: CheckCircle2
  }
];

export function AdmissionProcess() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-surface relative overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-heading tracking-tight mb-4">
              Simple <span className="text-primary">Admission Process</span>
            </h2>
            <p className="text-base md:text-lg text-paragraph font-medium">
              We've made our enrollment process transparent, straightforward, and parent-friendly.
            </p>
          </Fade>
        </div>

        {/* Process Flow */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border-color to-transparent z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.id} variants={fadeUpVariant} className="flex flex-col items-center text-center group">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white dark:bg-surface border border-border-color/30 shadow-lg shadow-primary/5 flex items-center justify-center text-primary mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/20 relative group-hover:border-primary/50">
                    <Icon className="w-8 h-8 md:w-10 md:h-10" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-deep text-white font-bold flex items-center justify-center shadow-md border-2 border-white dark:border-border">
                      {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-bold text-heading mb-2">{step.title}</h3>
                  <p className="text-sm text-paragraph px-4">{step.description}</p>
                  
                  {/* Mobile Connecting Arrow */}
                  {idx !== PROCESS_STEPS.length - 1 && (
                    <div className="md:hidden mt-6 text-border-color">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
