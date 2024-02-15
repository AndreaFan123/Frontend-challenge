'use client';

import { useState, useEffect } from 'react';
import { SingleGalleryInfo } from '@/app/components/single-gallery-info/SingleGalleryInfo';
import { galleries } from '@/app/constants/galleries';

export default function GirlWithPearlPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const artwork = galleries.find(
    (gallery) => gallery.name === 'Girl with a Pearl Earring',
  );
  return (
    <section>
      <SingleGalleryInfo artwork={artwork} />
    </section>
  );
}
