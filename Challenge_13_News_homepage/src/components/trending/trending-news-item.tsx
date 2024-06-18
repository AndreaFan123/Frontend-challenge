type TrendingNewsItemProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  imgUrl?: string;
};

export default function TrendingNewsItem({
  id,
  title,
  subtitle,
  imgUrl,
}: TrendingNewsItemProps) {
  return (
    <>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
      <div>
        <span>{id}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
}
