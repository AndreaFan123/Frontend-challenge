import venusOverview from '@/public/assets/venus/venus-overview.png';
import venusInternal from '@/public/assets/venus/venus-internal.png';
import venusGeo from '@/public/assets/venus/venus-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { ActionButton } from '../components/ActionButtons';

export default async function VenusPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  const venusContent: PlanetContentProps = {
    planetOverviewImage: venusOverview,
    planetStructureImage: venusInternal,
    planetGeologyImage: venusGeo,
    planetOverviewContent: dictionary.venus.overview,
    planetStructureContent: dictionary.venus.internalStructure,
    planetGeologyContent: dictionary.venus.surfaceGeology,
    planetName: dictionary.planets.venus,
    planetAlt: dictionary.planets.venus,
    planetSourceLinkText: 'Wikipidia',
    planetSourceLink: '/',
    rotationTime: '243',
    revolutionTime: '224.7',
    radius: '6,051.8',
    temperature: '471',
  };

  return (
    <main className="text-white w-full max-w-full">
      <PlanetContent items={venusContent} dictionary={dictionary} />
    </main>
  );
}
