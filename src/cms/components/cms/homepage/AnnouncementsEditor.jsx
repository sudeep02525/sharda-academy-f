"use client";

import React, { useState, useEffect } from "react";
import FormActions from "./FormActions";
import CloudinaryUpload from "../shared/CloudinaryUpload";

import { API_BASE_URL } from "@/cms/utils/config";

const DEFAULT_ANNOUNCEMENTS = [
  { 
    title: `Admissions Open for 2026-27 Batch`, 
    publishDate: "June 10, 2026", 
    category: "Admissions",
    shortDescription: "Secure your seat early. Admissions are now open across all classes from 1st to 12th.",
    readingTime: "2 min read",
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784738968/sharda_academy_announcements/njrmsubtjd532ye6lobn.jpg",
    publicId: "sharda_academy_announcements/njrmsubtjd532ye6lobn"
  },
  { 
    title: "Outstanding 100% Board Results", 
    publishDate: "May 25, 2026", 
    category: "Results",
    shortDescription: "We are proud to announce that our students have achieved a 100% pass rate with top grades in the recent board examinations.",
    readingTime: "4 min read",
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784738969/sharda_academy_announcements/llo6xgxtumvbqqyk7wws.jpg",
    publicId: "sharda_academy_announcements/llo6xgxtumvbqqyk7wws"
  },
  { 
    title: "New Smart Panels Installed", 
    publishDate: "May 15, 2026", 
    category: "Infrastructure",
    shortDescription: "We are upgrading our classrooms with interactive smart panels to provide a highly interactive learning experience.",
    readingTime: "3 min read",
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784738970/sharda_academy_announcements/zpbwvdedjepo0sbrml3v.jpg",
    publicId: "sharda_academy_announcements/zpbwvdedjepo0sbrml3v"
  }
];

export default function AnnouncementsEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [announcements, setAnnouncements] = useState(DEFAULT_ANNOUNCEMENTS);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/announcements`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data && content.data.announcements && content.data.announcements.length > 0) {
            setAnnouncements(content.data.announcements);
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch announcements data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAnnouncements();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const data = { announcements };
      const res = await fetch(`${API_BASE_URL}/api/cms/home/announcements`, {
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
  }, [announcements]);

  const updateAnnouncement = (index, fieldOrObj, value) => {
    const newAnnouncements = [...announcements];
    if (typeof fieldOrObj === 'object') {
      newAnnouncements[index] = { ...newAnnouncements[index], ...fieldOrObj };
    } else {
      newAnnouncements[index][fieldOrObj] = value;
    }
    setAnnouncements(newAnnouncements);
  };

  const addAnnouncement = () => {
    setAnnouncements([...announcements, { title: "", publishDate: "", category: "", shortDescription: "", readingTime: "", imageUrl: "", publicId: "" }]);
  };

  const removeAnnouncement = (index) => {
    setAnnouncements(announcements.filter((_, i) => i !== index));
  };

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading announcements data...</div>;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-black text-navy uppercase tracking-tight">Announcements Editor</h2>
      </div>
      
      <div className="space-y-4">
        {announcements.map((item, i) => (
          <div key={i} className="flex flex-col lg:flex-row items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="cursor-move text-slate-300 hover:text-slate-500 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
            </div>
            
            <div className="w-full lg:w-48 shrink-0">
              <CloudinaryUpload 
                imageUrl={item.imageUrl} 
                publicId={item.publicId} 
                onChange={(url, pId) => {
                  updateAnnouncement(i, { imageUrl: url, publicId: pId });
                }} 
              />
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Title</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.title} onChange={(e) => updateAnnouncement(i, 'title', e.target.value)} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Short Description</label>
                <textarea className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm min-h-[60px] focus:outline-none focus:border-[#f1af3c]" value={item.shortDescription} onChange={(e) => updateAnnouncement(i, 'shortDescription', e.target.value)} />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Category</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.category} onChange={(e) => updateAnnouncement(i, 'category', e.target.value)} />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Publish Date</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.publishDate} onChange={(e) => updateAnnouncement(i, 'publishDate', e.target.value)} />
              </div>
            </div>

            <div className="w-full lg:w-auto flex justify-end mt-4 lg:mt-5 shrink-0">
              <button type="button" onClick={() => removeAnnouncement(i)} className="text-red-500 hover:text-red-700 text-xs font-bold uppercase tracking-wider">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <FormActions onSave={handleSave} onReset={() => {}} onPreview={() => {}} isSaving={isSaving} />
    </div>
  );
}
