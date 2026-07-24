import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { OurMission } from "@/components/about/OurMission";
import { DirectorMessage } from "@/components/about/DirectorMessage";
import { CoreValues } from "@/components/about/CoreValues";
import { Timeline } from "@/components/about/Timeline";
import { WhyParentsChooseUs } from "@/components/about/WhyParentsChooseUs";

export const metadata = {
  title: "About Us | Sharda Academy - Best Coaching Institute",
  description: "Discover the mission, vision, and core values of Sharda Academy. We are committed to providing top-quality education for Class 1st to 10th and 11th-12th Science & Commerce.",
  keywords: ["about sharda academy","best coaching institute history","top coaching classes","education academy"],
  openGraph: {
    title: "About Us | Sharda Academy - Best Coaching Institute",
    description: "Discover the mission, vision, and core values of Sharda Academy. We are committed to providing top-quality education for Class 1st to 10th and 11th-12th Science & Commerce.",
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* 1. Hero */}
      <AboutHero />
      
      {/* 2. Mission & Vision */}
      <OurMission />
      
      {/* 3. Director's Message */}
      <DirectorMessage />
      
      {/* 4. Core Values */}
      <CoreValues />
      
      {/* 5. Timeline / History */}
      <Timeline />
      
      {/* 6. Why Parents Choose Us */}
      <WhyParentsChooseUs />
      
      <Footer />
    </main>
  );
}
