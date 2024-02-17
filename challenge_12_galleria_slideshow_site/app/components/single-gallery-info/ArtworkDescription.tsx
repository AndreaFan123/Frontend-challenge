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
    <article className="w-full">
      <span className="text-[6.3rem] text-gray-200 inline-block w-full text-end">
        {year}
      </span>
      <p className="description mt-[-50px]">{description}</p>
      <Link href={source ? source : ''}>Go To Source</Link>
    </article>
  );
};
