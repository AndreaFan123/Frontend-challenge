import "./App.css";

import {
  SectionContent_A,
  SectionContent_B,
  SectionContent_C,
} from "./components/content/content-constants";
import { ContentDesignForFutureBlock } from "./components/content/content-design-for-future-block";
import ContentFreeOpenBlock from "./components/content/content-free-open-block";
import ContentStateOfTheArtBlock from "./components/content/content-state-of-the-art-block";
import Footer from "./components/footer/footer";
import { Navbar } from "./components/nav/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ContentDesignForFutureBlock contents={SectionContent_A} />
        <ContentStateOfTheArtBlock contents={SectionContent_B} />
        <ContentFreeOpenBlock contents={SectionContent_C} />
      </main>
      <Footer />
    </>
  );
}

export default App;
