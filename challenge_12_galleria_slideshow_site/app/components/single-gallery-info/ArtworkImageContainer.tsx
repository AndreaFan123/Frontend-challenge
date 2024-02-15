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
    <figure className=" w-[475px] h-[560px]">
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
