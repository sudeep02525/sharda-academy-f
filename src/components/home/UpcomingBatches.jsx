"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const BATCHES = [
  { name: "JEE Supreme (2026-28)", start: "August 10, 2026", status: "Filling Fast", seats: 12 },
  { name: "NEET Elite (2026-28)", start: "August 15, 2026", status: "Open", seats: 25 },
  { name: "Foundation X", start: "September 01, 2026", status: "Open", seats: 40 },
];

export function UpcomingBatches() {
  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="text-center mb-16">
          <Reveal width="100%" className="w-full text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-4">Upcoming Batches</h2>
          </Reveal>
          <Fade direction="up" delay={0.2}>
            <p className="text-lg text-paragraph">Secure your seat in our premium classroom programs before they fill up.</p>
          </Fade>
        </div>

        <div className="space-y-4">
          {BATCHES.map((batch, idx) => (
            <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
              <div className="bg-background border border-border rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-primary transition-colors shadow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-heading">{batch.name}</h3>
                    <Badge variant={batch.status === "Filling Fast" ? "warning" : "success"}>{batch.status}</Badge>
                  </div>
                  <p className="text-paragraph text-sm">Commencing on: <span className="font-semibold text-heading">{batch.start}</span></p>
                </div>
                
                <div className="flex items-center gap-6 w-full md:w-auto border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-primary">{batch.seats}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Seats Left</div>
                  </div>
                  <Button>Enroll Now</Button>
                </div>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
