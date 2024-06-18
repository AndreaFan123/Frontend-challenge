import "./App.css";
import { Headline, Navbar, SidebarNews, TrendingNews } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main className="main_wrapper">
        {/* Desktop flex row; mobile flex column */}
        <Headline />
        <SidebarNews />
      </main>
      {/* <section>
        <TrendingNews />
      </section> */}
    </>
  );
}

export default App;
