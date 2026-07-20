"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Drawer({ 
  isOpen, 
  onClose, 
  children, 
  className,
  side = "right" // 'right', 'left', 'top', 'bottom'
}) {
  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (typeof window === "undefined") return null;

  const sideVariants = {
    right: { initial: { x: "100%" }, animate: { x: 0 }, exit: { x: "100%" } },
    left:  { initial: { x: "-100%" }, animate: { x: 0 }, exit: { x: "-100%" } },
    top:   { initial: { y: "-100%" }, animate: { y: 0 }, exit: { y: "-100%" } },
    bottom:{ initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" } },
  };

  const sideStyles = {
    right: "inset-y-0 right-0 w-full max-w-sm border-l",
    left:  "inset-y-0 left-0 w-full max-w-sm border-r",
    top:   "inset-x-0 top-0 h-auto max-h-[80vh] border-b",
    bottom:"inset-x-0 bottom-0 h-auto max-h-[80vh] border-t rounded-t-2xl",
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={sideVariants[side].initial}
            animate={sideVariants[side].animate}
            exit={sideVariants[side].exit}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={cn(
              "absolute bg-card border-border shadow-2xl flex flex-col overflow-y-auto",
              sideStyles[side],
              className
            )}
          >
            <div className="p-4 flex justify-end">
               <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-muted text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Close drawer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
            </div>
            <div className="flex-1 px-6 pb-6">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
