// TODO: Using Years for mars, jupiter, saturn, uranus revolution time
// TODO: Using hours for jupiter, saturn, uranus rotation time

import { getDictionary } from '@/get-dictionary';

interface PlanetStatisticsBoxProps {
  rotation: string;
  revolution: string;
  radius: string;
  averTem: string;
  usingHoursForRotation: boolean;
  usingYearsForRevolution: boolean;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}

export const PlanetStatisticsBox = ({
  rotation,
  revolution,
  radius,
  averTem,
  usingHoursForRotation,
  usingYearsForRevolution,
  dictionary,
}: PlanetStatisticsBoxProps) => {
  return (
    <ul className="flex flex-col px-6 lg:px-8  xl:px-36 w-full gap-4 lg:flex-row ">
      <li className="border border-lightGrey/80 p-4 lg:p-6 xl:p-8  flex lg:flex-col justify-between items-center w-full">
        <span className="text-lightGrey uppercase font-bold font-spartan text-sm xl:text-base">
          {dictionary.statistics.rotationTime}
        </span>
        <span className="text-xl xl:text-2xl">
          {rotation}
          {usingHoursForRotation
            ? dictionary.statistics.hours
            : dictionary.statistics.days}
        </span>
      </li>
      <li className="border border-lightGrey/80 p-4 lg:p-6 xl:p-8  flex lg:flex-col justify-between items-center w-full">
        <span className="text-lightGrey uppercase font-bold font-spartan text-sm xl:text-base">
          {dictionary.statistics.revolutionTime}
        </span>
        <span className="text-xl xl:text-2xl">
          {revolution}
          {usingYearsForRevolution
            ? dictionary.statistics.years
            : dictionary.statistics.days}
        </span>
      </li>
      <li className="border border-lightGrey/80 p-4 lg:p-6 xl:p-8  flex lg:flex-col justify-between items-center w-full">
        <span className="text-lightGrey uppercase font-bold font-spartan text-sm xl:text-base">
          {dictionary.statistics.radius}
        </span>
        <span className="text-xl xl:text-2xl">
          {radius}
          {dictionary.statistics.km}
        </span>
      </li>
      <li className="border border-lightGrey/80 p-4 lg:p-6 xl:p-8 flex lg:flex-col justify-between items-center w-full">
        <span className="text-lightGrey uppercase font-bold font-spartan text-sm xl:text-base">
          {dictionary.statistics.averageTemp}
        </span>
        <span className="text-xl xl:text-2xl">
          {averTem}
          {dictionary.statistics.c}
        </span>
      </li>
    </ul>
  );
};
