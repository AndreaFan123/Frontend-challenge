import Image from 'next/image';
import { GalleriesType } from '../constants/galleries';
import Link from 'next/link';

interface ThumbnailProps {
  item: GalleriesType;
}

export const Thumbnail = ({ item }: ThumbnailProps) => {
  return (
    <Link href={item.url} className="relative">
      <figure>
        <Image
          src={item.images.gallery}
          width={0}
          height={0}
          loading="lazy"
          alt={item.description}
          className="self-center w-full h-auto object-contain brightness-75"
        />
        <figcaption className="w-full text-wrap absolute text-white bottom-8 left-5 flex flex-col gap-2">
          <h3 className="thumbnailArtistWork"> {item.name}</h3>
          <p className="thumbnailArtistName">{item.artist.name}</p>
        </figcaption>
      </figure>
    </Link>
  );
};
