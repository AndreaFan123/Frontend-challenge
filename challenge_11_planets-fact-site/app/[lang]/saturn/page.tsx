import saturnOverview from '@/public/assets/saturn/saturn-overview.png';
import saturnInternal from '@/public/assets/saturn/saturn-internal.png';
import saturnGeo from '@/public/assets/saturn/saturn-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { ActionButton } from '../components/ActionButtons';
import { PlanetPageLayout } from '../layout/PlanetPageLayout';

export default async function saturnPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  const saturnContent: PlanetContentProps = {
    planetOverviewImage: saturnOverview,
    planetStructureImage: saturnInternal,
    planetGeologyImage: saturnGeo,
    planetOverviewContent: dictionary.saturn.overview,
    planetStructureContent: dictionary.saturn.internalStructure,
    planetGeologyContent: dictionary.saturn.surfaceGeology,
    planetName: dictionary.planets.saturn,
    planetAlt: dictionary.planets.saturn,
    planetSourceLinkText: 'Wikipidia',
    planetSourceLink: '/',
    rotationTime: '10.8',
    revolutionTime: '29.46',
    radius: '58,232',
    temperature: '-138',
  };

  return (
    <PlanetPageLayout>
      <PlanetContent items={saturnContent} dictionary={dictionary} />
    </PlanetPageLayout>
  );
}
