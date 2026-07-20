"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Lightbox({ 
  isOpen, 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev 
}) {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "ArrowLeft") onPrev();
  }, [isOpen, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox"
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 dark:bg-surface/10 hover:bg-white/20 p-2 rounded-full transition-colors z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Close Lightbox"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        {/* Counter */}
        <div className="absolute top-6 left-6 text-white/70 font-medium tracking-widest text-sm z-50">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Prev Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/5 dark:bg-surface/5 hover:bg-white/10 p-3 rounded-full transition-colors z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hidden md:block"
          aria-label="Previous Image"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>

        {/* Next Button */}
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/5 dark:bg-surface/5 hover:bg-white/10 p-3 rounded-full transition-colors z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary hidden md:block"
          aria-label="Next Image"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </button>

        {/* Image Container (Click outside to close) */}
        <div 
          className="relative w-full h-full flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          onClick={onClose}
        >
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl h-full max-h-[80vh] cursor-default flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -1000) onNext();
              else if (swipe > 1000) onPrev();
            }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 dark:border-border/10 shadow-2xl bg-black flex items-center justify-center">
              {currentImage.imageUrl ? (
                <img
                  src={currentImage.imageUrl}
                  alt={currentImage.alt || currentImage.title}
                 
                 
                  className="w-full h-full object-contain"
                 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900/50 text-slate-500">
                  <svg className="w-32 h-32 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
            
            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold text-white mb-1">{currentImage.title}</h3>
              {currentImage.description && (
                <p className="text-white/70 text-sm">{currentImage.description}</p>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
