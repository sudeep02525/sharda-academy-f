"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Button } from "@/components/ui/Button";

export function JoinFacultyCTA() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white dark:bg-surface border border-border-color/60 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Subtle Decorative Accent */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="w-full md:w-2/3 relative z-10">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-heading tracking-tight mb-6 leading-tight">
                Passionate About Teaching?
              </h2>
            </Reveal>
            <Fade direction="up" delay={0.2}>
              <p className="text-lg md:text-xl text-paragraph max-w-2xl leading-relaxed">
                Join Sharda Academy&apos;s esteemed faculty and shape the future. If you have the drive to mentor the next generation of top rankers, let&apos;s talk.
              </p>
            </Fade>
          </div>

          <div className="w-full md:w-1/3 flex md:justify-end relative z-10">
            <Fade direction="left" delay={0.3}>
              <Button size="lg" className="w-full sm:w-auto shadow-md hover:shadow-lg">
                Apply as Faculty
              </Button>
            </Fade>
          </div>

        </div>
      </div>
    </section>
  );
}
