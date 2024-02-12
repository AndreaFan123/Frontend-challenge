import mercuryOverview from '@/public/assets/mercury/mercury-overview.png';
import mercuryInternal from '@/public/assets/mercury/mercury-internal.png';
import mercuryGeology from '@/public/assets/mercury/mercury-geo.png';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';
import { PlanetContent, PlanetContentProps } from '../components/PlanetContent';
import { PlanetPageLayout } from '../layout/PlanetPageLayout';

export default async function MercuryPage({
  params,
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  const mercuryContent: PlanetContentProps = {
    planetOverviewImage: mercuryOverview,
    planetStructureImage: mercuryInternal,
    planetGeologyImage: mercuryGeology,
    planetOverviewContent: dictionary.mercury.overview,
    planetStructureContent: dictionary.mercury.internalStructure,
    planetGeologyContent: dictionary.mercury.surfaceGeology,
    planetName: dictionary.planets.mercury,
    planetAlt: dictionary.planets.mercury,
    planetSourceLink: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
    planetSourceLinkText: 'Wikipedia',
    rotationTime: '58.6',
    revolutionTime: '87.97',
    radius: '2,397',
    temperature: '430',
  };

  return (
    <PlanetPageLayout>
      <PlanetContent items={mercuryContent} dictionary={dictionary} />
    </PlanetPageLayout>
  );
}
