import { type Locale } from '../../i18n-config';
import { getDictionary } from '@/get-dictionary';

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main className="flex flex-col lg:gap-2 justify-center items-center w-full h-screen">
      <h1
        className="text-[5rem] lg:text-[10rem] text-white relative w-[max-content]
before:absolute before:inset-0 before:animate-typewriter
before:bg-white
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-black"
      >
        {dictionary.greeting['hello']}
      </h1>
      <h2 className=" text-white text-center text-[3rem] lg:text-[5rem]">
        {dictionary.greeting['welcome']}
      </h2>
    </main>
  );
}
