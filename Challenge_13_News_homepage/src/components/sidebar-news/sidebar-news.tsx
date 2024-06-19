import "./sidebar.css";

import SidebarNewsItem from "./sidebar-new-item";
import Divider from "./divider";

const trendingNews = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export default function SidebarNews() {
  return (
    <div className="sidebar_wrapper">
      <h2>New</h2>
      <div className="sidebar_news-container">
        <SidebarNewsItem
          title={trendingNews[0].title}
          description={trendingNews[0].description}
        />
        <Divider />
        <SidebarNewsItem
          title={trendingNews[1].title}
          description={trendingNews[1].description}
        />
        <Divider />
        <SidebarNewsItem
          title={trendingNews[2].title}
          description={trendingNews[2].description}
        />
      </div>
    </div>
  );
}
