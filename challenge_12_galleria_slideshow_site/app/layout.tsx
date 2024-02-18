'use client';

import { Libre_Baskerville } from 'next/font/google';
import './globals.css';
import { useState } from 'react';
import { Heading } from './components/Heading';
import { MainContainer } from './layouts/MainContainer';
import Slideshow from './components/single-gallery-info/Slideshow';
import { Footer } from './components/Footer';

const libre = Libre_Baskerville({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
