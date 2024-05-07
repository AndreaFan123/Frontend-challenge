import { ContentsType } from "./content-constants";

interface ContentDesignForFutureBlockProps {
  contents: ContentsType;
}

export const ContentDesignForFutureBlock = ({
  contents,
}: ContentDesignForFutureBlockProps) => {
  return (
    <section className="text-center flex flex-col my-[100px]">
      <div>
        <h2 className="text-2xl text-color-heading font-medium mb-[45px]">
          {contents.header}
        </h2>
        <figure className="flex justify-center mb-[45px]">
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
};
