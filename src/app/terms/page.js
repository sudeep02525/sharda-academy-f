import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata = {
  title: "Terms & Conditions | Sharda Academy",
  description: "Read the Terms and Conditions for enrolling and using services at Sharda Academy.",
  keywords: ["terms and conditions","sharda academy terms"],
  openGraph: {
    title: "Terms & Conditions | Sharda Academy",
    description: "Read the Terms and Conditions for enrolling and using services at Sharda Academy.",
  }
};

export default function TermsAndConditions() {
  const lastUpdated = "August 15, 2026";
  
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* Editorial Hero */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-surface border-b border-border-color/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Legal Documents</p>
          <h1 className="text-4xl md:text-6xl font-black text-[#0F2E4E] mb-6 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-lg md:text-xl text-paragraph max-w-2xl">
            Please read these terms carefully before using our services. By enrolling in Sharda Academy, you agree to comply with the rules and guidelines outlined below.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background border border-border-color text-sm font-medium text-paragraph">
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          
          {/* Section 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">1. Acceptance of Terms</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                By accessing the Sharda Academy website, registering for an account, or enrolling in any of our courses, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
              </p>
              <p>
                These terms constitute a legally binding agreement between you and Sharda Academy. We reserve the right to modify these terms at any time without prior notice. Your continued use of our services implies acceptance of the updated terms.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">2. Admissions & Enrollment</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Enrollment in Sharda Academy courses is subject to availability and the fulfillment of eligibility criteria specific to each course.
              </p>
              <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                <li>Applicants must provide accurate and verifiable information during the admission process.</li>
                <li>Sharda Academy reserves the right to reject any application without providing justification.</li>
                <li>Enrollment is strictly personal and non-transferable under any circumstances.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">3. Fees & Refunds</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                All course fees must be paid in full prior to the commencement of the course unless a specialized installment plan has been explicitly agreed upon in writing.
              </p>
              <p>
                <strong className="text-[#0F2E4E]">Refund Policy:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                <li>Fees once paid are generally non-refundable.</li>
                <li>If a student wishes to withdraw before the batch starts, a partial refund may be issued subject to an administrative deduction, evaluated on a case-by-case basis.</li>
                <li>No refunds will be entertained once the batch has commenced.</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">4. Code of Conduct</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Students are expected to maintain high standards of discipline, respect, and academic integrity.
              </p>
              <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                <li>Harassment, bullying, or discrimination of any kind towards faculty, staff, or fellow students is strictly prohibited.</li>
                <li>Students must attend classes regularly and adhere to the schedules provided.</li>
                <li>Any form of cheating, plagiarism, or academic misconduct will lead to strict disciplinary action, including potential expulsion without refund.</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">5. Intellectual Property</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                All study materials, lecture videos, notes, assignments, and resources provided by Sharda Academy are the exclusive intellectual property of the academy.
              </p>
              <p>
                These materials are provided solely for personal educational use. Students are expressly prohibited from copying, distributing, selling, or uploading any academy materials to third-party platforms. Any violation of this clause will result in immediate termination of enrollment and potential legal action.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">6. Limitation of Liability</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Sharda Academy makes every effort to ensure the accuracy and quality of its educational content. However, we do not guarantee specific outcomes, exam results, or placements.
              </p>
              <p>
                In no event shall Sharda Academy, its directors, employees, or faculty be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services or educational materials.
              </p>
            </div>
          </div>
          
          {/* Section 7 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">7. Termination</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Sharda Academy reserves the right to suspend or terminate your enrollment and access to services, without refund, if you breach any of these Terms & Conditions or engage in conduct deemed detrimental to the academy's reputation or learning environment.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">8. Contact Information</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                If you have any questions or concerns regarding these Terms & Conditions, please reach out to our support team:
              </p>
              <div className="mt-8 p-8 bg-surface rounded-2xl border border-border-color/50">
                <p className="font-bold text-xl text-[#0F2E4E] mb-2">Sharda Academy Support</p>
                <div className="space-y-2 text-base">
                  <p><span className="text-paragraph">Email:</span> <a href="mailto:sharda.academyofficial@gmail.com" className="text-primary hover:underline font-medium">sharda.academyofficial@gmail.com</a></p>
                  <p><span className="text-paragraph">Address:</span> <span className="font-medium text-[#0F2E4E]">Sharda Academy Campus, India</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      
      <Footer />
    </main>
  );
}
