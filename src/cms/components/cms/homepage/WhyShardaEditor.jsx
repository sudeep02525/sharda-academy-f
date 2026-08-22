"use client";

import React, { useState, useEffect } from "react";
import FormActions from "./FormActions";
import IconSelect from "./IconSelect";

import { API_BASE_URL } from "@/cms/utils/config";

const DEFAULT_FEATURES = [
  { title: "Small Batch Size", description: "Limited students per batch to ensure maximum focus and a better learning environment.", icon: "Users" },
  { title: "Individual Attention", description: "Personalized mentoring and performance tracking for every single student.", icon: "Target" },
  { title: "Experienced Faculty", description: "Learn from top educators, ex-IITians, and subject matter experts.", icon: "GraduationCap" },
  { title: "Weekly Tests", description: "Regular assessments modeled on the latest board exam patterns.", icon: "ClipboardList" },
  { title: "Doubt Solving", description: "Dedicated daily doubt-clearing sessions to ensure 100% concept clarity.", icon: "MessageCircle" },
  { title: "Smart Classrooms", description: "Interactive digital panels and 3D visual aids for better understanding.", icon: "MonitorPlay" },
  { title: "Biometric Attendance", description: "Strict attendance tracking with automated SMS alerts sent to parents.", icon: "Fingerprint" },
  { title: "Parent Updates", description: "Monthly Parent-Teacher Meetings (PTM) and weekly progress reports.", icon: "MessageSquare" }
];

export default function WhyShardaEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [title, setTitle] = useState("Why Sharda Academy?");
  const [description, setDescription] = useState("We focus on individual growth, regular assessments, and modern infrastructure to ensure every student achieves their highest potential.");
  const [features, setFeatures] = useState(DEFAULT_FEATURES);

  // Fetch data on mount
  useEffect(() => {
    const fetchWhyShardaData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/why-sharda`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setTitle(content.data.title || "Why Sharda Academy?");
            setDescription(content.data.description || "We focus on individual growth, regular assessments, and modern infrastructure to ensure every student achieves their highest potential.");
            if (content.data.features && content.data.features.length > 0) {
              setFeatures(content.data.features);
            }
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch why-sharda data from API", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchWhyShardaData();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const data = { title, description, features };
      const res = await fetch(`${API_BASE_URL}/api/cms/home/why-sharda`, {
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

  // Listen to global save button clicks
  useEffect(() => {
    const handleGlobalSaveEvent = () => {
      handleSave();
    };
    window.addEventListener('global-save-triggered', handleGlobalSaveEvent);
    return () => window.removeEventListener('global-save-triggered', handleGlobalSaveEvent);
  }, [title, description, features]);

  const updateFeature = (index, field, value) => {
    const newFeatures = [...features];
    newFeatures[index][field] = value;
    setFeatures(newFeatures);
  };

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading why sharda data...</div>;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-black text-navy uppercase tracking-tight mb-6">Why Sharda Academy Editor</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50" 
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 min-h-[80px]" 
          />
        </div>

        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Feature Cards (Fixed 8 Cards)</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 relative group">
                <div className="absolute top-4 right-4 flex items-center gap-2">
                   <button type="button" className="cursor-move text-slate-300 hover:text-slate-500" title="Drag to reorder">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                   </button>
                </div>
                
                <div className="space-y-3 pr-12">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Title</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm" 
                      value={item.title} 
                      onChange={(e) => updateFeature(i, 'title', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Description</label>
                    <textarea 
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm min-h-[60px]" 
                      value={item.description}
                      onChange={(e) => updateFeature(i, 'description', e.target.value)} 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Icon</label>
                    <IconSelect value={item.icon} onChange={(val) => updateFeature(i, 'icon', val)} />
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
