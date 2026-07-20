"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Dropdown({ 
  trigger, 
  children, 
  align = "right",
  className 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    // Handle ESC key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const alignmentClasses = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2"
  };

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        className="cursor-pointer inline-flex w-full"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {trigger}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "absolute z-50 mt-2 w-56 rounded-md bg-card border border-border shadow-lg focus:outline-none overflow-hidden",
              alignmentClasses[align],
              className
            )}
            role="menu"
            aria-orientation="vertical"
          >
            <div className="py-1" role="none" onClick={() => setIsOpen(false)}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DropdownItem({ 
  children, 
  icon: Icon, 
  onClick, 
  danger = false,
  className 
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left px-4 py-2 text-sm flex items-center transition-colors",
        danger 
          ? "text-error hover:bg-error/10" 
          : "text-foreground hover:bg-muted",
        className
      )}
      role="menuitem"
    >
      {Icon && <Icon className="mr-3 h-4 w-4" aria-hidden="true" />}
      {children}
    </button>
  );
}
