"use client";

import React, { useState } from "react";
import FormActions from "../homepage/FormActions";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import CloudinaryUpload from "../shared/CloudinaryUpload";

export function FacultyHeroEditor({ data = {}, onChange }) {
  const [formData, setFormData] = useState({
    badge: data.badge || "Our Mentors",
    title: data.title || "Meet Our Faculty",
    description: data.description || "Our highly experienced educators...",
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

export function FacultyDepartmentsEditor({ data = [], onChange }) {
  const [departments, setDepartments] = useState(data.length ? data : ["All", "Physics", "Chemistry"]);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);

  const handleChange = (index, value) => {
    const newDepts = [...departments];
    newDepts[index] = value;
    setDepartments(newDepts);
    onChange(newDepts);
  };

  const addDepartment = () => {
    const newDepts = [...departments, "New Department"];
    setDepartments(newDepts);
    onChange(newDepts);
  };

  const removeDepartment = (index) => {
    const newDepts = departments.filter((_, i) => i !== index);
    setDepartments(newDepts);
    onChange(newDepts);
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
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Faculty Departments</h3>
        <div className="space-y-3">
          {departments.map((dept, i) => (
            <div key={i} className="flex gap-3 items-center group">
              <div className="flex-1">
                <input type="text" value={dept} onChange={(e) => handleChange(i, e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
              </div>
              <button onClick={() => removeDepartment(i)} className="p-2.5 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors shrink-0">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button onClick={addDepartment} className="w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:text-navy hover:border-navy hover:bg-slate-50 transition-all flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider">
            <Plus className="w-4 h-4" /> Add Department
          </button>
        </div>
      </div>
      <FormActions isSaving={isSaving} lastSaved={lastSaved} onSave={handleSave} />
    </div>
  );
}

export function FacultyCTAEditor({ data = {}, onChange }) {
  const [formData, setFormData] = useState({
    title: data.title || "Passionate About Teaching?",
    description: data.description || "Join Sharda Academy's esteemed faculty...",
    buttonText: data.buttonText || "Apply as Faculty",
    buttonLink: data.buttonLink || "/contact"
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
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">CTA Section</h3>
        <div className="space-y-4">
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

export function FacultyListEditor({ data = [], onChange, departments = [] }) {
  const [faculty, setFaculty] = useState(data);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleImageChange = (index, url, pubId) => {
    const newFaculty = [...faculty];
    newFaculty[index] = { ...newFaculty[index], imageUrl: url, imagePublicId: pubId };
    setFaculty(newFaculty);
    onChange(newFaculty);
  };

  const handleChange = (index, field, value) => {
    const newFaculty = [...faculty];
    newFaculty[index] = { ...newFaculty[index], [field]: value };
    setFaculty(newFaculty);
    onChange(newFaculty);
  };

  const handleArrayChange = (index, field, value) => {
    const array = value.split(",").map(i => i.trim()).filter(i => i);
    handleChange(index, field, array);
  };

  const addFaculty = () => {
    const newMember = {
      id: Date.now(),
      name: "New Faculty Member",
      department: departments[0] || "All",
      role: "Faculty",
      qualifications: [],
      experience: "0 Years",
      specializations: [],
      achievements: [],
      teachingMethod: "",
      languages: ["English"],
      availability: "Mon-Fri",
      imageUrl: ""
    };
    const newFaculty = [...faculty, newMember];
    setFaculty(newFaculty);
    onChange(newFaculty);
    setExpandedIndex(newFaculty.length - 1);
  };

  const removeFaculty = (index) => {
    const newFaculty = faculty.filter((_, i) => i !== index);
    setFaculty(newFaculty);
    onChange(newFaculty);
    if (expandedIndex === index) setExpandedIndex(null);
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
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Faculty Directory</h3>
        
        <div className="space-y-4">
          {faculty.map((member, i) => (
            <div key={member.id} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-all">
              {/* Header (always visible) */}
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-100/50"
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">{member.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{member.department} • {member.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={(e) => { e.stopPropagation(); removeFaculty(i); }}
                    className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  {expandedIndex === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedIndex === i && (
                <div className="p-6 border-t border-slate-200 space-y-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Faculty Image</label>
                      <CloudinaryUpload 
                        imageUrl={member.imageUrl}
                        publicId={member.imagePublicId}
                        onChange={(url, pubId) => handleImageChange(i, url, pubId)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                      <input type="text" value={member.name} onChange={(e) => handleChange(i, 'name', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Department</label>
                      <select value={member.department} onChange={(e) => handleChange(i, 'department', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all appearance-none">
                        <option value="">Select Department</option>
                        {departments.map((dept, idx) => (
                          <option key={idx} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Role/Designation</label>
                      <input type="text" value={member.role} onChange={(e) => handleChange(i, 'role', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Experience</label>
                      <input type="text" value={member.experience} onChange={(e) => handleChange(i, 'experience', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Qualifications (Comma Separated)</label>
                      <input type="text" value={(member.qualifications || []).join(", ")} onChange={(e) => handleArrayChange(i, 'qualifications', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Specializations (Comma Separated)</label>
                      <input type="text" value={(member.specializations || []).join(", ")} onChange={(e) => handleArrayChange(i, 'specializations', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Achievements (Comma Separated)</label>
                      <textarea rows={2} value={(member.achievements || []).join(", ")} onChange={(e) => handleArrayChange(i, 'achievements', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all resize-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Teaching Method</label>
                      <input type="text" value={member.teachingMethod} onChange={(e) => handleChange(i, 'teachingMethod', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Languages (Comma Separated)</label>
                      <input type="text" value={(member.languages || []).join(", ")} onChange={(e) => handleArrayChange(i, 'languages', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Availability</label>
                      <input type="text" value={member.availability} onChange={(e) => handleChange(i, 'availability', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#f1af3c]/50 focus:border-[#f1af3c] outline-none transition-all" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <button onClick={addFaculty} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 hover:text-navy hover:border-navy hover:bg-slate-50 transition-all flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider">
            <Plus className="w-4 h-4" /> Add Faculty Member
          </button>
        </div>
      </div>
      <FormActions isSaving={isSaving} lastSaved={lastSaved} onSave={handleSave} />
    </div>
  );
}
