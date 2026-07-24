"use client";

import { useState, useRef, useEffect } from "react";
import { COURSE_CATEGORIES, COURSES_LIST } from "@/constants/coursesData";
import { CourseCard } from "@/components/cards/CourseCard";
import { Input } from "@/components/forms/Input";
import { Fade } from "@/components/animations/Fade";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CoursesGrid({ categories, courses }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, [categories, courses]);

  const scrollBy = (offset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const catList = categories || COURSE_CATEGORIES;
  const courseList = courses || COURSES_LIST;

  const filteredCourses = courseList.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-card border-t border-border min-h-[600px]">
      <div className="container mx-auto px-4">
        
        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          
          <Fade direction="right" delay={0.1} className="relative w-full lg:flex-1 min-w-0 group">
            
            {showLeftArrow && (
              <button 
                onClick={() => scrollBy(-250)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -mt-2 z-10 p-1.5 bg-background shadow-lg rounded-full text-primary hover:bg-primary hover:text-white transition-all border border-border/50 hidden md:flex items-center justify-center"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="w-full overflow-x-auto custom-scrollbar pb-2 scroll-smooth"
            >
              <div className="flex gap-3 w-max px-1 py-1">
                {catList.map((category, idx) => (
                  <button
                    key={`${category}-${idx}`}
                    onClick={() => setActiveCategory(category)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      activeCategory === category 
                        ? "bg-primary text-[#0F2E4E] font-bold shadow-md shadow-primary/20" 
                        : "bg-background border border-border text-paragraph hover:border-primary hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {showRightArrow && (
              <button 
                onClick={() => scrollBy(250)}
                className="absolute right-0 top-1/2 -translate-y-1/2 -mt-2 z-10 p-1.5 bg-background shadow-lg rounded-full text-primary hover:bg-primary hover:text-white transition-all border border-border/50 hidden md:flex items-center justify-center"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </Fade>

          <Fade direction="left" delay={0.2} className="w-full lg:w-96 shrink-0">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              <Input 
                type="text" 
                placeholder="Search courses..." 
                className="pl-10 rounded-full bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </Fade>

        </div>

        {/* Grid */}
        {filteredCourses.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredCourses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <CourseCard 
                    title={course.title}
                    category={course.category}
                    description={course.description}
                    duration={course.duration}
                    eligibility={course.eligibility}
                    badge={course.badge}
                    subjects={course.subjects}
                    classTimings={course.classTimings}
                    mode={course.mode}
                    batchSize={course.batchSize}
                    fees={course.fees}
                    href={`/courses/${course.slug}`}
                    features={course.highlights}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <Fade direction="up">
            <div className="py-20 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center text-muted-foreground mb-4">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">No courses found</h3>
              <p className="text-paragraph">Try adjusting your category or search term.</p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-6 text-primary font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          </Fade>
        )}

      </div>
    </section>
  );
}
