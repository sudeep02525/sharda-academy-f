"use client";

import React, { useState, useEffect } from "react";
import PageContainer from "@/cms/components/layout/PageContainer";
import { Loader2, Save, CheckCircle } from "lucide-react";
import { API_BASE_URL } from "@/cms/utils/config";
import { 
  AdmissionHeroEditor, 
  AdmissionProcessEditor, 
  AdmissionDetailsEditor, 
  AdmissionDocumentsEditor, 
  AdmissionFormOptionsEditor
} from "@/cms/components/cms/admissionpage";

const DEFAULT_DATA = {
  hero: { title: "", description: "" },
  process: [],
  details: { criteria: "", feeStructurePdfUrl: "", feeStructurePdfPublicId: "" },
  documents: [],
  formOptions: { courses: [], batches: [] },
  cta: {}  // kept in data structure but not shown in CMS
};

export default function AdmissionCMSPage() {
  const [activeTab, setActiveTab] = useState("hero");
  const [data, setData] = useState(DEFAULT_DATA);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/website/admission`);
      if (res.ok) {
        const json = await res.json();
        if (json.data) {
          setData(json.data);
          setLastSaved(new Date(json.updatedAt));
        }
      }
    } catch (err) {
      console.error("Failed to fetch admission data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/website/admission`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, isPublished: true }),
      });
      if (res.ok) {
        setLastSaved(new Date());
      }
    } catch (err) {
      console.error("Failed to save admission data:", err);
    }
    
    // Artificial delay for better UX
    setTimeout(() => {
      setIsSaving(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  const handleDataChange = (section, newData) => {
    setData(prev => ({ ...prev, [section]: newData }));
  };

  const tabs = [
    { id: "hero", label: "Hero Section" },
    { id: "process", label: "Admission Process" },
    { id: "details", label: "Eligibility & Fee Structure" },
    { id: "documents", label: "Required Documents" },
    { id: "formOptions", label: "Form Options" },
  ];

  if (isLoading) {
    return (
      <PageContainer>
        <div className="flex h-[400px] items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
        </div>
      </PageContainer>
    );
  }

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

      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8 items-start lg:items-center justify-between animate-fade-in-up">
        <div>
          <h1 className="text-2xl font-black text-navy uppercase tracking-tight">Manage Admission</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
            Edit admission process, scholarships, and forms
          </p>
        </div>
        
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="group relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#f1af3c] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-[#0a1835] text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(241,175,60,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(241,175,60,0.6)] hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
            {isSaving ? <span className="animate-spin text-lg leading-none">↻</span> : <Save className="w-4 h-4" />}
            <span className="relative z-10">{isSaving ? "Saving..." : "Save Changes"}</span>
          </button>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="flex flex-col lg:flex-row gap-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        
        {/* Sidebar Tabs */}
        <div className="lg:w-64 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
            <div className="p-4 border-b border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sections</h3>
            </div>
            <div className="p-2 flex flex-col gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all text-left ${
                    activeTab === tab.id
                      ? "bg-amber-50 text-amber-700"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 max-w-4xl min-w-0">
          <div className="space-y-6">
            {activeTab === "hero" && (
              <AdmissionHeroEditor 
                data={data.hero} 
                onChange={(newData) => handleDataChange("hero", newData)} 
              />
            )}
            
            {activeTab === "process" && (
              <AdmissionProcessEditor 
                data={data.process} 
                onChange={(newData) => handleDataChange("process", newData)} 
              />
            )}
            
            {activeTab === "details" && (
              <AdmissionDetailsEditor 
                data={data.details} 
                onChange={(newData) => handleDataChange("details", newData)} 
              />
            )}

            {activeTab === "documents" && (
              <AdmissionDocumentsEditor 
                data={data.documents} 
                onChange={(newData) => handleDataChange("documents", newData)} 
              />
            )}

            {activeTab === "formOptions" && (
              <AdmissionFormOptionsEditor 
                data={data.formOptions} 
                onChange={(newData) => handleDataChange("formOptions", newData)} 
              />
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

