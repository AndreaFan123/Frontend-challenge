import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';

import './globals.css';
import { Heading } from './components/Heading';

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'galleria. | A simple gallery app',
  description: 'A simple gallery app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={libre.className}>
        <Heading />
        {children}
      </body>
    </html>
  );
}
