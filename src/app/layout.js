import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://shardaacademyofficial.in"),
  title: "Sharda Academy | Best Coaching for 1st to 12th (Science & Commerce)",
  description: "Join Sharda Academy for expert coaching from Class 1st to 10th, and 11th-12th Science & Commerce. We provide experienced faculty, strong foundations, and excellent board results.",
  keywords: ["1st to 10th coaching", "11th 12th Science coaching", "11th 12th Commerce classes", "School Section classes", "Board Exam Preparation", "Sharda Academy", "best coaching classes"],
  authors: [{ name: "Sharda Academy" }],
  creator: "Sharda Academy",
  publisher: "Sharda Academy",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "Sharda Academy | Best Coaching for 1st to 12th (Science & Commerce)",
    description: "Expert coaching for Classes 1st-10th and 11th-12th (Science & Commerce) with excellent board results.",
    url: "https://shardaacademyofficial.in",
    siteName: "Sharda Academy",
    images: [{ url: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784795282/sharda_academy_official/pxsdcgzn0c8kcmwtj8ir.jpg", width: 1200, height: 630, alt: "Sharda Academy Campus" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharda Academy | Best Coaching for 1st to 12th (Science & Commerce)",
    description: "Expert coaching for Classes 1st-10th and 11th-12th (Science & Commerce).",
    images: ["https://res.cloudinary.com/ybzctfb3/image/upload/v1784795282/sharda_academy_official/pxsdcgzn0c8kcmwtj8ir.jpg"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' }
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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

export default function RootLayout({ children }) {
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
          <main className="flex-1 w-full">{children}</main>
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
