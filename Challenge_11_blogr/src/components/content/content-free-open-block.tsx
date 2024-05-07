import { ContentsType } from "./content-constants";

interface ContentFreeOpenBlockProps {
  contents: ContentsType;
}

export default function ContentFreeOpenBlock({
  contents,
}: ContentFreeOpenBlockProps) {
  return (
    <section className="text-center flex flex-col w-full">
      <div>
        <h2>{contents.header}</h2>
        <figure className="mb-[45px] w-full flex justify-center">
          <img src={contents.imgSrc ?? ""} alt="editor" />
        </figure>
        <article>
          {contents.content?.map((item) => (
            <div key={item.id} className="w-full max-w-[318px] mx-auto">
              <h3 className="text-2xl text-color-heading font-medium">
                {item.title}
              </h3>
              <p className="font-extralight pb-[45px]">{item.description}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
