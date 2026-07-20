"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function CourseDetailsHero({ course }) {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl">
            <Fade direction="up" delay={0.1} className="flex gap-3 mb-6">
              <Badge variant="secondary">{course.category}</Badge>
              {course.badge && <Badge variant={course.badge === "Popular" ? "accent" : "success"}>{course.badge}</Badge>}
            </Fade>
            
            <Reveal delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight tracking-tight mb-6">
                {course.title}
              </h1>
            </Reveal>
            
            <Fade direction="up" delay={0.4}>
              <p className="text-lg md:text-xl text-paragraph leading-relaxed mb-8">
                {course.description}
              </p>
            </Fade>

            <Fade direction="up" delay={0.5} className="flex flex-wrap gap-6 mb-10 pb-10 border-b border-border">
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Duration</div>
                <div className="text-lg font-bold text-heading">{course.duration}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Eligibility</div>
                <div className="text-lg font-bold text-heading">{course.eligibility}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Mode</div>
                <div className="text-lg font-bold text-primary">{course.mode}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Batch Size</div>
                <div className="text-lg font-bold text-heading">{course.batchSize}</div>
              </div>
            </Fade>

            <Fade direction="up" delay={0.6} className="flex gap-4">
              <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/20">Enroll Now</Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">Download Brochure</Button>
            </Fade>
          </div>

          <Fade direction="left" delay={0.3} className="relative h-[400px] lg:h-[500px] w-full">
            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] -rotate-3 scale-105" />
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
              <svg className="w-32 h-32 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </Fade>

        </div>
      </div>
    </section>
  );
}
