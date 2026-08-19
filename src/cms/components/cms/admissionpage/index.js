"use client";

import React, { useState } from "react";
import { Plus, Trash2, GripVertical, CheckCircle2 } from "lucide-react";
import CloudinaryUpload from "../shared/CloudinaryUpload";

export function AdmissionHeroEditor({ data, onChange }) {
  if (!data) return null;
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 className="text-lg font-black text-navy">Hero Section</h3>
        <p className="text-xs text-slate-500 mt-1">Manage the main heading and description of the Admission page.</p>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Title</label>
          <input
            type="text"
            value={data.title || ""}
            onChange={(e) => onChange({ ...data, title: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-700"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Description</label>
          <textarea
            value={data.description || ""}
            onChange={(e) => onChange({ ...data, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-700 resize-none"
          />
        </div>
      </div>
    </div>
  );
}

export function AdmissionProcessEditor({ data = [], onChange }) {
  const updateStep = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-black text-navy">Admission Process</h3>
          <p className="text-xs text-slate-500 mt-1">Manage the 4-step enrollment process.</p>
        </div>
      </div>
      <div className="p-6 space-y-6">
        {data.map((step, index) => (
          <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <h4 className="text-sm font-bold text-slate-800 mb-4">Step {step.id}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2">Title</label>
                <input
                  type="text"
                  value={step.title || ""}
                  onChange={(e) => updateStep(index, 'title', e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2">Description</label>
                <textarea
                  value={step.description || ""}
                  onChange={(e) => updateStep(index, 'description', e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm resize-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AdmissionDetailsEditor({ data, onChange }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 className="text-lg font-black text-navy">Eligibility & Fee Structure</h3>
        <p className="text-xs text-slate-500 mt-1">Manage criteria and upload Fee Structure PDF.</p>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Eligibility Criteria</label>
          <textarea
            value={data.criteria || ""}
            onChange={(e) => onChange({ ...data, criteria: e.target.value })}
            rows={3}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-700 resize-none"
          />
        </div>
        <div className="pt-4 border-t border-slate-100">
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Fee Structure PDF</label>
          <CloudinaryUpload 
            imageUrl={data.feeStructurePdfUrl}
            publicId={data.feeStructurePdfPublicId}
            onChange={(url, pubId) => onChange({ ...data, feeStructurePdfUrl: url, feeStructurePdfPublicId: pubId })}
            label="Upload PDF Document"
          />
          {data.feeStructurePdfUrl && (
            <p className="text-xs text-green-600 mt-2 font-medium">✓ Document uploaded. <a href={data.feeStructurePdfUrl} target="_blank" rel="noreferrer" className="underline">View File</a></p>
          )}
        </div>
      </div>
    </div>
  );
}

export function AdmissionDocumentsEditor({ data = [], onChange }) {
  const updateDoc = (index, value) => {
    const newData = [...data];
    newData[index] = value;
    onChange(newData);
  };

  const addDoc = () => onChange([...data, "New Document Requirement"]);
  const removeDoc = (index) => onChange(data.filter((_, i) => i !== index));

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-black text-navy">Required Documents</h3>
          <p className="text-xs text-slate-500 mt-1">Manage the list of documents required for admission.</p>
        </div>
        <button onClick={addDoc} className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors">
          <Plus className="w-4 h-4" /> Add Document
        </button>
      </div>
      <div className="p-6 space-y-3">
        {data.map((doc, index) => (
          <div key={index} className="flex gap-4 items-center">
            <span className="text-slate-400 font-bold">{index + 1}.</span>
            <input
              type="text"
              value={doc || ""}
              onChange={(e) => updateDoc(index, e.target.value)}
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
            />
            <button onClick={() => removeDoc(index)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AdmissionFormOptionsEditor({ data, onChange }) {
  if (!data) return null;
  const { courses = [], batches = [] } = data;

  const updateList = (listType, index, value) => {
    const list = [...data[listType]];
    list[index] = value;
    onChange({ ...data, [listType]: list });
  };
  
  const addToList = (listType) => {
    onChange({ ...data, [listType]: [...data[listType], `New ${listType === 'courses' ? 'Course' : 'Batch'}`] });
  };
  
  const removeFromList = (listType, index) => {
    onChange({ ...data, [listType]: data[listType].filter((_, i) => i !== index) });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 className="text-lg font-black text-navy">Form Options</h3>
        <p className="text-xs text-slate-500 mt-1">Manage dropdown options for the online admission form.</p>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Courses List */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Available Courses</label>
            <button onClick={() => addToList('courses')} className="p-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            {courses.map((course, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={course || ""}
                  onChange={(e) => updateList('courses', i, e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm"
                />
                <button onClick={() => removeFromList('courses', i)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Batches List */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Batch Options</label>
            <button onClick={() => addToList('batches')} className="p-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2">
            {batches.map((batch, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input
                  type="text"
                  value={batch || ""}
                  onChange={(e) => updateList('batches', i, e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded text-sm"
                />
                <button onClick={() => removeFromList('batches', i)} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export function AdmissionCTAEditor({ data, onChange }) {
  if (!data) return null;
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50">
        <h3 className="text-lg font-black text-navy">Call to Action (CTA)</h3>
        <p className="text-xs text-slate-500 mt-1">Manage the bottom contact section.</p>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Title</label>
          <input
            type="text"
            value={data.title || ""}
            onChange={(e) => onChange({ ...data, title: e.target.value })}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-700"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Description</label>
          <textarea
            value={data.description || ""}
            onChange={(e) => onChange({ ...data, description: e.target.value })}
            rows={2}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-700 resize-none"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Button Text</label>
            <input
              type="text"
              value={data.buttonText || ""}
              onChange={(e) => onChange({ ...data, buttonText: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">Button Link (URL)</label>
            <input
              type="text"
              value={data.buttonLink || ""}
              onChange={(e) => onChange({ ...data, buttonLink: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
