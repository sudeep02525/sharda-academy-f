"use client";

import React, { useState, useEffect, useCallback } from "react";
import PageContainer from "@/cms/components/layout/PageContainer";
import { Loader2, Trash2, RefreshCw, User, Phone, Mail, BookOpen, Calendar, MapPin, MessageSquare, ChevronDown } from "lucide-react";

import { API_BASE_URL } from "@/cms/utils/config";

const STATUS_OPTIONS = ["New", "Contacted", "Enrolled", "Rejected"];

const STATUS_STYLES = {
  New:       "bg-blue-100 text-blue-700 border border-blue-200",
  Contacted: "bg-amber-100 text-amber-700 border border-amber-200",
  Enrolled:  "bg-green-100 text-green-700 border border-green-200",
  Rejected:  "bg-red-100 text-red-700 border border-red-200",
};

function formatDate(dateStr) {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  return d.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
}

export default function AdmissionInquiriesPage() {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [filterStatus, setFilterStatus] = useState("All");

  const fetchInquiries = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/api/admissions`);
      if (res.ok) {
        const json = await res.json();
        setInquiries(json.data || []);
      }
    } catch (err) {
      console.error("Failed to fetch inquiries:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInquiries();
  }, [fetchInquiries]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this application?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`${API_BASE_URL}/api/admissions/${id}`, { method: "DELETE" });
      if (res.ok) {
        setInquiries(prev => prev.filter(i => i._id !== id));
        if (expandedId === id) setExpandedId(null);
      }
    } catch (err) {
      console.error("Delete error:", err);
    } finally {
      setDeletingId(null);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/admissions/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) {
        setInquiries(prev => prev.map(i => i._id === id ? { ...i, status } : i));
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const filtered = filterStatus === "All"
    ? inquiries
    : inquiries.filter(i => i.status === filterStatus);

  const counts = STATUS_OPTIONS.reduce((acc, s) => {
    acc[s] = inquiries.filter(i => i.status === s).length;
    return acc;
  }, {});

  if (isLoading) {
    return (
      <PageContainer>
        <div className="flex h-[400px] items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8 items-start lg:items-center justify-between animate-fade-in-up">
        <div>
          <h1 className="text-2xl font-black text-navy uppercase tracking-tight">Admission Inquiries</h1>
          <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
            {inquiries.length} total application{inquiries.length !== 1 ? "s" : ""} received
          </p>
        </div>
        <button
          onClick={fetchInquiries}
          className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", ...STATUS_OPTIONS].map(s => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
              filterStatus === s
                ? "bg-amber-500 text-white border-amber-500 shadow-md"
                : "bg-white text-slate-500 border-slate-200 hover:border-slate-300"
            }`}
          >
            {s} {s !== "All" ? `(${counts[s] || 0})` : `(${inquiries.length})`}
          </button>
        ))}
      </div>

      {/* Inquiries List */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-20 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-slate-700 font-bold text-lg mb-1">No applications yet</h3>
          <p className="text-slate-400 text-sm">When students submit the admission form, their applications will appear here.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((inquiry) => {
            const isExpanded = expandedId === inquiry._id;
            return (
              <div
                key={inquiry._id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all"
              >
                {/* Row Header */}
                <div className="flex items-center gap-4 p-5">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0 text-white font-bold text-sm">
                    {inquiry.studentName?.charAt(0)?.toUpperCase() || "S"}
                  </div>

                  {/* Name & Course */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-slate-800 text-sm">{inquiry.studentName}</h3>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs text-slate-500">{inquiry.course}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {inquiry.phone}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Mail className="w-3 h-3" /> {inquiry.email}
                      </span>
                      <span className="text-xs text-slate-400">{formatDate(inquiry.submittedAt)}</span>
                    </div>
                  </div>

                  {/* Status Dropdown */}
                  <div className="relative shrink-0">
                    <select
                      value={inquiry.status}
                      onChange={(e) => handleStatusChange(inquiry._id, e.target.value)}
                      className={`text-xs font-bold rounded-full px-3 py-1.5 pr-7 appearance-none cursor-pointer focus:outline-none ${STATUS_STYLES[inquiry.status]}`}
                    >
                      {STATUS_OPTIONS.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-current opacity-60" />
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : inquiry._id)}
                      className="text-xs font-bold text-slate-400 hover:text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-all"
                    >
                      {isExpanded ? "Hide" : "View"}
                    </button>
                    <button
                      onClick={() => handleDelete(inquiry._id)}
                      disabled={deletingId === inquiry._id}
                      className="p-2 rounded-lg hover:bg-red-50 hover:text-red-500 text-slate-300 transition-all"
                    >
                      {deletingId === inquiry._id
                        ? <Loader2 className="w-4 h-4 animate-spin" />
                        : <Trash2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Parent / Guardian</p>
                      <p className="text-slate-700 font-medium">{inquiry.parentName}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1 flex items-center gap-1"><Phone className="w-3 h-3" /> Alt. Phone</p>
                      <p className="text-slate-700 font-medium">{inquiry.altPhone || "—"}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1 flex items-center gap-1"><BookOpen className="w-3 h-3" /> Qualification</p>
                      <p className="text-slate-700 font-medium">{inquiry.qualification}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> Preferred Batch</p>
                      <p className="text-slate-700 font-medium">{inquiry.batch}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1 flex items-center gap-1"><MapPin className="w-3 h-3" /> Address</p>
                      <p className="text-slate-700 font-medium">{inquiry.address}</p>
                    </div>
                    {inquiry.message && (
                      <div className="md:col-span-2 lg:col-span-3">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-1 flex items-center gap-1"><MessageSquare className="w-3 h-3" /> Message</p>
                        <p className="text-slate-700 font-medium">{inquiry.message}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </PageContainer>
  );
}
