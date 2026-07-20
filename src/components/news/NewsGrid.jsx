"use client";

import { useState } from "react";
import { NEWS_CATEGORIES, NEWS_ARTICLES } from "@/constants/newsData";
import { NewsCard } from "@/components/news/NewsCard";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Input } from "@/components/forms/Input";
import { AnimatePresence, motion } from "framer-motion";

export function NewsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNews = NEWS_ARTICLES.filter(article => {
    const matchesCat = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          <Reveal>
            <h2 className="text-3xl font-bold text-heading">Latest News</h2>
          </Reveal>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Fade direction="right" delay={0.1} className="overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-2">
                {NEWS_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      activeCategory === category 
                        ? "bg-primary text-white shadow-md" 
                        : "bg-background border border-border text-paragraph hover:border-primary hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Fade>

            <Fade direction="left" delay={0.2} className="w-full sm:w-64 shrink-0">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                <Input 
                  type="text" 
                  placeholder="Search news or tags..." 
                  className="pl-9 rounded-full bg-background text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </Fade>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((article, idx) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={article.featured ? "md:col-span-2" : "col-span-1"}
              >
                <NewsCard 
                  title={article.title}
                  shortDescription={article.shortDescription}
                  category={article.category}
                  publishDate={article.publishDate}
                  readingTime={article.readingTime}
                  imageUrl={article.imageUrl}
                  featured={article.featured}
                  href={`/news/${article.slug}`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredNews.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">
            No articles found matching your criteria.
          </div>
        )}

      </div>
    </section>
  );
}
