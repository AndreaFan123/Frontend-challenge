import Link from 'next/link';
import LangSwitcher from './LangSwitcher';
import { type getDictionary } from '../../../get-dictionary';

interface NavbarType {
  title: string;
  url: string;
}

export default function Navbar({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['planets'];
}) {
  const navbarLinks: NavbarType[] = [
    {
      title: dictionary.mercury,
      url: '/mercury',
    },
    {
      title: dictionary.venus,
      url: '/venus',
    },
    {
      title: dictionary.earth,
      url: '/earth',
    },
    {
      title: dictionary.mars,
      url: '/mars',
    },
    {
      title: dictionary.jupiter,
      url: '/jupiter',
    },
    {
      title: dictionary.saturn,
      url: '/saturn',
    },
    {
      title: dictionary.uranus,
      url: '/uranus',
    },
    {
      title: dictionary.neptune,
      url: '/neptune',
    },
  ];
  return (
    <nav className="text-white lg:flex lg:justify-between lg:items-center uppercase tracking-wide border-b border-lightGrey lg:py-[27px] lg:px-[32px]">
      <Link href="/" className="lg:text-[2.8rem]">
        The Planets
      </Link>
      <ul className="flex gap-12">
        {navbarLinks.map((link) => (
          <li
            key={link.title}
            className="lg:text-[1.1rem] text-white/80 hover:text-white"
          >
            <Link href={link.url}>{link.title}</Link>
          </li>
        ))}
        <LangSwitcher />
      </ul>
    </nav>
  );
}
