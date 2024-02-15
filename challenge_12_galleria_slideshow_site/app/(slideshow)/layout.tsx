import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import { MainContainer } from '../layouts/MainContainer';

export const metadata: Metadata = {
  title: 'galleria. | A simple gallery app',
  description: 'A simple gallery app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className='pt-[2rem] px-4 lg:px-0"'>{children}</main>
    </>
  );
}
