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
    <figure className="w-[64px] h-[64px] mt-12 md:w-[128px] md:h-[128px] md:absolute md:top-[190px] md:left-[535px]">
      <Image
        src={imgSrc ? imgSrc : ''}
        alt={alt ? alt : ''}
        width={0}
        height={0}
        loading="lazy"
        className="self-center h-full w-full object-contain"
      />
    </figure>
  );
};
