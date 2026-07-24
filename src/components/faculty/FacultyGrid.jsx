"use client";

import { useState } from "react";
import { FACULTY_DEPARTMENTS, FACULTY_MEMBERS } from "@/constants/facultyData";
import { TeacherCard } from "@/components/faculty/TeacherCard";
import { Fade } from "@/components/animations/Fade";
import { AnimatePresence, motion } from "framer-motion";

export function FacultyGrid({ departments, faculty }) {
  const [activeDept, setActiveDept] = useState("All");

  const depts = departments || FACULTY_DEPARTMENTS;
  const facultyMembers = faculty || FACULTY_MEMBERS;

  const filteredFaculty = facultyMembers.filter(member => 
    activeDept === "All" || member.department === activeDept
  );

  return (
    <section className="py-24 bg-card border-t border-border min-h-[600px]">
      <div className="container mx-auto px-4">
        
        {/* Filters */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-16">
          <Fade direction="up" delay={0.1} className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
            <div className="flex items-center justify-start lg:justify-center gap-2">
              {depts.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    activeDept === dept 
                      ? "bg-primary text-[#0F2E4E] font-bold shadow-md shadow-primary/20" 
                      : "bg-background border border-border text-paragraph hover:border-primary hover:text-primary"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </Fade>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredFaculty.map((member, idx) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full"
              >
                <TeacherCard 
                  name={member.name}
                  department={member.department}
                  role={member.role}
                  qualifications={member.qualifications}
                  experience={member.experience}
                  specializations={member.specializations}
                  achievements={member.achievements}
                  teachingMethod={member.teachingMethod}
                  languages={member.languages}
                  availability={member.availability}
                  imageUrl={member.imageUrl}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
