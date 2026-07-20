import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ResultsHero } from "@/components/results/ResultsHero";
import { TopRankers } from "@/components/results/TopRankers";
import { SubjectPerformance } from "@/components/results/SubjectPerformance";
import { SuccessStories } from "@/components/results/SuccessStories";
import { AwardsRecognition } from "@/components/results/AwardsRecognition";
import { FAQSection } from "@/components/home/FAQSection"; // Reused
import { ContactPreview } from "@/components/home/ContactPreview"; // Reused

export const metadata = {
  title: "Results & Achievements | Sharda Academy",
  description: "View the outstanding academic results, top rankers, and success stories of Sharda Academy students in JEE, NEET, and Boards.",
};

export default function ResultsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sharda Academy",
    "description": metadata.description,
    "url": "https://www.shardaacademy.edu/results",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "5000"
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* 1. Hero */}
      <ResultsHero />
      
      {/* 3. Top Rankers (with Year Filter) */}
      <TopRankers />

      {/* 4. Subject Performance Bars */}
      <SubjectPerformance />

      {/* 5. Success Stories */}
      <SuccessStories />

      {/* 6. Awards Timeline */}
      <AwardsRecognition />
      
      {/* 7. FAQs */}
      <FAQSection />
      
      {/* 8. Contact CTA */}
      <ContactPreview />
      
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
