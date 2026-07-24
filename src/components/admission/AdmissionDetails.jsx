"use client";

import { REQUIRED_DOCUMENTS } from "@/constants/admissionData";
import { Fade } from "@/components/animations/Fade";

export function AdmissionDetails({ data, docs }) {
  const documents = docs || REQUIRED_DOCUMENTS;

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          <div className="space-y-12">
            
            <Fade direction="right" delay={0.1}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-heading">Eligibility Criteria</h3>
                </div>
                <p className="text-paragraph leading-relaxed">
                  {data?.criteria || "Students from Class 1 to 12 are eligible to apply."}
                </p>
              </div>
            </Fade>

            <Fade direction="right" delay={0.2}>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-heading">Fee Structure</h3>
                </div>
                <p className="text-paragraph leading-relaxed mb-6">
                  For detailed information regarding course fees, payment schedules, and other related charges, please download our official fee structure document.
                </p>
                {data?.feeStructurePdfUrl ? (
                  <a href={data.feeStructurePdfUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-[#0F2E4E] text-sm font-bold rounded-xl hover:bg-primary-hover shadow-sm transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    Download Fee Structure PDF
                  </a>
                ) : (
                  <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-400 text-sm font-bold rounded-xl cursor-not-allowed">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    Fee Structure Unavailable
                  </div>
                )}
              </div>
            </Fade>

          </div>

          <div className="space-y-12">
            
            <Fade direction="left" delay={0.1}>
              <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-heading mb-6 flex items-center gap-3">
                   <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                   Required Documents
                </h3>
                <ul className="space-y-4">
                  {documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start text-paragraph">
                      <svg className="w-5 h-5 text-accent mr-3 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      {doc}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    * Originals will be verified physically before final enrollment. Only photocopies are required for initial processing.
                  </p>
                </div>
              </div>
            </Fade>

            <Fade direction="left" delay={0.2}>
              <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8">
                 <h3 className="text-2xl font-bold text-heading mb-4">Fee Structure</h3>
                 <p className="text-paragraph leading-relaxed mb-6">
                   Fees vary based on the chosen course, duration, and scholarship tier. For detailed breakdowns and installment plans, please download our comprehensive brochure.
                 </p>
                 <button className="text-primary font-bold hover:underline inline-flex items-center">
                   Download Fee Structure PDF
                   <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                 </button>
              </div>
            </Fade>

          </div>

        </div>

      </div>
    </section>
  );
}
