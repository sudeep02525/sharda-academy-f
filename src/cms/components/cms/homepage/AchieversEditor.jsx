"use client";

import React, { useState, useEffect } from "react";
import FormActions from "./FormActions";
import CloudinaryUpload from "../shared/CloudinaryUpload";
import { API_BASE_URL } from "@/cms/utils/config";

const DEFAULT_ACHIEVERS = {
  title: "Our Proud Achievers",
  description: "Meet our top scoring students who have made us proud in recent board examinations.",
  rankers: [
    { name: "Rahul Deshmukh", category: "SSC Board", score: "95.5%", year: "2025", imageUrl: "" },
    { name: "Sneha Patil", category: "HSC Commerce", score: "96%", year: "2025", imageUrl: "" },
    { name: "Vikram Singh", category: "Class 8th Foundation", score: "98%", year: "2025", imageUrl: "" }
  ]
};

export default function AchieversEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [title, setTitle] = useState(DEFAULT_ACHIEVERS.title);
  const [description, setDescription] = useState(DEFAULT_ACHIEVERS.description);
  const [achievers, setAchievers] = useState(DEFAULT_ACHIEVERS.rankers);

  useEffect(() => {
    const fetchAchievers = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/achievers`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setTitle(content.data.title || DEFAULT_ACHIEVERS.title);
            setDescription(content.data.description || DEFAULT_ACHIEVERS.description);
            if (content.data.rankers && content.data.rankers.length > 0) {
              setAchievers(content.data.rankers);
            }
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch achievers data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAchievers();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const data = { title, description, rankers: achievers };
      const res = await fetch(`${API_BASE_URL}/api/cms/home/achievers`, {
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
  }, [title, description, achievers]);

  const updateAchiever = (index, fieldOrObj, value) => {
    const newAchievers = [...achievers];
    if (typeof fieldOrObj === 'object') {
      newAchievers[index] = { ...newAchievers[index], ...fieldOrObj };
    } else {
      newAchievers[index][fieldOrObj] = value;
    }
    setAchievers(newAchievers);
  };

  const addAchiever = () => {
    setAchievers([...achievers, { name: "", category: "", score: "", year: "", imageUrl: "", publicId: "" }]);
  };

  const removeAchiever = (index) => {
    setAchievers(achievers.filter((_, i) => i !== index));
  };

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading achievers data...</div>;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-black text-navy uppercase tracking-tight mb-6">Achievers Editor</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Title</label>
            <input 
              type="text" 
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Description</label>
            <textarea 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 min-h-[80px]" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Top Rankers</h3>
          </div>
          
          <div className="space-y-4">
            {achievers.map((item, i) => (
              <div key={i} className="flex flex-col lg:flex-row items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="cursor-move text-slate-300 hover:text-slate-500 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                </div>
                
                <div className="w-full lg:w-48 shrink-0">
                  <CloudinaryUpload 
                    imageUrl={item.imageUrl} 
                    publicId={item.publicId} 
                    onChange={(url, pId) => {
                      updateAchiever(i, { imageUrl: url, publicId: pId });
                    }} 
                  />
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Name</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.name} onChange={(e) => updateAchiever(i, 'name', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Category / Board</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.category} onChange={(e) => updateAchiever(i, 'category', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Score</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.score} onChange={(e) => updateAchiever(i, 'score', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Year</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.year} onChange={(e) => updateAchiever(i, 'year', e.target.value)} />
                  </div>
                </div>

                <div className="w-full lg:w-auto flex justify-end mt-4 lg:mt-5 shrink-0">
                  <button type="button" onClick={() => removeAchiever(i)} className="text-red-500 hover:text-red-700 text-xs font-bold uppercase tracking-wider">Delete</button>
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
