'use client';

import Link from 'next/link';
import LangSwitcher from './LangSwitcher';
import { IoMenu, IoChevronForward } from 'react-icons/io5';
import { type getDictionary } from '../../../get-dictionary';
import { useState } from 'react';
import { Locale } from '@/i18n-config';

interface NavbarType {
  title: string;
  url: string;
  color?: string;
}

export default function Navbar({
  dictionary,
  lang,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['planets'];
  lang: Locale;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const navbarLinks: NavbarType[] = [
    {
      title: dictionary.mercury,
      url: `/${lang}/mercury`,
      color: 'bg-mercuryMenu',
    },
    {
      title: dictionary.venus,
      url: `/${lang}/venus`,
      color: 'bg-venusMenu',
    },
    {
      title: dictionary.earth,
      url: `/${lang}/earth`,
      color: 'bg-earthMenu',
    },
    {
      title: dictionary.mars,
      url: `/${lang}/mars`,
      color: 'bg-marsMenu',
    },
    {
      title: dictionary.jupiter,
      url: `/${lang}/jupiter`,
      color: 'bg-jupiterMenu',
    },
    {
      title: dictionary.saturn,
      url: `/${lang}/saturn`,
      color: 'bg-saturnMenu',
    },
    {
      title: dictionary.uranus,
      url: `/${lang}/uranus`,
      color: 'bg-uranusMenu',
    },
    {
      title: dictionary.neptune,
      url: `/${lang}/neptune`,
      color: 'bg-neptuneMenu',
    },
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderMobileMenu = (
    <>
      {navbarLinks.map((link) => (
        <li
          key={link.title}
          className="flex w-full p-4 border-b border-lightGrey/40 justify-between"
        >
          <Link href={link.url} className="flex items-center gap-3">
            <span
              className={`${link.color} w-[15px] h-[15px] rounded-full md:hidden`}
            ></span>
            {link.title}
          </Link>
          <IoChevronForward size={20} color="#838391" className="md:hidden" />
        </li>
      ))}
      <LangSwitcher />
    </>
  );

  const renderDesktopMenu = (
    <>
      {navbarLinks.map((link) => (
        <li
          key={link.title}
          className="md:text-[1rem] md:text-white/80 hover:text-white"
        >
          <Link href={link.url}>{link.title}</Link>
        </li>
      ))}
      <LangSwitcher />
    </>
  );

  return (
    <nav className="flex justify-between w-full p-4 fixed md:z-20 md:w-full bg-darkBlue text-white md:flex md:flex-col md:items-center md:py-4 md:gap-3  xl:flex-row xl:w-full lg:justify-between lg:items-center uppercase tracking-wide border-b border-lightGrey/40 lg:py-[27px] lg:px-[32px]">
      <Link href="/" className="text-[1.5rem] lg:text-[2rem] xl:w-[30%]">
        The Planets
      </Link>
      <button className="md:hidden" onClick={handleToggle}>
        <IoMenu size={30} color={isOpen ? '#838391' : '#ffffff'} />
      </button>
      <ul className="hidden md:flex md:gap-7 lg:gap-16 md:justify-evenly xl:justify-between items-center">
        {renderDesktopMenu}
      </ul>
      <ul className="absolute shadow-lg z-10 shadow-slate-800 top-[69px] left-0 w-full md:hidden bg-darkBlue">
        {isOpen && renderMobileMenu}
      </ul>
    </nav>
  );
}
