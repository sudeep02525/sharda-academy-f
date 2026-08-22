"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Camera, Save, Target, Eye, User, Heart, Clock, ThumbsUp } from "lucide-react";
import CloudinaryUpload from "../shared/CloudinaryUpload";
import FormActions from "../homepage/FormActions";
import IconSelect from "../homepage/IconSelect";


import { API_BASE_URL } from "@/cms/utils/config";

export function AboutHeroEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    badge: "ABOUT US",
    heading: "Shaping the Leaders of Tomorrow",
    description: "Since our inception, Sharda Academy has been committed to providing uncompromised, high-quality education that transforms average students into top rankers.",
    stat2Value: "10k+",
    stat2Label: "Students Mentored",
    stat3Value: "50+",
    stat3Label: "Expert Faculty"
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/about/hero`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setFormData(prev => ({ ...prev, ...content.data }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch about hero data", error);
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
      const res = await fetch(`${API_BASE_URL}/api/cms/about/hero`, {
        credentials: "include",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData, isPublished: true }),
      });
      if (!res.ok) throw new Error("Failed to save");
    } catch (error) {
      console.error("Save error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    const handleGlobalSaveEvent = () => handleSave();
    window.addEventListener('global-save-triggered', handleGlobalSaveEvent);
    return () => window.removeEventListener('global-save-triggered', handleGlobalSaveEvent);
  }, [formData]);

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading hero data...</div>;
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
      <div className="mb-6 pb-6 border-b border-slate-100 flex items-center justify-between">
        <h2 className="text-lg font-black text-navy uppercase tracking-wider">Hero Section</h2>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-2">Badge Text</label>
          <input name="badge" value={formData.badge} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 transition-all" />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-2">Heading</label>
          <input name="heading" value={formData.heading} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 transition-all" />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-2">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 transition-all resize-none" />
        </div>
      </div>
    </div>
  );
}

export function MissionVisionEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    mission: "To empower students with the knowledge and confidence to achieve their academic goals.",
    vision: "To be the leading educational institution recognized globally for quality in coaching."
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/about/mission-vision`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setFormData(prev => ({ ...prev, ...content.data }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch mission vision data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/about/mission-vision`, {
        credentials: "include",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData, isPublished: true }),
      });
      if (!res.ok) throw new Error("Failed to save");
    } catch (error) {
      console.error("Save error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    const handleGlobalSaveEvent = () => handleSave();
    window.addEventListener('global-save-triggered', handleGlobalSaveEvent);
    return () => window.removeEventListener('global-save-triggered', handleGlobalSaveEvent);
  }, [formData]);

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading mission & vision data...</div>;
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
      <div className="mb-6 pb-6 border-b border-slate-100">
        <h2 className="text-lg font-black text-navy uppercase tracking-wider flex items-center gap-2"><Target className="w-5 h-5 text-[#f1af3c]" /> Mission & Vision</h2>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Target className="w-3.5 h-3.5 text-blue-500" /> Mission Statement</label>
          <textarea name="mission" value={formData.mission} onChange={handleChange} rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold resize-none" />
        </div>
        <div>
          <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Eye className="w-3.5 h-3.5 text-purple-500" /> Vision Statement</label>
          <textarea name="vision" value={formData.vision} onChange={handleChange} rows={4} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold resize-none" />
        </div>
      </div>
    </div>
  );
}

export function DirectorMessageEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    principalMessage: "Welcome to Sharda Academy. When we started this journey, our goal was simple: to create a coaching environment where students aren't just taught, but personally mentored.\n\nEvery student possesses immense potential. Our role is to unlock that potential by providing the right resources, a scientifically designed curriculum, and the unwavering support of expert faculty.\n\nI personally invite you to become part of our legacy of success. Let us work together to turn your academic dreams into reality.",
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784795274/sharda_academy_official/q4dtrxb6ebwrxexlm1r3.jpg",
    publicId: "sharda_academy_official/q4dtrxb6ebwrxexlm1r3"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/about/director-message`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            setFormData(prev => ({ ...prev, ...content.data }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch director message data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/cms/about/director-message`, {
        credentials: "include",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData, isPublished: true }),
      });
      if (!res.ok) throw new Error("Failed to save");
    } catch (error) {
      console.error("Save error:", error);
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    const handleGlobalSaveEvent = () => handleSave();
    window.addEventListener('global-save-triggered', handleGlobalSaveEvent);
    return () => window.removeEventListener('global-save-triggered', handleGlobalSaveEvent);
  }, [formData]);

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading director's message...</div>;
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
      <div className="mb-6 pb-6 border-b border-slate-100">
        <h2 className="text-lg font-black text-navy uppercase tracking-wider flex items-center gap-2"><User className="w-5 h-5 text-[#f1af3c]" /> Director's Message</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-3">
          <CloudinaryUpload 
            imageUrl={formData.imageUrl} 
            publicId={formData.publicId} 
            onChange={(url, pId) => {
              setFormData(prev => ({ ...prev, imageUrl: url, publicId: pId }));
            }} 
            label="Director's Photo"
          />
        </div>
        <div className="md:col-span-9">
          <label className="block text-[10px] font-bold text-slate-800 uppercase tracking-wider mb-2">Message Content</label>
          <textarea name="principalMessage" value={formData.principalMessage} onChange={handleChange} rows={9} className="w-full h-[85%] px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold resize-none" />
        </div>
      </div>
    </div>
  );
}


// ---------------------------------------------------------
// CORE VALUES EDITOR
// ---------------------------------------------------------
const DEFAULT_CORE_VALUES = {
  title: "Our Core Values",
  description: "The principles that guide our everyday interactions and long-term strategies.",
  values: [
    { title: "Quality", description: "We strive for the highest standards in everything we do.", icon: "Star" },
    { title: "Integrity", description: "We operate with absolute honesty and transparency.", icon: "Shield" },
    { title: "Student-First", description: "Every decision is made keeping the student's best interest in mind.", icon: "User" },
    { title: "Innovation", description: "We constantly evolve our teaching methodologies using technology.", icon: "Lightbulb" }
  ]
};

export function CoreValuesEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(DEFAULT_CORE_VALUES);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/cms/about/core-values`)
      .then(r => r.json())
      .then(res => {
        if (res.data) setData(res.data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await fetch(`${API_BASE_URL}/api/cms/about/core-values`, {
        credentials: "include",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, isPublished: true })
      });
    } catch(e) { console.error(e); }
    finally { setIsSaving(false); }
  };

  useEffect(() => {
    const handleGlobalSave = () => handleSave();
    window.addEventListener('global-save-triggered', handleGlobalSave);
    return () => window.removeEventListener('global-save-triggered', handleGlobalSave);
  }, [data]);

  const updateField = (field, value) => setData(prev => ({ ...prev, [field]: value }));
  const updateValue = (index, field, value) => {
    const newValues = [...data.values];
    newValues[index][field] = value;
    setData(prev => ({ ...prev, values: newValues }));
  };
  const addValue = () => setData(prev => ({ ...prev, values: [...prev.values, { title: "", description: "", icon: "Star" }] }));
  const removeValue = (index) => setData(prev => ({ ...prev, values: prev.values.filter((_, i) => i !== index) }));

  if (isLoading) return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading core values...</div>;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
      <div className="mb-6 pb-6 border-b border-slate-100"><h2 className="text-lg font-black text-navy uppercase tracking-wider flex items-center gap-2"><Heart className="w-5 h-5 text-[#f1af3c]" /> Core Values</h2></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Title</label>
          <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c]" value={data.title} onChange={e => updateField('title', e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Description</label>
          <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c]" value={data.description} onChange={e => updateField('description', e.target.value)} />
        </div>
      </div>

      <div className="space-y-4">
        {data.values.map((v, i) => (
          <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Title</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={v.title} onChange={e => updateValue(i, 'title', e.target.value)} />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Icon</label>
                <IconSelect value={v.icon} onChange={val => updateValue(i, 'icon', val)} />
              </div>
              <div className="md:col-span-3">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Description</label>
                <textarea className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={v.description} onChange={e => updateValue(i, 'description', e.target.value)} />
              </div>
            </div>
            <div className="flex justify-end mt-3"><button onClick={() => removeValue(i)} className="text-red-500 text-xs font-bold uppercase hover:text-red-700">Delete</button></div>
          </div>
        ))}
        <button onClick={addValue} className="px-4 py-2 bg-slate-100 text-slate-700 font-bold text-xs uppercase rounded-lg hover:bg-slate-200">Add Value</button>
      </div>
      <FormActions onSave={handleSave} onReset={() => setData(DEFAULT_CORE_VALUES)} isSaving={isSaving} />
    </div>
  );
}

