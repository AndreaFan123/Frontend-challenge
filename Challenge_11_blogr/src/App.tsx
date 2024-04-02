import "./App.css";
import { ContentBlock } from "./components/content/content-block";
import {
  SectionContent_A,
  SectionContent_B,
  SectionContent_C,
} from "./components/content/content-constants";
import { Navbar } from "./components/nav/navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ContentBlock contents={SectionContent_A} />
        <ContentBlock contents={SectionContent_C} />
      </main>
    </>
  );
}

export default App;
