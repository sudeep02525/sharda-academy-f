export const metadata = {
  title: "Privacy Policy | Sharda Academy",
  description: "Privacy Policy of Sharda Academy",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-heading mb-8">Privacy Policy</h1>
        
        <div className="space-y-8 text-paragraph leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">1. Information We Collect</h2>
            <p>At Sharda Academy, we collect personal information that you provide to us when you register for our courses, subscribe to our newsletter, or fill out a contact form. This may include your name, email address, phone number, and academic details.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide and improve our educational services, communicate with you about your enrollments, send important updates and promotional materials, and respond to your inquiries.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">3. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We do not sell or share your personal data with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">4. Cookies</h2>
            <p>Our website may use &quot;cookies&quot; to enhance user experience. You can choose to set your web browser to refuse cookies, but some parts of the site may not function properly as a result.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at sharda.academyofficial@gmail.com.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
