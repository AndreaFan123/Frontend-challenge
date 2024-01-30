import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export interface PlanetContentProps {
  planetOverviewImage: StaticImageData;
  planetStructureImage: StaticImageData;
  planetGeologyImage: StaticImageData;
  planetOverviewContent: string;
  planetStructureContent: string;
  planetGeologyContent: string;
  planetName: string;
  planetAlt: string;
  planetSourceLink: string;
  rotationTime: string;
  revolutionTime: string;
  radius: string;
  temperature: string;
}

export const PlanetContent = ({ items }: { items: PlanetContentProps }) => {
  return (
    <section className="mt-16 flex flex-col gap-16 items-center">
      <figure>
        <Image
          src={items.planetOverviewImage}
          alt={items.planetAlt}
          width={0}
          height={0}
          loading="lazy"
          className="self-center w-[150px] h-auto"
        />
      </figure>
      <article className="text-center flex flex-col gap-4">
        <h1 className="text-[2.5rem]">{items.planetName}</h1>
        <p className="font-spartan text-[1rem] font-light">
          {items.planetOverviewContent}
        </p>
        <Link
          className="font-spartan text-[.8rem] font-light"
          href={items.planetSourceLink}
        >
          Source:
        </Link>
      </article>
    </section>
  );
};
