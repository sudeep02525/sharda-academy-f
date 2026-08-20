"use client";

import React, { useState, useEffect } from "react";
import PageContainer from "@/cms/components/layout/PageContainer";
import { Loader2, Save, CheckCircle } from "lucide-react";
import { API_BASE_URL } from "@/cms/utils/config";
import CloudinaryUpload from "@/cms/components/cms/shared/CloudinaryUpload";

const DEFAULT_DATA = {
  enabled: false,
  imageUrl: "",
  imagePublicId: "",
  startDate: "",
  endDate: "",
  displayFrequency: "once_per_session" // every_load, once_per_session, once_per_day
};

export default function PopupCMSPage() {
  const [data, setData] = useState(DEFAULT_DATA);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/website/popup`);
      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          setData(prev => ({ ...prev, ...json.data }));
        }
      }
    } catch (err) {
      console.error("Failed to fetch popup data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async (dataToSave = data) => {
    setIsSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/website/popup`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: dataToSave, isPublished: true }),
      });
      if (!res.ok) {
        throw new Error("Failed to save");
      }
    } catch (err) {
      console.error("Failed to save popup data:", err);
    }

    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setData(prev => ({ ...prev, [name]: val }));
  };

  const handleImageChange = (url, publicId) => {
    const newData = { ...data, imageUrl: url, imagePublicId: publicId };
    setData(newData);
    // Auto-save when image changes to prevent orphaned Cloudinary assets
    handleSave(newData);
  };

  if (isLoading) {
    return (
      <PageContainer>
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-8 h-8 animate-spin text-[#f1af3c]" />
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start sm:items-center justify-between animate-fade-in-up">
        <div>
          <h1 className="text-2xl font-black text-navy uppercase tracking-tight">Website Popup</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
            Manage promotional image announcements
          </p>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <button 
            onClick={() => handleSave(data)}
            disabled={isSaving}
            className="group relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#f1af3c] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-[#0a1835] text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(241,175,60,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(241,175,60,0.6)] hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
            {isSaving ? <span className="animate-spin text-lg leading-none">↻</span> : <Save className="w-4 h-4" />}
            <span className="relative z-10">{isSaving ? "Saving..." : "Save Changes"}</span>
          </button>
        </div>
      </div>

      {showToast && (
        <div className="fixed top-20 right-4 z-[9999] animate-fade-in-up flex items-center gap-3 bg-white border border-green-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] rounded-xl p-4 min-w-[300px]">
          <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-slate-800">Changes Saved Successfully</h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Your popup settings are updated.</p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="p-6 space-y-8">
          
          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div>
              <h3 className="text-sm font-bold text-navy">Enable Popup</h3>
              <p className="text-xs text-slate-500 mt-1">Toggle whether the popup is shown on the public website.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" name="enabled" checked={data.enabled} onChange={handleChange} className="sr-only" />
              <div className={`w-11 h-6 rounded-full transition-colors relative ${data.enabled ? 'bg-green-500' : 'bg-slate-200'}`}>
                <div className={`absolute top-[2px] left-[2px] bg-white border border-slate-300 rounded-full h-5 w-5 transition-transform ${data.enabled ? 'translate-x-full border-white' : ''}`}></div>
              </div>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-4">Promotional Image</h3>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Upload an optimized image containing all your promotional content. A clean, text-embedded image works best. This is the only content that will appear in the popup.
                </p>
                <CloudinaryUpload 
                  imageUrl={data.imageUrl}
                  publicId={data.imagePublicId}
                  onChange={handleImageChange}
                  label="Popup Image"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-4">Configuration</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Display Frequency</label>
                  <select 
                    name="displayFrequency"
                    value={data.displayFrequency}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none"
                  >
                    <option value="once_per_session">Once per session (Recommended)</option>
                    <option value="once_per_day">Once per day</option>
                    <option value="every_load">Every page load</option>
                  </select>
                  <p className="text-[10px] text-slate-500 mt-1">Controls how often the popup appears for the same visitor.</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Start Date (Optional)</label>
                    <input 
                      type="date"
                      name="startDate"
                      value={data.startDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">End Date (Optional)</label>
                    <input 
                      type="date"
                      name="endDate"
                      value={data.endDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-500">Leave dates empty to show the popup immediately and indefinitely.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </PageContainer>
  );
}
