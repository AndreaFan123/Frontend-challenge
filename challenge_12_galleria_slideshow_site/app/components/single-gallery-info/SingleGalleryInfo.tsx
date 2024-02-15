import { ArtworkImageContainer } from '@/app/components/single-gallery-info/ArtworkImageContainer';
import { ArtworkTitles } from '@/app/components/single-gallery-info/ArtworkTitles';
import { ArtworkArtistImage } from '@/app/components/single-gallery-info/ArtworkArtistImage';
import { ArtworkDescription } from '@/app/components/single-gallery-info/ArtworkDescription';
import { GalleriesType } from '@/app/constants/galleries';

interface SingleGalleryInfoProps {
  artwork?: GalleriesType;
}

export const SingleGalleryInfo = ({ artwork }: SingleGalleryInfoProps) => {
  return (
    <>
      <ArtworkImageContainer
        imgSrc={artwork?.images.hero.large}
        alt={artwork?.description}
      />
      <ArtworkTitles title={artwork?.name} artist={artwork?.artist.name} />
      <ArtworkArtistImage
        imgSrc={artwork?.artist.image}
        alt={artwork?.description}
      />
      <ArtworkDescription
        year={artwork?.year}
        description={artwork?.description}
        source={artwork?.source}
      />
    </>
  );
};
