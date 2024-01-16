interface NavLinks {
  id: string;
  title: string;
  url: string;
}

const navlinks: NavLinks[] = [
  { id: "about", title: "About", url: "/about" },
  { id: "services", title: "Services", url: "/services" },
  { id: "projects", title: "Projects", url: "/projects" },
  { id: "contact", title: "Contact", url: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="navbar_links">
      <a href="/">Sunnyside</a>
      <ul>
        {navlinks.map((link) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
