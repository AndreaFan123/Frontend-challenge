import { SingleContentType } from "./content-constants";
import darkBG from "../../assets/images/mobile_dark_bg.svg";
import darkBGWild from "../../assets/images/mobile_dark_bg-768.svg";
import darkBGWilder from "../../assets/images/dark_bg-1440.svg";

interface ContentStateOfTheArtProps {
  contents: SingleContentType;
}

export default function ContentStateOfTheArt({
  contents,
}: ContentStateOfTheArtProps) {
  return (
    <section className="text-center flex flex-col relative mb-[200px] mt-[-45px] w-full">
      <picture className="mb-[45px] sm:mb-0 flex justify-center w-full max-w-[400px] mx-auto">
        <img
          src={contents.imgSrc ?? ""}
          alt="mobile"
          className="block w-full h-full"
        />
      </picture>
      <article className="text-white w-full max-w-[325px] mx-auto">
        <h2 className="text-white text-4xl mb-[35px]">{contents.header}</h2>
        <p className="inline-block text-base font-extralight leading-6">
          {contents.content}
        </p>
      </article>
      <picture className="absolute top-[25%] w-screen -z-20">
        <source srcSet={darkBG} media="(max-width: 490px)" />
        <source srcSet={darkBGWild} media="(max-width: 768px)" />
        <source srcSet={darkBGWilder} media="(max-width:1920px" />
        <img
          src={darkBG}
          alt="
          dark bg"
        />
      </picture>
    </section>
  );
}
