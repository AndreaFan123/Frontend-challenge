'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo/galleria..png';

export const Heading = () => {
  // Activate slideshow, and slide to next every 5 secs
  const [slideshowActive, setSlideshowActive] = useState(false);
  return (
    <header className="fixed">
      <Link href="/">
        <Image
          src={logo}
          width={113}
          height={49}
          alt="Logo name galleria"
          className="self-center lg:w-[170px]"
        />
      </Link>
      <div className="startSlideshow">Start Slideshow</div>
    </header>
  );
};
