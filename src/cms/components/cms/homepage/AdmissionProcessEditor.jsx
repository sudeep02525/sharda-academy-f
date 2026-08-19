"use client";

import React, { useState } from "react";
import FormActions from "./FormActions";
import IconSelect from "./IconSelect";

export default function AdmissionProcessEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [steps, setSteps] = useState([
    { title: "Visit Academy", description: "Take a campus tour and explore our facilities.", icon: "School" },
    { title: "Counselling", description: "One-on-one session to understand student needs.", icon: "Users" },
    { title: "Demo Class", description: "Experience our teaching methodology live.", icon: "MonitorPlay" },
    { title: "Admission Confirmed", description: "Complete the formalities and start learning.", icon: "Award" }
  ]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-black text-navy uppercase tracking-tight mb-6">Admission Process Editor</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Title</label>
            <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50" defaultValue="Simple Admission Process" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Description</label>
            <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 min-h-[80px]" defaultValue="We've made our enrollment process transparent, straightforward, and parent-friendly." />
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Process Steps (Max 4)</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((item, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 relative group">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                   <button type="button" className="cursor-move text-slate-300 hover:text-slate-500">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                   </button>
                   <button type="button" className="text-red-400 hover:text-red-600">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                   </button>
                </div>
                
                <div className="space-y-3 pr-12">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Step {i + 1} Title</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm" defaultValue={item.title} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Description</label>
                    <textarea className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm min-h-[60px]" defaultValue={item.description} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Icon</label>
                    <IconSelect value={item.icon} onChange={() => {}} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FormActions onSave={() => setIsSaving(true)} onReset={() => {}} onPreview={() => {}} isSaving={isSaving} />
    </div>
  );
}
