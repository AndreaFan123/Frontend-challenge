import HeroSection from "./components/hero-section/HeroSection";
import Navbar from "./components/navigation/Navbar";
import { GlobalStyle } from "./global.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <header>
        <h1>we are creative</h1>
      </header>
    </>
  );
}

export default App;
