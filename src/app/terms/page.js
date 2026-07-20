export const metadata = {
  title: "Terms & Conditions | Sharda Academy",
  description: "Terms and Conditions of Sharda Academy",
};

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-heading mb-8">Terms & Conditions</h1>
        
        <div className="space-y-8 text-paragraph leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using the Sharda Academy website and enrolling in our courses, you agree to comply with and be bound by these terms and conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">2. Course Enrollment and Payment</h2>
            <p>Enrollment in our courses is subject to availability and completion of the registration process, including payment of applicable fees. Fees are non-refundable unless stated otherwise in a specific course policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">3. Code of Conduct</h2>
            <p>Students are expected to maintain discipline and decorum at all times. Any behavior that disrupts the learning environment or violates academy policies may result in immediate termination of enrollment without refund.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">4. Intellectual Property</h2>
            <p>All study materials, content, and resources provided by Sharda Academy are for personal educational use only. They may not be reproduced, distributed, or shared without prior written consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-heading mb-4">5. Modification of Terms</h2>
            <p>Sharda Academy reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Continued use of our services constitutes acceptance of the revised terms.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
