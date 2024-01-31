import marsOverview from '@/public/assets/mars/mars-overview.png';
import marsInternal from '@/public/assets/mars/mars-internal.png';
import marsGeo from '@/public/assets/mars/mars-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { ActionButton } from '../components/ActionButtons';

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
    planetSourceLinkText: 'Wikipidia',
    planetSourceLink: '/',
    rotationTime: '1.03',
    revolutionTime: '1.88',
    radius: '3,389.5',
    temperature: '-28',
  };

  return (
    <main className="text-white w-full max-w-full">
      <PlanetContent items={marsContent} dictionary={dictionary} />
    </main>
  );
}
