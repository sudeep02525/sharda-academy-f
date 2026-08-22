"use client";

import React, { useState, useEffect } from "react";
import PageContainer from "@/cms/components/layout/PageContainer";
import { Save, CheckCircle } from "lucide-react";
import { API_BASE_URL } from "@/cms/utils/config";
import { 
  HeroEditor, CategoriesEditor, CoursesListEditor, OpportunitiesEditor 
} from "@/cms/components/cms/coursespage";

const TABS = [
  { id: "hero", label: "Hero Section" },
  { id: "categories", label: "Categories" },
  { id: "courses", label: "Courses List" },
  { id: "opportunities", label: "Career Opportunities" },
];

export default function CoursesCMSPage() {
  const [activeTab, setActiveTab] = useState("hero");
  const [data, setData] = useState(null);
  const [isPublishing, setIsPublishing] = useState(false);
  const [lastPublished, setLastPublished] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/cms/academics/courses`)
      .then(res => res.json())
      .then(res => {
        if (res.data) {
          setData(res.data);
          if (res.updatedAt) setLastPublished(new Date(res.updatedAt));
        }
      })
      .catch(console.error);
  }, []);

  const handleDataChange = (section, newData) => {
    setData(prev => ({
      ...prev,
      [section]: newData
    }));
  };

  const [showToast, setShowToast] = useState(false);

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/academics/courses`, {
        credentials: "include",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, isPublished: true }),
      });
      if (res.ok) {
        setLastPublished(new Date());
      }
    } catch (error) {
      console.error("Failed to publish:", error);
    }
    setTimeout(() => {
      setIsPublishing(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 800);
  };

  if (!data) return (
    <PageContainer>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#f1af3c] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Loading Courses CMS...</p>
        </div>
      </div>
    </PageContainer>
  );

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
          <h1 className="text-2xl font-black text-navy uppercase tracking-tight">Manage Courses Page</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Control the courses page content & layout</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handlePublish}
            disabled={isPublishing}
            className="group relative flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#f1af3c] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-[#0a1835] text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(241,175,60,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(241,175,60,0.6)] hover:-translate-y-0.5 disabled:opacity-70 disabled:hover:translate-y-0 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer" />
            {isPublishing ? <span className="animate-spin text-lg leading-none">↻</span> : <Save className="w-4 h-4" />}
            <span className="relative z-10">{isPublishing ? "Saving..." : "Save Changes"}</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="lg:w-64 shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden sticky top-24">
            <div className="p-4 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Page Sections</h2>
            </div>
            <nav className="p-2 flex flex-col gap-1">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-left text-xs font-bold uppercase tracking-wider transition-all rounded-xl ${
                    activeTab === tab.id 
                      ? "bg-[#f1af3c]/10 text-[#f1af3c]" 
                      : "text-slate-400 hover:bg-slate-50 hover:text-navy"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex-1 max-w-4xl">
          {activeTab === 'hero' && <HeroEditor data={data.hero} onChange={(d) => handleDataChange('hero', d)} />}
          {activeTab === 'categories' && <CategoriesEditor data={data.categories} onChange={(d) => handleDataChange('categories', d)} />}
          {activeTab === 'courses' && <CoursesListEditor categories={data.categories || []} data={data.courses} onChange={(d) => handleDataChange('courses', d)} />}
          {activeTab === 'opportunities' && <OpportunitiesEditor data={data.opportunities} onChange={(d) => handleDataChange('opportunities', d)} />}
        </div>
      </div>
    </PageContainer>
  );
}
