"use client";

import React, { useState, useEffect } from "react";
import PageContainer from "@/cms/components/layout/PageContainer";
import { Save, CheckCircle } from "lucide-react";
import { 
  AboutHeroEditor, 
  MissionVisionEditor, 
  DirectorMessageEditor, 
  CoreValuesEditor, 
  TimelineEditor, 
  WhyParentsChooseUsEditor 
} from "@/cms/components/cms/aboutpage";

const TABS = [
  { id: "hero", label: "Hero Section" },
  { id: "mission", label: "Mission & Vision" },
  { id: "director", label: "Director's Message" },
  { id: "corevalues", label: "Core Values" },
  { id: "timeline", label: "Timeline / History" },
  { id: "whychooseus", label: "Why Parents Choose Us" },
];

export default function AboutpageCMS() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    } else {
      window.history.replaceState(null, '', '?tab=hero');
    }
  }, []);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    window.history.pushState(null, '', `?tab=${tabId}`);
  };

  const handleGlobalSave = () => {
    setIsSaving(true);
    // Dispatch custom event to trigger save in active child tab if needed
    window.dispatchEvent(new Event('global-save-triggered'));
    
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  return (
    <PageContainer>
      {/* Custom UI Toast */}
      {showToast && (
        <div className="fixed top-20 right-4 z-[9999] animate-fade-in-up flex items-center gap-3 bg-white border border-green-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] rounded-xl p-4 min-w-[300px]">
          <CheckCircle className="w-6 h-6 text-green-500 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-slate-800">Changes Saved Successfully</h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Your updates have been applied.</p>
          </div>
        </div>
      )}
      <div className="flex flex-col lg:flex-row gap-6 mb-6 items-start lg:items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-navy uppercase tracking-tight">Manage About Page</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Control the about page content & sections</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleGlobalSave}
            disabled={isSaving}
            className="group relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#f1af3c] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-[#0a1835] text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(241,175,60,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(241,175,60,0.6)] hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
            {isSaving ? <span className="animate-spin text-lg leading-none">↻</span> : <Save className="w-4 h-4" />}
            <span className="relative z-10">{isSaving ? "Saving..." : "Save Changes"}</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Sidebar Tabs */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm sticky top-24">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-3 mb-3">About Page Sections</h3>
            <nav className="space-y-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab === tab.id 
                      ? "bg-[#0a1835] text-white shadow-md shadow-navy/20" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-navy"
                  }`}
                >
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 min-w-0">
          <div className="animate-fade-in-up">
            {activeTab === "hero" && <AboutHeroEditor />}
            {activeTab === "mission" && <MissionVisionEditor />}
            {activeTab === "director" && <DirectorMessageEditor />}
            {activeTab === "corevalues" && <CoreValuesEditor />}
            {activeTab === "timeline" && <TimelineEditor />}
            {activeTab === "whychooseus" && <WhyParentsChooseUsEditor />}
          </div>
        </div>
        
      </div>
    </PageContainer>
  );
}
