"use client";

import { COURSES_LIST } from "@/constants/coursesData";
import { CourseCard } from "@/components/cards/CourseCard";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

export function RelatedCourses({ currentCourseId, category }) {
  // Find up to 3 related courses in the same category, excluding the current one
  const related = COURSES_LIST.filter(c => c.category === category && c.id !== currentCourseId).slice(0, 3);
  
  // If no related courses in category, fallback to just 3 other courses
  const fallbackRelated = related.length > 0 ? related : COURSES_LIST.filter(c => c.id !== currentCourseId).slice(0, 3);

  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading tracking-tight mb-4">You May Also Like</h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fallbackRelated.map((course, idx) => (
            <Fade key={course.id} direction="up" delay={0.2 + (idx * 0.1)} className="h-full">
              <CourseCard 
                title={course.title}
                category={course.category}
                description={course.description}
                duration={course.duration}
                eligibility={course.eligibility}
                badge={course.badge}
                fees={course.fees}
                imageUrl={course.imageUrl}
                href={`/courses/${course.slug}`}
              />
            </Fade>
          ))}
        </div>

      </div>
    </section>
  );
}
