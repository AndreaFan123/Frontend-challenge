import image_retro from "../../../public/assets/image-retro-pcs.jpg";
import image_laptop from "../../../public/assets/image-top-laptops.jpg";
import image_gaming from "../../../public/assets/image-gaming-growth.jpg";
import TrendingNewsItem from "./trending-news-item";

import "./trending.css";

const trendingNews = [
  {
    id: "01",
    title: "Reviving Retro PCs",
    subtitle: "What happens when old PCs are given modern upgrades?",
    imgUrl: image_retro,
  },
  {
    id: "02",
    title: "Top 10 Laptops of 2022",
    subtitle: "Our best picks for various needs and budgets.",
    imgUrl: image_laptop,
  },
  {
    id: "03",
    title: "The Growth of Gaming",
    subtitle: "How the pandemic has sparked fresh opportunities.",
    imgUrl: image_gaming,
  },
];

export default function TrendingNews() {
  return (
    <>
      {trendingNews.map((news) => (
        <div key={news.id} className="trending_content-container">
          <TrendingNewsItem
            id={news.id}
            title={news.title}
            subtitle={news.subtitle}
            imgUrl={news.imgUrl}
          />
        </div>
      ))}
    </>
  );
}
