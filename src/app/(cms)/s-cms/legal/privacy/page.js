"use client";

import React, { useState } from "react";
import PageContainer from "@/cms/components/layout/PageContainer";
import { useForm } from "react-hook-form";
import { 
  Shield, Save, FileLock 
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [isSaving, setIsSaving] = useState(false);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      content: "# Privacy Policy\n\nAt Sharda Academy, we are committed to protecting your privacy.\n\n## 1. Information We Collect\nWe collect information you provide directly to us when you fill out an admission form or contact us.\n\n## 2. How We Use Information\nWe use the information we collect to communicate with you about courses and admissions."
    }
  });

  const onSubmit = (data) => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("Privacy Policy Saved!");
    }, 1000);
  };

  return (
    <PageContainer>
      <div className="flex flex-col lg:flex-row gap-6 mb-6 items-start lg:items-center justify-between animate-fade-in-up">
        <div>
          <h1 className="text-2xl font-black text-navy uppercase tracking-tight">Privacy Policy</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Manage website privacy policy content (Markdown supported)</p>
        </div>
        <button 
          onClick={handleSubmit(onSubmit)}
          disabled={isSaving}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#0a1835] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl hover:bg-navy-light transition-colors shadow-lg shadow-navy/20 disabled:opacity-70"
        >
          {isSaving ? <span className="animate-spin text-lg">↻</span> : <Save className="w-4 h-4" />}
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 animate-fade-in-up">
         <div className="mb-6 pb-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="text-lg font-black text-navy uppercase tracking-wider flex items-center gap-2">
              <FileLock className="w-5 h-5 text-[#f1af3c]" /> Policy Content
            </h2>
            <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-lg">Markdown Supported</span>
         </div>
         <textarea 
            rows={20}
            {...register("content")}
            className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-sm font-mono text-slate-700 focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 transition-all resize-none"
         />
      </div>
    </PageContainer>
  );
}
