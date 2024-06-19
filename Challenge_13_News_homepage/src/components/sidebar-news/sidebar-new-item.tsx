import "./sidebar.css";

type SidebarNewsItemProps = {
  title?: string;
  description?: string;
};

export default function SidebarNewsItem({
  title,
  description,
}: SidebarNewsItemProps) {
  return (
    <div className="sidebar_news_item-container">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
