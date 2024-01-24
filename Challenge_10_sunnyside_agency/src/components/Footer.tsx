import { NavLinks } from "./Navbar";
import fb from "../assets/images/icon-facebook.svg";
import ig from "../assets/images/icon-instagram.svg";
import x from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";

const footerLinks: NavLinks[] = [
  { id: "about", title: "About", url: "/about" },
  { id: "services", title: "Services", url: "/services" },
  { id: "projects", title: "Projects", url: "/projects" },
];

const socialLinks: NavLinks[] = [
  { id: "fb", title: "Facebook", url: "https://www.facebook.com", imgUrl: fb },
  {
    id: "ig",
    title: "Instagram",
    url: "https://www.instagram.com",
    imgUrl: ig,
  },
  { id: "x", title: "Twitter", url: "https://www.twitter.com", imgUrl: x },
  {
    id: "pinterest",
    title: "Pinterest",
    url: "https://www.pinterest.com",
    imgUrl: pinterest,
  },
];

export default function Footer() {
  return (
    <footer>
      <span className="footer_brand-title">sunnyside</span>
      <ul className="footer_brand-nav">
        {footerLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
      <ul className="footer_brand-socialMedias">
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              <img src={link.imgUrl} alt={link.title} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
