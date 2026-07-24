import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { ContactPreview } from "@/components/home/ContactPreview"; // Fixing background layout pattern
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/constants/galleryData";

export const metadata = {
  title: "Gallery | Life at Sharda Academy",
  description: "Take a visual tour of the Sharda Academy campus, modern smart classrooms, events, and student achievements.",
  keywords: ["sharda academy gallery","campus photos","smart classrooms","student events"],
  openGraph: {
    title: "Gallery | Life at Sharda Academy",
    description: "Take a visual tour of the Sharda Academy campus, modern smart classrooms, events, and student achievements.",
  }
};

async function getGalleryData() {
  try {
    const res = await fetch("http://localhost:5000/api/cms/website/gallery", { cache: 'no-store' });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching gallery data:", error);
    return null;
  }
}

export default async function GalleryPage() {
  const cmsData = await getGalleryData();

  const heroData = cmsData?.hero || { badge: "Gallery", title: "Campus Life", description: "Take a visual tour of our facilities" };
  const categoriesData = cmsData?.categories || GALLERY_CATEGORIES;
  const imagesData = cmsData?.images || GALLERY_ITEMS;

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* 1. Hero */}
      <GalleryHero data={heroData} />
      
      {/* 2. Interactive Gallery Grid + Lightbox */}
      <GalleryGrid images={imagesData} categories={categoriesData} />
      
      {/* 3. Contact CTA */}
      <ContactPreview />
      
      <Footer />
    </main>
  );
}
