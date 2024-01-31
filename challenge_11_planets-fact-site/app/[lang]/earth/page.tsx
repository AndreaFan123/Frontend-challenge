import earthOverview from '@/public/assets/earth/earth-overview.png';
import earthInternal from '@/public/assets/earth/earth-internal.png';
import earthGeo from '@/public/assets/earth/earth-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { ActionButton } from '../components/ActionButtons';

export default async function earthPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  const earthContent: PlanetContentProps = {
    planetOverviewImage: earthOverview,
    planetStructureImage: earthInternal,
    planetGeologyImage: earthGeo,
    planetOverviewContent: dictionary.earth.overview,
    planetStructureContent: dictionary.earth.internalStructure,
    planetGeologyContent: dictionary.earth.surfaceGeology,
    planetName: dictionary.planets.earth,
    planetAlt: dictionary.planets.earth,
    planetSourceLinkText: 'Wikipidia',
    planetSourceLink: '/',
    rotationTime: '0.99',
    revolutionTime: '365.26',
    radius: '6,371',
    temperature: '16',
  };

  return (
    <main className="text-white w-full max-w-full">
      <PlanetContent items={earthContent} dictionary={dictionary} />
    </main>
  );
}
