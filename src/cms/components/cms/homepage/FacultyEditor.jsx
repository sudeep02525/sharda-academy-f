"use client";

import React, { useState, useEffect } from "react";
import FormActions from "./FormActions";
import CloudinaryUpload from "../shared/CloudinaryUpload";

import { API_BASE_URL } from "@/cms/utils/config";

const DEFAULT_FACULTY = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    qualification: "Ph.D. in Physics",
    experience: "12",
    subjects: ["Physics", "Mechanics"],
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784795271/sharda_academy_official/dln9bysotzefaqkw7kns.jpg",
    publicId: "sharda_academy_official/dln9bysotzefaqkw7kns",
    order: 1
  },
  {
    id: 2,
    name: "Prof. Rajesh Kumar",
    qualification: "M.Sc. Mathematics",
    experience: "15",
    subjects: ["Mathematics", "Calculus"],
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784795272/sharda_academy_official/w5rf8up3ihhs2q68ciaw.jpg",
    publicId: "sharda_academy_official/w5rf8up3ihhs2q68ciaw",
    order: 2
  },
  {
    id: 3,
    name: "Dr. Sneha Patel",
    qualification: "MBBS, M.D.",
    experience: "10",
    subjects: ["Biology", "Botany"],
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784795273/sharda_academy_official/ojesiahpgjrdguz3zvnk.jpg",
    publicId: "sharda_academy_official/ojesiahpgjrdguz3zvnk",
    order: 3
  }
];

export default function FacultyEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [title, setTitle] = useState("Learn from the Experts");
  const [description, setDescription] = useState("Our faculty comprises highly qualified educators and industry experts dedicated to your academic success.");
  const [faculty, setFaculty] = useState(DEFAULT_FACULTY);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/faculty`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            if (content.data.title) setTitle(content.data.title);
            if (content.data.description) setDescription(content.data.description);
            if (content.data.faculty && content.data.faculty.length > 0) {
              const mergedFaculty = DEFAULT_FACULTY.map((defaultMember, idx) => {
                const fetchedMember = content.data.faculty[idx];
                return fetchedMember ? { ...defaultMember, ...fetchedMember } : defaultMember;
              });
              setFaculty(mergedFaculty);
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch faculty data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaculty();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const data = { title, description, faculty };
      const res = await fetch(`${API_BASE_URL}/api/cms/home/faculty`, {
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
  }, [title, description, faculty]);

  const updateFaculty = (index, fieldOrObj, value) => {
    const newFaculty = [...faculty];
    if (typeof fieldOrObj === 'object') {
      newFaculty[index] = { ...newFaculty[index], ...fieldOrObj };
    } else {
      newFaculty[index][fieldOrObj] = value;
    }
    setFaculty(newFaculty);
  };

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading faculty data...</div>;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-black text-navy uppercase tracking-tight">Manage Featured Faculty</h2>
        <p className="text-xs text-slate-500 mt-1 font-medium">Edit the details of the 3 featured faculty members shown on the homepage.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
      
      <div className="space-y-6">
        {faculty.map((member, index) => (
          <div key={member.id || index} className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Faculty Member {index + 1}</h3>
            
            <div className="w-full lg:w-48 shrink-0">
              <CloudinaryUpload 
                imageUrl={member.imageUrl} 
                publicId={member.publicId} 
                onChange={(url, pId) => {
                  updateFaculty(index, { imageUrl: url, publicId: pId });
                }} 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={member.name} 
                  onChange={(e) => updateFaculty(index, 'name', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Qualification</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={member.qualification} 
                  onChange={(e) => updateFaculty(index, 'qualification', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Experience (Years)</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={member.experience} 
                  onChange={(e) => updateFaculty(index, 'experience', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Display Order</label>
                <input 
                  type="number" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={member.order || ""} 
                  onChange={(e) => updateFaculty(index, 'order', e.target.value)}
                />
              </div>
              <div className="md:col-span-3">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Subjects (Comma separated)</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={(member.subjects || []).join(", ")} 
                  onChange={(e) => updateFaculty(index, 'subjects', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <FormActions onSave={handleSave} onReset={() => {}} onPreview={() => {}} isSaving={isSaving} />
    </div>
  );
}
