"use client";

import { Fade } from "@/components/animations/Fade";
import { CONTACT_INFO } from "@/constants/contactData";

export function MapSection() {
  return (
    <section className="w-full bg-background relative z-0">
      <div className="container mx-auto px-4 pb-20">
        <Fade>
          <div className="w-full h-[500px] md:h-[600px] bg-muted relative rounded-2xl overflow-hidden border border-border-color/50 shadow-2xl">
            
            {/* Real world usage: replace src with actual Google Maps Embed URL */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.4!2d72.9289514!3d19.0514193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c724867cc043%3A0x3aac9bf792d9f1ba!2sSharda%20academy!5e0!3m2!1sen!2sin!4v1687000000000" 
              width="100%" 
              height="100%" 
              className="grayscale-[0.2] contrast-[1.1] dark:grayscale-0 dark:invert dark:hue-rotate-180 dark:contrast-125 dark:opacity-90 transition-all duration-700"
              style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Sharda Academy Campus Location"
          />

          {/* Floating Address Card */}
          <div className="absolute bottom-8 left-4 right-4 md:left-12 md:right-auto md:w-96 bg-white/95 dark:bg-surface/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl p-6 z-10">
            <h4 className="font-bold text-lg text-heading mb-2">Visit Campus</h4>
            <p className="text-paragraph text-sm mb-4 leading-relaxed">
              {CONTACT_INFO.address}
            </p>
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-bold text-sm inline-flex items-center hover:underline"
            >
              Get Directions
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>

          </div>
        </Fade>
      </div>
    </section>
  );
}
