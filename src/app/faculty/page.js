import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { FacultyHero } from "@/components/faculty/FacultyHero";
import { FacultyGrid } from "@/components/faculty/FacultyGrid";
import { JoinFacultyCTA } from "@/components/faculty/JoinFacultyCTA";

export const metadata = {
  title: "Expert Faculty | Sharda Academy",
  description: "Meet our highly qualified and experienced educators committed to your success.",
};

export default function FacultyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* 1. Hero */}
      <FacultyHero />
      
      {/* 2. Interactive Faculty Grid */}
      <FacultyGrid />
      

      {/* 4. Join Faculty CTA */}
      <JoinFacultyCTA />
      
      <Footer />
    </main>
  );
}
