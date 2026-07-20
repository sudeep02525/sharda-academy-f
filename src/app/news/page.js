import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsGrid } from "@/components/news/NewsGrid";
import { NewsletterCTA } from "@/components/news/NewsletterCTA";

export const metadata = {
  title: "News & Events | Sharda Academy",
  description: "Stay updated with the latest news, announcements, and upcoming events at Sharda Academy.",
};

export default function NewsHubPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* 1. Hero */}
      <NewsHero />
      
      {/* 2. Interactive News Grid */}
      <NewsGrid />


      {/* 4. Newsletter Subscription */}
      <NewsletterCTA />
      
      <Footer />
    </main>
  );
}
