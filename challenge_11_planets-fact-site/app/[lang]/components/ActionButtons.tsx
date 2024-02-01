'use client';

import { getDictionary } from '@/get-dictionary';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface ActionButtonProps {
  mobileTitle: string;
  webTitle?: string;
  onClick: () => void;
}

export const ActionButton = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [defaultActive, setDefaultActive] = useState(0);
  const indexPath = usePathname().split('/')[2] === undefined;
  const activePath = usePathname().split('/')[2];

  const renderBottomActiveLine = (path: string) => {
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

  const actionButtons: ActionButtonProps[] = [
    {
      mobileTitle: dictionary.mobileActionButtons.overview,
      webTitle: dictionary.webActionButtons.overview,
      onClick: () => {},
    },
    {
      mobileTitle: dictionary.mobileActionButtons.internalStructure,
      webTitle: dictionary.webActionButtons.internalStructure,
      onClick: () => {},
    },
    {
      mobileTitle: dictionary.mobileActionButtons.surfaceGeology,
      webTitle: dictionary.webActionButtons.surfaceGeology,
      onClick: () => {},
    },
  ];

  const renderMobileActionButtons = (
    <div className="text-white pt-3 bg-darkBlue px-4 relative border-t border-b border-lightGrey/40 tracking-wide flex justify-between text-[1rem]">
      {actionButtons.map((actionButton, indx) => (
        <button
          className={`cursor-pointer ${
            indx === defaultActive
              ? renderBottomActiveLine(activePath)
              : 'border-b-4 pb-3 border-transparent'
          }`}
          key={actionButton.mobileTitle}
          onClick={() => setDefaultActive(indx)}
        >
          <span
            className={`${
              indx === defaultActive ? 'text-white' : 'text-lightGrey'
            }`}
          >
            {actionButton.mobileTitle}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <>
      {indexPath ? null : (
        <div className="w-full fixed pt-16 md:hidden">
          {renderMobileActionButtons}
        </div>
      )}
    </>
  );
};
