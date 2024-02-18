'use client';

import { useState } from 'react';
import { Heading } from './Heading';
import { MainContainer } from '../layouts/MainContainer';
import Slideshow from './single-gallery-info/Slideshow';
import { Footer } from './Footer';

export const ContentContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [slideshowActive, setSlideshowActive] = useState(false);
  return (
    <>
      <Heading onActivate={() => setSlideshowActive(!slideshowActive)} />
      <MainContainer>
        {slideshowActive && <Slideshow />}
        {!slideshowActive && children}
      </MainContainer>
      {!slideshowActive && <Footer />}
    </>
  );
};
