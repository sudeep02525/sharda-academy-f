"use client";

import React, { useEffect, useState } from "react";
import { useAuthStore } from "@/cms/store/authStore";
import { useRouter } from "next/navigation";
import {
  Users, BookOpen, Camera, MessageSquare,
  Bell, FileText, Globe, AlertCircle, Loader2,
  TrendingUp, Clock, UserCheck, BarChart3, GraduationCap
} from "lucide-react";
import { axiosInstance } from "@/cms/services/axiosInstance";

import { API_BASE_URL } from "@/cms/utils/config";

export default function DashboardPage() {
  const { user } = useAuthStore();
  const router = useRouter();

  const [stats, setStats] = useState({
    pendingInquiries: 0,
    totalInquiries: 0,
    totalCourses: 0,
    totalGallery: 0,
  });

  const [recentInquiries, setRecentInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      setError(null);
      try {
        const BASE = `${API_BASE_URL}/api`;

        // Fetch all in parallel
        const [admissionsRes, coursesRes, galleryRes] = await Promise.allSettled([
          axiosInstance.get("/admissions"),
          fetch(`${BASE}/cms/academics/courses`).then(r => r.json()),
          fetch(`${BASE}/cms/website/gallery`).then(r => r.json()),
        ]);

        // --- Admissions ---
        let pendingCount = 0;
        let totalCount = 0;
        let recent = [];
        if (admissionsRes.status === "fulfilled" && admissionsRes.value?.data?.success) {
          const inquiries = admissionsRes.value.data.data || [];
          totalCount = inquiries.length;
          pendingCount = inquiries.filter((i) => i.status === "New").length;
          recent = inquiries.slice(0, 5).map((inq) => ({
            id: inq._id,
            studentName: inq.studentName,
            course: inq.course,
            status: inq.status,
            submittedAt: inq.submittedAt || inq.createdAt,
          }));
        }

        // --- Courses: response = { _id, data: { courses: [...] }, ... } ---
        let coursesCount = 0;
        if (coursesRes.status === "fulfilled") {
          const cJson = coursesRes.value;
          console.log("[Dashboard] courses raw:", cJson);
          const courses = cJson?.data?.courses;
          if (Array.isArray(courses)) {
            coursesCount = courses.length;
          }
        }

        // --- Gallery: response = { _id, data: { images: [...] }, ... } ---
        let galleryCount = 0;
        if (galleryRes.status === "fulfilled") {
          const gJson = galleryRes.value;
          console.log("[Dashboard] gallery raw:", gJson);
          const images = gJson?.data?.images;
          if (Array.isArray(images)) {
            galleryCount = images.length;
          }
        }

        setStats({
          pendingInquiries: pendingCount,
          totalInquiries: totalCount,
          totalCourses: coursesCount,
          totalGallery: galleryCount,
        });
        setRecentInquiries(recent);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
        setError("Failed to load dashboard data. Please verify backend connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const statusColor = (status) => {
    switch (status) {
      case "New": return "bg-blue-100 text-blue-700";
      case "Contacted": return "bg-amber-100 text-amber-700";
      case "Enrolled": return "bg-emerald-100 text-emerald-700";
      case "Rejected": return "bg-red-100 text-red-700";
      default: return "bg-slate-100 text-slate-600";
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const d = new Date(dateStr);
    if (isNaN(d)) return "—";
    const diff = Date.now() - d.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins} mins ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} hours ago`;
    const days = Math.floor(hrs / 24);
    if (days < 7) return `${days} days ago`;
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  };

  const quickAccess = [
    { label: "Edit\nHomepage", icon: Globe, color: "text-blue-600", bg: "bg-blue-50", href: "/website/home" },
    { label: "Manage\nCourses", icon: BookOpen, color: "text-emerald-600", bg: "bg-emerald-50", href: "/website/courses" },
    { label: "Manage\nFaculty", icon: Users, color: "text-purple-600", bg: "bg-purple-50", href: "/website/faculty" },
    { label: "Upload\nGallery", icon: Camera, color: "text-pink-600", bg: "bg-pink-50", href: "/website/gallery" },
    { label: "Admission\nPage", icon: GraduationCap, color: "text-amber-600", bg: "bg-amber-50", href: "/website/admission" },
    { label: "Inquiries", icon: FileText, color: "text-indigo-600", bg: "bg-indigo-50", href: "/admissions" },
  ];

  const statCards = [
    {
      label: "Pending Inquiries",
      value: loading ? "—" : stats.pendingInquiries,
      icon: AlertCircle,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      sub: loading ? "" : `${stats.totalInquiries} total inquiries`,
    },
    {
      label: "Total Courses",
      value: loading ? "—" : stats.totalCourses,
      icon: BookOpen,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      sub: "active courses",
    },
    {
      label: "Gallery Images",
      value: loading ? "—" : stats.totalGallery,
      icon: Camera,
      color: "text-pink-600",
      bg: "bg-pink-50",
      border: "border-pink-200",
      sub: "uploaded files",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in-up">

      {/* Welcome Banner */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-sm border border-slate-200">
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'url("/mesh-grid.svg")' }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f1af3c]" />
        <div className="relative z-10">
          <h1 className="text-2xl sm:text-3xl font-black text-navy mb-2 tracking-tight">
            Welcome back, <span className="text-[#f1af3c]">{user?.name || "Admin"}</span> 👋
          </h1>
          <p className="text-slate-500 text-sm max-w-xl leading-relaxed font-medium">
            {loading ? (
              "Loading dashboard data..."
            ) : error ? (
              <span className="text-red-400">{error}</span>
            ) : (
              <>
                Welcome to the Sharda Academy CMS.{" "}
                {stats.pendingInquiries > 0 ? (
                  <>
                    You have{" "}
                    <span
                      className="text-amber-600 font-black cursor-pointer underline underline-offset-4 decoration-amber-600/30 hover:decoration-amber-600 transition-all"
                      onClick={() => router.push("/s-cms/admissions")}
                    >
                      {stats.pendingInquiries} pending
                    </span>{" "}
                    inquiries waiting for review.
                  </>
                ) : (
                  "There are currently no pending inquiries."
                )}
              </>
            )}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statCards.map((card, i) => (
          <div
            key={i}
            className={`bg-white rounded-2xl p-5 border ${card.border} shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2.5 rounded-xl ${card.bg} ${card.color}`}>
                <card.icon className="w-5 h-5" />
              </div>
              {loading && <Loader2 className="w-4 h-4 text-slate-300 animate-spin" />}
            </div>
            <div className="text-3xl font-black text-navy mb-1">
              {card.value}
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
              {card.label}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">{card.sub}</div>
          </div>
        ))}
      </div>

      {/* Quick Access */}
      <div>
        <h3 className="text-sm font-black text-navy uppercase tracking-wider mb-4">Quick Access</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickAccess.map((item, i) => (
            <button
              key={i}
              onClick={() => router.push(item.href)}
              className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white border border-slate-100 hover:border-[#f1af3c] hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className={`p-3 ${item.bg} ${item.color} rounded-xl group-hover:bg-[#f1af3c] group-hover:text-white transition-colors`}>
                <item.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 group-hover:text-navy text-center whitespace-pre-line">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Admission Inquiries */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-sm font-black text-navy uppercase tracking-wider">
            Recent Admission Inquiries
          </h3>
          <button
            onClick={() => router.push("/s-cms/admissions")}
            className="text-xs font-bold text-[#f1af3c] hover:text-amber-600 transition-colors"
          >
            View All →
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-10 gap-2 text-slate-400">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="text-sm font-semibold">Loading data...</span>
          </div>
        ) : error ? (
          <div className="flex items-center gap-2 py-6 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm font-semibold">{error}</span>
          </div>
        ) : recentInquiries.length === 0 ? (
          <div className="text-center py-10 text-slate-400">
            <MessageSquare className="w-8 h-8 mx-auto mb-2 opacity-50" />
            <p className="text-sm font-semibold">No inquiries found yet</p>
            <p className="text-xs mt-1">New student applications will appear here</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left text-[10px] font-black text-slate-400 uppercase tracking-wider pb-3 pr-4">#</th>
                  <th className="text-left text-[10px] font-black text-slate-400 uppercase tracking-wider pb-3 pr-4">Student</th>
                  <th className="text-left text-[10px] font-black text-slate-400 uppercase tracking-wider pb-3 pr-4">Course</th>
                  <th className="text-left text-[10px] font-black text-slate-400 uppercase tracking-wider pb-3 pr-4">Status</th>
                  <th className="text-left text-[10px] font-black text-slate-400 uppercase tracking-wider pb-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {recentInquiries.map((inq, i) => (
                  <tr
                    key={inq.id}
                    className="hover:bg-slate-50 transition-colors cursor-pointer"
                    onClick={() => router.push("/s-cms/admissions")}
                  >
                    <td className="py-3 pr-4 text-slate-400 font-semibold text-xs">{i + 1}</td>
                    <td className="py-3 pr-4 font-bold text-navy text-xs">{inq.studentName}</td>
                    <td className="py-3 pr-4 text-slate-600 text-xs">{inq.course}</td>
                    <td className="py-3 pr-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${statusColor(inq.status)}`}>
                        {inq.status}
                      </span>
                    </td>
                    <td className="py-3 text-slate-400 text-[11px] font-semibold">{formatDate(inq.submittedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
