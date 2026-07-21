"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ACADEMY_DETAILS } from "@/constants/index";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F2E4E] dark:bg-surface text-white/70 pt-24 pb-12 border-t border-primary/20 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] opacity-30 pointer-events-none translate-x-1/3 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px] opacity-30 pointer-events-none -translate-x-1/3 translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-12 h-12 overflow-hidden transition-transform group-hover:scale-105">
                <img 
                  src={ACADEMY_DETAILS.logoUrl} 
                  alt={ACADEMY_DETAILS.name} 
                  
                 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">
                {ACADEMY_DETAILS.name}
              </div>
            </Link>
            <p className="text-[15px] leading-relaxed max-w-sm text-white/70">
              Empowering students to achieve excellence through comprehensive coaching, expert faculty, and a proven methodology. Building the leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              <a aria-label="Facebook" href={ACADEMY_DETAILS.socialLinks?.facebook || "#"} className="w-10 h-10 rounded-full bg-white/5 dark:bg-white/10 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 text-white hover:text-[#0F2E4E] hover:scale-110 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a aria-label="Instagram" href="#" className="w-10 h-10 rounded-full bg-white/5 dark:bg-white/10 border border-white/5 dark:border-white/20 flex items-center justify-center hover:bg-pink-600 hover:border-pink-600 transition-all duration-300 text-white hover:scale-110 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a aria-label="WhatsApp" href="https://wa.me/919324444269" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 dark:bg-white/10 border border-white/5 dark:border-white/20 flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300 text-white hover:scale-110 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            {/* Platform Heading */}
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight relative inline-block">Platform<span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span></h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Gallery</Link></li>
              <li><Link href="/results" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Student Results</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight relative inline-block">Academics<span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span></h4>
            <ul className="space-y-4">
              <li><Link href="/courses/school-section-1-to-10" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Classes 1st to 10th</Link></li>
              <li><Link href="/courses/11th-12th-science" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">11th & 12th Science</Link></li>
              <li><Link href="/courses/11th-12th-commerce" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">11th & 12th Commerce</Link></li>
              <li><Link href="/courses" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">All Courses</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-6 tracking-tight">Contact Us</h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span className="text-white/90 font-medium leading-relaxed">{ACADEMY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span className="text-white/90 font-medium">{ACADEMY_DETAILS.phone}</span>
              </li>
              <li className="flex items-center gap-4">
                <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span className="text-white/90 font-medium">{ACADEMY_DETAILS.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 pb-12 md:pb-0 border-t border-white/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#64748B]">
          <p className="text-center md:text-left">© {currentYear} {ACADEMY_DETAILS.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 md:gap-8 md:pr-20">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary hover:text-primary-hover transition-colors flex items-center gap-2 font-medium ml-2 md:ml-4"
              aria-label="Scroll back to top"
            >
              Top
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
