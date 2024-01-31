import jupiterOverview from '@/public/assets/jupiter/jupiter-overview.png';
import jupiterInternal from '@/public/assets/jupiter/jupiter-internal.png';
import jupiterGeo from '@/public/assets/jupiter/jupiter-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { ActionButton } from '../components/ActionButtons';

export default async function jupiterPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  const jupiterContent: PlanetContentProps = {
    planetOverviewImage: jupiterOverview,
    planetStructureImage: jupiterInternal,
    planetGeologyImage: jupiterGeo,
    planetOverviewContent: dictionary.jupiter.overview,
    planetStructureContent: dictionary.jupiter.internalStructure,
    planetGeologyContent: dictionary.jupiter.surfaceGeology,
    planetName: dictionary.planets.jupiter,
    planetAlt: dictionary.planets.jupiter,
    planetSourceLinkText: 'Wikipidia',
    planetSourceLink: '/',
    rotationTime: '9.93',
    revolutionTime: '11.86',
    radius: '69,911',
    temperature: '-108',
  };

  return (
    <main className="text-white w-full max-w-full">
      <ActionButton dictionary={dictionary} />
      <PlanetContent items={jupiterContent} dictionary={dictionary} />
    </main>
  );
}
