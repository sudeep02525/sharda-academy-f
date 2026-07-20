"use client";

import { useState } from "react";
import { ACADEMIC_YEARS, EXAM_CATEGORIES, TOP_RANKERS } from "@/constants/resultsData";
import { RankerCard } from "@/components/results/RankerCard";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { AnimatePresence, motion } from "framer-motion";

export function TopRankers() {
  const [activeYear, setActiveYear] = useState(ACADEMIC_YEARS[0]); 
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRankers = TOP_RANKERS.filter(ranker => {
    const matchesYear = ranker.year === activeYear;
    const matchesCategory = activeCategory === "All" || ranker.category === activeCategory;
    return matchesYear && matchesCategory;
  });

  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col items-center text-center mb-16 w-full">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4 text-center">
              Our Top Rankers
            </h2>
          </Reveal>
          <Fade direction="up" delay={0.2}>
            <p className="text-lg text-paragraph max-w-2xl mx-auto text-center">
              Celebrating the hard work, dedication, and outstanding board results of our brightest students.
            </p>
          </Fade>
        </div>

        {/* Filters */}
        <div className="flex flex-col items-center gap-6 mb-16">
          
          {/* Year Filter */}
          <Fade direction="up" delay={0.3}>
             <div className="inline-flex bg-background border border-border rounded-full p-1.5 shadow-sm">
                {ACADEMIC_YEARS.map((year) => (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      activeYear === year 
                        ? "bg-primary text-white shadow-md shadow-primary/20" 
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {year}
                  </button>
                ))}
             </div>
          </Fade>

          {/* Category Filter */}
          <Fade direction="up" delay={0.4}>
             <div className="flex flex-wrap justify-center gap-2">
                {["All", ...EXAM_CATEGORIES].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      activeCategory === cat 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "bg-surface text-paragraph border border-border hover:border-primary/50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
          </Fade>

        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredRankers.map((ranker, idx) => (
              <motion.div
                key={ranker.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="h-full"
              >
                <RankerCard 
                  name={ranker.name}
                  school={ranker.school}
                  category={ranker.category}
                  score={ranker.score}
                  rank={ranker.rank}
                  year={ranker.year}
                  imageUrl={ranker.imageUrl}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredRankers.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No ranker data available for {activeYear}.
          </div>
        )}

      </div>
    </section>
  );
}
