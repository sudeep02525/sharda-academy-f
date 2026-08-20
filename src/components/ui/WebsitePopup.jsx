"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

export function WebsitePopup() {
  const [config, setConfig] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    let isMounted = true;
    
    const fetchConfig = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        const res = await fetch(`${apiUrl}/api/cms/website/popup`);
        if (!res.ok) return;
        const json = await res.json();
        
        if (isMounted && json.data && json.data.enabled) {
          evaluatePopup(json.data);
        }
      } catch (err) {
        console.error("Failed to load popup config", err);
      }
    };

    fetchConfig();
    return () => { isMounted = false; };
  }, []);

  const evaluatePopup = (data) => {
    // 1. Check Dates
    const now = new Date();
    
    if (data.startDate) {
      const start = new Date(data.startDate);
      if (now < start) return;
    }
    
    if (data.endDate) {
      const end = new Date(data.endDate);
      end.setHours(23, 59, 59, 999);
      if (now > end) return;
    }

    // 2. Check Display Frequency
    const popupId = data.imagePublicId || data.imageUrl; // Use image identifier as unique version
    const storageKeyLocal = `sharda_popup_last_shown_date`;
    const storageKeySession = `sharda_popup_shown_session`;
    const versionKeyLocal = `sharda_popup_version`;

    // If the image changed, reset frequency locks
    if (localStorage.getItem(versionKeyLocal) !== popupId) {
      localStorage.removeItem(storageKeyLocal);
      sessionStorage.removeItem(storageKeySession);
      localStorage.setItem(versionKeyLocal, popupId);
    }

    if (data.displayFrequency === "once_per_session") {
      if (sessionStorage.getItem(storageKeySession)) return;
    } else if (data.displayFrequency === "once_per_day") {
      const today = new Date().toDateString();
      if (localStorage.getItem(storageKeyLocal) === today) return;
    }

    // Pass all checks, show popup instantly
    setIsOpen(true);
    
    // Update storage
    if (data.displayFrequency === "once_per_session") {
      sessionStorage.setItem(storageKeySession, "true");
    } else if (data.displayFrequency === "once_per_day") {
      localStorage.setItem(storageKeyLocal, new Date().toDateString());
    }

    setConfig(data);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300); // match transition duration
  };

  if (!isOpen || !config) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0a1835]/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Content Container */}
      <div 
        className={`relative max-w-4xl w-full mx-auto flex items-center justify-center transition-all duration-300 delay-100 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="relative">
          {/* Promotional Image or Placeholder */}
          {config.imageUrl ? (
            <img 
              src={config.imageUrl.startsWith('/') ? `http://localhost:3000${config.imageUrl}` : config.imageUrl} 
              alt="Important Announcement" 
              className="w-auto h-auto max-w-full max-h-[85vh] shadow-2xl object-contain bg-white/5"
            />
          ) : (
            <div className="w-[80vw] max-w-lg h-[400px] bg-slate-900 border border-slate-700 shadow-2xl flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-slate-800 flex items-center justify-center mb-4 border border-slate-700">
                <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Popup Enabled</h3>
              <p className="text-sm text-slate-400">
                The popup is currently active but no image has been uploaded yet. Upload an image in the CMS to display your promotion.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
