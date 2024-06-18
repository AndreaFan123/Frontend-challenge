import heading_img_desktop from "../../../public/assets/image-web-3-desktop.jpg";
import heading_img_mobile from "../../../public/assets/image-web-3-mobile.jpg";
import HeaderContent from "./header-content";
import HeaderImg from "./header-img";

export default function Headline() {
  return (
    <div className="headline_wrapper">
      <HeaderImg
        desktopImg={heading_img_desktop}
        mobileImg={heading_img_mobile}
      />
      <HeaderContent
        title="The Bright Future of Web 3.0?"
        description="We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?"
        cta="read more"
      />
    </div>
  );
}
