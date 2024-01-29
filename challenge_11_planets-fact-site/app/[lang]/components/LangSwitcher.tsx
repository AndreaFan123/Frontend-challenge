'use client';

// TODO: Make it like selector

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { i18n, type Locale } from '../../../i18n-config';

export default function LangSwitcher() {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul className="w-1/2 flex p-4 text-[1rem] md:flex-row gap-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale} className="border py-1 text-center px-2 rounded-md">
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </li>
        );
      })}
    </ul>
  );
}
