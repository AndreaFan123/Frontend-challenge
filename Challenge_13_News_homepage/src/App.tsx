import "./App.css";
import { Headline, Navbar, SidebarNews, TrendingNews } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main className="main_wrapper">
        <section className="headline_sidebar-container">
          <Headline />
          <SidebarNews />
        </section>
        <section className="trending_news-container">
          <TrendingNews />
        </section>
      </main>
    </>
  );
}

export default App;
