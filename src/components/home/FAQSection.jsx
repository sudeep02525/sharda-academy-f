"use client";

import { FAQ_DATA } from "@/constants/homeData";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function FAQSection({ className }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={cn("py-16 md:py-24 bg-surface border-y border-border", className)}>
      <div className="container mx-auto px-4 max-w-4xl">
        
        <div className="text-center mb-16">
          <Reveal width="100%" className="w-full text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-4">Frequently Asked Questions</h2>
          </Reveal>
          <Fade direction="up" delay={0.2}>
            <p className="text-lg text-paragraph">Everything you need to know about admissions, classes, and facilities.</p>
          </Fade>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Fade key={idx} direction="up" delay={0.1 + (idx * 0.1)}>
                <div 
                  className={cn(
                    "border rounded-xl overflow-hidden transition-colors duration-300 bg-white dark:bg-white/5",
                    isOpen ? "border-primary shadow-sm" : "border-border dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/50"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <span className="font-semibold text-heading pr-8">{faq.question}</span>
                    <div className={cn(
                      "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300",
                      isOpen ? "bg-primary text-[#0F2E4E] rotate-180" : "bg-surface border border-border-color text-paragraph"
                    )}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-0 text-paragraph leading-relaxed border-t border-border mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Fade>
            );
          })}
        </div>

      </div>
    </section>
  );
}
