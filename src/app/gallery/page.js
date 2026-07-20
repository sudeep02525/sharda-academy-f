import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ContactPreview } from "@/components/home/ContactPreview"; // Fixing background layout pattern

export const metadata = {
  title: "Gallery | Sharda Academy",
  description: "Take a visual tour of Sharda Academy's campus, classrooms, events, and achievements.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* 1. Hero */}
      <GalleryHero />
      
      {/* 2. Interactive Gallery Grid + Lightbox */}
      <GalleryGrid />
      
      {/* 3. Contact CTA */}
      <ContactPreview />
      
      <Footer />
    </main>
  );
}
