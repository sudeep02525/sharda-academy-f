"use client";

import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export function ContactHeroEditor({ data = {}, onChange }) {
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

export function ContactInfoEditor({ data = {}, onChange }) {
  const [formData, setFormData] = useState({
    phone: data.phone || "",
    emergency: data.emergency || "",
    email: data.email || "",
    address: data.address || "",
    mapQuery: data.mapQuery || "",
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
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Primary Phone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Emergency Phone</label>
            <input type="text" name="emergency" value={formData.emergency} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Physical Address</label>
            <textarea name="address" rows={3} value={formData.address} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none resize-none" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Google Maps Embed Query</label>
            <input type="text" name="mapQuery" value={formData.mapQuery} onChange={handleChange} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none" placeholder="e.g. Sharda+Academy+Delhi" />
            <p className="text-[10px] text-slate-400 mt-1">This query is used to load the Google Map iframe.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OfficeHoursEditor({ data = [], onChange }) {
  const [hours, setHours] = useState(data);

  const handleChange = (index, field, value) => {
    const newList = [...hours];
    newList[index] = { ...newList[index], [field]: value };
    setHours(newList);
    onChange(newList);
  };

  const addHour = () => {
    const newHour = { day: "New Day", hours: "09:00 AM - 05:00 PM", note: "" };
    const newList = [...hours, newHour];
    setHours(newList);
    onChange(newList);
  };

  const removeHour = (index) => {
    const newList = hours.filter((_, i) => i !== index);
    setHours(newList);
    onChange(newList);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Office Hours</h3>
        <div className="space-y-4">
          {hours.map((hour, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-4 items-start md:items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
              <input type="text" placeholder="Day (e.g. Monday - Friday)" value={hour.day} onChange={(e) => handleChange(i, 'day', e.target.value)} className="w-full md:w-48 px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold" />
              <input type="text" placeholder="Hours" value={hour.hours} onChange={(e) => handleChange(i, 'hours', e.target.value)} className="w-full md:w-48 px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold" />
              <input type="text" placeholder="Note (optional)" value={hour.note} onChange={(e) => handleChange(i, 'note', e.target.value)} className="flex-1 w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold" />
              <button onClick={() => removeHour(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg self-end md:self-auto"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
          <button onClick={addHour} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 hover:text-navy hover:bg-slate-50 font-bold text-sm flex justify-center items-center gap-2">
            <Plus className="w-4 h-4" /> Add Office Hours Schedule
          </button>
        </div>
      </div>
    </div>
  );
}
