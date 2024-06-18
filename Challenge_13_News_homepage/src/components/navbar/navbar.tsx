import { useState } from "react";

import logo from "../../../public/assets/logo.svg";
import mobileMenu from "../../../public/assets/icon-menu.svg";

import "./nav.css";

const navList = [
  {
    id: "home",
    title: "Home",
    url: "/",
  },
  {
    id: "new",
    title: "New",
    url: "/new",
  },
  {
    id: "popular",
    title: "Popular",
    url: "/popular",
  },
  {
    id: "trending",
    title: "Trending",
    url: "/trending",
  },
  {
    id: "categories",
    title: "Categories",
    url: "/categories",
  },
];

export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const DesktopNav = (
    <div className="nav_wrapper">
      <a className="nav-logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav className="nav_links-container">
        {navList.map((link) => (
          <a key={link.id} href={link.url}>
            {link.title}
          </a>
        ))}
      </nav>
    </div>
  );

  const MobileNav = (
    <div className="mobile_nav_wrapper">
      <a className="mobile_nav-logo" href="/">
        <img src={logo} alt="logo" />
      </a>
      <button
        className="mobile_nav-button"
        onClick={() => setOpenMobileMenu(true)}
      >
        <img src={mobileMenu} alt="menu" />
      </button>
      <div
        className="mobile_nav_links-container"
        style={openMobileMenu ? { display: "flex" } : { display: "none" }}
      >
        <button onClick={() => setOpenMobileMenu(false)}>X</button>
        <nav>
          {navList.map((link) => (
            <a key={link.id} href={link.url}>
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
  return (
    <>
      {DesktopNav}
      {MobileNav}
    </>
  );
}
