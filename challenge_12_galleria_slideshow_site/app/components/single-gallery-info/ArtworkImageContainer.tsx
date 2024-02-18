'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import viewImg from '@/public/assets/shared/icon-view-image.svg';
import { createPortal } from 'react-dom';
import { ImageModal } from './ImageModal';

interface ArtworkImageContainerProps {
  imgSrc?: StaticImageData;
  alt?: string;
}

export const ArtworkImageContainer = ({
  imgSrc,
  alt,
}: ArtworkImageContainerProps) => {
  const [showImageModal, setShowImageModal] = useState(false);

  const openImageModal = () => {
    setShowImageModal(true);
  };

  return (
    <>
      <figure className="w-auto h-[280px] md:w-[475px] md:h-[560px] relative">
        <Image
          src={imgSrc ? imgSrc : ''}
          alt={alt ? alt : ''}
          width="0"
          height="0"
          loading="lazy"
          className="self-center h-full w-full object-cover shadow-lg"
        />
        <button
          onClick={openImageModal}
          className="absolute bg-black/80 py-4 px-3 top-[15px] md:top-[500px] left-[15px] w-[152px] flex justify-center gap-3 text-white uppercase"
        >
          <Image src={viewImg} width={0} height={0} alt="Click to image" />
          View Image
        </button>
      </figure>
      {showImageModal &&
        createPortal(
          <ImageModal
            onClose={() => setShowImageModal(false)}
            imgItem={imgSrc}
          />,
          document.body,
        )}
    </>
  );
};
