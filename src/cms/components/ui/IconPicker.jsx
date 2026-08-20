"use client";

import React, { useState, useRef, useEffect } from "react";
import * as Icons from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function IconPicker({ value, onChange, iconsList }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const SelectedIcon = Icons[value] || Icons.FileText;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#f1af3c] bg-white text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
      >
        <div className="flex items-center gap-3">
          <SelectedIcon className="w-5 h-5 text-[#f1af3c]" />
          <span>{value}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] z-50 max-h-60 overflow-y-auto no-scrollbar p-2 grid grid-cols-1 gap-1">
          {iconsList.map((iconName) => {
            const Icon = Icons[iconName];
            if (!Icon) return null;
            return (
              <button
                key={iconName}
                type="button"
                onClick={() => {
                  onChange(iconName);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors w-full text-left ${
                  value === iconName ? "bg-amber-50 text-amber-600" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <Icon className={`w-4 h-4 ${value === iconName ? "text-amber-500" : "text-slate-400"}`} />
                {iconName}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
