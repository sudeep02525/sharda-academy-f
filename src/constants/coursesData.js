export const COURSES_HERO_DATA = {
  badge: "Academic Programs",
  title: "Discover Your Path to Success",
  description: "Explore our scientifically designed classroom programs that build a strong foundation, ensure deep conceptual clarity, and train you to excel in board exams.",
};

export const COURSE_CATEGORIES = [
  "All",
  "School Section (1st-10th)",
  "11th & 12th Science",
  "11th & 12th Commerce"
];

export const COURSES_LIST = [
  {
    id: 1,
    slug: "school-section-1-to-10",
    title: "Classes 1st to 10th",
    category: "School Section (1st-10th)",
    description: "Build a strong academic foundation from the very beginning with our comprehensive school program.",
    subjects: ["English", "Mathematics", "Science", "Hindi", "Social Studies"],
    duration: "Full Year",
    eligibility: "Students from Class 1 to 10",
    classTimings: ["Morning Batch (8 AM - 12 PM)", "Evening Batch (4 PM - 8 PM)"],
    mode: "Offline",
    batchSize: "Max 30 Students",
    badge: "Popular",
    highlights: ["Foundation Building", "Regular Tests", "Doubt Solving", "Parent Progress Updates"],
    syllabus: [
      { term: "Primary (1st-5th)", topics: "Basic Mathematics, Environmental Science, Languages, General Knowledge." },
      { term: "Middle (6th-8th)", topics: "Advanced Mathematics, Science, Social Studies, English Grammar." },
      { term: "Secondary (9th-10th)", topics: "Board Exam Preparation, Advanced Sciences, Mathematics, Mock Tests." }
    ]
  },
  {
    id: 2,
    slug: "11th-12th-science",
    title: "11th & 12th Science",
    category: "11th & 12th Science",
    description: "Dedicated science coaching to excel in board exams and lay the groundwork for a successful career.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    duration: "2 Years",
    eligibility: "Class 10 Passed",
    classTimings: ["Morning Batch (7 AM - 12 PM)", "Afternoon Batch (2 PM - 7 PM)"],
    mode: "Offline",
    batchSize: "Max 35 Students",
    badge: "Trending",
    highlights: ["PCMB Available", "Board Focused", "Experienced Faculty", "Mock Exams"],
    syllabus: [
      { term: "Class 11", topics: "Core concepts building in Physics, Chemistry, Biology/Mathematics." },
      { term: "Class 12 (Part 1)", topics: "Advanced topics, derivations, organic chemistry, calculus." },
      { term: "Class 12 (Part 2)", topics: "Syllabus completion, revision, and extensive mock exams." }
    ]
  },
  {
    id: 3,
    slug: "11th-12th-commerce",
    title: "11th & 12th Commerce",
    category: "11th & 12th Commerce",
    description: "Expert guidance in accountancy, economics, and business studies to secure top marks in boards.",
    subjects: ["Accountancy", "Economics", "Business Studies", "Mathematics", "English"],
    duration: "2 Years",
    eligibility: "Class 10 Passed",
    classTimings: ["Evening Batch (3 PM - 7 PM)", "Weekend Batch Available"],
    mode: "Offline",
    batchSize: "Max 35 Students",
    badge: "",
    highlights: ["Expert Accountancy Guidance", "Smart Panel Available", "Regular Assessments"],
    syllabus: [
      { term: "Class 11", topics: "Introduction to Accounting, Microeconomics, Business Organization." },
      { term: "Class 12 (Part 1)", topics: "Partnership Accounts, Macroeconomics, Financial Management." },
      { term: "Class 12 (Part 2)", topics: "Company Accounts, Project Work, Board-pattern mock tests." }
    ]
  }
];

export const CAREER_OPPORTUNITIES = [
  { icon: "Building", title: "Top Universities & Institutes", description: "Secure admissions into premier national and state colleges through excellent board exam scores." },
  { icon: "Heart", title: "Healthcare & Medical", description: "Strong foundational sciences prepare you for a prestigious career in medicine, pharmacy, or research." },
  { icon: "Globe", title: "Global Corporate Careers", description: "Our commerce and science programs lay the groundwork for leadership roles in top multinational companies." }
];

