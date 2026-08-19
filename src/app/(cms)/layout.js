import "./s-cms/globals.css";
import ClientLayout from "@/cms/components/layout/ClientLayout";

export const metadata = {
  title: "CMS Portal - Sharda Academy",
  description: "Content Management System for Sharda Academy",
  icons: {
    icon: "https://res.cloudinary.com/ybzctfb3/image/upload/v1784214512/sharda-academy/uploads/chl3yks6plrwp1ufvdkc.png",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
