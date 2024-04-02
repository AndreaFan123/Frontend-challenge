import {
  ContentsType,
  SingleContentType,
} from "../../components/content/content-constants";

export const ContentBlock = ({
  contents,
}: {
  contents: ContentsType | SingleContentType;
}) => {
  console.log("contents", contents);
  return (
    <section className="text-center flex flex-col gap-11 my-28">
      <div className="flex flex-col gap-14">
        <h2 className="text-3xl text-color-heading font-overpass-bold">
          {contents.header}
        </h2>
        <figure>
          <img
            src={contents.imgSrc}
            alt="editor"
            className="block self-center"
          />
        </figure>
      </div>
      <div className="flex flex-col gap-14 px-9">
        {/* {contents?.content?.length > 0 && => (
          <div key={content.id} className="flex flex-col items-center gap-7">
            <h3 className="text-3xl text-color-heading inline-block w-[70%]">
              {content.title}
            </h3>
            <p className="text-gray-500 text-lg inline-block">
              {content.description}
            </p>
          </div>
        ))} */}
      </div>
    </section>
  );
};
