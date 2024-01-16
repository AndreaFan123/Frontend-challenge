import { ShowCaseProps } from "./ShowCase";

export default function BrandingCard({ item }: { item: ShowCaseProps }) {
  return (
    <div>
      <div>
        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>
        <a href="#">{item.cta}</a>
      </div>
      <div>
        <img src={item.imgUrl} alt={item.alt} />
      </div>
    </div>
  );
}
