import { ShowCaseProps } from "./ShowCase";
import "../index.css";

export default function BrandingCard({ item }: { item: ShowCaseProps }) {
  return (
    <section className="branding_section">
      <div className="branding_section-content">
        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>
        <a href="#">{item.cta}</a>
      </div>
      <div className="branding_section-img">
        <img src={item.imgUrl} alt={item.alt} />
      </div>
    </section>
  );
}
