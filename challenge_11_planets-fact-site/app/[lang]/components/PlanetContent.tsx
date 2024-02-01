'use client';

import { getDictionary } from '@/get-dictionary';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { PlanetStatisticsBox } from './PlanetStatisticsBox';
import { ActionButton } from './ActionButtons';
import { useState } from 'react';

export interface PlanetContentProps {
  planetOverviewImage: StaticImageData;
  planetStructureImage: StaticImageData;
  planetGeologyImage: StaticImageData;
  planetOverviewContent: string;
  planetStructureContent: string;
  planetGeologyContent: string;
  planetName: string;
  planetAlt: string;
  planetSourceLinkText: string;
  planetSourceLink: string;
  rotationTime: string;
  revolutionTime: string;
  radius: string;
  temperature: string;
}

export const PlanetContent = ({
  items,
  dictionary,
}: {
  items: PlanetContentProps;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [isActiveBtn, setIsActiveBtn] = useState(0);

  const usingHoursForRotation =
    items.planetName === dictionary.planets.jupiter ||
    items.planetName === dictionary.planets.saturn ||
    items.planetName === dictionary.planets.uranus ||
    items.planetName === dictionary.planets.neptune;

  const usingYearsForRevolution =
    items.planetName === dictionary.planets.mars ||
    items.planetName === dictionary.planets.jupiter ||
    items.planetName === dictionary.planets.saturn ||
    items.planetName === dictionary.planets.uranus ||
    items.planetName === dictionary.planets.neptune;
  return (
    <>
      <ActionButton dictionary={dictionary} />
      <section className="px-[24px] pt-48 pb-12 md:pt-60  flex flex-col gap-16 items-center">
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
        <article className="items-center text-center flex flex-col gap-4">
          <h1 className="text-[2.5rem]">{items.planetName}</h1>
          <p className="font-spartan text-[1rem] font-light">
            {items.planetOverviewContent}
          </p>
          <div className="font-spartan flex items-center text-[.8rem] font-light text-lightGrey">
            <span className="inline-block">
              {dictionary.generalText.source}
            </span>
            <Link href={items.planetSourceLink} className="pr-1 underline">
              {items.planetSourceLinkText}
            </Link>
            <FaExternalLinkSquareAlt />
          </div>
        </article>
        <PlanetStatisticsBox
          rotation={items.rotationTime}
          revolution={items.revolutionTime}
          radius={items.radius}
          averTem={items.temperature}
          dictionary={dictionary}
          usingHoursForRotation={usingHoursForRotation}
          usingYearsForRevolution={usingYearsForRevolution}
        />
      </section>
    </>
  );
};
