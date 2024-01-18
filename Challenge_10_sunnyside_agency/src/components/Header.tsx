import arrowDown from "../assets/images/icon-arrow-down.svg";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Navbar />
      <div className="header_heading">
        <h1>We Are Creative</h1>
        <div>
          <img src={arrowDown} alt="Arrow down" />
        </div>
      </div>
    </header>
  );
}
