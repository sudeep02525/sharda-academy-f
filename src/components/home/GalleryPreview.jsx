"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { HoverLift } from "@/components/animations/HoverLift";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function GalleryPreview() {
  const mockImages = Array(6).fill("https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png");

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-4">Campus Life</h2>
          </Reveal>
          <Fade direction="up" delay={0.2}>
            <p className="text-lg text-paragraph">
              A glimpse into the vibrant student life, events, and modern infrastructure at Sharda Academy.
            </p>
          </Fade>
        </div>

        {/* Masonry Grid Simulation */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {mockImages.map((src, idx) => (
            <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)}>
              <HoverLift className="h-full">
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border group">
                  <img 
                    src={src} 
                    alt={`Gallery preview ${idx + 1}`} 
                   
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold">View Image</span>
                  </div>
                </div>
              </HoverLift>
            </Fade>
          ))}
        </div>

        <div className="flex justify-center">
          <Fade direction="up" delay={0.5}>
            <Button size="lg" variant="outline">
              <Link href="/gallery">Explore Full Gallery</Link>
            </Button>
          </Fade>
        </div>

      </div>
    </section>
  );
}
