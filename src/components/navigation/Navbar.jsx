"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ACADEMY_DETAILS, NAV_LINKS } from "@/constants/index";
import { Drawer } from "@/components/overlays/Drawer";
import { useTheme } from "@/components/providers/ThemeProvider";

export function Navbar({ 
  className,
  transparent = true 
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Handle Scroll behavior
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = cn(
    "fixed top-0 inset-x-0 z-50 w-full transition-all duration-500 ease-in-out",
    isScrolled 
      ? "bg-white/75 dark:bg-surface/75 backdrop-blur-xl shadow-sm border-b border-border/50 dark:border-primary/20 py-3" 
      : transparent 
        ? "bg-transparent py-5 border-b border-transparent" 
        : "bg-white/80 dark:bg-surface/80 backdrop-blur-lg py-5 border-b border-transparent"
  );

  return (
    <>
      <nav className={navClasses}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-11 h-11 overflow-hidden transition-transform group-hover:scale-105">
              <img 
                src={ACADEMY_DETAILS.logoUrl} 
                alt={ACADEMY_DETAILS.name} 
                
               
                className="w-full h-full object-contain" 
              />
            </div>
            <span className={cn(
              "text-xl font-bold tracking-tight transition-colors text-heading"
            )}>
              {ACADEMY_DETAILS.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 lg:ml-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-semibold transition-all duration-300 group/navlink py-1",
                    isActive ? "text-primary" : "text-paragraph hover:text-primary/80"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-primary transition-all duration-300 ease-out",
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover/navlink:w-3/4 group-hover/navlink:opacity-100"
                  )} />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA & Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card shadow-sm hover:bg-muted transition-all hover:scale-105 active:scale-95 text-foreground"
              )} aria-label="Toggle Theme">
              {mounted && theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </button>

            <Link href="/admission">
              <Button variant="default" className="shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 rounded-full px-6">
                Enroll Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={cn(
                "p-2 focus-visible:outline-none text-foreground"
              )}
              aria-label="Open Mobile Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-drawer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <Drawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        side="right"
      >
        <div className="flex flex-col h-full mt-8">
          <div className="space-y-4 flex-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg font-bold text-heading hover:text-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-6 pb-6 border-t border-border mt-auto flex flex-col gap-4">
            {mounted && (
              <div className="bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-2xl flex items-center mb-2 border border-slate-200 dark:border-slate-800">
                <button 
                  onClick={() => setTheme('light')}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl transition-all duration-300", 
                    theme !== 'dark' 
                      ? "bg-white text-slate-900 shadow-sm" 
                      : "text-slate-500 hover:text-slate-300"
                  )}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                  Light
                </button>
                <button 
                  onClick={() => setTheme('dark')}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-xl transition-all duration-300", 
                    theme === 'dark' 
                      ? "bg-slate-800 text-white shadow-md shadow-black/20 border border-slate-700/50" 
                      : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                  )}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                  Dark
                </button>
              </div>
            )}
            <Link href="/admission" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full">Enroll Now</Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
}
