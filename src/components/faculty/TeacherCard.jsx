"use client";

import { HoverLift } from "@/components/animations/HoverLift";

export function TeacherCard({ 
  name, 
  department, 
  role, 
  qualifications = [], 
  experience, 
  specializations = [], 
  achievements = [], 
  teachingMethod,
  languages = [],
  availability,
  imageUrl 
}) {
  return (
    <HoverLift className="h-full block">
      <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col group">
        
        {/* Top Header / Profile Image area */}
        <div className="relative w-full h-80 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              
             
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-border shadow-sm flex items-center justify-center text-slate-400 mt-[-40px]">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="text-xs font-bold uppercase tracking-wider text-primary-foreground/90 mb-1">{department}</div>
            <h3 className="text-2xl font-bold mb-1 leading-tight">{name}</h3>
            <p className="text-sm text-white/80 font-medium">{role}</p>
          </div>
          
          <div className="absolute top-4 right-4">
             <div className="bg-[#0F2E4E]/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                {experience} Exp
             </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 flex flex-col flex-grow bg-background">
          
          <div className="mb-6">
            <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-3">Qualifications</h4>
            <div className="flex flex-wrap gap-2">
              {qualifications.map((qual, idx) => (
                <span key={idx} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {qual}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-3">Specializations</h4>
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec, idx) => (
                <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {achievements.length > 0 && (
            <div className="mb-6 flex-grow">
              <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start text-sm text-paragraph">
                    <svg className="w-4 h-4 text-accent mt-0.5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-auto pt-6 border-t border-border space-y-3">
            {teachingMethod && (
              <div>
                <span className="block text-[10px] uppercase font-bold text-paragraph tracking-wider mb-1">Teaching Method</span>
                <p className="text-sm text-heading font-medium">{teachingMethod}</p>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4">
              {languages.length > 0 && (
                <div>
                  <span className="block text-[10px] uppercase font-bold text-paragraph tracking-wider mb-1">Languages</span>
                  <p className="text-sm text-heading font-medium">{languages.join(", ")}</p>
                </div>
              )}
              {availability && (
                <div>
                  <span className="block text-[10px] uppercase font-bold text-paragraph tracking-wider mb-1">Availability</span>
                  <p className="text-sm text-heading font-medium">{availability}</p>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </HoverLift>
  );
}
