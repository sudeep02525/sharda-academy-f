"use client";

import React, { useState, useEffect } from "react";
import { FACULTY_DATA } from "@/constants/index";
import { FacultyCard } from "@/components/cards/ContentCards";
import { Reveal } from "@/components/animations/Reveal";
import { Fade } from "@/components/animations/Fade";

import { API_BASE_URL } from "@/utils/config";

export function ExpertFaculty() {
  const [facultyData, setFacultyData] = useState(FACULTY_DATA.slice(0, 3));
  const [title, setTitle] = useState("Learn from the Experts");
  const [description, setDescription] = useState("Our faculty comprises highly qualified educators and industry experts dedicated to your academic success.");

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/cms/home/faculty`);
        if (res.ok) {
          const content = await res.json();
          if (content && content.data) {
            if (content.data.title) setTitle(content.data.title);
            if (content.data.description) setDescription(content.data.description);
            if (content.data.faculty && content.data.faculty.length > 0) {
              let mergedFaculty = FACULTY_DATA.slice(0, 3).map((defaultMember, idx) => {
                const fetchedMember = content.data.faculty[idx];
                return fetchedMember ? { ...defaultMember, ...fetchedMember } : defaultMember;
              });
              
              mergedFaculty.sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
              setFacultyData(mergedFaculty);
            }
          }
        }
      } catch (error) {
        console.warn("Failed to fetch live faculty data, falling back to static");
      }
    };
    fetchFacultyData();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-heading mb-4 md:mb-6">{title}</h2>
          </Reveal>
          <Fade direction="up" delay={0.1}>
            <p className="text-base md:text-lg text-paragraph leading-relaxed">
              {description}
            </p>
          </Fade>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {facultyData.map((faculty, idx) => (
            <Fade key={idx} direction="up" delay={0.2 + (idx * 0.1)} className="h-full">
              <FacultyCard 
                name={faculty.name}
                qualification={faculty.qualification}
                experience={faculty.experience}
                subjects={faculty.subjects}
                imageUrl={faculty.imageUrl}
              />
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
