"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/cms/store/sidebarStore";
import { useAuthStore } from "@/cms/store/authStore";
import {
  LayoutDashboard, Globe, FileText, Image as ImageIcon, Info,
  BookOpen, Building, Users, Camera, MessageSquare, HelpCircle,
  Bell, Calendar, Phone, Search, Images, Settings, User,
  Shield, FileLock, LogOut, ChevronDown, ChevronRight, Menu, GraduationCap, ClipboardList
} from "lucide-react";

// MENU_ITEMS logic...
const MENU_ITEMS = [
  { id: "dashboard", label: "Dashboard", href: "/s-cms/dashboard", icon: LayoutDashboard },
  {
    id: "website", label: "Website", icon: Globe,
    sub: [
      { id: "homepage", label: "Homepage", href: "/s-cms/website/home", icon: Globe },
      { id: "about", label: "About", href: "/s-cms/website/about", icon: Info },
      { id: "courses", label: "Courses", href: "/s-cms/website/courses", icon: BookOpen },
      { id: "faculty", label: "Faculty", href: "/s-cms/website/faculty", icon: Users },
      { id: "results", label: "Results", href: "/s-cms/website/results", icon: FileText },
      { id: "gallery", label: "Gallery", href: "/s-cms/website/gallery", icon: Camera },
      { id: "contact", label: "Contact", href: "/s-cms/website/contact", icon: Phone },
      { id: "admission", label: "Admission", href: "/s-cms/website/admission", icon: GraduationCap },
    ]
  },
  { id: "admissions", label: "Admission Inquiries", href: "/s-cms/admissions", icon: ClipboardList },


  {
    id: "legal", label: "Legal", icon: Shield,
    sub: [
      { id: "privacy", label: "Privacy Policy", href: "/s-cms/legal/privacy", icon: FileLock },
      { id: "terms", label: "Terms & Conditions", href: "/s-cms/legal/terms", icon: FileText },
    ]
  },
  { id: "settings", label: "Settings", href: "/s-cms/settings", icon: Settings },
  { id: "profile", label: "Profile", href: "/s-cms/profile", icon: User }
];

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useSidebarStore();
  const { user, logout } = useAuthStore();
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    
    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setSidebarOpen]);

  const toggleMenu = (id) => {
    setExpandedMenus(prev => ({ ...prev, [id]: !prev[id] }));
    if (!sidebarOpen) setSidebarOpen(true);
  };

  const isRouteActive = (href) => pathname === href;
  const isGroupActive = (sub) => sub?.some(s => pathname === s.href);

  return (
    <>
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col transition-all duration-300 md:sticky md:top-0 md:h-screen shrink-0 border-r border-white/10 bg-[#0a1835] text-white overflow-hidden ${
          sidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full md:w-16 md:translate-x-0"
        }`}
      >
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-br from-[#f1af3c]/15 to-amber-500/10 rounded-full pointer-events-none" style={{ filter: "blur(70px)" }}></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-tr from-[#0f2347]/45 to-[#f1af3c]/10 rounded-full pointer-events-none" style={{ filter: "blur(80px)" }}></div>

        {/* Header Logo Area */}
        <div className={`p-4 border-b border-white/10 relative z-10 flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center flex-col gap-3'}`}>
          {sidebarOpen ? (
            <div className="flex items-center gap-3 min-w-0">
              <img src="https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png" alt="Logo" className="w-9 h-9 object-contain shrink-0" />
              <div className="text-left min-w-0">
                <span className="block text-[12.5px] font-black text-white uppercase tracking-wider leading-none whitespace-nowrap">CMS Portal</span>
                <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest leading-none mt-1 block">v2.0 Admin</span>
              </div>
            </div>
          ) : (
            <img src="https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png" alt="Logo" className="w-9 h-9 object-contain shrink-0" />
          )}

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-xl bg-white/5 text-white/60 hover:text-white transition-all hover:bg-white/10 shrink-0"
          >
            {sidebarOpen ? <ChevronDown className="w-4 h-4 rotate-90" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Nav Links */}
        <nav className="p-3 flex-grow space-y-1 overflow-y-auto no-scrollbar relative z-10">
          {MENU_ITEMS.map((item) => {
            const hasSub = !!item.sub;
            const Icon = item.icon;
            const isActive = isRouteActive(item.href) || isGroupActive(item.sub);
            const isExpanded = expandedMenus[item.id] || isActive;

            return (
              <div key={item.id} className="space-y-1">
                {hasSub ? (
                  <button
                    onClick={() => toggleMenu(item.id)}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                      sidebarOpen ? "px-3.5 gap-3" : "justify-center px-1"
                    } ${isActive ? "text-[#f1af3c]" : "text-slate-100 hover:text-[#f1af3c] hover:bg-white/5"}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-[#f1af3c]" : "text-slate-300 group-hover:text-[#f1af3c]"}`} />
                      {sidebarOpen && <span className="truncate">{item.label.toUpperCase()}</span>}
                    </div>
                    {sidebarOpen && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center cursor-pointer group ${
                      sidebarOpen ? "px-3.5 gap-3" : "justify-center px-1"
                    } ${isActive ? "bg-[#f1af3c] text-[#0a1835] shadow-lg shadow-[#f1af3c]/25 border-l-4 border-[#0a1835]" : "text-slate-100 hover:text-[#f1af3c] hover:bg-white/10 border-l-2 border-transparent hover:border-[#f1af3c]"}`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-[#0a1835]" : "text-slate-300 group-hover:text-[#f1af3c]"}`} />
                    {sidebarOpen && <span className="truncate">{item.label.toUpperCase()}</span>}
                  </Link>
                )}

                {/* Nested Menu */}
                {hasSub && sidebarOpen && isExpanded && (
                  <div className="pl-9 pr-2 space-y-1 pt-1 pb-2">
                    {item.sub.map(subItem => {
                      const SubIcon = subItem.icon;
                      const subActive = isRouteActive(subItem.href);
                      return (
                        <Link
                          key={subItem.id}
                          href={subItem.href}
                          className={`flex items-center gap-2.5 py-2 px-3 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${
                            subActive ? "text-[#f1af3c] bg-white/5" : "text-slate-400 hover:text-[#f1af3c] hover:bg-white/5"
                          }`}
                        >
                          <SubIcon className="w-3.5 h-3.5" />
                          <span className="truncate">{subItem.label}</span>
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer User Area */}
        <div className="p-4 border-t border-white/10 bg-[#030814]/30 relative z-10">
          {sidebarOpen ? (
            <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-9 h-9 rounded-full bg-brand-yellow text-[#0a1835] flex items-center justify-center font-black text-sm shrink-0">
                  {user?.name?.[0]?.toUpperCase() || "A"}
                </div>
                <div className="text-left min-w-0">
                  <span className="text-xs font-bold truncate block leading-none text-white">{user?.name || "ADMIN"}</span>
                  <p className="text-[10px] font-semibold truncate mt-1.5 text-slate-400">{user?.role || "SUPER_ADMIN"}</p>
                </div>
              </div>
              <button onClick={logout} className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button onClick={logout} className="w-10 h-10 rounded-full border border-red-500/35 bg-red-500/10 text-red-400 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center cursor-pointer">
                <LogOut className="w-4.5 h-4.5" />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
