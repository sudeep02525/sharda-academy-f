"use client";

import { DEPARTMENT_CONTACTS } from "@/constants/contactData";
import { Fade } from "@/components/animations/Fade";

export function DepartmentContacts() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-heading tracking-tight mb-4">
            Department Directory
          </h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Direct your inquiry to the right department for a faster resolution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEPARTMENT_CONTACTS.map((dept, idx) => (
            <Fade key={idx} direction="up" delay={0.1 + (idx * 0.1)} className="h-full">
              <div className="bg-background border border-border shadow-sm rounded-3xl p-6 h-full flex flex-col hover:border-primary/50 transition-colors group">
                
                <h4 className="text-lg font-bold text-heading mb-2 group-hover:text-primary transition-colors">
                  {dept.name}
                </h4>
                <p className="text-sm text-paragraph mb-6 flex-grow">
                  {dept.description}
                </p>
                
                <div className="space-y-2 mt-auto pt-4 border-t border-border">
                  <a href={`tel:${dept.phone.replace(/\s+/g, '')}`} className="flex items-center text-sm font-semibold text-heading hover:text-primary transition-colors">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    {dept.phone}
                  </a>
                  <a href={`mailto:${dept.email}`} className="flex items-center text-sm font-semibold text-heading hover:text-primary transition-colors">
                    <svg className="w-4 h-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    {dept.email}
                  </a>
                </div>
                
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
