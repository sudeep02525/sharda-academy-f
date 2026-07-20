import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapSection } from "@/components/contact/MapSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CONTACT_INFO, OFFICE_HOURS } from "@/constants/contactData";

export const metadata = {
  title: "Contact Us | Sharda Academy",
  description: "Get in touch with Sharda Academy. Find our campus address, contact numbers, email, and department directories.",
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sharda Academy",
    "url": "https://www.shardaacademy.edu",
    "logo": "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": CONTACT_INFO.phone,
        "contactType": "customer service",
        "email": CONTACT_INFO.email,
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": CONTACT_INFO.emergency,
        "contactType": "emergency"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Education Boulevard, Knowledge Park",
      "addressLocality": "City",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": OFFICE_HOURS.map(oh => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": oh.day.includes("Monday - Friday") ? [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ] : oh.day.includes("Saturday") ? "Saturday" : "Sunday",
      "opens": oh.hours.split(" - ")[0] || "00:00",
      "closes": oh.hours.split(" - ")[1] || "00:00"
    }))
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* 1. Hero */}
      <ContactHero />
      
      {/* 2. Main Contact Grid (Info + Form) */}
      <section className="py-12 pb-24 bg-background relative z-10 -mt-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* 4. Google Maps */}
      <MapSection />

      {/* 5. FAQs */}
      <FAQSection className="bg-background dark:bg-background border-t-0" />
      
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
