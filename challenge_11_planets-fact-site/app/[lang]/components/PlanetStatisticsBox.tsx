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
    <ul className="flex flex-col w-full gap-4 ">
      <li className="border border-lightGrey/80 p-4 flex justify-between items-center w-full">
        <span className="text-lightGrey uppercase font-bold font-spartan text-[.6rem]">
          {dictionary.statistics.rotationTime}
        </span>
        <span className="text-xl">
          {rotation}
          {usingHoursForRotation
            ? dictionary.statistics.hours
            : dictionary.statistics.days}
        </span>
      </li>
      <li className="border border-lightGrey/80 p-4 flex justify-between items-center w-full">
        <span className="text-lightGrey uppercase font-bold font-spartan text-[.6rem]">
          {dictionary.statistics.revolutionTime}
        </span>
        <span className="text-xl">
          {revolution}
          {usingYearsForRevolution
            ? dictionary.statistics.years
            : dictionary.statistics.days}
        </span>
      </li>
      <li className="border border-lightGrey/80 p-4 flex justify-between items-center w-full">
        <span className="text-lightGrey uppercase font-bold font-spartan text-[.6rem]">
          {dictionary.statistics.radius}
        </span>
        <span className="text-xl">
          {radius}
          {dictionary.statistics.km}
        </span>
      </li>
      <li className="border border-lightGrey/80 p-4 flex justify-between items-center w-full">
        <span className="text-lightGrey uppercase font-bold font-spartan text-[.6rem]">
          {dictionary.statistics.averageTemp}
        </span>
        <span className="text-xl">
          {averTem}
          {dictionary.statistics.c}
        </span>
      </li>
    </ul>
  );
};
