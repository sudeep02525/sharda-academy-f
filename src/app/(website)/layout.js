import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WebsitePopup } from "@/components/ui/WebsitePopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const dynamic = 'force-dynamic';

export const metadata = {
  metadataBase: new URL("https://shardaacademyofficial.in"),
  title: "Sharda Academy | Top Coaching for 1st to 12th (Science & Commerce)",
  description: "Join Sharda Academy for expert coaching from Class 1st to 10th, and 11th-12th Science & Commerce. We provide experienced faculty, strong foundations, and excellent board results.",
  keywords: ["Sharda Academy", "best coaching classes", "CBSE coaching", "State Board coaching", "1st to 10th tuition", "11th 12th Science coaching", "11th 12th Commerce classes", "School Section classes", "Board Exam Preparation"],
  authors: [{ name: "Sharda Academy" }],
  creator: "Sharda Academy",
  publisher: "Sharda Academy",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sharda Academy | Top Coaching for 1st to 12th (Science & Commerce)",
    description: "Expert coaching for Classes 1st-10th and 11th-12th (Science & Commerce) with excellent board results.",
    url: "https://shardaacademyofficial.in",
    siteName: "Sharda Academy",
    images: [{ url: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png", width: 1200, height: 630, alt: "Sharda Academy Logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharda Academy | Top Coaching for 1st to 12th (Science & Commerce)",
    description: "Expert coaching for Classes 1st-10th and 11th-12th (Science & Commerce).",
    images: ["https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png"],
  },
  icons: {
    icon: [
      { url: 'https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png', sizes: '32x32' },
      { url: 'https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png', type: 'image/png', sizes: '16x16' },
      { url: 'https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png', type: 'image/png', sizes: '32x32' }
    ],
    shortcut: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png",
    apple: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png",
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "https://shardaacademyofficial.in" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Sharda Academy",
  url: "https://shardaacademyofficial.in",
  logo: "https://shardaacademyofficial.in/logo.png",
  description: "Leading coaching institute providing expert preparation for Class 1st to 10th, and 11th & 12th Science & Commerce.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Education Lane",
    addressLocality: "Knowledge City",
    addressRegion: "State",
    postalCode: "10001",
    addressCountry: "IN"
  },
  sameAs: [
    "https://facebook.com/shardaacademy",
    "https://twitter.com/shardaacademy",
    "https://instagram.com/shardaacademy"
  ]
};

export default async function RootLayout({ children }) {
  let isMaintenance = false;
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
    const res = await fetch(`${apiUrl}/api/cms/system/settings`, { 
      cache: "no-store" 
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.data && data.data.maintenanceMode) {
        isMaintenance = true;
      }
    }
  } catch (err) {
    console.error("Failed to fetch settings for maintenance check", err);
  }

  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans bg-background text-paragraph">
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{const storedTheme = localStorage.getItem('theme');if(storedTheme==='dark'||(!storedTheme&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}`,
          }}
        />
        <ThemeProvider defaultTheme="light">
          {isMaintenance ? (
            <main className="flex-1 w-full flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-800 p-8">
              <div className="z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto">
                
                {/* Re-added Cog Animation */}
                <div className="relative w-24 h-24 mb-10 flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-[#f1af3c] border-dashed rounded-full animate-[spin_4s_linear_infinite] opacity-60"></div>
                  <div className="absolute inset-2 border-4 border-slate-200 border-t-[#f1af3c] rounded-full animate-[spin_3s_linear_infinite_reverse]"></div>
                  <svg className="w-10 h-10 text-[#f1af3c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>

                <h1 className="text-4xl font-black text-[#0a1835] mb-4 tracking-normal">Website Under Maintenance</h1>
                
                <p className="text-xl text-slate-600 mb-10 font-normal w-full">
                  Dear Students & Parents, Sharda Academy's website is currently undergoing a scheduled update to serve you better. We will be back online shortly.
                </p>

                <div className="flex flex-row gap-6 w-full justify-center">
                  <a href="mailto:sharda.academyofficial@gmail.com" className="px-8 py-3 bg-[#f1af3c] hover:bg-amber-500 text-white font-bold rounded-xl transition-all shadow-md">
                    Contact Support
                  </a>
                  <a href="/" className="px-8 py-3 bg-white hover:bg-slate-50 text-slate-600 font-bold rounded-xl border border-slate-200 transition-all shadow-sm">
                    Refresh Page
                  </a>
                </div>
              </div>
            </main>
          ) : (
            <>
              <main className="flex-1 w-full">{children}</main>
              <WhatsAppButton />
              <WebsitePopup />
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
