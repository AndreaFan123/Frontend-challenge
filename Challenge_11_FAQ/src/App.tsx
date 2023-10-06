import "./App.css";
import illustratorDesktop from "./assets/illustration-woman-online-desktop.svg";
// import illustratorMobile from "./assets/illustration-woman-online-mobile.svg";
import bg from "./assets/bg-pattern-desktop.svg";

function App() {
  return (
    <main className="faq_container">
      <div className="faq_bgs-container">
        <figure className="faq_bgs-img">
          <img src={bg} alt="bg pattern" />
        </figure>
        <figure className="faq_bgs-img">
          <img src={illustratorDesktop} alt="women" />
        </figure>
      </div>
    </main>
  );
}

export default App;
