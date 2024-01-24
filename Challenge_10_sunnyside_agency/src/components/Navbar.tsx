import { useState } from "react";
import mobileMenu from "../assets/images/icon-hamburger.svg";
export interface NavLinks {
  id: string;
  title: string;
  url: string;
  imgUrl?: string;
}

const navLinks: NavLinks[] = [
  { id: "about", title: "About", url: "/about" },
  { id: "services", title: "Services", url: "/services" },
  { id: "projects", title: "Projects", url: "/projects" },
  { id: "contact", title: "Contact", url: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar_links">
      <a href="/">Sunnyside</a>

      <button className="mobile_navbar-hamburger">
        <img src={mobileMenu} alt="mobile menu" />
      </button>

      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
