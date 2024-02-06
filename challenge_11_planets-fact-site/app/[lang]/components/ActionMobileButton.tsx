'use client';

import { getDictionary } from '@/get-dictionary';
import { on } from 'events';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export interface ActionButtonProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
  activeIndex: number;
  onActive: (index: number) => void;
}

export const ActionMobileButton = ({
  dictionary,
  activeIndex,
  onActive,
}: ActionButtonProps) => {
  const indexPath = usePathname().split('/')[2] === undefined;
  const activePath = usePathname().split('/')[2];

  const renderButtonActiveLine = (path: string) => {
    switch (path) {
      case 'mercury':
        return 'border-mercury border-b-4 pb-3 ';
      case 'venus':
        return 'border-venus border-b-4 pb-3 ';
      case 'earth':
        return 'border-earth border-b-4 pb-3 ';
      case 'mars':
        return 'border-mars border-b-4 pb-3 ';
      case 'jupiter':
        return 'border-jupiter border-b-4 pb-3 ';
      case 'saturn':
        return 'border-saturn border-b-4 pb-3 ';
      case 'uranus':
        return 'border-uranus border-b-4 pb-3 ';
      case 'neptune':
        return 'border-neptune border-b-4 pb-3 ';
      default:
        return '';
    }
  };

  const actionMobileButtons = [
    {
      mobileTitle: dictionary.mobileActionButtons.overview,
    },
    {
      mobileTitle: dictionary.mobileActionButtons.internalStructure,
    },
    {
      mobileTitle: dictionary.mobileActionButtons.surfaceGeology,
    },
  ];

  return (
    <>
      {indexPath ? null : (
        <div className="w-full fixed z-20 pt-16 md:hidden">
          <div className="text-white pt-3 bg-darkBlue px-4 relative border-t border-b border-lightGrey/40 tracking-wide flex justify-between text-[1rem]">
            {actionMobileButtons.map((mobileButton, indx) => (
              <button
                className={`cursor-pointer ${
                  indx === activeIndex
                    ? renderButtonActiveLine(activePath)
                    : 'border-b-4 pb-3 border-transparent'
                }`}
                key={mobileButton.mobileTitle}
                onClick={() => onActive(indx)}
              >
                <span
                  className={`${
                    indx === activeIndex ? 'text-white' : 'text-lightGrey'
                  }`}
                >
                  {mobileButton.mobileTitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