// ---------------------------------------------------------
// TIMELINE EDITOR
// ---------------------------------------------------------
const DEFAULT_TIMELINE = [
  { year: "2021", title: "Academy Started", description: "Began our journey with a small batch of dedicated students and a single classroom." },
  { year: "2022", title: "100+ Students", description: "Achieved remarkable board results, crossing the 100-student milestone." },
  { year: "2023", title: "Science Batch Started", description: "Introduced dedicated PCMB batches for Class 11th & 12th competitive exams." },
  { year: "2024", title: "Smart Classroom", description: "Upgraded our infrastructure with interactive digital panels for better visual learning." },
  { year: "2025", title: "Biometric Attendance", description: "Implemented strict attendance tracking and automated parent SMS updates." }
];

export function TimelineEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [timeline, setTimeline] = useState(DEFAULT_TIMELINE);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/cms/about/timeline`)
      .then(r => r.json())
      .then(res => {
        if (res.data && Array.isArray(res.data)) setTimeline(res.data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await fetch(`${API_BASE_URL}/api/cms/about/timeline`, {
        credentials: "include",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: timeline, isPublished: true })
      });
    } catch(e) { console.error(e); }
    finally { setIsSaving(false); }
  };

  useEffect(() => {
    const handleGlobalSave = () => handleSave();
    window.addEventListener('global-save-triggered', handleGlobalSave);
    return () => window.removeEventListener('global-save-triggered', handleGlobalSave);
  }, [timeline]);

  const updateItem = (index, field, value) => {
    const newTimeline = [...timeline];
    newTimeline[index][field] = value;
    setTimeline(newTimeline);
  };
  const addItem = () => setTimeline(prev => [...prev, { year: "", title: "", description: "" }]);
  const removeItem = (index) => setTimeline(prev => prev.filter((_, i) => i !== index));

  if (isLoading) return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading timeline...</div>;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
      <div className="mb-6 pb-6 border-b border-slate-100"><h2 className="text-lg font-black text-navy uppercase tracking-wider flex items-center gap-2"><Clock className="w-5 h-5 text-[#f1af3c]" /> Timeline / History</h2></div>
      
      <div className="space-y-4">
        {timeline.map((item, i) => (
          <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Year</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.year} onChange={e => updateItem(i, 'year', e.target.value)} />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Title</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.title} onChange={e => updateItem(i, 'title', e.target.value)} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Description</label>
                <textarea className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={item.description} onChange={e => updateItem(i, 'description', e.target.value)} />
              </div>
            </div>
            <div className="flex justify-end mt-3"><button onClick={() => removeItem(i)} className="text-red-500 text-xs font-bold uppercase hover:text-red-700">Delete</button></div>
          </div>
        ))}
        <button onClick={addItem} className="px-4 py-2 bg-slate-100 text-slate-700 font-bold text-xs uppercase rounded-lg hover:bg-slate-200">Add Milestone</button>
      </div>
      <FormActions onSave={handleSave} onReset={() => setTimeline(DEFAULT_TIMELINE)} isSaving={isSaving} />
    </div>
  );
}

// ---------------------------------------------------------
// WHY PARENTS CHOOSE US EDITOR
// ---------------------------------------------------------
const DEFAULT_WHY_CHOOSE_US = {
  title: "Why Parents Choose Us?",
  description: "We partner with parents to ensure the academic success and discipline of their children.",
  features: [
    { title: "Experienced Faculty", description: "Subject experts who know how to simplify complex concepts." },
    { title: "Personal Attention", description: "Small batches ensure no student is left behind." },
    { title: "Weekly Tests", description: "Regular assessments to track performance and exam readiness." },
    { title: "Biometric Attendance", description: "Instant SMS updates to parents upon student arrival and departure." },
    { title: "Smart Classrooms", description: "Modern teaching tools that make learning engaging and effective." },
    { title: "Monthly PTMs", description: "Dedicated parent-teacher meetings to discuss progress." }
  ]
};

export function WhyParentsChooseUsEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(DEFAULT_WHY_CHOOSE_US);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/cms/about/why-parents-choose-us`)
      .then(r => r.json())
      .then(res => {
        if (res.data) setData(res.data);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await fetch(`${API_BASE_URL}/api/cms/about/why-parents-choose-us`, {
        credentials: "include",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data, isPublished: true })
      });
    } catch(e) { console.error(e); }
    finally { setIsSaving(false); }
  };

  useEffect(() => {
    const handleGlobalSave = () => handleSave();
    window.addEventListener('global-save-triggered', handleGlobalSave);
    return () => window.removeEventListener('global-save-triggered', handleGlobalSave);
  }, [data]);

  const updateField = (field, value) => setData(prev => ({ ...prev, [field]: value }));
  const updateFeature = (index, field, value) => {
    const newFeatures = [...data.features];
    newFeatures[index][field] = value;
    setData(prev => ({ ...prev, features: newFeatures }));
  };
  const addFeature = () => setData(prev => ({ ...prev, features: [...prev.features, { title: "", description: "" }] }));
  const removeFeature = (index) => setData(prev => ({ ...prev, features: prev.features.filter((_, i) => i !== index) }));

  if (isLoading) return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading data...</div>;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
      <div className="mb-6 pb-6 border-b border-slate-100"><h2 className="text-lg font-black text-navy uppercase tracking-wider flex items-center gap-2"><ThumbsUp className="w-5 h-5 text-[#f1af3c]" /> Why Parents Choose Us</h2></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Title</label>
          <input type="text" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c]" value={data.title} onChange={e => updateField('title', e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Section Description</label>
          <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:border-[#f1af3c]" value={data.description} onChange={e => updateField('description', e.target.value)} />
        </div>
      </div>

      <div className="space-y-4">
        {data.features.map((f, i) => (
          <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Title</label>
                <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={f.title} onChange={e => updateFeature(i, 'title', e.target.value)} />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Description</label>
                <textarea className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" value={f.description} onChange={e => updateFeature(i, 'description', e.target.value)} />
              </div>
            </div>
            <div className="flex justify-end mt-3"><button onClick={() => removeFeature(i)} className="text-red-500 text-xs font-bold uppercase hover:text-red-700">Delete</button></div>
          </div>
        ))}
        <button onClick={addFeature} className="px-4 py-2 bg-slate-100 text-slate-700 font-bold text-xs uppercase rounded-lg hover:bg-slate-200">Add Feature</button>
      </div>
      <FormActions onSave={handleSave} onReset={() => setData(DEFAULT_WHY_CHOOSE_US)} isSaving={isSaving} />
    </div>
  );
}
