import NavbarRoute from "./NavbarRoute";

const routes = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Service",
    path: "/service",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <a href="/">sunnyside</a>
      {routes.map((route) => (
        <NavbarRoute key={route.title} route={route.title} path={route.path} />
      ))}
    </nav>
  );
};

export default Navbar;
