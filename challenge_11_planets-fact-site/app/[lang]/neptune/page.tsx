import neptuneOverview from '@/public/assets/neptune/neptune-overview.png';
import neptuneInternal from '@/public/assets/neptune/neptune-internal.png';
import neptuneGeo from '@/public/assets/neptune/neptune-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { PlanetPageLayout } from '../layout/PlanetPageLayout';

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
    planetSourceLink: 'https://en.wikipedia.org/wiki/Neptune',
    planetSourceLinkText: 'Wikipedia',
    rotationTime: '16.08',
    revolutionTime: '164.79',
    radius: '24,622',
    temperature: '-201.33',
  };

  return (
    <PlanetPageLayout>
      <PlanetContent items={neptuneContent} dictionary={dictionary} />
    </PlanetPageLayout>
  );
}
