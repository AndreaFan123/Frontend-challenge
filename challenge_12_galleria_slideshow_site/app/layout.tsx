'use client';

// import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import { Heading } from './components/Heading';
import { MainContainer } from './layouts/MainContainer';
import { Footer } from './components/Footer';
import Slideshow from './components/single-gallery-info/Slideshow';
import './globals.css';
import { useState } from 'react';

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
});

// export const metadata: Metadata = {
//   title: 'galleria. | A simple gallery app',
//   description: 'A simple gallery app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [slideshowActive, setSlideshowActive] = useState(false);
  return (
    <html>
      <body className={libre.className}>
        <Heading onActivate={() => setSlideshowActive(!slideshowActive)} />
        <MainContainer>
          {slideshowActive && <Slideshow />}
          {!slideshowActive && children}
        </MainContainer>
        {!slideshowActive && <Footer />}
      </body>
    </html>
  );
}
