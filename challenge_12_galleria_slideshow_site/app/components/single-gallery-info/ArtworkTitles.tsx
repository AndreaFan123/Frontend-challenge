interface ArtworkTitlesProps {
  title?: string;
  artist?: string;
}

export const ArtworkTitles = ({ title, artist }: ArtworkTitlesProps) => {
  return (
    <div className="bg-white border-none pl-7 w-[280px] h-[104px] flex flex-col justify-center items-start absolute top-[222px] left-0">
      <h1 className="font-bold text-2xl">{title}</h1>
      <h2 className="text-sm text-primaryGrey">{artist}</h2>
    </div>
  );
};
