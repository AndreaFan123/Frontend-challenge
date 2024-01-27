'use client';

// TODO: Make it like selector

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, type Locale } from '../../../i18n-config';

export default function LangSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul className="text-[1.1rem] flex gap-3">
      {i18n.locales.map((locale) => {
        return (
          <li key={locale}>
            <Link href={redirectedPathName(locale)}>{locale}</Link>
          </li>
        );
      })}
    </ul>
  );
}
