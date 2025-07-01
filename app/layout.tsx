import { LanguageProvider } from '@/components/LanguageProvider';
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Golden Smile - Dental Clinic',
  description: 'Professional and caring dental services at Golden Smile.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <LanguageProvider>
          <Header />
          <main className="mt-[72px]">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}