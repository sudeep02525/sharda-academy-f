"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ACADEMY_DETAILS } from "@/constants/index";

export function ContactPreview() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('/mesh-grid.svg')] opacity-[0.02]" />

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-xl">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-6">Start Your Journey With Us</h2>
            </Reveal>
            <Fade direction="up" delay={0.2}>
              <p className="text-lg text-paragraph mb-8">
                Admissions are now open for the 2026 academic session. Contact our counselors to find the right program for you.
              </p>
            </Fade>

            <Fade direction="up" delay={0.3}>
              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Call Us Today</div>
                    <div className="text-xl font-bold text-heading">{ACADEMY_DETAILS.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Visit Campus</div>
                    <div className="text-lg font-semibold text-heading leading-tight">{ACADEMY_DETAILS.address}</div>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade direction="up" delay={0.4} className="flex gap-4">
              <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/20">
                <Link href="/admission">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/contact">View Map</Link>
              </Button>
            </Fade>
          </div>

          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.4!2d72.9289514!3d19.0514193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c724867cc043%3A0x3aac9bf792d9f1ba!2sSharda%20academy!5e0!3m2!1sen!2sin!4v1687000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharda Academy Location"
              className="w-full h-full grayscale-[0.2] contrast-[1.1] dark:grayscale-0 dark:invert dark:hue-rotate-180 dark:contrast-125 dark:opacity-90 transition-all duration-700"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
