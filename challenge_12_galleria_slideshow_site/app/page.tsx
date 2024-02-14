import { galleries } from '@/app/constants/galleries';
import { Thumbnail } from './components/Thumbnail';

export default function HomePage() {
  return (
    <section>
      {galleries.map((gallery) => (
        <Thumbnail item={gallery} />
      ))}
    </section>
  );
}
