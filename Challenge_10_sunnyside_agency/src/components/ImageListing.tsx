import milk from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import platte from "../assets/images/desktop/image-gallery-orange.jpg";
import cone from "../assets/images/desktop/image-gallery-cone.jpg";
import cube from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

interface Image {
  id: number;
  imageSrc: string;
  alt: string;
}

const ImageShowcases: Image[] = [
  {
    id: 1,
    imageSrc: milk,
    alt: "Milk bottles",
  },
  {
    id: 2,
    imageSrc: platte,
    alt: "Orange on the platte",
  },
  {
    id: 3,
    imageSrc: cone,
    alt: "Cone",
  },
  {
    id: 4,
    imageSrc: cube,
    alt: "sugar cubes",
  },
];

export default function ImageListing() {
  return (
    <section className="imageShowcase_container">
      {ImageShowcases.map((image) => (
        <figure key={image.id}>
          <img src={image.imageSrc} alt={image.alt} />
        </figure>
      ))}
    </section>
  );
}
