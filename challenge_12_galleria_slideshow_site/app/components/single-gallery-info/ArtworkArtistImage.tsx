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
    <figure>
      <Image
        src={imgSrc ? imgSrc : ''}
        alt={alt ? alt : ''}
        width="100"
        height="100"
        loading="lazy"
      />
    </figure>
  );
};
