import "./trending.css";

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
      <div className="trending_news-img">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="trending_news-content">
        <span>{id}</span>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </>
  );
}
