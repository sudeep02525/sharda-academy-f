import { Navbar } from "@/components/navigation/Navbar";
import { Shield, Lock, FileText, Mail, Eye, Server, RefreshCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Sharda Academy",
  description: "Learn how Sharda Academy collects, uses, and protects your personal information.",
  keywords: ["privacy policy", "sharda academy privacy"],
  openGraph: {
    title: "Privacy Policy | Sharda Academy",
    description: "Learn how Sharda Academy collects, uses, and protects your personal information.",
  }
};

export default function PrivacyPolicy() {
  
  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc] font-sans">
      <Navbar transparent={false} />
      
      {/* Light Premium Hero Section */}
      <header className="relative pt-32 pb-20 bg-white border-b border-slate-100 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-60"></div>
        {/* Back to Home Link */}
        <div className="absolute inset-x-0 top-28 z-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-amber-500 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>

        <div className="w-full px-4 md:px-10 mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="flex flex-col items-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg border border-amber-100 mb-6">
              <Shield className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold text-amber-700 tracking-widest uppercase">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1835] mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Your privacy is critically important to us. This document outlines how we collect, use, and safeguard your personal information at Sharda Academy.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <section className="py-12 lg:py-16 relative z-20">
        <div className="w-full px-4 md:px-10 mx-auto">
          <div className="max-w-4xl mx-auto">
            
            <div className="w-full prose prose-slate max-w-none prose-headings:text-[#0a1835] prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg prose-a:text-amber-500 hover:prose-a:text-amber-600">
                
                <div id="section-1" className="scroll-mt-32 mb-20">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">1. Introduction</h2>
                  </div>
                  <p>
                    Welcome to Sharda Academy. We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) or use our educational services.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl mt-8">
                    <p className="m-0 text-base font-semibold text-amber-900">
                      Note: This policy is strictly compliant with applicable Indian laws, including the Digital Personal Data Protection (DPDP) Act.
                    </p>
                  </div>
                </div>

                <div id="section-2" className="scroll-mt-32 mb-20">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                      <Server className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">2. Information We Collect</h2>
                  </div>
                  <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 list-none p-0">
                    {[
                      { title: "Identity Data", desc: "First name, last name, username, title, date of birth." },
                      { title: "Contact Data", desc: "Billing address, email address, and telephone numbers." },
                      { title: "Academic Data", desc: "Educational records, transcripts, examination scores." },
                      { title: "Financial Data", desc: "Payment details (processed securely via gateways)." }
                    ].map((item, i) => (
                      <li key={i} className="bg-white border border-slate-200 rounded-2xl p-6 m-0 shadow-sm">
                        <strong className="block text-[#0a1835] text-base mb-2">{item.title}</strong>
                        <span className="text-base text-slate-500">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="section-3" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl md:text-4xl mb-8 tracking-tight border-b border-slate-100 pb-4">3. How We Use Information</h2>
                  <p>Most commonly, we will use your personal data in the following circumstances:</p>
                  <ul className="space-y-4 mt-6 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-[#0a1835] flex items-center justify-center shrink-0 text-sm font-bold mt-1">1</span>
                      To perform the contract we are about to enter into or have entered into with you (e.g., enrolling you in a course).
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-[#0a1835] flex items-center justify-center shrink-0 text-sm font-bold mt-1">2</span>
                      To manage our relationship with you, including notifying you about changes to our terms or privacy policy.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-[#0a1835] flex items-center justify-center shrink-0 text-sm font-bold mt-1">3</span>
                      To administer and protect our business and this website (troubleshooting, data analysis, system maintenance).
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-[#0a1835] flex items-center justify-center shrink-0 text-sm font-bold mt-1">4</span>
                      To deliver relevant educational content and updates to you securely.
                    </li>
                  </ul>
                </div>

                <div id="section-4" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl md:text-4xl mb-8 tracking-tight border-b border-slate-100 pb-4">4. Data Sharing & Disclosure</h2>
                  <p>We do not sell your personal data to third parties. We may share your data with the parties set out below for the purposes outlined in this policy:</p>
                  <div className="space-y-6 mt-8">
                    <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <strong className="text-[#0a1835] text-lg block mb-2">Service Providers</strong> 
                      Acting as processors based in India who provide IT and system administration services, payment processing, and email communication services.
                    </div>
                    <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
                      <strong className="text-[#0a1835] text-lg block mb-2">Regulatory Authorities</strong> 
                      Relevant government bodies, regulators, and other authorities in India who require reporting of processing activities in certain circumstances.
                    </div>
                  </div>
                </div>

                <div id="section-5" className="scroll-mt-32 mb-20">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 border border-green-100">
                      <Lock className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">5. Data Security</h2>
                  </div>
                  <p>
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                  </p>
                </div>

                <div id="section-6" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl md:text-4xl mb-8 tracking-tight border-b border-slate-100 pb-4">6. Your Privacy Rights</h2>
                  <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to request access, request correction, request erasure, object to processing, and withdraw consent.</p>
                </div>

                <div id="section-7" className="scroll-mt-32 mb-20">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                      <Eye className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">7. Cookies & Tracking</h2>
                  </div>
                  <p>
                    You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                  </p>
                </div>

                <div id="section-8" className="scroll-mt-32 pt-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">8. Contact Us</h2>
                  </div>
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact our Grievance Officer:
                  </p>
                  
                  <div className="mt-10 p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                    <h4 className="text-2xl font-black text-[#0a1835] mb-6">Sharda Academy</h4>
                    <div className="space-y-4 text-base text-slate-600">
                      <p className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">✉️</span> 
                        <a href="mailto:sharda.academyofficial@gmail.com" className="text-slate-700 hover:text-amber-500 transition-colors font-medium">sharda.academyofficial@gmail.com</a>
                      </p>
                      <p className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">📍</span> 
                        <span className="text-slate-700 font-medium">Sharda Academy Campus, India</span>
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
