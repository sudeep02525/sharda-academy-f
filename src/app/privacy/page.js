import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";

export const metadata = {
  title: "Privacy Policy | Sharda Academy",
  description: "Learn how Sharda Academy collects, uses, and protects your personal information.",
  keywords: ["privacy policy","sharda academy privacy"],
  openGraph: {
    title: "Privacy Policy | Sharda Academy",
    description: "Learn how Sharda Academy collects, uses, and protects your personal information.",
  }
};

export default function PrivacyPolicy() {
  const lastUpdated = "August 15, 2026";
  
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar transparent={false} />
      
      {/* Editorial Hero */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-20 bg-surface border-b border-border-color/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">Legal Documents</p>
          <h1 className="text-4xl md:text-6xl font-black text-[#0F2E4E] mb-6 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-paragraph max-w-2xl">
            At Sharda Academy, we are committed to safeguarding your privacy. This policy outlines our practices regarding the collection, use, and protection of your personal information.
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
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">1. Introduction</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                Welcome to Sharda Academy. We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) or use our educational services, and tell you about your privacy rights and how the law protects you.
              </p>
              <p>
                This policy is compliant with applicable Indian laws, including the Digital Personal Data Protection (DPDP) Act.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">2. Information We Collect</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                <li><strong className="text-[#0F2E4E]">Identity Data:</strong> includes first name, last name, username or similar identifier, title, date of birth, and gender.</li>
                <li><strong className="text-[#0F2E4E]">Contact Data:</strong> includes billing address, home address, email address, and telephone numbers.</li>
                <li><strong className="text-[#0F2E4E]">Academic Data:</strong> includes previous educational records, transcripts, examination scores, and courses enrolled in.</li>
                <li><strong className="text-[#0F2E4E]">Financial Data:</strong> includes bank account and payment card details (processed securely via our payment gateways; we do not store full card details).</li>
                <li><strong className="text-[#0F2E4E]">Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">3. How We Use Information</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., enrolling you in a course).</li>
                <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
                <li>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance).</li>
                <li>To deliver relevant educational content and updates to you.</li>
                <li>Where we need to comply with a legal or regulatory obligation under Indian jurisdiction.</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">4. Data Sharing & Disclosure</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>We do not sell your personal data to third parties. We may share your personal data with the parties set out below for the purposes outlined in this policy:</p>
              <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                <li><strong className="text-[#0F2E4E]">Service Providers:</strong> Acting as processors based in India who provide IT and system administration services, payment processing, and email communication services.</li>
                <li><strong className="text-[#0F2E4E]">Professional Advisers:</strong> Including lawyers, bankers, auditors, and insurers who provide consultancy, banking, legal, insurance, and accounting services.</li>
                <li><strong className="text-[#0F2E4E]">Regulatory Authorities:</strong> Relevant government bodies, regulators, and other authorities in India who require reporting of processing activities in certain circumstances.</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">5. Data Security</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
              <p>
                They will only process your personal data on our instructions and they are subject to a duty of confidentiality. We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">6. Your Privacy Rights</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:</p>
              <ul className="list-disc pl-6 space-y-4 marker:text-primary">
                <li><strong className="text-[#0F2E4E]">Request access:</strong> to your personal data (commonly known as a "data subject access request").</li>
                <li><strong className="text-[#0F2E4E]">Request correction:</strong> of the personal data that we hold about you.</li>
                <li><strong className="text-[#0F2E4E]">Request erasure:</strong> of your personal data where there is no good reason for us continuing to process it.</li>
                <li><strong className="text-[#0F2E4E]">Object to processing:</strong> of your personal data where we are relying on a legitimate interest.</li>
                <li><strong className="text-[#0F2E4E]">Withdraw consent:</strong> at any time where we are relying on consent to process your personal data.</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-20 pb-20 border-b border-border-color/40">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">7. Cookies & Tracking</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. We use cookies primarily for analyzing traffic, managing sessions, and ensuring website security.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-4">
              <h2 className="text-2xl font-bold text-[#0F2E4E] sticky top-32">8. Contact Us</h2>
            </div>
            <div className="md:col-span-8 space-y-6 text-lg text-paragraph leading-relaxed">
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact our Grievance Officer:
              </p>
              <div className="mt-8 p-8 bg-surface rounded-2xl border border-border-color/50">
                <p className="font-bold text-xl text-[#0F2E4E] mb-2">Sharda Academy</p>
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
