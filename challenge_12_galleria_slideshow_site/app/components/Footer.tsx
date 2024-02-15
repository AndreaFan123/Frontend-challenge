import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo/galleria..png';

export const Footer = () => {
  return (
    <footer className="border-t border-b-lightGrey w-full my-4">
      <div className="flex flex-col justify-center items-center p-2">
        <Link href="/">
          <Image
            src={logo}
            width={113}
            height={49}
            alt="Logo name galleria"
            className="self-center lg:w-[100px]"
          />
        </Link>
        <span className="block text-gray-700">
          &copy; 2021 galleria. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
