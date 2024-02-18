'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo/galleria..png';
import { useState } from 'react';
import { on } from 'events';

interface HeadingProps {
  onActivate: () => void;
}

export const Heading = ({ onActivate }: HeadingProps) => {
  const [slideshowActivated, setSlideshowActivated] = useState(false);

  const handleActivateSlideshow = () => {
    onActivate();
    setSlideshowActivated(!slideshowActivated);
  };

  return (
    <header className="fixed z-20  w-full max-w-full mx-auto  border-b border-b-lightGrey bg-white">
      <div className="flex justify-between items-center p-2 md:py-4 md:px-8 lg:px-16 xl:px-56">
        <Link href="/">
          <Image
            src={logo}
            width={113}
            height={49}
            alt="Logo name galleria"
            className="self-center lg:w-[170px]"
          />
        </Link>
        <button className="startSlideshow" onClick={handleActivateSlideshow}>
          {slideshowActivated ? 'Stop' : 'Start'} Slideshow
        </button>
      </div>
    </header>
  );
};
