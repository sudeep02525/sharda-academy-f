"use client";

import React, { useState, useEffect } from "react";
import FormActions from "./FormActions";
import IconSelect from "./IconSelect";

import { API_BASE_URL } from "@/cms/utils/config";

export default function HeroEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    badge: "",
    title: "",
    description: "",
  });

  // Fetch data on mount
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/hero`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setFormData({
              badge: content.data.badge || "",
              title: content.data.title || "",
              description: content.data.description || "",
            });
            return; // Successfully loaded from DB
          }
        }
        // If we reach here, it means DB is empty or returned 404
        setFormData({
          badge: "Building Academic Success Since 2021",
          title: "Build a Strong Foundation for Success.",
          description: "Expert coaching for Classes 1–12, Science & Commerce with experienced faculty, smart classrooms and result-oriented learning.",
        });
      } catch (error) {
        console.error("Failed to fetch hero data from API", error);
        // Fallback on error
        setFormData({
          badge: "Building Academic Success Since 2021",
          title: "Build a Strong Foundation for Success.",
          description: "Expert coaching for Classes 1–12, Science & Commerce with experienced faculty, smart classrooms and result-oriented learning.",
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchHeroData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/home/hero`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData, isPublished: true }),
      });
      if (!res.ok) throw new Error("Failed to save");
      // Could show a local success toast here if needed
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save changes to the server.");
    } finally {
      setIsSaving(false);
    }
  };

  // Listen to global save button clicks from the main layout
  useEffect(() => {
    const handleGlobalSaveEvent = () => {
      handleSave();
    };
    window.addEventListener('global-save-triggered', handleGlobalSaveEvent);
    return () => window.removeEventListener('global-save-triggered', handleGlobalSaveEvent);
  }, [formData]); // re-bind when formData changes so it saves the latest data

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading hero data...</div>;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-black text-navy uppercase tracking-tight mb-6">Hero Section Editor</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Badge Text</label>
            <input 
              type="text" 
              name="badge"
              value={formData.badge}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50" 
              placeholder="e.g. Building Academic Success Since 2021" 
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Main Title</label>
            <textarea 
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 min-h-[80px]" 
              placeholder="e.g. Build a Strong Foundation for Success." 
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Description</label>
            <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 min-h-[100px]" 
              placeholder="e.g. Expert coaching for Classes 1–12..." 
            />
          </div>

        </div>

      </div>

      <FormActions onSave={handleSave} onReset={() => {}} onPreview={() => {}} isSaving={isSaving} />
    </div>
  );
}
