"use client";

import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import CloudinaryUpload from "../shared/CloudinaryUpload";

export function GalleryHeroEditor({ data = {}, onChange }) {
  const [formData, setFormData] = useState({
    badge: data.badge || "",
    title: data.title || "",
    description: data.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...formData, [name]: value };
    setFormData(newForm);
    onChange(newForm);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Hero Section</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Badge Text</label>
            <input type="text" name="badge" value={formData.badge} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Description</label>
            <textarea name="description" rows={3} value={formData.description} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none resize-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function GalleryImagesEditor({ data = [], categories = [], onChange }) {
  const [images, setImages] = useState(data);

  const handleImageChange = (index, url, pubId) => {
    const newList = [...images];
    newList[index] = { ...newList[index], url, publicId: pubId };
    setImages(newList);
    onChange(newList);
  };

  const handleChange = (index, field, value) => {
    const newList = [...images];
    newList[index] = { ...newList[index], [field]: value };
    setImages(newList);
    onChange(newList);
  };

  const addImage = () => {
    const newImage = {
      id: Date.now(),
      imageUrl: "",
      imagePublicId: "",
      category: categories[1] || "Classrooms",
      title: "New Image",
      description: "",
      date: ""
    };
    const newList = [...images, newImage];
    setImages(newList);
    onChange(newList);
  };

  const removeImage = (index) => {
    const newList = images.filter((_, i) => i !== index);
    setImages(newList);
    onChange(newList);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Gallery Images</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div key={img.id} className="border border-slate-200 rounded-xl p-4 bg-slate-50 space-y-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Image {i + 1}</span>
                <button onClick={() => removeImage(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <CloudinaryUpload 
                imageUrl={img.imageUrl} 
                publicId={img.imagePublicId} 
                onChange={(url, pubId) => {
                  const newList = [...images];
                  newList[i] = { ...newList[i], imageUrl: url, imagePublicId: pubId };
                  setImages(newList);
                  onChange(newList);
                }} 
              />
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Title" 
                  value={img.title || ""} 
                  onChange={(e) => handleChange(i, 'title', e.target.value)} 
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold"
                />
                <textarea 
                  placeholder="Description" 
                  value={img.description || ""} 
                  onChange={(e) => handleChange(i, 'description', e.target.value)} 
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold resize-none"
                  rows={2}
                />
                <input 
                  type="text" 
                  placeholder="Date (e.g. August 2025)" 
                  value={img.date || ""} 
                  onChange={(e) => handleChange(i, 'date', e.target.value)} 
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold"
                />
                <select 
                  value={img.category} 
                  onChange={(e) => handleChange(i, 'category', e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold bg-white"
                >
                  {categories.filter(c => c !== "All").map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <button onClick={addImage} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 hover:text-navy hover:bg-slate-50 font-bold text-sm flex flex-col justify-center items-center gap-2 h-full min-h-[200px]">
            <Plus className="w-8 h-8" />
            Add Image
          </button>
        </div>
      </div>
    </div>
  );
}
