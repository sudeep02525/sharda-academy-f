"use client";

import React, { useState, useEffect } from "react";
import FormActions from "./FormActions";
import CloudinaryUpload from "../shared/CloudinaryUpload";

import { API_BASE_URL } from "@/cms/utils/config";

const DEFAULT_TESTIMONIALS = {
  sectionBadge: "Success Stories",
  sectionTitle: "What Parents & Students Say",
  sectionDescription: "Real stories of success and transformation from our community of achievers.",
  testimonials: [
    {
      name: "Ravi Verma",
      role: "Parent",
      review: "Sharda Academy completely transformed my son's approach to studying. The faculty is incredibly supportive and the doubt-clearing sessions are a game changer.",
      rating: 5,
      imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784737743/sharda_academy_testimonials/tb1v8ewore2fsunf16cx.jpg",
      publicId: "sharda_academy_testimonials/tb1v8ewore2fsunf16cx",
      displayOrder: 1,
      isActive: true
    },
    {
      name: "Priya Singh",
      role: "Top Ranker (2025)",
      review: "The rigorous testing environment and the personalized mentorship at Sharda Academy were instrumental in my success. Highly recommended!",
      rating: 5,
      imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784737744/sharda_academy_testimonials/bsynsxxsinukt266pvnd.jpg",
      publicId: "sharda_academy_testimonials/bsynsxxsinukt266pvnd",
      displayOrder: 2,
      isActive: true
    },
    {
      name: "Amit Desai",
      role: "Student",
      review: "The crash course was intense but exactly what I needed. The mock tests perfectly simulated the real exam difficulty.",
      rating: 4,
      imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784737746/sharda_academy_testimonials/n96chxfrmxde1rwl0ugs.jpg",
      publicId: "sharda_academy_testimonials/n96chxfrmxde1rwl0ugs",
      displayOrder: 3,
      isActive: true
    }
  ]
};

export default function TestimonialsEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [sectionBadge, setSectionBadge] = useState(DEFAULT_TESTIMONIALS.sectionBadge);
  const [sectionTitle, setSectionTitle] = useState(DEFAULT_TESTIMONIALS.sectionTitle);
  const [sectionDescription, setSectionDescription] = useState(DEFAULT_TESTIMONIALS.sectionDescription);
  const [testimonials, setTestimonials] = useState(DEFAULT_TESTIMONIALS.testimonials);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/testimonials`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setSectionBadge(content.data.sectionBadge !== undefined ? content.data.sectionBadge : DEFAULT_TESTIMONIALS.sectionBadge);
            setSectionTitle(content.data.sectionTitle || DEFAULT_TESTIMONIALS.sectionTitle);
            setSectionDescription(content.data.sectionDescription || DEFAULT_TESTIMONIALS.sectionDescription);
            if (content.data.testimonials && content.data.testimonials.length > 0) {
              setTestimonials(content.data.testimonials);
            } else {
              setTestimonials([]);
            }
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch testimonials data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  const handleSave = async () => {
    // Frontend validation
    for (let i = 0; i < testimonials.length; i++) {
      const t = testimonials[i];
      if (t.rating < 1 || t.rating > 5) {
        alert(`Testimonial for ${t.name || 'Untitled'} must have a rating between 1 and 5.`);
        return;
      }
      if (!t.displayOrder || t.displayOrder < 1) {
        alert(`Testimonial for ${t.name || 'Untitled'} must have a positive Display Order.`);
        return;
      }
    }

    setIsSaving(true);
    try {
      const data = { sectionBadge, sectionTitle, sectionDescription, testimonials };
      const res = await fetch(`${API_BASE_URL}/api/cms/home/testimonials`, {
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
  }, [sectionBadge, sectionTitle, sectionDescription, testimonials]);

  const updateTestimonial = (index, fieldOrObj, value) => {
    const newTestimonials = [...testimonials];
    if (typeof fieldOrObj === 'object') {
      newTestimonials[index] = { ...newTestimonials[index], ...fieldOrObj };
    } else {
      newTestimonials[index][fieldOrObj] = value;
    }
    setTestimonials(newTestimonials);
  };

  const addTestimonial = () => {
    const maxOrder = testimonials.length > 0 ? Math.max(...testimonials.map(t => Number(t.displayOrder) || 0)) : 0;
    setTestimonials([...testimonials, { 
      name: "", role: "", review: "", rating: 5, imageUrl: "", publicId: "", displayOrder: maxOrder + 1, isActive: true 
    }]);
  };

  const removeTestimonial = (index) => {
    setTestimonials(testimonials.filter((_, i) => i !== index));
  };

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading testimonials data...</div>;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-black text-navy uppercase tracking-tight mb-6">Testimonials Editor</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Badge (Optional)</label>
            <input 
              type="text" 
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50" 
              value={sectionBadge} 
              onChange={(e) => setSectionBadge(e.target.value)}
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Title</label>
            <input 
              type="text" 
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50" 
              value={sectionTitle} 
              onChange={(e) => setSectionTitle(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Description</label>
            <textarea 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 min-h-[80px]" 
              value={sectionDescription} 
              onChange={(e) => setSectionDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider">Testimonials List</h3>
          </div>
          
          <div className="space-y-4">
            {testimonials.map((item, i) => (
              <div key={i} className="flex flex-col lg:flex-row items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="cursor-move text-slate-300 hover:text-slate-500 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                </div>
                
                <div className="w-full lg:w-48 shrink-0">
                  <CloudinaryUpload 
                    imageUrl={item.imageUrl} 
                    publicId={item.publicId} 
                    onChange={(url, pId) => {
                      updateTestimonial(i, { imageUrl: url, publicId: pId });
                    }} 
                  />
                </div>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Name</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.name} onChange={(e) => updateTestimonial(i, 'name', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Role</label>
                    <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.role} onChange={(e) => updateTestimonial(i, 'role', e.target.value)} />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Review</label>
                    <textarea className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c] min-h-[60px]" value={item.review} onChange={(e) => updateTestimonial(i, 'review', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Rating (1-5)</label>
                    <input type="number" min="1" max="5" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.rating} onChange={(e) => updateTestimonial(i, 'rating', Number(e.target.value))} />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Display Order</label>
                      <input type="number" min="1" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.displayOrder} onChange={(e) => updateTestimonial(i, 'displayOrder', Number(e.target.value))} />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Status</label>
                      <select className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.isActive ? "true" : "false"} onChange={(e) => updateTestimonial(i, 'isActive', e.target.value === "true")}>
                        <option value="true">Active</option>
                        <option value="false">Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-auto flex justify-end mt-4 lg:mt-5 shrink-0">
                  <button type="button" onClick={() => removeTestimonial(i)} className="text-red-500 hover:text-red-700 text-xs font-bold uppercase tracking-wider">Delete</button>
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
