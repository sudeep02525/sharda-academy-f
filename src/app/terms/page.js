import { CheckCircle2, GraduationCap, CreditCard, Scale, FileWarning, HelpCircle, XOctagon, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Sharda Academy",
  description: "Read the Terms and Conditions for enrolling and using services at Sharda Academy.",
};

export default function TermsAndConditions() {
  const lastUpdated = "August 15, 2026";
  
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms", icon: CheckCircle2 },
    { id: "enrollment", title: "2. Admissions & Enrollment", icon: GraduationCap },
    { id: "fees", title: "3. Fees & Refunds", icon: CreditCard },
    { id: "conduct", title: "4. Code of Conduct", icon: Scale },
    { id: "intellectual-property", title: "5. Intellectual Property", icon: BookOpen },
    { id: "limitation", title: "6. Limitation of Liability", icon: FileWarning },
    { id: "termination", title: "7. Termination", icon: XOctagon },
    { id: "contact", title: "8. Contact Information", icon: HelpCircle },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-primary-deep text-surface selection:bg-primary selection:text-primary-deep">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full mix-blend-screen filter blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light rounded-full mix-blend-screen filter blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-sm font-medium mb-6">
              <Scale className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-surface mb-6 tracking-tight">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-surface/80 leading-relaxed max-w-2xl">
              Please read these terms carefully before using our services. By enrolling in Sharda Academy, you agree to comply with the rules and guidelines outlined below.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Sticky Table of Contents (Desktop) */}
            <aside className="lg:w-1/3 hidden lg:block">
              <div className="sticky top-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm">
                <h3 className="text-xl font-bold text-heading mb-6">Table of Contents</h3>
                <nav className="flex flex-col gap-3">
                  {sections.map((section) => (
                    <a 
                      key={section.id} 
                      href={`#${section.id}`}
                      className="group flex items-center gap-3 text-paragraph hover:text-primary-deep transition-colors duration-200 py-2"
                    >
                      <span className="p-2 rounded-lg bg-background group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-200">
                        <section.icon className="w-4 h-4" />
                      </span>
                      <span className="font-medium">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content Cards */}
            <div className="lg:w-2/3 space-y-12">
              
              {/* 1. Acceptance */}
              <div id="acceptance" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">1. Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    By accessing the Sharda Academy website, registering for an account, or enrolling in any of our courses, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
                  </p>
                  <p>
                    These terms constitute a legally binding agreement between you and Sharda Academy. We reserve the right to modify these terms at any time without prior notice. Your continued use of our services implies acceptance of the updated terms.
                  </p>
                </div>
              </div>

              {/* 2. Enrollment */}
              <div id="enrollment" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">2. Admissions & Enrollment</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    Enrollment in Sharda Academy courses is subject to availability and the fulfillment of eligibility criteria specific to each course.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                    <li>Applicants must provide accurate and verifiable information during the admission process.</li>
                    <li>Sharda Academy reserves the right to reject any application without providing justification.</li>
                    <li>Enrollment is strictly personal and non-transferable under any circumstances.</li>
                  </ul>
                </div>
              </div>

              {/* 3. Fees */}
              <div id="fees" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">3. Fees & Refunds</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    All course fees must be paid in full prior to the commencement of the course unless a specialized installment plan has been explicitly agreed upon in writing.
                  </p>
                  <p>
                    <strong>Refund Policy:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                    <li>Fees once paid are generally non-refundable.</li>
                    <li>If a student wishes to withdraw before the batch starts, a partial refund may be issued subject to an administrative deduction, evaluated on a case-by-case basis.</li>
                    <li>No refunds will be entertained once the batch has commenced.</li>
                  </ul>
                </div>
              </div>

              {/* 4. Conduct */}
              <div id="conduct" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">4. Code of Conduct</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    Students are expected to maintain high standards of discipline, respect, and academic integrity.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                    <li>Harassment, bullying, or discrimination of any kind towards faculty, staff, or fellow students is strictly prohibited.</li>
                    <li>Students must attend classes regularly and adhere to the schedules provided.</li>
                    <li>Any form of cheating, plagiarism, or academic misconduct will lead to strict disciplinary action, including potential expulsion without refund.</li>
                  </ul>
                </div>
              </div>

              {/* 5. Intellectual Property */}
              <div id="intellectual-property" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">5. Intellectual Property</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    All study materials, lecture videos, notes, assignments, and resources provided by Sharda Academy are the exclusive intellectual property of the academy.
                  </p>
                  <p>
                    These materials are provided solely for personal educational use. Students are expressly prohibited from copying, distributing, selling, or uploading any academy materials to third-party platforms. Any violation of this clause will result in immediate termination of enrollment and potential legal action.
                  </p>
                </div>
              </div>

              {/* 6. Limitation */}
              <div id="limitation" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <FileWarning className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">6. Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    Sharda Academy makes every effort to ensure the accuracy and quality of its educational content. However, we do not guarantee specific outcomes, exam results, or placements.
                  </p>
                  <p>
                    In no event shall Sharda Academy, its directors, employees, or faculty be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services or educational materials.
                  </p>
                </div>
              </div>
              
              {/* 7. Termination */}
              <div id="termination" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <XOctagon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">7. Termination</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    Sharda Academy reserves the right to suspend or terminate your enrollment and access to services, without refund, if you breach any of these Terms & Conditions or engage in conduct deemed detrimental to the academy's reputation or learning environment.
                  </p>
                </div>
              </div>

              {/* 8. Contact */}
              <div id="contact" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">8. Contact Information</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    If you have any questions or concerns regarding these Terms & Conditions, please reach out to our support team:
                  </p>
                  <div className="mt-4 p-4 bg-background rounded-xl border border-border-color">
                    <p className="font-semibold text-heading">Sharda Academy Support</p>
                    <p>Email: <a href="mailto:sharda.academyofficial@gmail.com" className="text-primary hover:underline">sharda.academyofficial@gmail.com</a></p>
                    <p>Address: Sharda Academy Campus, India</p>
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
