import { NavbarContainer, NavbarListing, NavbarLogo } from "./Navbar.styled";
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
    <NavbarContainer>
      <NavbarLogo href="/">sunnyside</NavbarLogo>
      <NavbarListing>
        {routes.map((route) => (
          <NavbarRoute
            key={route.title}
            route={route.title}
            path={route.path}
          />
        ))}
      </NavbarListing>
    </NavbarContainer>
  );
};

export default Navbar;
