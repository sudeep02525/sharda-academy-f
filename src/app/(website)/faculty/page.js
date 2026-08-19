import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { FacultyHero } from "@/components/faculty/FacultyHero";
import { FacultyGrid } from "@/components/faculty/FacultyGrid";
import { JoinFacultyCTA } from "@/components/faculty/JoinFacultyCTA";

import { API_BASE_URL } from "@/utils/config";

export const metadata = {
  title: "Our Expert Faculty | Sharda Academy",
  description: "Meet our highly qualified and experienced educators committed to your success in School Section, Science, and Commerce board exams.",
  keywords: ["sharda academy teachers","expert faculty","best coaching teachers","science commerce tutors"],
  openGraph: {
    title: "Our Expert Faculty | Sharda Academy",
    description: "Meet our highly qualified and experienced educators committed to your success in School Section, Science, and Commerce board exams.",
  }
};

async function getFacultyData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/cms/website/faculty`, { 
      cache: 'no-store' 
    });
    if (!res.ok) throw new Error("Failed to fetch");
    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error("Error fetching faculty data:", error);
    return null;
  }
}

export default async function FacultyPage() {
  const pageData = await getFacultyData();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* 1. Hero */}
      <FacultyHero data={pageData?.hero} />
      
      {/* 2. Interactive Faculty Grid */}
      <FacultyGrid 
        departments={pageData?.departments} 
        faculty={pageData?.faculty} 
      />
      
      {/* 3. Join Faculty CTA */}
      <JoinFacultyCTA data={pageData?.cta} />
      
      <Footer />
    </main>
  );
}
