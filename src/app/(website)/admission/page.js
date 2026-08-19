import { Navbar } from "@/components/navigation/Navbar";
import { AdmissionHero } from "@/components/admission/AdmissionHero";
import { AdmissionProcess } from "@/components/admission/AdmissionProcess";
import { AdmissionDetails } from "@/components/admission/AdmissionDetails";
import { AdmissionForm } from "@/components/admission/AdmissionForm";
import { FAQSection } from "@/components/home/FAQSection";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

import { API_BASE_URL } from "@/utils/config";

export const metadata = {
  title: "Admission | Enroll at Sharda Academy",
  description: "Apply online for admission at Sharda Academy for Class 1 to 10, and 11-12th Science/Commerce. Secure your future with excellent board results.",
  keywords: ["sharda academy admission","coaching admission online","school section admission","11th 12th science admission","commerce classes admission"],
  openGraph: {
    title: "Admission | Enroll at Sharda Academy",
    description: "Apply online for admission at Sharda Academy for Class 1 to 10, and 11-12th Science/Commerce. Secure your future with excellent board results.",
  }
};

async function getAdmissionData() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/cms/website/admission`, { cache: 'no-store' });
    if (!res.ok) return null;
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching admission data:", error);
    return null;
  }
}

export default async function AdmissionPage() {
  const cmsData = await getAdmissionData();
  const cta = cmsData?.cta || {
    title: "Need Help With Admissions?",
    description: "Our counseling team is available to assist you with course selection and admission queries.",
    buttonText: "Chat on WhatsApp",
    buttonLink: "https://wa.me/919324444269"
  };

  return (
    <main className="min-h-screen flex flex-col bg-background relative">
      <Navbar transparent={false} />
      
      {/* Back to Home Link (Absolute Top) */}
      <div className="absolute inset-x-0 top-[100px] z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-amber-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* 1. Hero */}
      <AdmissionHero data={cmsData?.hero} />
      
      {/* 2. Step-by-Step Process */}
      <AdmissionProcess data={cmsData?.process} />

      {/* 3. Details (Eligibility, Docs, Fees) */}
      <AdmissionDetails data={cmsData?.details} docs={cmsData?.documents} />

      {/* 4. The main RHF + Zod Form */}
      <AdmissionForm data={cmsData?.formOptions} />

      {/* 5. FAQs */}
      <div className="bg-card">
        <FAQSection />
      </div>

      {/* 6. Contact / WhatsApp CTA */}
      <section className="py-20 bg-background text-[#0F2E4E] text-center border-t border-border/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{cta.title}</h2>
          <p className="text-[#0F2E4E]/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={cta.buttonLink}>
              <Button size="lg" className="bg-[#0F2E4E] text-white hover:bg-[#0a1835] shadow-[0_4px_14px_rgba(15,46,78,0.4)] w-full sm:w-auto">
                {cta.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
