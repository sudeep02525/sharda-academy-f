export const HERO_DATA = {
  badge: "Building Academic Excellence Since 2021",
  title: "Empowering Students to Achieve Excellence",
  description: "Join Sharda Academy to unlock your potential. We provide top-quality coaching for board exams and holistic student development.",
  primaryCta: { label: "Admission Open 2026", href: "/admission" },
  secondaryCta: { label: "Explore Courses", href: "/courses" },
  floatingCards: [
    { label: "Success Rate", value: "98%", icon: "Trophy" },
    { label: "Top Rankers", value: "500+", icon: "Star" },
    { label: "Expert Faculty", value: "50+", icon: "Users" }
  ]
};

export const REAL_ACHIEVEMENTS = [
  { label: `${new Date().getFullYear() - 2021}+ Years of Excellence`, icon: "Trophy" },
  { label: "AC Classrooms", icon: "ThermometerSnowflake" },
  { label: "Smart Panels", icon: "MonitorPlay" },
  { label: "Biometric Attendance", icon: "Fingerprint" },
  { label: "Regular Tests", icon: "ClipboardList" },
  { label: "Parent Updates", icon: "MessageSquare" }
];

export const WHY_CHOOSE_US_DATA = {
  title: "Why Sharda Academy?",
  description: "We focus on individual growth, regular assessments, and modern infrastructure to ensure every student achieves their highest potential.",
  features: [
    {
      title: "Small Batch Size",
      description: "Limited students per batch to ensure maximum focus and a better learning environment.",
      icon: "users"
    },
    {
      title: "Individual Attention",
      description: "Personalized mentoring and performance tracking for every single student.",
      icon: "target"
    },
    {
      title: "Experienced Faculty",
      description: "Learn from top educators, ex-IITians, and subject matter experts.",
      icon: "graduation-cap"
    },
    {
      title: "Weekly Tests",
      description: "Regular assessments modeled on the latest board exam patterns.",
      icon: "clipboard-list"
    },
    {
      title: "Doubt Solving",
      description: "Dedicated daily doubt-clearing sessions to ensure 100% concept clarity.",
      icon: "message-circle"
    },
    {
      title: "Smart Classrooms",
      description: "Interactive digital panels and 3D visual aids for better understanding.",
      icon: "monitor-play"
    },
    {
      title: "Biometric Attendance",
      description: "Strict attendance tracking with automated SMS alerts sent to parents.",
      icon: "fingerprint"
    },
    {
      title: "Parent Updates",
      description: "Monthly Parent-Teacher Meetings (PTM) and weekly progress reports.",
      icon: "message-square"
    }
  ]
};

export const TESTIMONIALS_DATA = [
  {
    name: "Ravi Verma",
    role: "Parent",
    review: "Sharda Academy completely transformed my son's approach to studying. The faculty is incredibly supportive and the doubt-clearing sessions are a game changer.",
    imageUrl: "/images/faculty-visual.png",
    rating: 5
  },
  {
    name: "Priya Singh",
    role: "Top Ranker (2025)",
    review: "The rigorous testing environment and the personalized mentorship at Sharda Academy were instrumental in my success. Highly recommended!",
    imageUrl: "/images/faculty-visual.png",
    rating: 5
  },
  {
    name: "Amit Desai",
    role: "Student",
    review: "The crash course was intense but exactly what I needed. The mock tests perfectly simulated the real exam difficulty.",
    imageUrl: "/images/faculty-visual.png",
    rating: 4
  }
];

export const EVENTS_DATA = [
  {
    title: "Career Counseling Seminar 2026",
    date: "August 15, 2026",
    location: "Main Auditorium",
    imageUrl: "/images/course-visual.png"
  },
  {
    title: "HSC Board Strategy Workshop by Toppers",
    date: "September 02, 2026",
    location: "Virtual (Zoom)",
    imageUrl: "/images/course-visual.png"
  },
  {
    title: "HSC Mock Test Series Launch",
    date: "September 20, 2026",
    location: "Campus Block A",
    imageUrl: "/images/course-visual.png"
  }
];

export const METHODOLOGY_DATA = {
  title: "The Sharda Way of Learning",
  description: "A simple, effective, and step-by-step approach designed to bring out the best in every student.",
  steps: [
    { title: "Strong Foundation", desc: "We focus on clearing the basics from the ground up so students understand the core concepts easily." },
    { title: "Regular Revision", desc: "Consistent practice and weekly tests to ensure topics stay fresh in the student's mind." },
    { title: "Doubt Solving", desc: "Dedicated time for students to ask questions freely and clear any confusion immediately." },
    { title: "Parent Updates", desc: "Regular communication with parents to keep them informed about their child's academic progress." }
  ]
};

export const FACILITIES_DATA = [
  { title: "Air Conditioned Classrooms", icon: "ThermometerSnowflake" },
  { title: "Smart Panel Available", icon: "MonitorPlay" },
  { title: "Biometric Attendance", icon: "Fingerprint" },
  { title: "Doubt Solving", icon: "HelpCircle" }
];

export const RESULTS_DATA = {
  title: "Our Proud Achievers",
  description: "Meet our top scoring students who have made us proud in recent board examinations.",
  rankers: [
    { 
      name: "Rahul Deshmukh", 
      category: "SSC Board",
      score: "95.5%",
      year: "2025",
      imageUrl: "" 
    },
    { 
      name: "Sneha Patil", 
      category: "HSC Commerce",
      score: "96%",
      year: "2025",
      imageUrl: "" 
    },
    { 
      name: "Vikram Singh", 
      category: "Class 8th Foundation",
      score: "98%",
      year: "2025",
      imageUrl: "" 
    }
  ]
};

export const ANNOUNCEMENTS_DATA = [
  { 
    title: `Admissions Open for ${(() => { const y = new Date().getMonth() + 1 >= 4 ? new Date().getFullYear() : new Date().getFullYear() - 1; return `${y}-${String(y + 1).slice(-2)}`; })()} Batch`, 
    publishDate: "June 10, 2026", 
    category: "Admissions",
    shortDescription: "Secure your seat early. Admissions are now open across all classes from 1st to 12th.",
    readingTime: "2 min read",
    imageUrl: "/images/course-visual.png"
  },
  { 
    title: "Outstanding 100% Board Results", 
    publishDate: "May 25, 2026", 
    category: "Results",
    shortDescription: "We are proud to announce that our students have achieved a 100% pass rate with top grades in the recent board examinations.",
    readingTime: "4 min read",
    imageUrl: "/images/course-visual.png"
  },
  { 
    title: "New Smart Panels Installed", 
    publishDate: "May 15, 2026", 
    category: "Infrastructure",
    shortDescription: "We are upgrading our classrooms with interactive smart panels to provide a highly interactive learning experience.",
    readingTime: "3 min read",
    imageUrl: "/images/course-visual.png"
  }
];

export const FAQ_DATA = [
  { question: "What is the admission procedure?", answer: "Students or parents can visit the academy directly or call us to enroll. We offer admissions for classes 1st to 12th, Science, and Commerce." },
  { question: "Do you provide doubt solving sessions?", answer: "Yes, we provide dedicated doubt solving sessions to ensure no student is left behind." },
  { question: "Are parents updated on student progress?", answer: "Absolutely. We provide regular parent progress updates to keep you informed about your child's academic growth." },
  { question: "What is the teacher-student ratio?", answer: "We maintain small batch sizes to ensure personalized attention for every student." }
];
