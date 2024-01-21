import { ShowCaseProps } from "./ShowCase";
import "../index.css";

export default function BrandingCard({
  item,
  reverse,
}: {
  item: ShowCaseProps;
  reverse?: boolean;
}) {
  const reverseEle = (
    <>
      <div className="branding_section-img">
        <img src={item.imgUrl} alt={item.alt} />
      </div>
      <div className="branding_section-content">
        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>
        <a href="#">
          {item.cta}
          <span className="reverse"></span>
        </a>
      </div>
    </>
  );

  const normalEle = (
    <>
      <div className="branding_section-content">
        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>
        <a href="#">
          {item.cta}
          <span></span>
        </a>
      </div>
      <div className="branding_section-img">
        <img src={item.imgUrl} alt={item.alt} />
      </div>
    </>
  );

  return (
    <div className="branding_section">{reverse ? reverseEle : normalEle}</div>
  );
}
