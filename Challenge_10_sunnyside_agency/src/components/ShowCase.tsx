import egg from "../assets/images/desktop/image-transform.jpg";
import cup from "../assets/images/desktop/image-stand-out.jpg";
import cheery from "../assets/images/desktop/image-graphic-design.jpg";
import orangeImg from "../assets/images/desktop/image-photography.jpg";
import BrandingCard from "./BrandingCard";
import { BrandingImgCover } from "./BrandingImgCover";

export interface ShowCaseProps {
  title: string;
  textColor?: string;
  subtitle: string;
  imgUrl: string;
  alt: string;
  cta?: string;
}

const showcase: ShowCaseProps[] = [
  {
    title: "Transform your brand",
    subtitle:
      "We are a full-service creative agnecy specializing in helping brands grow fast.Engage clients through compelling visuals that do most of the marketing for you.",
    imgUrl: egg,
    alt: "Transform your brand",
    cta: "Learn More",
  },
  {
    title: "Stand out to the right audience",
    subtitle:
      "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
    imgUrl: cup,
    alt: "Stand out to the right audience",
    cta: "Learn More",
  },
];

const imgCoverShowCase: ShowCaseProps[] = [
  {
    title: "Graphic Design",
    textColor: "green",
    subtitle:
      "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.",
    imgUrl: cheery,
    alt: "Graphic Design",
  },
  {
    title: "Photography",
    textColor: "blue",
    subtitle:
      "Increase your credibility by getting the most stunning, high-quality photos that improve your business image",
    imgUrl: orangeImg,
    alt: "Photography",
  },
];

export default function ShowCase() {
  return (
    <main>
      <section>
        <BrandingCard item={showcase[0]} />
      </section>
      <section>
        <BrandingCard item={showcase[1]} reverse />
      </section>
      <section className="branding_cover-flex">
        {imgCoverShowCase.map((item) => (
          <BrandingImgCover key={item.title} item={item} />
        ))}
      </section>
    </main>
  );
}
