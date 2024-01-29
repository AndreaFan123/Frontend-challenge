import { type Locale } from '../../i18n-config';
import { getDictionary } from '@/get-dictionary';

export default async function Home({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <main className="flex flex-col lg:gap-2 justify-center items-center w-full h-screen">
      <h1 className="text-[5rem] lg:text-[10rem] text-white">
        {dictionary.greeting['hello']}
      </h1>
      <h2 className="text-white text-center text-[3rem] lg:text-[5rem]">
        {dictionary.greeting['welcome']}
      </h2>
    </main>
  );
}
