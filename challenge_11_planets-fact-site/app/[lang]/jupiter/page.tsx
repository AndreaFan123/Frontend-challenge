import jupiterOverview from '@/public/assets/jupiter/jupiter-overview.png';
import jupiterInternal from '@/public/assets/jupiter/jupiter-internal.png';
import jupiterGeo from '@/public/assets/jupiter/jupiter-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { PlanetPageLayout } from '../layout/PlanetPageLayout';

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
    planetSourceLink: 'https://en.wikipedia.org/wiki/Jupiter',
    planetSourceLinkText: 'Wikipedia',
    rotationTime: '9.93',
    revolutionTime: '11.86',
    radius: '69,911',
    temperature: '-108',
  };

  return (
    <PlanetPageLayout>
      <PlanetContent items={jupiterContent} dictionary={dictionary} />
    </PlanetPageLayout>
  );
}
