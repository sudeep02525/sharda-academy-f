"use client";

import React, { useState } from "react";
import FormActions from "./FormActions";
import IconSelect from "./IconSelect";

export default function FacilitiesEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [items, setItems] = useState([
    { title: "Air Conditioned Classrooms", icon: "ThermometerSnowflake" },
    { title: "Smart Panel Available", icon: "MonitorPlay" },
    { title: "Biometric Attendance", icon: "Fingerprint" },
    { title: "Doubt Solving", icon: "HelpCircle" }
  ]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-black text-navy uppercase tracking-tight">Facilities Editor</h2>
        <button type="button" className="text-xs font-bold px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 uppercase tracking-wider rounded-lg transition-colors">
          + Add Facility
        </button>
      </div>
      
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="cursor-move text-slate-300 hover:text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Title</label>
              <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm" defaultValue={item.title} />
            </div>
            <div className="w-full sm:w-1/3">
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Icon</label>
              <IconSelect value={item.icon} onChange={() => {}} />
            </div>
            <div className="w-full sm:w-auto flex justify-end mt-4 sm:mt-5">
              <button type="button" className="text-red-500 hover:text-red-700 text-xs font-bold uppercase tracking-wider">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <FormActions onSave={() => setIsSaving(true)} onReset={() => {}} onPreview={() => {}} isSaving={isSaving} />
    </div>
  );
}
