import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import { ContentContainer } from './components/ContentContainer';
import './globals.css';

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
        <ContentContainer children={children} />
      </body>
    </html>
  );
}
