"use client";

import React, { useState } from "react";
import { Plus, Trash2, ChevronDown, ChevronUp } from "lucide-react";
import CloudinaryUpload from "../shared/CloudinaryUpload";

export function ResultsHeroEditor({ data = {}, onChange }) {
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
    </div>
  );
}

export function TopRankersEditor({ data = [], onChange, categories = [], years = [] }) {
  const [rankers, setRankers] = useState(data);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleImageChange = (index, url, pubId) => {
    const newList = [...rankers];
    newList[index] = { ...newList[index], imageUrl: url, imagePublicId: pubId };
    setRankers(newList);
    onChange(newList);
  };

  const handleChange = (index, field, value) => {
    const newList = [...rankers];
    newList[index] = { ...newList[index], [field]: value };
    setRankers(newList);
    onChange(newList);
  };

  const addRanker = () => {
    const newRanker = {
      id: Date.now(),
      name: "New Student",
      category: categories[0] || "",
      score: "90%",
      year: years[0] || "",
      imageUrl: "",
      imagePublicId: ""
    };
    const newList = [...rankers, newRanker];
    setRankers(newList);
    onChange(newList);
    setExpandedIndex(newList.length - 1);
  };

  const removeRanker = (index) => {
    const newList = rankers.filter((_, i) => i !== index);
    setRankers(newList);
    onChange(newList);
    if (expandedIndex === index) setExpandedIndex(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Top Rankers</h3>
        <div className="space-y-4">
          {rankers.map((ranker, i) => (
            <div key={ranker.id} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-all">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-100/50"
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                    {ranker.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">{ranker.name}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{ranker.score} • {ranker.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={(e) => { e.stopPropagation(); removeRanker(i); }} className="p-2 text-red-400 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-4 h-4" />
                  </button>
                  {expandedIndex === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>
              {expandedIndex === i && (
                <div className="p-6 border-t border-slate-200 space-y-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Student Image</label>
                      <CloudinaryUpload imageUrl={ranker.imageUrl} publicId={ranker.imagePublicId} onChange={(url, pubId) => handleImageChange(i, url, pubId)} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                      <input type="text" value={ranker.name} onChange={(e) => handleChange(i, 'name', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Category / Exam</label>
                      <input type="text" value={ranker.category} onChange={(e) => handleChange(i, 'category', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Score / Rank</label>
                      <input type="text" value={ranker.score} onChange={(e) => handleChange(i, 'score', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Year</label>
                      <input type="text" value={ranker.year} onChange={(e) => handleChange(i, 'year', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 focus:bg-white outline-none" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <button onClick={addRanker} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 hover:text-navy hover:border-navy hover:bg-slate-50 transition-all font-bold text-sm flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add Ranker
          </button>
        </div>
      </div>
    </div>
  );
}

export function SubjectPerformanceEditor({ data = [], onChange }) {
  const [subjects, setSubjects] = useState(data);

  const handleChange = (index, field, value) => {
    const newList = [...subjects];
    newList[index] = { ...newList[index], [field]: field === 'percentage' ? Number(value) : value };
    setSubjects(newList);
    onChange(newList);
  };

  const addSubject = () => {
    const newSub = { subject: "New Subject", percentage: 90, color: "bg-primary" };
    const newList = [...subjects, newSub];
    setSubjects(newList);
    onChange(newList);
  };

  const removeSubject = (index) => {
    const newList = subjects.filter((_, i) => i !== index);
    setSubjects(newList);
    onChange(newList);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Subject Performance</h3>
        <div className="space-y-4">
          {subjects.map((sub, i) => (
            <div key={i} className="flex gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
              <input type="text" placeholder="Subject" value={sub.subject} onChange={(e) => handleChange(i, 'subject', e.target.value)} className="flex-1 px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold" />
              <input type="number" placeholder="Percentage" value={sub.percentage} onChange={(e) => handleChange(i, 'percentage', e.target.value)} className="w-24 px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold" />
              <button onClick={() => removeSubject(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
          <button onClick={addSubject} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 hover:text-navy hover:border-navy hover:bg-slate-50 transition-all font-bold text-sm flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" /> Add Subject
          </button>
        </div>
      </div>
    </div>
  );
}

export function SuccessStoriesEditor({ data = [], onChange }) {
  const [stories, setStories] = useState(data);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleImageChange = (index, url, pubId) => {
    const newList = [...stories];
    newList[index] = { ...newList[index], imageUrl: url, imagePublicId: pubId };
    setStories(newList);
    onChange(newList);
  };

  const handleChange = (index, field, value) => {
    const newList = [...stories];
    newList[index] = { ...newList[index], [field]: value };
    setStories(newList);
    onChange(newList);
  };

  const addStory = () => {
    const newStory = { id: Date.now(), student: "Student Name", college: "College", quote: "Success quote", imageUrl: "", imagePublicId: "" };
    const newList = [...stories, newStory];
    setStories(newList);
    onChange(newList);
    setExpandedIndex(newList.length - 1);
  };

  const removeStory = (index) => {
    const newList = stories.filter((_, i) => i !== index);
    setStories(newList);
    onChange(newList);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Success Stories</h3>
        <div className="space-y-4">
          {stories.map((story, i) => (
            <div key={story.id} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-all">
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-100/50" onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}>
                <h4 className="text-sm font-bold text-navy">{story.student}</h4>
                <div className="flex gap-2">
                  <button onClick={(e) => { e.stopPropagation(); removeStory(i); }} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                  {expandedIndex === i ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>
              {expandedIndex === i && (
                <div className="p-6 border-t border-slate-200 space-y-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Student Image</label>
                      <CloudinaryUpload imageUrl={story.imageUrl} publicId={story.imagePublicId} onChange={(url, pubId) => handleImageChange(i, url, pubId)} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                      <input type="text" value={story.student} onChange={(e) => handleChange(i, 'student', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">College / Future</label>
                      <input type="text" value={story.college} onChange={(e) => handleChange(i, 'college', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Quote</label>
                      <textarea value={story.quote} rows={3} onChange={(e) => handleChange(i, 'quote', e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold bg-slate-50 outline-none resize-none" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <button onClick={addStory} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 hover:text-navy hover:bg-slate-50 font-bold text-sm flex justify-center items-center gap-2">
            <Plus className="w-4 h-4" /> Add Success Story
          </button>
        </div>
      </div>
    </div>
  );
}

export function AwardsEditor({ data = [], onChange }) {
  const [awards, setAwards] = useState(data);

  const handleChange = (index, field, value) => {
    const newList = [...awards];
    newList[index] = { ...newList[index], [field]: value };
    setAwards(newList);
    onChange(newList);
  };

  const addAward = () => {
    const newAward = { year: "2026", title: "New Award", body: "Description" };
    const newList = [...awards, newAward];
    setAwards(newList);
    onChange(newList);
  };

  const removeAward = (index) => {
    const newList = awards.filter((_, i) => i !== index);
    setAwards(newList);
    onChange(newList);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6">
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-6">Awards & Recognition</h3>
        <div className="space-y-4">
          {awards.map((award, i) => (
            <div key={i} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-200">
              <input type="text" placeholder="Year" value={award.year} onChange={(e) => handleChange(i, 'year', e.target.value)} className="w-24 px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold" />
              <div className="flex-1 space-y-3">
                <input type="text" placeholder="Title" value={award.title} onChange={(e) => handleChange(i, 'title', e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold" />
                <textarea placeholder="Description" rows={2} value={award.body} onChange={(e) => handleChange(i, 'body', e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm font-semibold resize-none" />
              </div>
              <button onClick={() => removeAward(i)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}
          <button onClick={addAward} className="w-full py-4 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 hover:text-navy hover:bg-slate-50 font-bold text-sm flex justify-center items-center gap-2">
            <Plus className="w-4 h-4" /> Add Award
          </button>
        </div>
      </div>
    </div>
  );
}
