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
    <article className="w-full flex flex-col lg:w-1/2 lg:items-end">
      <span className="text-[6.3rem] md:text-[10rem] xl:text-[12.5rem] text-gray-200 inline-block w-full text-end md:text-start lg:text-end">
        {year}
      </span>
      <div className="lg:w-full lg:flex lg:flex-col lg:items-start lg:pl-48 lg:mt-[-8rem]">
        <p className="description mt-[-50px] md:w-[457px] md:mt-[-115px] md:ml-[125px] lg:ml-0 lg:mt-0 lg:w-[350px] lg:leading-7">
          {description}
        </p>
        <Link
          href={source ? source : ''}
          className="text-[0.56rem] block pt-16 pb-40 description underline md:ml-[125px] lg:ml-0 lg:mt-0 uppercase tracking-wider"
        >
          Go To Source
        </Link>
      </div>
    </article>
  );
};
