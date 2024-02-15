interface ArtworkTitlesProps {
  title?: string;
  artist?: string;
}

export const ArtworkTitles = ({ title, artist }: ArtworkTitlesProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{artist}</h2>
    </div>
  );
};
