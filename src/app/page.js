import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustedBy } from "@/components/home/TrustedBy";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PopularCourses } from "@/components/home/PopularCourses";
import { LearningMethodology } from "@/components/home/LearningMethodology";
import { Facilities } from "@/components/home/Facilities";
import { ExpertFaculty } from "@/components/home/ExpertFaculty";
import { StudentResults } from "@/components/home/StudentResults";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AdmissionProcess } from "@/components/home/AdmissionProcess";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Announcements } from "@/components/home/Announcements";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactPreview } from "@/components/home/ContactPreview";
import { Footer } from "@/components/navigation/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={true} />
      
      {/* 3. Hero Section */}
      <HeroSection />
      
      {/* 4. Trusted By */}
      <TrustedBy />
      
      {/* 5. Why Choose Us */}
      <WhyChooseUs />
      
      {/* 6. Popular Courses */}
      <PopularCourses />

      {/* 7. Learning Methodology */}
      <LearningMethodology />

      {/* 8. Facilities */}
      <Facilities />
      
      {/* 9. Expert Faculty */}
      <ExpertFaculty />

      {/* 10. Student Results */}
      <StudentResults />
      
      {/* 11. Testimonials */}
      <TestimonialsSection />


      {/* 12b. Admission Process */}
      <AdmissionProcess />
      
      {/* 13. Events & Workshops (Deleted) */}

      {/* 14. Gallery Preview (Temporarily Hidden as requested) */}
      {/* <GalleryPreview /> */}

      {/* 15. Announcements */}
      <Announcements />

      {/* 16. FAQs */}
      <FAQSection />

      {/* 17 & 18. Contact / Admission CTA */}
      <ContactPreview />
      
      {/* 19. Premium Footer */}
      <Footer />
    </main>
  );
}