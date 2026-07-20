import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { CoursesGrid } from "@/components/courses/CoursesGrid";
import { CareerOpportunities } from "@/components/courses/CareerOpportunities";
import { FAQSection } from "@/components/home/FAQSection"; // Reusing Home Section
import { ContactPreview } from "@/components/home/ContactPreview"; // Fixing background layout pattern

export const metadata = {
  title: "Academic Programs & Courses | Sharda Academy",
  description: "Explore our scientifically designed classroom programs for JEE, NEET, and Foundation batches.",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* 1. Hero */}
      <CoursesHero />
      
      {/* 2. Interactive Courses Grid (Search & Filter) */}
      <CoursesGrid />
      
      {/* 3. Career Outcomes */}
      <CareerOpportunities />
      
      {/* 5. FAQs (Reused from Home) */}
      <FAQSection />
      
      {/* 6. Contact Preview */}
      <ContactPreview />
      
      <Footer />
    </main>
  );
}
