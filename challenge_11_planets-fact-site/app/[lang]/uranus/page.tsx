import uranusOverview from '@/public/assets/uranus/uranus-overview.png';
import uranusInternal from '@/public/assets/uranus/uranus-internal.png';
import uranusGeo from '@/public/assets/uranus/uranus-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { PlanetPageLayout } from '../layout/PlanetPageLayout';

export default async function uranusPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  const uranusContent: PlanetContentProps = {
    planetOverviewImage: uranusOverview,
    planetStructureImage: uranusInternal,
    planetGeologyImage: uranusGeo,
    planetOverviewContent: dictionary.uranus.overview,
    planetStructureContent: dictionary.uranus.internalStructure,
    planetGeologyContent: dictionary.uranus.surfaceGeology,
    planetName: dictionary.planets.uranus,
    planetAlt: dictionary.planets.uranus,
    planetSourceLinkText: 'Wikipidia',
    planetSourceLink: '/',
    rotationTime: '17.2',
    revolutionTime: '84',
    radius: '25,362',
    temperature: '-195.33',
  };

  return (
    <PlanetPageLayout>
      <PlanetContent items={uranusContent} dictionary={dictionary} />
    </PlanetPageLayout>
  );
}
