import Image from 'next/image';
import Link from 'next/link';
import { GalleriesType } from '../constants/galleries';

interface ThumbnailProps {
  item: GalleriesType;
}

export const Thumbnail = ({ item }: ThumbnailProps) => {
  return (
    <Link href={item.url} className="relative overflow-hidden">
      <figure className="h-full w-full">
        <Image
          src={item.images.gallery}
          width={0}
          height={0}
          loading="lazy"
          alt={item.description}
          className="self-center w-full h-full object-cover brightness-75 transform transition duration-500 
                                hover:scale-110 hover:brightness-100"
        />
        <figcaption className="w-full text-wrap absolute text-white bottom-8 left-5 flex flex-col gap-2">
          <h3 className="thumbnailArtistWork"> {item.name}</h3>
          <p className="thumbnailArtistName">{item.artist.name}</p>
        </figcaption>
      </figure>
    </Link>
  );
};
