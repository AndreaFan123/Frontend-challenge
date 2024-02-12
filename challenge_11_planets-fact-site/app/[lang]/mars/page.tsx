import marsOverview from '@/public/assets/mars/mars-overview.png';
import marsInternal from '@/public/assets/mars/mars-internal.png';
import marsGeo from '@/public/assets/mars/mars-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { PlanetPageLayout } from '../layout/PlanetPageLayout';

export default async function marsPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  const marsContent: PlanetContentProps = {
    planetOverviewImage: marsOverview,
    planetStructureImage: marsInternal,
    planetGeologyImage: marsGeo,
    planetOverviewContent: dictionary.mars.overview,
    planetStructureContent: dictionary.mars.internalStructure,
    planetGeologyContent: dictionary.mars.surfaceGeology,
    planetName: dictionary.planets.mars,
    planetAlt: dictionary.planets.mars,
    planetSourceLink: 'https://en.wikipedia.org/wiki/Mars',
    planetSourceLinkText: 'Wikipedia',
    rotationTime: '1.03',
    revolutionTime: '1.88',
    radius: '3,389.5',
    temperature: '-28',
  };

  return (
    <PlanetPageLayout>
      <PlanetContent items={marsContent} dictionary={dictionary} />
    </PlanetPageLayout>
  );
}
