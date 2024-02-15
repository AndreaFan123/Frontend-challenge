import { galleries } from '@/app/constants/galleries';

export default function StarryNightPage() {
  const artwork = galleries.find((gallery) => gallery.name === 'starry-night');
  return (
    <main>
      <ArtworkImageContainer src={artwork?.images.hero.small} />
      <ArtworkTitles title={artwork?.name} artist={artwork?.artist.name} />
      <ArtworkArtistImage src={artwork?.artist.image} />
      <ArtworkDescription
        year={artwork?.year}
        description={artwork?.description}
        source={artwork?.source}
      />
    </main>
  );
}
