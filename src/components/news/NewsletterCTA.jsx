"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Input } from "@/components/forms/Input";
import { Button } from "@/components/ui/Button";

export function NewsletterCTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/mesh-grid.svg')] opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 dark:bg-surface/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
        
        <Reveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Stay in the Loop
          </h2>
        </Reveal>
        <Fade direction="up" delay={0.2}>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Subscribe to our newsletter to receive the latest academic updates, exam notifications, and scholarship opportunities directly in your inbox.
          </p>
        </Fade>

        <Fade direction="up" delay={0.3}>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-white/10 dark:bg-surface/10 border-white/20 dark:border-border/20 text-white placeholder:text-white/50 focus:border-white h-12 rounded-full px-6"
              required
            />
            <Button size="lg" variant="secondary" className="bg-white dark:bg-surface text-primary hover:bg-white/90 h-12 rounded-full px-8 shrink-0">
              Subscribe Now
            </Button>
          </form>
          <p className="text-xs text-white/50 mt-4">We respect your privacy. No spam ever.</p>
        </Fade>

      </div>
    </section>
  );
}
