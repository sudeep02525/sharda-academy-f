
"use client";

import React, { useState } from "react";
import FormActions from "../homepage/FormActions";
import { Plus, Trash2, BookOpen, Shield, HelpCircle, GripVertical } from "lucide-react";
import IconSelect from "../homepage/IconSelect";

export function HeroEditor({ data = {}, onChange }) {
  const [formData, setFormData] = useState({
    badge: data.badge || "Academic Programs",
    title: data.title || "Discover Your Path to Success",
    description: data.description || "Explore our scientifically designed classroom programs...",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...formData, [name]: value };
    setFormData(newForm);
    onChange(newForm);
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setLastSaved(new Date());
    setIsSaving(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Hero Section</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Badge Text</label>
            <input type="text" name="badge" value={formData.badge} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Description</label>
            <textarea name="description" rows={3} value={formData.description} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all resize-none" />
          </div>
        </div>
      </div>
      <FormActions isSaving={isSaving} lastSaved={lastSaved} onSave={handleSave} />
    </div>
  );
}

export function CategoriesEditor({ data = [], onChange }) {
  const [categories, setCategories] = useState(data.length ? data : ["All", "School Section (1st-10th)", "11th & 12th Science", "11th & 12th Commerce"]);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  const handleChange = (index, value) => {
    const newCats = [...categories];
    newCats[index] = value;
    setCategories(newCats);
    onChange(newCats);
  };

  const addCategory = () => {
    const newCats = [...categories, "New Category"];
    setCategories(newCats);
    onChange(newCats);
  };

  const removeCategory = (index) => {
    const newCats = categories.filter((_, i) => i !== index);
    setCategories(newCats);
    onChange(newCats);
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setLastSaved(new Date());
    setIsSaving(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Course Categories</h3>
        <div className="space-y-3">
          {categories.map((cat, i) => (
            <div key={i} className="flex gap-3 items-center group">
              <div className="flex-1">
                <input type="text" value={cat} onChange={(e) => handleChange(i, e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
              </div>
              <button onClick={() => removeCategory(i)} className="p-2.5 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors shrink-0">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button onClick={addCategory} className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:text-navy hover:border-navy hover:bg-slate-50 transition-all flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider">
            <Plus className="w-4 h-4" /> Add Category
          </button>
        </div>
      </div>
      <FormActions isSaving={isSaving} lastSaved={lastSaved} onSave={handleSave} />
    </div>
  );
}

export function CoursesListEditor({ data = [], categories = [], onChange }) {
  const [courses, setCourses] = useState(data);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleCourseChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index] = { ...newCourses[index], [field]: value };
    
    if (field === "title") {
      newCourses[index].slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
    }
    
    setCourses(newCourses);
    onChange(newCourses);
  };

  const handleArrayChange = (index, field, subIndex, value) => {
    const newCourses = [...courses];
    const arr = [...(newCourses[index][field] || [])];
    arr[subIndex] = value;
    newCourses[index][field] = arr;
    setCourses(newCourses);
    onChange(newCourses);
  };

  const addToArray = (index, field, initialValue) => {
    const newCourses = [...courses];
    const arr = [...(newCourses[index][field] || [])];
    arr.push(initialValue);
    newCourses[index][field] = arr;
    setCourses(newCourses);
    onChange(newCourses);
  };

  const removeFromArray = (index, field, subIndex) => {
    const newCourses = [...courses];
    const arr = [...(newCourses[index][field] || [])];
    arr.splice(subIndex, 1);
    newCourses[index][field] = arr;
    setCourses(newCourses);
    onChange(newCourses);
  };
  
  const handleSyllabusChange = (index, subIndex, field, value) => {
    const newCourses = [...courses];
    const arr = [...(newCourses[index].syllabus || [])];
    arr[subIndex] = { ...arr[subIndex], [field]: value };
    newCourses[index].syllabus = arr;
    setCourses(newCourses);
    onChange(newCourses);
  };

  const addCourse = () => {
    const uniqueId = Date.now();
    const newCourse = {
      id: uniqueId,
      slug: `course-${uniqueId}`,
      title: "New Course",
      category: categories.length > 0 ? categories[0] : "All",
      description: "Description here",
      subjects: [""],
      duration: "",
      eligibility: "",
      classTimings: [""],
      mode: "Offline",
      batchSize: "",
      badge: "",
      highlights: [""],
      syllabus: [{ term: "Term 1", topics: "Topics here" }]
    };
    const newCourses = [...courses, newCourse];
    setCourses(newCourses);
    setExpandedIndex(newCourses.length - 1);
    onChange(newCourses);
  };

  const removeCourse = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
    onChange(newCourses);
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setLastSaved(new Date());
    setIsSaving(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Courses List</h3>
        <div className="space-y-4">
          {courses.map((course, i) => (
            <div key={course.id || i} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <div 
                className="p-4 bg-white flex items-center justify-between cursor-pointer border-b border-slate-100"
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#f1af3c]/10 text-[#f1af3c] rounded-lg">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">{course.title || "Untitled Course"}</h4>
                    <p className="text-[10px] text-slate-500 font-semibold">{course.category}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={(e) => { e.stopPropagation(); removeCourse(i); }} className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {expandedIndex === i && (
                <div className="p-5 space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Title</label>
                      <input type="text" value={course.title || ""} onChange={(e) => handleCourseChange(i, "title", e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm font-semibold focus:ring-2 focus:ring-[#f1af3c]/50 outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Slug</label>
                      <input type="text" value={course.slug || ""} onChange={(e) => handleCourseChange(i, "slug", e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm font-semibold focus:ring-2 focus:ring-[#f1af3c]/50 outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Category</label>
                      <select value={course.category || ""} onChange={(e) => handleCourseChange(i, "category", e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm font-semibold focus:ring-2 focus:ring-[#f1af3c]/50 outline-none bg-white">
                        <option value="">Select a category</option>
                        {categories.map((cat, idx) => (
                          <option key={idx} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Badge (e.g. Popular)</label>
                      <input type="text" value={course.badge || ""} onChange={(e) => handleCourseChange(i, "badge", e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm font-semibold focus:ring-2 focus:ring-[#f1af3c]/50 outline-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Description</label>
                    <textarea rows={2} value={course.description || ""} onChange={(e) => handleCourseChange(i, "description", e.target.value)} className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm font-semibold focus:ring-2 focus:ring-[#f1af3c]/50 outline-none" />
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white rounded-xl border border-slate-100">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Duration</label>
                      <input type="text" value={course.duration || ""} onChange={(e) => handleCourseChange(i, "duration", e.target.value)} className="w-full px-2 py-1.5 rounded-md border border-slate-200 text-xs font-semibold focus:ring-1 focus:ring-[#f1af3c]/50 outline-none" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Eligibility</label>
                      <input type="text" value={course.eligibility || ""} onChange={(e) => handleCourseChange(i, "eligibility", e.target.value)} className="w-full px-2 py-1.5 rounded-md border border-slate-200 text-xs font-semibold focus:ring-1 focus:ring-[#f1af3c]/50 outline-none" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Mode</label>
                      <input type="text" value={course.mode || ""} onChange={(e) => handleCourseChange(i, "mode", e.target.value)} className="w-full px-2 py-1.5 rounded-md border border-slate-200 text-xs font-semibold focus:ring-1 focus:ring-[#f1af3c]/50 outline-none" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Batch Size</label>
                      <input type="text" value={course.batchSize || ""} onChange={(e) => handleCourseChange(i, "batchSize", e.target.value)} className="w-full px-2 py-1.5 rounded-md border border-slate-200 text-xs font-semibold focus:ring-1 focus:ring-[#f1af3c]/50 outline-none" />
                    </div>
                  </div>

                  {/* Arrays (Subjects, Timings, Highlights) */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['subjects', 'classTimings', 'highlights'].map((field) => (
                      <div key={field}>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{field}</label>
                        <div className="space-y-2">
                          {(course[field] || []).map((val, subIndex) => (
                            <div key={subIndex} className="flex gap-2">
                              <input type="text" value={val} onChange={(e) => handleArrayChange(i, field, subIndex, e.target.value)} className="flex-1 px-2 py-1.5 rounded-md border border-slate-200 text-xs font-semibold focus:ring-1 focus:ring-[#f1af3c]/50 outline-none" />
                              <button onClick={() => removeFromArray(i, field, subIndex)} className="text-red-400 hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></button>
                            </div>
                          ))}
                          <button onClick={() => addToArray(i, field, "")} className="text-[10px] font-bold text-navy uppercase flex items-center gap-1 hover:text-[#f1af3c]"><Plus className="w-3 h-3" /> Add Item</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Syllabus Array */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Syllabus</label>
                    <div className="space-y-3">
                      {(course.syllabus || []).map((syl, subIndex) => (
                        <div key={subIndex} className="p-3 bg-white border border-slate-200 rounded-xl flex gap-3 relative">
                           <div className="w-1/3">
                              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Term</label>
                              <input type="text" value={syl.term} onChange={(e) => handleSyllabusChange(i, subIndex, "term", e.target.value)} className="w-full px-2 py-1.5 rounded-md border border-slate-200 text-xs font-semibold focus:ring-1 focus:ring-[#f1af3c]/50 outline-none" />
                           </div>
                           <div className="flex-1">
                              <label className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-1">Topics</label>
                              <input type="text" value={syl.topics} onChange={(e) => handleSyllabusChange(i, subIndex, "topics", e.target.value)} className="w-full px-2 py-1.5 rounded-md border border-slate-200 text-xs font-semibold focus:ring-1 focus:ring-[#f1af3c]/50 outline-none" />
                           </div>
                           <button onClick={() => removeFromArray(i, 'syllabus', subIndex)} className="absolute -right-2 -top-2 bg-red-100 text-red-600 rounded-full p-1 border border-white hover:bg-red-500 hover:text-white transition-colors">
                              <Trash2 className="w-3 h-3" />
                           </button>
                        </div>
                      ))}
                      <button onClick={() => addToArray(i, 'syllabus', {term: "", topics: ""})} className="text-[10px] font-bold text-navy uppercase flex items-center gap-1 hover:text-[#f1af3c]"><Plus className="w-3 h-3" /> Add Syllabus Item</button>
                    </div>
                  </div>

                </div>
              )}
            </div>
          ))}
          
          <button onClick={addCourse} className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:text-navy hover:border-navy hover:bg-slate-50 transition-all flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider">
            <Plus className="w-4 h-4" /> Add Course
          </button>
        </div>
      </div>
      <FormActions isSaving={isSaving} lastSaved={lastSaved} onSave={handleSave} />
    </div>
  );
}

export function OpportunitiesEditor({ data = [], onChange }) {
  const [items, setItems] = useState(data);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  const handleChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
    onChange(newItems);
  };

  const addItem = () => {
    const newItems = [...items, { icon: "Globe", title: "New Feature", description: "Description here" }];
    setItems(newItems);
    onChange(newItems);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    onChange(newItems);
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setLastSaved(new Date());
    setIsSaving(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Career Opportunities</h3>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="flex gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50 items-start group">
              <div className="w-12 shrink-0">
                <IconSelect value={item.icon} onChange={(val) => handleChange(i, 'icon', val)} />
              </div>
              <div className="flex-1 space-y-3">
                <input type="text" value={item.title} onChange={(e) => handleChange(i, 'title', e.target.value)} placeholder="Title" className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold bg-white focus:ring-2 focus:ring-[#f1af3c]/50 outline-none transition-all" />
                <textarea rows={2} value={item.description} onChange={(e) => handleChange(i, 'description', e.target.value)} placeholder="Description" className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold bg-white focus:ring-2 focus:ring-[#f1af3c]/50 outline-none transition-all resize-none" />
              </div>
              <button onClick={() => removeItem(i)} className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors shrink-0">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button onClick={addItem} className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:text-navy hover:border-navy hover:bg-slate-50 transition-all flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider">
            <Plus className="w-4 h-4" /> Add Opportunity
          </button>
        </div>
      </div>
      <FormActions isSaving={isSaving} lastSaved={lastSaved} onSave={handleSave} />
    </div>
  );
}
