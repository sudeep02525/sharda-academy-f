"use client";

import React, { useState, useEffect } from "react";
import FormActions from "./FormActions";

import { API_BASE_URL } from "@/cms/utils/config";

const DEFAULT_DATA = {
  heading: "Start Your Journey With Us",
  description: "Admissions are now open for the 2026 academic session. Contact our counselors to find the right program for you.",
  phone: "+91 93244 44269",
  address: "Sharda Academy, Jankalyan Society, PMG Colony, Mankhurd, Mumbai – 400043"
};

export default function ContactCTAEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [heading, setHeading] = useState(DEFAULT_DATA.heading);
  const [description, setDescription] = useState(DEFAULT_DATA.description);
  const [phone, setPhone] = useState(DEFAULT_DATA.phone);
  const [address, setAddress] = useState(DEFAULT_DATA.address);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/contact-cta`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setHeading(content.data.heading || DEFAULT_DATA.heading);
            setDescription(content.data.description || DEFAULT_DATA.description);
            setPhone(content.data.phone || DEFAULT_DATA.phone);
            setAddress(content.data.address || DEFAULT_DATA.address);
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch contact cta data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContactData();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const data = { heading, description, phone, address };
      const res = await fetch(`${API_BASE_URL}/api/cms/home/contact-cta`, {
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
  }, [heading, description, phone, address]);

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading contact CTA data...</div>;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-black text-navy uppercase tracking-tight mb-6">Contact CTA Editor</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Heading</label>
            <input 
              type="text" 
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50" 
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Description</label>
            <textarea 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 min-h-[80px]" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Phone</label>
            <input 
              type="text" 
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Address</label>
            <input 
              type="text" 
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
      </div>

      <FormActions onSave={handleSave} onReset={() => {}} onPreview={() => {}} isSaving={isSaving} />
    </div>
  );
}
