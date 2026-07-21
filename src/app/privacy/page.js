import { ShieldCheck, Lock, Eye, Database, FileText, UserCheck, Bell, Scale } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Sharda Academy",
  description: "Learn how Sharda Academy collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "August 15, 2026";
  
  const sections = [
    { id: "introduction", title: "1. Introduction", icon: ShieldCheck },
    { id: "information-collection", title: "2. Information We Collect", icon: Database },
    { id: "how-we-use", title: "3. How We Use Information", icon: FileText },
    { id: "data-sharing", title: "4. Data Sharing & Disclosure", icon: Eye },
    { id: "data-security", title: "5. Data Security", icon: Lock },
    { id: "your-rights", title: "6. Your Privacy Rights", icon: UserCheck },
    { id: "cookies", title: "7. Cookies & Tracking", icon: Bell },
    { id: "contact", title: "8. Contact Us", icon: Scale },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-primary-deep text-surface selection:bg-primary selection:text-primary-deep">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 -left-10 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[100px]"></div>
          <div className="absolute bottom-0 -right-10 w-96 h-96 bg-primary-light rounded-full mix-blend-screen filter blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-surface mb-6 tracking-tight">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-surface/80 leading-relaxed max-w-2xl">
              At Sharda Academy, we are committed to safeguarding your privacy. This policy outlines our practices regarding the collection, use, and protection of your personal information.
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
              
              {/* 1. Introduction */}
              <div id="introduction" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">1. Introduction</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    Welcome to Sharda Academy. We respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) or use our educational services, and tell you about your privacy rights and how the law protects you.
                  </p>
                  <p>
                    This policy is compliant with applicable Indian laws, including the Digital Personal Data Protection (DPDP) Act.
                  </p>
                </div>
              </div>

              {/* 2. Information We Collect */}
              <div id="information-collection" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Database className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">2. Information We Collect</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                    <li><strong className="text-heading">Identity Data:</strong> includes first name, last name, username or similar identifier, title, date of birth, and gender.</li>
                    <li><strong className="text-heading">Contact Data:</strong> includes billing address, home address, email address, and telephone numbers.</li>
                    <li><strong className="text-heading">Academic Data:</strong> includes previous educational records, transcripts, examination scores, and courses enrolled in.</li>
                    <li><strong className="text-heading">Financial Data:</strong> includes bank account and payment card details (processed securely via our payment gateways; we do not store full card details).</li>
                    <li><strong className="text-heading">Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                  </ul>
                </div>
              </div>

              {/* 3. How We Use */}
              <div id="how-we-use" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">3. How We Use Your Information</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., enrolling you in a course).</li>
                    <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
                    <li>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance).</li>
                    <li>To deliver relevant educational content and updates to you.</li>
                    <li>Where we need to comply with a legal or regulatory obligation under Indian jurisdiction.</li>
                  </ul>
                </div>
              </div>

              {/* 4. Data Sharing */}
              <div id="data-sharing" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">4. Data Sharing & Disclosure</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>We do not sell your personal data to third parties. We may share your personal data with the parties set out below for the purposes outlined in this policy:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                    <li><strong>Service Providers:</strong> Acting as processors based in India who provide IT and system administration services, payment processing, and email communication services.</li>
                    <li><strong>Professional Advisers:</strong> Including lawyers, bankers, auditors, and insurers who provide consultancy, banking, legal, insurance, and accounting services.</li>
                    <li><strong>Regulatory Authorities:</strong> Relevant government bodies, regulators, and other authorities in India who require reporting of processing activities in certain circumstances.</li>
                  </ul>
                </div>
              </div>

              {/* 5. Data Security */}
              <div id="data-security" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">5. Data Security</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
                  </p>
                  <p>
                    They will only process your personal data on our instructions and they are subject to a duty of confidentiality. We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.
                  </p>
                </div>
              </div>

              {/* 6. Your Rights */}
              <div id="your-rights" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">6. Your Privacy Rights</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-primary">
                    <li><strong>Request access:</strong> to your personal data (commonly known as a "data subject access request").</li>
                    <li><strong>Request correction:</strong> of the personal data that we hold about you.</li>
                    <li><strong>Request erasure:</strong> of your personal data where there is no good reason for us continuing to process it.</li>
                    <li><strong>Object to processing:</strong> of your personal data where we are relying on a legitimate interest.</li>
                    <li><strong>Withdraw consent:</strong> at any time where we are relying on consent to process your personal data.</li>
                  </ul>
                </div>
              </div>
              
              {/* 7. Cookies */}
              <div id="cookies" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Bell className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">7. Cookies & Tracking</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly. We use cookies primarily for analyzing traffic, managing sessions, and ensuring website security.
                  </p>
                </div>
              </div>

              {/* 8. Contact Us */}
              <div id="contact" className="scroll-mt-32 p-8 rounded-2xl bg-surface border border-border-color shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-heading">8. Contact Us</h2>
                </div>
                <div className="space-y-4 text-paragraph leading-relaxed">
                  <p>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact our Grievance Officer:
                  </p>
                  <div className="mt-4 p-4 bg-background rounded-xl border border-border-color">
                    <p className="font-semibold text-heading">Sharda Academy</p>
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
