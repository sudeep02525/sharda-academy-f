"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/cms/store/sidebarStore";
import { useAuthStore } from "@/cms/store/authStore";
import { Menu, Search, Bell, User, ChevronRight, Settings, LogOut } from "lucide-react";

export default function Header() {
  const { setSidebarOpen } = useSidebarStore();
  const { user, logout } = useAuthStore();
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleActionClick = () => {
    alert("This feature is coming soon!");
    setProfileOpen(false);
  };

  // Generate breadcrumbs from pathname
  const paths = pathname.split("/").filter(p => p);
  
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 h-16 bg-[#0a1835] border-b-2 border-[#f1af3c] shadow-md shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="p-1.5 rounded-lg bg-white/5 text-white/60 hover:text-white md:hidden transition-colors"
          aria-label="Open Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Breadcrumb */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
          <span>CMS</span>
          {paths.map((p, i) => (
            <React.Fragment key={p}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className={i === paths.length - 1 ? "text-[#f1af3c]" : ""}>
                {p.replace("-", " ")}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">

        {/* User Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-brand-yellow text-[#0a1835] flex items-center justify-center font-black text-sm shrink-0">
              {user?.name?.[0]?.toUpperCase() || "A"}
            </div>
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-fade-in-up py-1 z-50">
              <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                <p className="text-xs font-bold text-navy">{user?.name || "Admin User"}</p>
                <p className="text-[10px] text-slate-500">{user?.email || "admin@sharda.com"}</p>
              </div>
              <button 
                onClick={() => {
                  setProfileOpen(false);
                  window.location.href = "/s-cms/profile";
                }}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                <User className="w-4 h-4" /> Profile
              </button>
              <button 
                onClick={() => {
                  setProfileOpen(false);
                  window.location.href = "/s-cms/settings";
                }}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-navy hover:bg-slate-50 transition-colors"
              >
                <Settings className="w-4 h-4" /> Settings
              </button>
              <div className="border-t border-slate-100 my-1"></div>
              <button 
                onClick={logout}
                className="w-full flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
