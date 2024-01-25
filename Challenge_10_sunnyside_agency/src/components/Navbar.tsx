import { useState } from "react";
import mobileMenu from "../assets/images/icon-hamburger.svg";
export interface NavLinks {
  id: string;
  title: string;
  url: string;
  imgUrl?: string;
}

const navLinks: NavLinks[] = [
  { id: "about", title: "About", url: "#" },
  { id: "services", title: "Services", url: "#" },
  { id: "projects", title: "Projects", url: "#" },
  { id: "contact", title: "Contact", url: "#" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <nav className="navbar_links">
      <a href="/">Sunnyside</a>

      <button className="mobile_navbar-hamburger">
        <img src={mobileMenu} alt="mobile menu" />
      </button>

      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              onClick={() => handleLinkClick(link.id)}
              className={`${activeLink === link.id ? "active" : ""}`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
