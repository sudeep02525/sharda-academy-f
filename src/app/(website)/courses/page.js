import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { CoursesHero } from "@/components/courses/CoursesHero";
import { CoursesGrid } from "@/components/courses/CoursesGrid";
import { CareerOpportunities } from "@/components/courses/CareerOpportunities";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactPreview } from "@/components/home/ContactPreview";

import { API_BASE_URL } from "@/utils/config";

export const metadata = {
  title: "Courses | Classes 1st to 10th & 11th-12th (Science & Commerce)",
  description: "Explore our scientifically designed classroom programs for Classes 1st to 10th, and 11th & 12th Science and Commerce. Build a strong foundation with expert faculty.",
  keywords: ["sharda academy courses","1st to 10th classes","11th 12th science classes","11th 12th commerce coaching","board exam preparation", "best tuition classes", "high school coaching"],
  openGraph: {
    title: "Courses | Classes 1st to 10th & 11th-12th (Science & Commerce)",
    description: "Explore our scientifically designed classroom programs for Classes 1st to 10th, and 11th & 12th Science and Commerce. Build a strong foundation with expert faculty.",
  }
};

export default async function CoursesPage() {
  let pageData = null;
  try {
    // using cache: no-store or revalidate so we can see updates quickly
    const res = await fetch(`${API_BASE_URL}/api/cms/academics/courses`, {
        credentials: "include", cache: "no-store" });
    if (res.ok) {
       const json = await res.json();
       if (json && json.data) {
          pageData = json.data;
       }
    }
  } catch (error) {
    console.error("Failed to fetch courses data", error);
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* 1. Hero */}
      <CoursesHero data={pageData?.hero} />
      
      {/* 2. Interactive Courses Grid (Search & Filter) */}
      <CoursesGrid categories={pageData?.categories} courses={pageData?.courses} />
      
      {/* 3. Career Outcomes */}
      <CareerOpportunities data={pageData?.opportunities} />
      
      {/* 5. FAQs (Reused from Home) */}
      <FAQSection />
      
      {/* 6. Contact Preview */}
      <ContactPreview />
      
      <Footer />
    </main>
  );
}
