"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export function Sidebar({ 
  links = [], 
  className 
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div 
      className={cn(
        "h-screen flex flex-col bg-card border-r border-border transition-all duration-300",
        collapsed ? "w-20" : "w-64",
        className
      )}
    >
      {/* Header / Toggle */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!collapsed && <span className="font-bold text-heading truncate">Admin Panel</span>}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-muted text-muted-foreground mx-auto"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2 px-3">
        {links.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={idx} 
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group relative",
                isActive ? "bg-primary/10 text-primary" : "text-paragraph hover:bg-muted hover:text-heading"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-primary/10 rounded-lg pointer-events-none"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {link.icon && (
                <div className={cn("shrink-0 relative z-10", isActive ? "text-primary" : "text-muted-foreground group-hover:text-heading")}>
                  <link.icon className="w-5 h-5" />
                </div>
              )}
              {!collapsed && (
                <span className="font-medium truncate relative z-10">{link.label}</span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
