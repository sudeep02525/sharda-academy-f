"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MegaMenu({ 
  trigger, 
  title, 
  items = [], 
  featuredCourse, 
  className 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.relatedTarget)) {
        setIsOpen(false);
      }
    };
    
    // Handle ESC key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div 
      className="relative inline-block h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      ref={menuRef}
    >
      <div 
        className={cn("flex items-center h-full cursor-pointer transition-colors", isOpen ? "text-primary" : "text-paragraph hover:text-primary")}
        aria-expanded={isOpen}
      >
        {trigger}
        <svg className={cn("ml-1 w-4 h-4 transition-transform", isOpen && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[800px] bg-card border border-border shadow-xl rounded-xl overflow-hidden flex z-50",
              className
            )}
            role="menu"
          >
            {/* Links Column */}
            <div className="w-2/3 p-6 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold uppercase text-muted-foreground tracking-wider mb-4">{title}</h4>
                <ul className="space-y-3">
                  {items.slice(0, Math.ceil(items.length / 2)).map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} onClick={() => setIsOpen(false)} className="group flex items-start gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors">
                        {item.icon && <div className="text-primary mt-0.5"><item.icon className="w-5 h-5"/></div>}
                        <div>
                          <p className="font-semibold text-heading group-hover:text-primary transition-colors">{item.label}</p>
                          {item.description && <p className="text-xs text-paragraph mt-0.5">{item.description}</p>}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase text-transparent tracking-wider mb-4 hidden lg:block">_</h4>
                <ul className="space-y-3">
                  {items.slice(Math.ceil(items.length / 2)).map((item, idx) => (
                    <li key={idx}>
                      <Link href={item.href} onClick={() => setIsOpen(false)} className="group flex items-start gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors">
                        {item.icon && <div className="text-primary mt-0.5"><item.icon className="w-5 h-5"/></div>}
                        <div>
                          <p className="font-semibold text-heading group-hover:text-primary transition-colors">{item.label}</p>
                          {item.description && <p className="text-xs text-paragraph mt-0.5">{item.description}</p>}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Featured Course Column */}
            {featuredCourse && (
              <div className="w-1/3 bg-muted p-6 border-l border-border">
                <h4 className="text-sm font-bold uppercase text-muted-foreground tracking-wider mb-4">Featured</h4>
                <Link href={featuredCourse.href} onClick={() => setIsOpen(false)} className="block group">
                  <div className="w-full h-32 bg-primary/10 rounded-lg mb-3 overflow-hidden relative">
                    {/* Placeholder for Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-primary font-bold">Image</div>
                  </div>
                  <p className="font-bold text-heading group-hover:text-primary transition-colors mb-1">{featuredCourse.title}</p>
                  <p className="text-xs text-paragraph line-clamp-2">{featuredCourse.description}</p>
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
