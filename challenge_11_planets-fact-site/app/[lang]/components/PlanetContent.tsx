'use client';

import { getDictionary } from '@/get-dictionary';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { PlanetStatisticsBox } from './PlanetStatisticsBox';
import { useCallback, useMemo, useState } from 'react';
import { ActionMobileButton } from './ActionMobileButton';
import { ActionWebButton } from './ActionWebButton';

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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const renderStructureAndGeoImage = (index: number) => {
    if (index === 1) {
      return (
        <Image
          src={items.planetStructureImage}
          alt="Image"
          width={0}
          height={0}
          loading="lazy"
          className={`self-center ${
            items.planetName === dictionary.planets.saturn
              ? 'w-[62px] xl:w-[110px] xl:top-[57px] top-[33px] xl:right-[228px] right-[37px]'
              : 'w-[75px] xl:w-[150px] xl:top-0 xl:right-[188px]  top-0 right-0'
          }  h-auto absolute`}
        />
      );
    }

    if (index === 2) {
      return (
        <Image
          src={items.planetGeologyImage}
          alt="Image"
          width={0}
          height={0}
          loading="lazy"
          className={`self-center ${
            items.planetName === dictionary.planets.saturn
              ? 'w-[62px] xl:w-[100px] xl:top-[230px] xl:right-[287px]  top-[125px] right-[67px]'
              : 'w-[75px] xl:w-[120px] top-[100px] xl:top-[230px] xl:right-[277px] right-[37px]'
          }  h-auto absolute`}
        />
      );
    }
  };

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
      <ActionMobileButton
        dictionary={dictionary['mobileActionButtons']}
        activeIndex={activeIndex}
        onActive={handleActiveIndex}
      />

      <div className="px-6 lg:px-8 xl:px-36 pt-48  pb-12 md:pt-60 xl:pt-48 flex flex-col gap-16 items-center xl:flex-row xl:justify-between">
        <figure className="xl:w-1/2 xl:flex xl:justify-center relative">
          <Image
            src={items.planetOverviewImage}
            alt={items.planetAlt}
            width={0}
            height={0}
            loading="lazy"
            className={`self-center ${
              items.planetName === dictionary.planets.saturn
                ? 'w-[200px] xl:w-[350px]'
                : 'w-[150px] xl:w-[300px]'
            } h-auto `}
          />
          {renderStructureAndGeoImage(activeIndex)}
        </figure>

        <article className="items-center text-center flex flex-col gap-4 md:flex-row xl:flex-col xl:w-[40%] md:w-full md:gap-7">
          <div className="w-full flex flex-col gap-6 text-center md:w-1/2 xl:w-full md:text-left">
            <h1 className="text-[2.5rem]">{items.planetName}</h1>
            <p className="font-spartan text-[1rem] font-light">
              {items.planetOverviewContent}
            </p>
            <div className="font-spartan flex items-center justify-center md:justify-start text-[.8rem] font-light text-lightGrey">
              <span className="inline-block">
                {dictionary.generalText.source}
              </span>
              <Link href={items.planetSourceLink} className="pr-1 underline">
                {items.planetSourceLinkText}
              </Link>
              <FaExternalLinkSquareAlt />
            </div>
          </div>
          <ActionWebButton
            dictionary={dictionary['webActionButtons']}
            activeIndex={activeIndex}
            onActive={handleActiveIndex}
          />
        </article>
      </div>
      <PlanetStatisticsBox
        rotation={items.rotationTime}
        revolution={items.revolutionTime}
        radius={items.radius}
        averTem={items.temperature}
        dictionary={dictionary}
        usingHoursForRotation={usingHoursForRotation}
        usingYearsForRevolution={usingYearsForRevolution}
      />
    </>
  );
};
