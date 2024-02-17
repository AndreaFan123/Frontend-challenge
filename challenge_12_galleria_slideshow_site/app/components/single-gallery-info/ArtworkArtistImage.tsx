import Image, { StaticImageData } from 'next/image';

interface ArtworkArtistImageProps {
  imgSrc?: StaticImageData;
  alt?: string;
}

export const ArtworkArtistImage = ({
  imgSrc,
  alt,
}: ArtworkArtistImageProps) => {
  return (
    <figure className="w-[64px] h-[64px] mt-12">
      <Image
        src={imgSrc ? imgSrc : ''}
        alt={alt ? alt : ''}
        width="100"
        height="100"
        loading="lazy"
        className="self-center h-full w-full object-contain"
      />
    </figure>
  );
};
