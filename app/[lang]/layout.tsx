// app/[lang]/layout.tsx
import "../globals.css"; // Corrected path
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Locale, i18n } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/getDictionary";

// This helps Next.js to know which languages are available for static generation
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    // The <html> and <body> tags are now in the parent layout
    <>
      <Header dictionary={dictionary} />
        {children}
      <Footer lang={params.lang} />
    </>
  );
}