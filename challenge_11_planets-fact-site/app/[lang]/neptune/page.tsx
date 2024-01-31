import neptuneOverview from '@/public/assets/neptune/neptune-overview.png';
import neptuneInternal from '@/public/assets/neptune/neptune-internal.png';
import neptuneGeo from '@/public/assets/neptune/neptune-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { ActionButton } from '../components/ActionButtons';

export default async function neptunePage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  const neptuneContent: PlanetContentProps = {
    planetOverviewImage: neptuneOverview,
    planetStructureImage: neptuneInternal,
    planetGeologyImage: neptuneGeo,
    planetOverviewContent: dictionary.neptune.overview,
    planetStructureContent: dictionary.neptune.internalStructure,
    planetGeologyContent: dictionary.neptune.surfaceGeology,
    planetName: dictionary.planets.neptune,
    planetAlt: dictionary.planets.neptune,
    planetSourceLinkText: 'Wikipidia',
    planetSourceLink: '/',
    rotationTime: '16.08',
    revolutionTime: '164.79',
    radius: '24,622',
    temperature: '-201.33',
  };

  return (
    <main className="text-white w-full max-w-full">
      <ActionButton dictionary={dictionary} />
      <PlanetContent items={neptuneContent} dictionary={dictionary} />
    </main>
  );
}
