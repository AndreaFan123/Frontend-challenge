'use client';

import { useState, useEffect } from 'react';
import { SingleGalleryInfo } from '@/app/components/single-gallery-info/SingleGalleryInfo';
import { galleries } from '@/app/constants/galleries';

export default function TheBoyInTheRedVest() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const artwork = galleries.find(
    (gallery) => gallery.name === 'The Boy in the Red Vest',
  );
  return (
    <section>
      <SingleGalleryInfo artwork={artwork} />
    </section>
  );
}
