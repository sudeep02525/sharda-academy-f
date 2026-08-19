import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { MapSection } from "@/components/contact/MapSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CONTACT_INFO, OFFICE_HOURS } from "@/constants/contactData";

import { API_BASE_URL } from "@/utils/config";

export const metadata = {
  title: "Contact Us | Sharda Academy Support",
  description: "Get in touch with Sharda Academy. Find our campus address, contact numbers, and email for inquiries regarding 1st-10th and 11th-12th Science/Commerce batches.",
  keywords: ["contact sharda academy","sharda academy address","coaching helpline","academy support", "admission inquiry", "sharda academy contact number"],
  openGraph: {
    title: "Contact Us | Sharda Academy Support",
    description: "Get in touch with Sharda Academy. Find our campus address, contact numbers, and email for inquiries regarding 1st-10th and 11th-12th Science/Commerce batches.",
  }
};

async function getContactData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/cms/website/contact`, { cache: 'no-store' });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return null;
  }
}

export default async function ContactPage() {
  const cmsData = await getContactData();

  const heroData = cmsData?.hero || { badge: "Contact", title: "We'd Love to Hear From You", description: "We're here to help you take the next step in your educational journey." };
  const infoData = cmsData?.contactInfo || CONTACT_INFO;
  const hoursData = cmsData?.officeHours || OFFICE_HOURS;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Sharda Academy",
    "url": "https://www.shardaacademy.edu",
    "logo": "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": infoData.phone,
        "contactType": "customer service",
        "email": infoData.email,
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": infoData.emergency,
        "contactType": "emergency"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": infoData.address,
      "addressLocality": "City",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": hoursData.map(oh => ({
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
      <ContactHero data={heroData} />

      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <ContactInfo info={infoData} hours={hoursData} />
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <MapSection address={infoData.address} mapQuery={infoData.mapQuery} mapEmbedUrl={infoData.mapEmbedUrl} />
      
      {/* 5. FAQs - Overridden to bg-background to alternate with Footer (bg-surface) */}
      <FAQSection className="bg-background" />
      
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
