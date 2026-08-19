import React, { useState, useEffect } from "react";
import { Plus, Search, Filter, MoreVertical, LayoutGrid, List } from "lucide-react";

export default function PlaceholderPage({ title, entityName }) {
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("list");

  // Mock loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-navy tracking-tight">{title}</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
            Manage your {title.toLowerCase()}
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#f1af3c] hover:bg-amber-400 text-[#0a1835] text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#f1af3c]/20 hover:-translate-y-0.5">
          <Plus className="w-4 h-4" /> Add {entityName}
        </button>
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto flex-1">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder={`Search ${title.toLowerCase()}...`}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-xs placeholder-slate-400 focus:outline-none focus:border-[#f1af3c] focus:ring-1 focus:ring-[#f1af3c]/50 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl text-slate-500 hover:text-navy hover:bg-slate-50 text-xs font-bold transition-colors shrink-0">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl border border-slate-200 shrink-0 hidden sm:flex">
          <button 
            onClick={() => setViewMode("list")}
            className={`p-1.5 rounded-lg transition-colors ${viewMode === "list" ? "bg-white text-navy shadow-sm" : "text-slate-400 hover:text-navy"}`}
          >
            <List className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setViewMode("grid")}
            className={`p-1.5 rounded-lg transition-colors ${viewMode === "grid" ? "bg-white text-navy shadow-sm" : "text-slate-400 hover:text-navy"}`}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 min-h-[400px]">
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex items-center gap-4 animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-slate-100 shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-slate-100 rounded w-1/3"></div>
                  <div className="h-3 bg-slate-50 rounded w-1/4"></div>
                </div>
                <div className="w-24 h-6 rounded-lg bg-slate-50"></div>
                <div className="w-8 h-8 rounded-lg bg-slate-50"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center py-20">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-sm font-black text-navy uppercase tracking-wider">No {title} Found</h3>
            <p className="text-xs font-semibold text-slate-400 mt-2 max-w-sm">
              We couldn't find any {title.toLowerCase()} matching your current criteria. Try adjusting your search or filters.
            </p>
            <button className="mt-6 px-5 py-2.5 border border-slate-200 text-slate-600 hover:text-navy hover:bg-slate-50 text-xs font-bold rounded-xl transition-colors">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
