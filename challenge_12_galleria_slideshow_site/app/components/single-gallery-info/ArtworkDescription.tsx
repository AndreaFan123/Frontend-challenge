import { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ArtworkDescriptionProps {
  year?: number;
  description?: string;
  source?: string;
}

export const ArtworkDescription = ({
  year,
  description,
  source,
}: ArtworkDescriptionProps) => {
  return (
    <article>
      <h3>{year}</h3>
      <p>{description}</p>
      <Link href={source ? source : ''}>Go To Source</Link>
    </article>
  );
};
