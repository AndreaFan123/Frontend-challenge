import { ShowCaseProps } from "./ShowCase";

interface BrandingImgCoverProps {
  item: ShowCaseProps;
}

export const BrandingImgCover = ({ item }: BrandingImgCoverProps) => {
  return (
    <div className="branding_cover-relative">
      <div className="branding-cover-img">
        <img src={item.imgUrl} alt={item.alt} />
      </div>
      <div
        className="branding_cover-absolute"
        style={{
          color:
            item.textColor === "green"
              ? "hsl(168, 34%, 41%)"
              : "hsl(212, 27%, 19%)",
        }}
      >
        <h2>{item.title}</h2>
        <p>{item.subtitle}</p>
      </div>
    </div>
  );
};
