// This file holds all hardcoded data to prepare for future CMS integration.

export const ACADEMY_DETAILS = {
  name: "Sharda Academy",
  address: "Sharda Academy, Jankalyan Society, PMG Colony, Mankhurd, Mumbai – 400043",
  phone: "+91 93244 44269",
  email: "sharda.academyofficial@gmail.com",
  timings: "Monday – Saturday | 08:00 AM – 10:00 PM",
  logoUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png",
  socialLinks: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  }
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses" },
  { label: "Faculty", href: "/faculty" },
  { label: "Results", href: "/results" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const COURSES_DATA = [
  {
    title: "Classes 1st to 12th",
    duration: "Full Year",
    fees: "View Details",
    imageUrl: "/images/course-visual.png",
    features: ["Foundation Building", "Regular Tests", "Doubt Solving", "Parent Progress Updates"]
  },
  {
    title: "11th & 12th Science",
    duration: "2 Years",
    fees: "View Details",
    imageUrl: "/images/course-visual.png",
    features: ["PCMB Available", "Board Focused", "Experienced Faculty", "Small Batch Size"]
  },
  {
    title: "11th & 12th Commerce",
    duration: "2 Years",
    fees: "View Details",
    imageUrl: "/images/course-visual.png",
    features: ["Expert Accountancy Guidance", "Smart Panel Available", "Regular Assessments", "Board Exam Prep"]
  }
];

export const FACULTY_DATA = [
  {
    name: "Dr. Ananya Sharma",
    qualification: "Ph.D. in Physics",
    experience: "12",
    subjects: ["Physics", "Mechanics"],
    imageUrl: "/images/faculty-visual.png"
  },
  {
    name: "Prof. Rajesh Kumar",
    qualification: "M.Sc. Mathematics",
    experience: "15",
    subjects: ["Mathematics", "Calculus"],
    imageUrl: "/images/faculty-visual.png"
  },
  {
    name: "Dr. Sneha Patel",
    qualification: "MBBS, M.D.",
    experience: "10",
    subjects: ["Biology", "Botany"],
    imageUrl: "/images/faculty-visual.png"
  }
];
