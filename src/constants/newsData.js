export const NEWS_CATEGORIES = ["All", "Academic", "Announcements", "Campus Life", "Exams"];

export const NEWS_ARTICLES = [
  {
    id: 1,
    slug: "sharda-academy-produces-state-toppers-2025",
    title: "Sharda Academy Produces State Toppers for 5th Consecutive Year",
    shortDescription: "Our students have once again proven their mettle by securing top ranks in the state board examinations.",
    content: "Full article content goes here...",
    category: "Academic",
    publishDate: "August 15, 2025",
    author: "Admin",
    readingTime: "4 min read",
    tags: ["Results", "Boards", "Success"],
    featured: true,
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png"
  },
  {
    id: 2,
    slug: "new-digital-smart-classrooms",
    title: "Inauguration of New Digital Smart Classrooms",
    shortDescription: "We are upgrading our infrastructure to provide a highly interactive and tech-enabled learning experience.",
    content: "Full article content goes here...",
    category: "Campus Life",
    publishDate: "July 28, 2025",
    author: "Management",
    readingTime: "3 min read",
    tags: ["Infrastructure", "Technology"],
    featured: false,
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png"
  },
  {
    id: 3,
    slug: "hsc-board-2025-preparation-strategy",
    title: "HSC Board 2025: Last Minute Preparation Strategy",
    shortDescription: "Expert tips from our HOD Physics, Dr. Arvind Sharda, on how to maximize your score in the final month.",
    content: "Full article content goes here...",
    category: "Exams",
    publishDate: "May 10, 2025",
    author: "Dr. Arvind Sharda",
    readingTime: "6 min read",
    tags: ["HSC", "Tips", "Strategy"],
    featured: true,
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png"
  },
  {
    id: 4,
    slug: "admissions-open-for-2026-batch",
    title: `Admissions Open for ${(() => { const y = new Date().getMonth() + 1 >= 4 ? new Date().getFullYear() : new Date().getFullYear() - 1; return y; })()} Foundation & Target Batches`,
    shortDescription: "Secure your seat early. Scholarship tests begin next month across all branches.",
    content: "Full article content goes here...",
    category: "Announcements",
    publishDate: "April 05, 2025",
    author: "Admissions Office",
    readingTime: "2 min read",
    tags: ["Admissions", "Scholarship"],
    featured: false,
    imageUrl: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png"
  }
];
