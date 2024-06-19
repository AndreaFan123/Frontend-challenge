import "./header.css";

type HeaderImgProps = {
  desktopImg?: string;
  mobileImg?: string;
};

export default function HeaderImg({ desktopImg, mobileImg }: HeaderImgProps) {
  return (
    <div className="headline_img-container">
      <img className="headline_img-desktop" src={desktopImg} alt="web3" />
      <img className="headline_img-mobile" src={mobileImg} alt="web3" />
    </div>
  );
}
