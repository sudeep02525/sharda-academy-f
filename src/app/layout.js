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
  metadataBase: new URL("https://shardaacademy.edu"),
  title: "Sharda Academy | Premium Coaching & Education",
  description: "Empowering students with world-class education, modern learning techniques, and expert faculty to achieve academic excellence.",
  keywords: ["coaching", "academy", "education", "courses", "learning", "IIT JEE", "NEET", "foundation"],
  authors: [{ name: "Sharda Academy" }],
  creator: "Sharda Academy",
  publisher: "Sharda Academy",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: "Sharda Academy | Premium Coaching & Education",
    description: "Empowering students with world-class education and modern learning techniques.",
    url: "https://shardaacademy.edu",
    siteName: "Sharda Academy",
    images: [{ url: "/images/premium-hero.png", width: 1200, height: 630, alt: "Sharda Academy Campus" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharda Academy | Premium Education",
    description: "Empowering students with world-class education.",
    images: ["/images/premium-hero.png"],
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
  alternates: { canonical: "https://shardaacademy.edu" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Sharda Academy",
  url: "https://shardaacademy.edu",
  logo: "https://shardaacademy.edu/logo.png",
  description: "Premium coaching institute empowering students with modern learning techniques.",
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
