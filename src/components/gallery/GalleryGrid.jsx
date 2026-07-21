"use client";

import { useState } from "react";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/constants/galleryData";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import { Lightbox } from "@/components/gallery/Lightbox";
import { Fade } from "@/components/animations/Fade";
import { AnimatePresence, motion } from "framer-motion";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section className="py-24 bg-card border-t border-border min-h-[600px]">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col items-center justify-center mb-16">
          <Fade direction="up" delay={0.1} className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {GALLERY_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    activeCategory === category 
                      ? "bg-primary text-[#0F2E4E] font-bold shadow-md shadow-primary/20" 
                      : "bg-background border border-border text-paragraph hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Fade>
        </div>

        {/* Masonry / Grid Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <GalleryCard 
                  title={item.title}
                  category={item.category}
                  date={item.date}
                  imageUrl={item.imageUrl}
                  onClick={() => openLightbox(idx)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            No images found for this category.
          </div>
        )}

      </div>

      <Lightbox 
        isOpen={lightboxOpen}
        images={filteredItems}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
}
