"use client";

import React, { useState, useEffect } from "react";
import PageContainer from "@/cms/components/layout/PageContainer";
import { Loader2, Save, CheckCircle, Plus, Trash2, GripVertical } from "lucide-react";
import { API_BASE_URL } from "@/cms/utils/config";
import IconPicker from "@/cms/components/ui/IconPicker";
import RichTextEditor from "@/cms/components/ui/RichTextEditor";

const DEFAULT_DATA = {
  sections: [
    { id: "1", title: "1. Acceptance of Terms", icon: "Handshake", content: "By accessing the Sharda Academy website..." }
  ]
};

const ICONS_LIST = [
  "FileText", "Server", "Settings", "Share2", "Lock", "UserCheck", "Eye", "Mail", 
  "Handshake", "FileSignature", "Landmark", "Users", "Lightbulb", "AlertTriangle", "Gavel", "Shield",
  "Book", "Briefcase", "Camera", "CheckCircle", "Clipboard", "Clock", "Code", "Compass",
  "CreditCard", "Database", "FileQuestion", "Flag", "Folder", "Globe", "Heart", "Home",
  "Image", "Info", "Link", "Map", "MessageCircle", "Phone", "Star", "Target", "TrendingUp",
  "Zap", "Award", "Bookmark", "Calendar", "Cloud", "Headphones", "Key", "MapPin"
];

export default function TermsCMSPage() {
  const [data, setData] = useState(DEFAULT_DATA);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/legal/terms`);
      if (res.ok) {
        const json = await res.json();
        if (json.data && json.data.sections) {
          setData(json.data);
        }
      }
    } catch (err) {
      console.error("Failed to fetch terms data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/legal/terms`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, isPublished: true }),
      });
      if (res.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (err) {
      console.error("Failed to save terms data:", err);
    } finally {
      setIsSaving(false);
    }
  };

  const updateSection = (index, field, value) => {
    const newSections = [...data.sections];
    newSections[index][field] = value;
    setData({ ...data, sections: newSections });
  };

  const addSection = () => {
    setData({
      ...data,
      sections: [
        ...data.sections,
        { id: Date.now().toString(), title: "New Section", icon: "FileText", content: "" }
      ]
    });
  };

  const removeSection = (index) => {
    const newSections = data.sections.filter((_, i) => i !== index);
    setData({ ...data, sections: newSections });
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
      <div className="flex flex-col lg:flex-row gap-6 mb-8 items-start lg:items-center justify-between animate-fade-in-up">
        <div>
          <h1 className="text-2xl font-black text-navy uppercase tracking-tight">Manage Terms & Conditions</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
            Edit the sections of your Terms & Conditions page
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#f1af3c] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-[#0a1835] text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-[0_8px_20px_-6px_rgba(241,175,60,0.5)]"
          >
            {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {showToast && (
        <div className="fixed top-20 right-4 z-[9999] animate-fade-in-up flex items-center gap-3 bg-white border border-green-200 shadow-xl rounded-xl p-4">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <div>
            <h4 className="text-sm font-bold text-slate-800">Changes Saved</h4>
            <p className="text-xs text-slate-500 font-medium">Terms & Conditions updated.</p>
          </div>
        </div>
      )}

      <div className="space-y-6 max-w-4xl">
        {data.sections.map((section, index) => (
          <div key={section.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-4">
            <div className="mt-2 text-slate-300 cursor-move">
              <GripVertical className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Section Title</label>
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => updateSection(index, "title", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#f1af3c] outline-none text-sm font-semibold"
                  />
                </div>
                <div className="w-48">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Icon</label>
                  <IconPicker
                    value={section.icon}
                    onChange={(val) => updateSection(index, "icon", val)}
                    iconsList={ICONS_LIST}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Content</label>
                <RichTextEditor
                  value={section.content}
                  onChange={(val) => updateSection(index, "content", val)}
                />
              </div>
            </div>
            <button 
              onClick={() => removeSection(index)}
              className="mt-8 w-10 h-10 rounded-xl bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-colors shrink-0"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}

        <button 
          onClick={addSection}
          className="w-full py-4 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 hover:border-[#f1af3c] hover:text-[#f1af3c] hover:bg-amber-50/50 flex items-center justify-center gap-2 font-bold transition-all"
        >
          <Plus className="w-5 h-5" />
          ADD NEW SECTION
        </button>
      </div>
    </PageContainer>
  );
}
