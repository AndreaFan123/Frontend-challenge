'use client';

import { useState } from 'react';
import { Slide } from '@/app/components/single-gallery-info/Slide';
import { galleries } from '@/app/constants/galleries';
import Image from 'next/image';
import prevSlideIcon from '@/public/assets/shared/icon-back-button.svg';
import nextSlideIcon from '@/public/assets/shared/icon-next-button.svg';

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleries.length) % galleries.length);
  };

  return (
    <>
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-56">
        {galleries.map((gallery, index) => (
          <div
            key={index}
            style={{
              display: index === currentSlide ? 'block' : 'none',
              height: '100%',
            }}
            className="relative h-full"
          >
            <Slide gallery={gallery} />
          </div>
        ))}
      </div>
      <div className="flex bg-white fixed bottom-0 py-5 w-full  justify-between  border-t border-t-lightGrey px-4 md:px-16 xl:px-56">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-sm">{galleries[currentSlide].name}</h3>
          <span className="font-medium text-xs">
            {galleries[currentSlide].artist.name}
          </span>
        </div>
        <div className="flex gap-7">
          <button onClick={nextSlide}>
            <Image
              src={prevSlideIcon}
              width={0}
              height={0}
              alt="Click to check previous slide"
            />
          </button>
          <button onClick={prevSlide}>
            <Image
              src={nextSlideIcon}
              width={0}
              height={0}
              alt="Click to check previous slide"
            />
          </button>
        </div>
      </div>
    </>
  );
}
