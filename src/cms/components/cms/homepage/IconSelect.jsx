import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, BookOpen, GraduationCap, Award, Users, School, Laptop, Clock, Shield, Brain, Target, Trophy, ThermometerSnowflake, MonitorPlay, Fingerprint, ClipboardList, MessageSquare, HelpCircle, Star, MessageCircle, TrendingUp } from "lucide-react";

export const ICONS = {
  BookOpen: { label: "Book Open", component: BookOpen },
  GraduationCap: { label: "Graduation Cap", component: GraduationCap },
  Award: { label: "Award", component: Award },
  Users: { label: "Users", component: Users },
  School: { label: "School", component: School },
  Laptop: { label: "Laptop", component: Laptop },
  Clock: { label: "Clock", component: Clock },
  Shield: { label: "Shield", component: Shield },
  Brain: { label: "Brain", component: Brain },
  Target: { label: "Target", component: Target },
  Trophy: { label: "Trophy", component: Trophy },
  ThermometerSnowflake: { label: "AC / Thermometer", component: ThermometerSnowflake },
  MonitorPlay: { label: "Smart Monitor", component: MonitorPlay },
  Fingerprint: { label: "Fingerprint", component: Fingerprint },
  ClipboardList: { label: "Clipboard List", component: ClipboardList },
  MessageSquare: { label: "Message Square", component: MessageSquare },
  HelpCircle: { label: "Help Circle", component: HelpCircle },
  Star: { label: "Star", component: Star },
  MessageCircle: { label: "Message Circle", component: MessageCircle },
  TrendingUp: { label: "Trending Up", component: TrendingUp }
};

export default function IconSelect({ value, onChange }) {
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

  const selectedIcon = value && ICONS[value];

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-xl border border-slate-200 bg-white text-slate-900 cursor-pointer flex items-center justify-center transition-all hover:border-[#f1af3c] hover:shadow-sm"
      >
        {selectedIcon ? (
          React.createElement(selectedIcon.component, { className: "w-5 h-5 text-navy" })
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-slate-300" />
        )}
      </div>

      {isOpen && (
        <div className="absolute z-50 top-full mt-2 left-0 w-[220px] max-h-[300px] overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl">
          <div 
            onClick={() => { onChange(""); setIsOpen(false); }}
            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50 border-b border-slate-100"
          >
            <div className="w-5 h-5 rounded-full border-2 border-slate-300" />
            <span className="text-sm text-slate-400">None</span>
          </div>
          {Object.entries(ICONS).map(([key, item]) => (
            <div 
              key={key}
              onClick={() => { onChange(key); setIsOpen(false); }}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-slate-50 transition-colors ${value === key ? 'bg-[#f1af3c]/10 text-navy' : 'text-slate-600'}`}
            >
              {React.createElement(item.component, { className: `w-5 h-5 ${value === key ? 'text-[#f1af3c]' : 'text-slate-400'}` })}
              <span className={`text-sm ${value === key ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
