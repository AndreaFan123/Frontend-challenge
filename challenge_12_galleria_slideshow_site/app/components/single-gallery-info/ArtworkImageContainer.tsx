import Image, { StaticImageData } from 'next/image';

interface ArtworkImageContainerProps {
  imgSrc?: StaticImageData;
  alt?: string;
}

export const ArtworkImageContainer = ({
  imgSrc,
  alt,
}: ArtworkImageContainerProps) => {
  return (
    <figure className="w-auto h-[280px] lg:w-[475px] lg;h-[560px] relative">
      <Image
        src={imgSrc ? imgSrc : ''}
        alt={alt ? alt : ''}
        width="0"
        height="0"
        loading="lazy"
        className="self-center h-full w-full object-cover shadow-lg"
      />
    </figure>
  );
};
