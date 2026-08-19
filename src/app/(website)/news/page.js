import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsGrid } from "@/components/news/NewsGrid";
import { NewsletterCTA } from "@/components/news/NewsletterCTA";

export const metadata = {
  title: "News & Events | Sharda Academy",
  description: "Stay updated with the latest news, announcements, and upcoming events for students of Class 1st-10th and 11th-12th Science & Commerce at Sharda Academy.",
  keywords: ["sharda academy news","coaching announcements","student events","academy updates"],
  openGraph: {
    title: "News & Events | Sharda Academy",
    description: "Stay updated with the latest news, announcements, and upcoming events for students of Class 1st-10th and 11th-12th Science & Commerce at Sharda Academy.",
  }
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
