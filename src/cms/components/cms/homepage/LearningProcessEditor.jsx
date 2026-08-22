"use client";

import React, { useState, useEffect } from "react";
import FormActions from "./FormActions";

import { API_BASE_URL } from "@/cms/utils/config";

const DEFAULT_STEPS = [
  { title: "Strong Foundation", desc: "We focus on clearing the basics from the ground up so students understand the core concepts easily." },
  { title: "Regular Revision", desc: "Consistent practice and weekly tests to ensure topics stay fresh in the student's mind." },
  { title: "Doubt Solving", desc: "Dedicated time for students to ask questions freely and clear any confusion immediately." },
  { title: "Parent Updates", desc: "Regular communication with parents to keep them informed about their child's academic progress." }
];

export default function LearningProcessEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [title, setTitle] = useState("The Sharda Way of Learning");
  const [description, setDescription] = useState("A simple, effective, and step-by-step approach designed to bring out the best in every student.");
  const [steps, setSteps] = useState(DEFAULT_STEPS);

  useEffect(() => {
    const fetchLearningProcessData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/learning-process`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setTitle(content.data.title || "The Sharda Way of Learning");
            setDescription(content.data.description || "A simple, effective, and step-by-step approach designed to bring out the best in every student.");
            if (content.data.steps && content.data.steps.length > 0) {
              setSteps(content.data.steps);
            }
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch learning-process data from API", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLearningProcessData();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const data = { title, description, steps };
      const res = await fetch(`${API_BASE_URL}/api/cms/home/learning-process`, {
        credentials: "include",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, isPublished: true }),
      });
      if (!res.ok) throw new Error("Failed to save");
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save changes to the server.");
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    const handleGlobalSaveEvent = () => handleSave();
    window.addEventListener('global-save-triggered', handleGlobalSaveEvent);
    return () => window.removeEventListener('global-save-triggered', handleGlobalSaveEvent);
  }, [title, description, steps]);

  const updateStep = (index, field, value) => {
    const newSteps = [...steps];
    newSteps[index][field] = value;
    setSteps(newSteps);
  };

  const addStep = () => {
    if (steps.length >= 6) return alert("Maximum 6 steps allowed.");
    setSteps([...steps, { title: "", desc: "" }]);
  };

  const removeStep = (index) => {
    if (steps.length <= 1) return alert("At least one step is required.");
    setSteps(steps.filter((_, i) => i !== index));
  };

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading learning process data...</div>;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-black text-navy uppercase tracking-tight mb-6">Learning Process Editor</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Title</label>
          <input 
            type="text" 
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Description</label>
          <textarea 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 min-h-[80px]" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Process Steps (Max 6)</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((item, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 relative group">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                   <button type="button" className="cursor-move text-slate-300 hover:text-slate-500">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                   </button>
                   <button type="button" onClick={() => removeStep(i)} className="text-red-400 hover:text-red-600">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                   </button>
                </div>
                
                <div className="space-y-3 pr-12">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Step {i + 1} Title</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm" 
                      value={item.title}
                      onChange={(e) => updateStep(i, 'title', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Description</label>
                    <textarea 
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm min-h-[60px]" 
                      value={item.desc}
                      onChange={(e) => updateStep(i, 'desc', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FormActions onSave={handleSave} onReset={() => {}} onPreview={() => {}} isSaving={isSaving} />
    </div>
  );
}
