import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-1 border-t-darkGrey border-t h-[100px] bg-darkBlue text-center">
      <Link href="/" className=" block text-[1.5rem] text-white/80 ">
        The Planets
      </Link>
      <span className="text-[.8rem] text-lightGrey/80 ml-1">
        &copy; 2024, All rights reserved
      </span>
    </footer>
  );
};
