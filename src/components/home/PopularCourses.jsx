"use client";

import React, { useState, useEffect } from "react";
import { COURSES_LIST } from "@/constants/coursesData";
import { CourseCard } from "@/components/cards/CourseCard";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

import { API_BASE_URL } from "@/utils/config";

export function PopularCourses() {
  const [featuredCourses, setFeaturedCourses] = useState(COURSES_LIST.slice(0, 3)); // Fallback to first 3

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/courses`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data && content.data.courses && content.data.courses.length > 0) {
            // Merge with static data to ensure no fields (like subjects, highlights) are missing if CMS data is incomplete
            const mergedCourses = COURSES_LIST.slice(0, 3).map((defaultCourse, idx) => {
              const fetchedCourse = content.data.courses[idx];
              return fetchedCourse ? { ...defaultCourse, ...fetchedCourse } : defaultCourse;
            });
            setFeaturedCourses(mergedCourses);
            return;
          }
        }
      } catch (error) {
        console.warn("Failed to fetch live popular courses data, falling back to static");
      }
    };
    fetchCoursesData();
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF6] dark:bg-surface border-b border-border/50">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-heading mb-6">Popular Courses</h2>
          </Reveal>
          <Fade direction="up" delay={0.2} className="w-full flex justify-center">
            <p className="text-lg md:text-xl text-paragraph font-medium max-w-2xl mx-auto">
              Structured programs designed to build strong foundations and achieve top ranks in competitive examinations.
            </p>
          </Fade>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {featuredCourses.map((course, idx) => (
            <Fade key={course.id} direction="up" delay={0.2 + (idx * 0.1)} className="h-full">
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
            </Fade>
          ))}
        </div>

        {/* Footer CTA */}
        <Fade direction="up" delay={0.6} className="mt-16 flex justify-center">
          <Link href="/courses">
            <Button variant="outline" className="group">
              <span className="flex items-center gap-2">
                View All Courses
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Button>
          </Link>
        </Fade>

      </div>
    </section>
  );
}
