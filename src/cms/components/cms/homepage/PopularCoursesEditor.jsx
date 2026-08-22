"use client";

import React, { useState, useEffect } from "react";
import FormActions from "./FormActions";

import { API_BASE_URL } from "@/cms/utils/config";

const DEFAULT_COURSES = [
  {
    id: 1,
    slug: "school-section-1-to-10",
    title: "Classes 1st to 10th",
    category: "School Section (1st-10th)",
    description: "Build a strong academic foundation from the very beginning with our comprehensive school program.",
    subjects: ["English", "Mathematics", "Science", "Hindi", "Social Studies"],
    duration: "Full Year",
    eligibility: "Students from Class 1 to 10",
    classTimings: ["Morning Batch (8 AM - 12 PM)", "Evening Batch (4 PM - 8 PM)"],
    mode: "Offline",
    batchSize: "Max 30 Students",
    badge: "Popular",
    highlights: ["Foundation Building", "Regular Tests", "Doubt Solving", "Parent Progress Updates"],
    syllabus: [
      { term: "Primary (1st-5th)", topics: "Basic Mathematics, Environmental Science, Languages, General Knowledge." },
      { term: "Middle (6th-8th)", topics: "Advanced Mathematics, Science, Social Studies, English Grammar." },
      { term: "Secondary (9th-10th)", topics: "Board Exam Preparation, Advanced Sciences, Mathematics, Mock Tests." }
    ]
  },
  {
    id: 2,
    slug: "11th-12th-science",
    title: "11th & 12th Science",
    category: "11th & 12th Science",
    description: "Dedicated science coaching to excel in board exams and lay the groundwork for a successful career.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    duration: "2 Years",
    eligibility: "Class 10 Passed",
    classTimings: ["Morning Batch (7 AM - 12 PM)", "Afternoon Batch (2 PM - 7 PM)"],
    mode: "Offline",
    batchSize: "Max 35 Students",
    badge: "Trending",
    highlights: ["PCMB Available", "Board Focused", "Experienced Faculty", "Mock Exams"],
    syllabus: [
      { term: "Class 11", topics: "Core concepts building in Physics, Chemistry, Biology/Mathematics." },
      { term: "Class 12 (Part 1)", topics: "Advanced topics, derivations, organic chemistry, calculus." },
      { term: "Class 12 (Part 2)", topics: "Syllabus completion, revision, and extensive mock exams." }
    ]
  },
  {
    id: 3,
    slug: "11th-12th-commerce",
    title: "11th & 12th Commerce",
    category: "11th & 12th Commerce",
    description: "Expert guidance in accountancy, economics, and business studies to secure top marks in boards.",
    subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics", "English"],
    duration: "2 Years",
    eligibility: "Class 10 Passed",
    classTimings: ["Evening Batch (3 PM - 7 PM)", "Weekend Batch Available"],
    mode: "Offline",
    batchSize: "Max 35 Students",
    badge: "",
    highlights: ["Expert Accountancy Guidance", "Smart Panel Available", "Regular Assessments"],
    syllabus: [
      { term: "Class 11", topics: "Introduction to Accounting, Microeconomics, Business Organization." },
      { term: "Class 12 (Part 1)", topics: "Partnership Accounts, Macroeconomics, Financial Management." },
      { term: "Class 12 (Part 2)", topics: "Company Accounts, Project Work, Board-pattern mock tests." }
    ]
  }
];

export default function PopularCoursesEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [courses, setCourses] = useState(DEFAULT_COURSES);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/courses`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data && content.data.courses && content.data.courses.length > 0) {
            // Merge fetched courses with defaults to restore any missing fields (like subjects, highlights)
            const mergedCourses = DEFAULT_COURSES.map((defaultCourse, idx) => {
              const fetchedCourse = content.data.courses[idx];
              return fetchedCourse ? { ...defaultCourse, ...fetchedCourse } : defaultCourse;
            });
            setCourses(mergedCourses);
            return;
          }
        }
      } catch (error) {
        console.error("Failed to fetch courses data", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const data = { courses };
      const res = await fetch(`${API_BASE_URL}/api/cms/home/courses`, {
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
  }, [courses]);

  const updateCourse = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index] = { ...newCourses[index], [field]: value };
    setCourses(newCourses);
  };

  if (isLoading) {
    return <div className="p-6 text-sm text-slate-500 animate-pulse">Loading courses data...</div>;
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-black text-navy uppercase tracking-tight">Manage Popular Courses</h2>
        <p className="text-xs text-slate-500 mt-1 font-medium">Edit the details of the 3 popular courses shown on the homepage.</p>
      </div>
      
      <div className="space-y-6">
        {courses.map((course, index) => (
          <div key={course.id || index} className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
            <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-2">Course {index + 1}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Title</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={course.title} 
                  onChange={(e) => updateCourse(index, 'title', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Category</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={course.category} 
                  onChange={(e) => updateCourse(index, 'category', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Description</label>
              <textarea 
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c] min-h-[60px]" 
                value={course.description} 
                onChange={(e) => updateCourse(index, 'description', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Duration</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={course.duration} 
                  onChange={(e) => updateCourse(index, 'duration', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Eligibility</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={course.eligibility} 
                  onChange={(e) => updateCourse(index, 'eligibility', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Badge (Optional)</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={course.badge || ""} 
                  onChange={(e) => updateCourse(index, 'badge', e.target.value)}
                  placeholder="e.g. Popular, Trending"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Mode</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={course.mode || ""} 
                  onChange={(e) => updateCourse(index, 'mode', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Batch Size</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c]" 
                  value={course.batchSize || ""} 
                  onChange={(e) => updateCourse(index, 'batchSize', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Subjects (Comma separated)</label>
                <textarea 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c] min-h-[60px]" 
                  value={(course.subjects || []).join(", ")} 
                  onChange={(e) => updateCourse(index, 'subjects', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Highlights (Comma separated)</label>
                <textarea 
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c] min-h-[60px]" 
                  value={(course.highlights || []).join(", ")} 
                  onChange={(e) => updateCourse(index, 'highlights', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Class Timings (Comma separated)</label>
              <textarea 
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#f1af3c] min-h-[60px]" 
                value={(course.classTimings || []).join(", ")} 
                onChange={(e) => updateCourse(index, 'classTimings', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
              />
            </div>
          </div>
        ))}
      </div>

      <FormActions onSave={handleSave} onReset={() => {}} onPreview={() => {}} isSaving={isSaving} />
    </div>
  );
}
