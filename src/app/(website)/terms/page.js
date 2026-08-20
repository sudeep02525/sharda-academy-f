import { Navbar } from "@/components/navigation/Navbar";
import { Scale, ArrowLeft } from "lucide-react";
import * as Icons from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Sharda Academy",
  description: "Read the Terms and Conditions for enrolling and using services at Sharda Academy.",
  keywords: ["terms and conditions", "sharda academy terms"],
  openGraph: {
    title: "Terms & Conditions | Sharda Academy",
    description: "Read the Terms and Conditions for enrolling and using services at Sharda Academy.",
  }
};

async function getTermsContent() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/cms/legal/terms`, { next: { revalidate: 60 } });
    const json = await res.json();
    if (json.data && json.data.sections && json.data.sections.length > 0) {
      return json.data.sections;
    }
  } catch (err) {
    console.error("Failed to fetch terms content:", err);
  }
  return [
    {
      id: "1",
      title: "1. Acceptance of Terms",
      icon: "Handshake",
      content: "<p>By accessing the Sharda Academy website, registering for an account, or enrolling in any of our courses, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p><p>These terms constitute a legally binding agreement between you and Sharda Academy. We reserve the right to modify these terms at any time without prior notice. Your continued use of our services implies acceptance of the updated terms.</p>"
    },
    {
      id: "2",
      title: "2. Admissions & Enrollment",
      icon: "FileSignature",
      content: "<p>Enrollment in Sharda Academy courses is subject to availability and the fulfillment of eligibility criteria specific to each course.</p><ul class=\"grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 list-none p-0\"><li class=\"bg-white border border-slate-200 rounded-2xl p-6 m-0 shadow-sm\"><strong class=\"block text-[#0a1835] text-base mb-2\">Accurate Information</strong><span class=\"text-base text-slate-500\">Applicants must provide authentic verifiable information.</span></li><li class=\"bg-white border border-slate-200 rounded-2xl p-6 m-0 shadow-sm\"><strong class=\"block text-[#0a1835] text-base mb-2\">Right of Rejection</strong><span class=\"text-base text-slate-500\">Sharda Academy reserves the right to reject applications.</span></li><li class=\"bg-white border border-slate-200 rounded-2xl p-6 m-0 shadow-sm\"><strong class=\"block text-[#0a1835] text-base mb-2\">Non-Transferable</strong><span class=\"text-base text-slate-500\">Enrollment is strictly personal and non-transferable.</span></li></ul>"
    }
  ];
}

export default async function TermsAndConditions() {
  const sections = await getTermsContent();
  
  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc] font-sans">
      <Navbar transparent={false} />
      
      {/* Light Premium Hero Section */}
      <header className="relative pt-24 md:pt-32 pb-16 md:pb-20 bg-white border-b border-slate-100 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60 pointer-events-none"></div>

        <div className="w-full px-4 md:px-10 mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="w-full max-w-4xl mx-auto flex justify-start mb-8 md:mb-10">
            <Link href="/" className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-500 hover:text-amber-500 transition-colors bg-white/60 px-3 py-1.5 rounded-full backdrop-blur-sm border border-slate-100">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <div className="flex flex-col items-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg border border-amber-100 mb-6">
              <Scale className="w-4 h-4 text-amber-500" />
              <span className="text-[10px] md:text-xs font-bold text-amber-700 tracking-widest uppercase">Legal Document</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0a1835] mb-4 md:mb-6 tracking-tight break-words">
              Terms & Conditions
            </h1>
            <p className="text-base md:text-xl text-slate-600 leading-relaxed px-2">
              Please read these terms carefully before using our services. By enrolling in Sharda Academy, you agree to comply with the rules and guidelines outlined below.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <section className="py-12 lg:py-16 relative z-20">
        <div className="w-full px-4 md:px-10 mx-auto">
          <div className="lg:col-span-9 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
            
            <div className="w-full prose prose-slate max-w-none 
              prose-headings:text-[#0a1835] prose-headings:font-black 
              prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg 
              prose-a:text-amber-500 hover:prose-a:text-amber-600 
              prose-blockquote:bg-amber-50 prose-blockquote:border-l-4 prose-blockquote:border-amber-400 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-amber-900 prose-blockquote:shadow-sm
              prose-ul:grid prose-ul:grid-cols-1 md:prose-ul:grid-cols-2 prose-ul:gap-6 prose-ul:list-none prose-ul:p-0 
              prose-li:bg-white prose-li:border prose-li:border-slate-200 prose-li:rounded-2xl prose-li:p-6 prose-li:shadow-sm prose-li:m-0 prose-li:text-sm prose-li:text-slate-500
              prose-strong:text-[#0a1835] prose-strong:block prose-strong:mb-2 prose-strong:text-base
              prose-ol:space-y-4 prose-ol:text-lg prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-slate-700
              overflow-hidden">
                
                {sections.map((section, index) => {
                  const IconComponent = Icons[section.icon] || Icons.FileText;
                  const colorClasses = [
                    "bg-blue-50 text-blue-600 border-blue-100",
                    "bg-purple-50 text-purple-600 border-purple-100",
                    "bg-teal-50 text-teal-600 border-teal-100",
                    "bg-pink-50 text-pink-600 border-pink-100",
                    "bg-green-50 text-green-600 border-green-100",
                    "bg-orange-50 text-orange-600 border-orange-100",
                    "bg-indigo-50 text-indigo-600 border-indigo-100",
                    "bg-red-50 text-red-600 border-red-100",
                  ];
                  const color = colorClasses[index % colorClasses.length];

                  return (
                    <div key={section.id || index} id={`section-${index + 1}`} className="scroll-mt-32 mb-20">
                      <div className="flex items-center gap-3 mb-8">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl m-0 tracking-tight">{section.title}</h2>
                      </div>
                      <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    </div>
                  );
                })}

                <div id="section-contact" className="scroll-mt-32 pt-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                      <Icons.Mail className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">Contact Information</h2>
                  </div>
                  <p>
                    If you have any questions or concerns regarding these Terms & Conditions, please reach out to our support team:
                  </p>
                  
                  <div className="mt-10 p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                    <h4 className="text-2xl font-black text-[#0a1835] mb-6">Sharda Academy Support</h4>
                    <div className="space-y-4 text-base text-slate-600">
                      <p className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">✉️</span> 
                        <a href="mailto:sharda.academyofficial@gmail.com" className="text-slate-700 hover:text-amber-500 transition-colors font-medium">sharda.academyofficial@gmail.com</a>
                      </p>
                      <p className="flex items-start gap-4">
                        <span className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-1">📍</span> 
                        <span className="text-slate-700 font-medium leading-relaxed">
                          Sharda Academy, Jankalyan Society,<br />
                          PMG Colony, Mankhurd,<br />
                          Mumbai – 400043
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </section>
    </main>
  );
}
