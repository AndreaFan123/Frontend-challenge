import { SingleContentType } from "./content-constants";
import darkBG from "../../assets/images/mobile_dark_bg.svg";

interface ContentStateOfTheArtProps {
  contents: SingleContentType;
}

export default function ContentStateOfTheArt({
  contents,
}: ContentStateOfTheArtProps) {
  return (
    <section className="text-center flex flex-col relative mb-[200px] mt-[-45px]">
      <figure className="mb-[45px]">
        <img src={contents.imgSrc ?? ""} alt="mobile" />
      </figure>
      <h2 className="text-white text-4xl mb-[35px]">{contents.header}</h2>
      <article className="text-white w-full max-w-[325px] mx-auto">
        <p className="inline-block text-base font-extralight leading-6">
          {contents.content}
        </p>
      </article>
      <figure className="absolute top-[27%] -z-20 h-[625px] w-full">
        <img
          src={darkBG}
          alt="
        dark bg"
        />
      </figure>
    </section>
  );
}
