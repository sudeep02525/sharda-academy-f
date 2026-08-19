"use client";

import React from "react";
import { Save, FileEdit } from "lucide-react";

export default function Page() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-navy tracking-tight">Notices & Announcements</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
            Rich Content Editor
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#f1af3c] hover:bg-amber-400 text-[#0a1835] text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#f1af3c]/20 hover:-translate-y-0.5">
          <Save className="w-4 h-4" /> Save Content
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col min-h-[500px]">
        {/* Fake Editor Toolbar */}
        <div className="border-b border-slate-100 p-3 bg-slate-50 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {["B", "I", "U"].map(style => (
            <button key={style} className="w-8 h-8 flex items-center justify-center font-serif font-bold text-slate-500 hover:bg-white hover:text-navy rounded-lg transition-colors border border-transparent hover:border-slate-200">
              {style}
            </button>
          ))}
          <div className="w-px h-5 bg-slate-200 mx-1"></div>
          {["H1", "H2", "H3", "P"].map(style => (
            <button key={style} className="px-3 h-8 flex items-center justify-center font-bold text-xs text-slate-500 hover:bg-white hover:text-navy rounded-lg transition-colors border border-transparent hover:border-slate-200">
              {style}
            </button>
          ))}
          <div className="w-px h-5 bg-slate-200 mx-1"></div>
          <button className="px-3 h-8 flex items-center justify-center gap-1.5 text-xs font-bold text-slate-500 hover:bg-white hover:text-navy rounded-lg transition-colors border border-transparent hover:border-slate-200">
            <FileEdit className="w-3.5 h-3.5" /> Media
          </button>
        </div>

        {/* Editor Content Area Placeholder */}
        <div className="flex-1 p-6 sm:p-8 bg-white">
          <div className="w-full h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
            <FileEdit className="w-8 h-8 mb-3 text-slate-300" />
            <p className="text-sm font-bold">TipTap / Editor.js Placeholder</p>
            <p className="text-xs font-medium mt-1">Ready for rich text integration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
