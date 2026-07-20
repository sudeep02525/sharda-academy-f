"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function SearchOverlay({ 
  isOpen, 
  onClose,
  onSearch
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
      // Auto focus input when opened
      setTimeout(() => inputRef.current?.focus(), 100);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current?.value && onSearch) {
      onSearch(inputRef.current.value);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
          />
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl bg-card border border-border shadow-2xl rounded-2xl overflow-hidden"
          >
            <form onSubmit={handleSubmit} className="flex items-center px-4 h-16">
              <svg className="w-6 h-6 text-muted-foreground mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search courses, faculty, events..."
                className="flex-1 bg-transparent border-none outline-none text-lg placeholder:text-muted-foreground text-heading"
              />
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground ml-2"
              >
                ESC
              </button>
            </form>
            
            <div className="border-t border-border bg-muted/30 px-6 py-4">
              <p className="text-xs font-bold uppercase text-muted-foreground tracking-wider mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {["JEE Advanced", "NEET Crash Course", "Admissions 2026"].map(term => (
                  <button 
                    key={term}
                    type="button"
                    onClick={() => {
                      if (inputRef.current) inputRef.current.value = term;
                    }}
                    className="px-3 py-1.5 bg-card border border-border rounded-full text-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
