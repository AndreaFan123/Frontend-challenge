import Image from 'next/image';
import { GalleriesType } from '../constants/galleries';
import Link from 'next/link';

interface ThumbnailProps {
  item: GalleriesType;
}

export const Thumbnail = ({ item }: ThumbnailProps) => {
  return (
    <Link href={item.url}>
      <figure>
        <Image
          src={item.images.thumbnail}
          width={0}
          height={0}
          loading="lazy"
          alt={item.description}
        />
        <figcaption>
          <h3>{item.artist.name}</h3>
          <p>{item.name}</p>
        </figcaption>
      </figure>
    </Link>
  );
};
