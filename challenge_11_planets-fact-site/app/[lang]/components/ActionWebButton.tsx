'use client';

import { getDictionary } from '@/get-dictionary';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ActionButtonProps } from './ActionMobileButton';

export const ActionWebButton = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [defaultActive, setDefaultActive] = useState(0);
  const indexPath = usePathname().split('/')[2] === undefined;
  const activePath = usePathname().split('/')[2];

  const renderButtonActiveBg = (path: string) => {
    switch (path) {
      case 'mercury':
        return 'bg-mercury py-3';
      case 'venus':
        return 'bg-venus py-3';
      case 'earth':
        return 'bg-earth py-3';
      case 'mars':
        return 'bg-mars py-3';
      case 'jupiter':
        return 'bg-jupiter py-3';
      case 'saturn':
        return 'bg-saturn py-3';
      case 'uranus':
        return 'bg-uranus py-3';
      case 'neptune':
        return 'bg-neptune py-3';
      default:
        return '';
    }
  };

  const actionWebButtons: ActionButtonProps[] = [
    {
      webTitle: dictionary.webActionButtons.overview,
      onClick: () => {},
    },
    {
      webTitle: dictionary.webActionButtons.internalStructure,
      onClick: () => {},
    },
    {
      webTitle: dictionary.webActionButtons.surfaceGeology,
      onClick: () => {},
    },
  ];

  return (
    <div className="hidden md:flex md:flex-col md:w-1/2 md:gap-4 xl:w-full">
      {actionWebButtons.map((webButton, indx) => (
        <button
          key={webButton.webTitle}
          onClick={webButton.onClick}
          className={`cursor-pointer text-base font-spartan uppercase tracking-wide ${
            indx === defaultActive
              ? renderButtonActiveBg(activePath)
              : 'border border-lightGrey/40 py-3'
          }`}
        >
          {webButton.webTitle}
        </button>
      ))}
    </div>
  );
};
