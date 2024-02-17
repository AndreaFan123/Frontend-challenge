import { galleries } from '@/app/constants/galleries';
import { Thumbnail } from './components/Thumbnail';

export default function HomePage() {
  const grid_1 = galleries.slice(0, 4);
  const grid_2 = galleries.slice(4, 8);
  const grid_3 = galleries.slice(8, 12);
  const grid_4 = galleries.slice(12, 16);
  return (
    <section className="grid grid-cols-2 gap-4 px-4">
      <div className="grid gap-4">
        {grid_1.map((gallery) => (
          <Thumbnail item={gallery} />
        ))}
      </div>
      <div className="grid gap-4">
        {grid_2.map((gallery) => (
          <Thumbnail item={gallery} />
        ))}
      </div>
      <div className="grid gap-4">
        {grid_3.map((gallery) => (
          <Thumbnail item={gallery} />
        ))}
      </div>
      <div className="grid gap-4">
        {grid_4.map((gallery) => (
          <Thumbnail item={gallery} />
        ))}
      </div>
    </section>
  );
}
