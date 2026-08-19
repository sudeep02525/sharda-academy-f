import { Navbar } from "@/components/navigation/Navbar";
import { Scale, FileSignature, Landmark, Users, Gavel, Handshake, Mail, RefreshCcw, ArrowLeft } from "lucide-react";
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

export default function TermsAndConditions() {
  
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
              <Scale className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold text-amber-700 tracking-widest uppercase">Legal Document</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0a1835] mb-6 tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Please read these terms carefully before using our services. By enrolling in Sharda Academy, you agree to comply with the rules and guidelines outlined below.
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
                      <Handshake className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">1. Acceptance of Terms</h2>
                  </div>
                  <p>
                    By accessing the Sharda Academy website, registering for an account, or enrolling in any of our courses, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
                  </p>
                  <p>
                    These terms constitute a legally binding agreement between you and Sharda Academy. We reserve the right to modify these terms at any time without prior notice. Your continued use of our services implies acceptance of the updated terms.
                  </p>
                </div>

                <div id="section-2" className="scroll-mt-32 mb-20">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                      <FileSignature className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">2. Admissions & Enrollment</h2>
                  </div>
                  <p>Enrollment in Sharda Academy courses is subject to availability and the fulfillment of eligibility criteria specific to each course.</p>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 list-none p-0">
                    {[
                      { title: "Accurate Information", desc: "Applicants must provide authentic verifiable information." },
                      { title: "Right of Rejection", desc: "Sharda Academy reserves the right to reject applications." },
                      { title: "Non-Transferable", desc: "Enrollment is strictly personal and non-transferable." }
                    ].map((item, i) => (
                      <li key={i} className="bg-white border border-slate-200 rounded-2xl p-6 m-0 shadow-sm">
                        <strong className="block text-[#0a1835] text-base mb-2">{item.title}</strong>
                        <span className="text-base text-slate-500">{item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="section-3" className="scroll-mt-32 mb-20">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 border border-green-100">
                      <Landmark className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">3. Fees & Refunds</h2>
                  </div>
                  <p>
                    All course fees must be paid in full prior to the commencement of the course unless a specialized installment plan has been explicitly agreed upon in writing.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-200 p-6 rounded-r-2xl mt-8">
                    <h4 className="m-0 text-base font-black text-red-900 uppercase tracking-widest mb-4">Refund Policy</h4>
                    <ul className="text-red-800 m-0 text-base space-y-3 list-none pl-0">
                      <li className="flex items-start gap-2"><span className="text-red-500">•</span> Fees once paid are generally non-refundable.</li>
                      <li className="flex items-start gap-2"><span className="text-red-500">•</span> If a student withdraws before the batch starts, a partial refund may be issued subject to an administrative deduction.</li>
                      <li className="flex items-start gap-2"><span className="text-red-500">•</span> No refunds will be entertained once the batch has commenced.</li>
                    </ul>
                  </div>
                </div>

                <div id="section-4" className="scroll-mt-32 mb-20">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100">
                      <Users className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">4. Code of Conduct</h2>
                  </div>
                  <p>Students are expected to maintain high standards of discipline, respect, and academic integrity.</p>
                  <ul className="space-y-4 mt-6 text-lg">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-[#0a1835] flex items-center justify-center shrink-0 text-sm font-bold mt-1">1</span>
                      Harassment, bullying, or discrimination of any kind towards faculty, staff, or fellow students is strictly prohibited.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-[#0a1835] flex items-center justify-center shrink-0 text-sm font-bold mt-1">2</span>
                      Students must attend classes regularly and adhere to the schedules provided.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-slate-100 text-[#0a1835] flex items-center justify-center shrink-0 text-sm font-bold mt-1">3</span>
                      Any form of cheating, plagiarism, or academic misconduct will lead to strict disciplinary action, including potential expulsion without refund.
                    </li>
                  </ul>
                </div>

                <div id="section-5" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl md:text-4xl mb-8 tracking-tight border-b border-slate-100 pb-4">5. Intellectual Property</h2>
                  <p>
                    All study materials, lecture videos, notes, assignments, and resources provided by Sharda Academy are the exclusive intellectual property of the academy.
                  </p>
                  <p>
                    These materials are provided solely for personal educational use. Students are expressly prohibited from copying, distributing, selling, or uploading any academy materials to third-party platforms. Any violation of this clause will result in immediate termination of enrollment and potential legal action.
                  </p>
                </div>

                <div id="section-6" className="scroll-mt-32 mb-20">
                  <h2 className="text-3xl md:text-4xl mb-8 tracking-tight border-b border-slate-100 pb-4">6. Limitation of Liability</h2>
                  <p>
                    Sharda Academy makes every effort to ensure the accuracy and quality of its educational content. However, we do not guarantee specific outcomes, exam results, or placements.
                  </p>
                  <p>
                    In no event shall Sharda Academy, its directors, employees, or faculty be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services or educational materials.
                  </p>
                </div>
                
                <div id="section-7" className="scroll-mt-32 mb-20">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
                      <Gavel className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">7. Termination</h2>
                  </div>
                  <p>
                    Sharda Academy reserves the right to suspend or terminate your enrollment and access to services, without refund, if you breach any of these Terms & Conditions or engage in conduct deemed detrimental to the academy's reputation or learning environment.
                  </p>
                </div>

                <div id="section-8" className="scroll-mt-32 pt-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl m-0 tracking-tight">8. Contact Information</h2>
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
