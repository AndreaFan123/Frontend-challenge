import Navbar from './components/Navbar';
import type { Metadata } from 'next';
import { i18n, type Locale } from '../../i18n-config';
import { getDictionary } from '@/get-dictionary';
import { Antonio } from 'next/font/google';
import './globals.css';
import { Footer } from './components/Footer';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    params: { lang: locale },
  }));
}

const antonio = Antonio({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Planet Fact',
  description: 'Getting to know planets',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={antonio.className}>
        <Navbar dictionary={dictionary.planets} lang={params.lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
