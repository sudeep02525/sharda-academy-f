import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ResultsHero } from "@/components/results/ResultsHero";
import { TopRankers } from "@/components/results/TopRankers";
import { SubjectPerformance } from "@/components/results/SubjectPerformance";
import { SuccessStories } from "@/components/results/SuccessStories";
import { AwardsRecognition } from "@/components/results/AwardsRecognition";
import { FAQSection } from "@/components/home/FAQSection"; // Reused
import { ContactPreview } from "@/components/home/ContactPreview"; // Reused
import { RESULTS_HERO, ACADEMIC_YEARS, EXAM_CATEGORIES, TOP_RANKERS, SUBJECT_PERFORMANCE, SUCCESS_STORIES, AWARDS_RECOGNITION } from "@/constants/resultsData";

import { API_BASE_URL } from "@/utils/config";

export const metadata = {
  title: "Results & Achievements | Sharda Academy",
  description: "View the outstanding academic results, top rankers, and success stories of Sharda Academy students in 10th and 12th Board Exams (Science & Commerce).",
  keywords: ["sharda academy results","10th board toppers","12th science results","12th commerce toppers","board exam success"],
  openGraph: {
    title: "Results & Achievements | Sharda Academy",
    description: "View the outstanding academic results, top rankers, and success stories of Sharda Academy students in 10th and 12th Board Exams (Science & Commerce).",
  }
};

async function getResultsData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/cms/website/results`, { cache: 'no-store' });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching results data:", error);
    return null;
  }
}

export default async function ResultsPage() {
  const cmsData = await getResultsData();

  const heroData = cmsData?.hero || RESULTS_HERO;
  const yearsData = cmsData?.years || ACADEMIC_YEARS;
  const categoriesData = cmsData?.categories || EXAM_CATEGORIES;
  const rankersData = cmsData?.topRankers || TOP_RANKERS;
  const performanceData = cmsData?.subjectPerformance || SUBJECT_PERFORMANCE;
  const storiesData = cmsData?.successStories || SUCCESS_STORIES;
  const awardsData = cmsData?.awards || AWARDS_RECOGNITION;

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
      <ResultsHero data={heroData} />
      
      {/* 3. Top Rankers (with Year Filter) */}
      <TopRankers rankers={rankersData} years={yearsData} categories={categoriesData} />

      {/* 4. Subject Performance Bars */}
      <SubjectPerformance data={performanceData} />

      {/* 5. Success Stories */}
      <SuccessStories data={storiesData} />

      {/* 6. Awards Timeline */}
      <AwardsRecognition data={awardsData} />
      
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
