'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo/galleria..png';

export const Heading = () => {
  // Activate slideshow, and slide to next every 5 secs
  const [slideshowActive, setSlideshowActive] = useState(false);
  return (
    <header className="fixed z-20  w-full max-w-[1200px] mx-auto border-b border-b-lightGrey bg-white">
      <div className="flex justify-between items-center p-2">
        <Link href="/">
          <Image
            src={logo}
            width={113}
            height={49}
            alt="Logo name galleria"
            className="self-center lg:w-[170px]"
          />
        </Link>
        <button className="startSlideshow">Start Slideshow</button>
      </div>
    </header>
  );
};
