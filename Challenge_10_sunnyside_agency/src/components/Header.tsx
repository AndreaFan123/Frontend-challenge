import arrowDown from "../assets/images/icon-arrow-down.svg";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Navbar />
      <h1 className="header_heading">We Are Creative</h1>
      <div>
        <img src={arrowDown} alt="Arrow down" />
      </div>
    </header>
  );
}
