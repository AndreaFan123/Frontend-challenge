interface ArtworkTitlesProps {
  title?: string;
  artist?: string;
}

export const ArtworkTitles = ({ title, artist }: ArtworkTitlesProps) => {
  return (
    <div className="bg-white border-none pl-7 md:pl-14 w-[280px] md:h-[238px] md:w-[390px] h-[104px] flex flex-col justify-center md:justify-start items-start absolute top-[222px] md:gap-6 left-0 md:top-[-1px] md:left-[350px]">
      <h1 className="font-bold text-2xl md:text-6xl md:w-[95%] md:leading-[4rem]">
        {title}
      </h1>
      <h2 className="text-sm text-primaryGrey">{artist}</h2>
    </div>
  );
};
