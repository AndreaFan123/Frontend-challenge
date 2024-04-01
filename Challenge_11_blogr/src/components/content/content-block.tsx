import { ContentsType } from "../../components/content/content-constants";

export const ContentBlock = ({ contents }: { contents: ContentsType }) => {
  return (
    <section className="text-center flex flex-col gap-4">
      <h2 className="text-2xl text-color-heading font-overpass-bold">
        {contents.header}
      </h2>
      <div>
        <figure>{/* <img src={imgSrc} alt={alt} /> */}</figure>
        <div>
          {contents.content.map((content) => (
            <div key={content.id}>
              <h3 className="text-2xl text-color-heading ">{content.title}</h3>
              <p>{content.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
