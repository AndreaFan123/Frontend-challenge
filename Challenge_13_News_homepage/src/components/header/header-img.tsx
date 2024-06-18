import "./header.css";

type HeaderImgProps = {
  desktopImg?: string;
  mobileImg?: string;
};

export default function HeaderImg({ desktopImg, mobileImg }: HeaderImgProps) {
  return (
    <div className="headline_img-container">
      <img src={mobileImg} alt="web3" />
    </div>
  );
}
