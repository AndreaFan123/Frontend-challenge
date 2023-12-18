import { NavbarRoutesListing } from "./Navbar.styled";
import { LuAlignJustify } from "react-icons/lu";

interface NavbarRouteProps {
  route: string;
  path: string;
}

const NavbarRoute = ({ route, path }: NavbarRouteProps) => {
  return (
    <li>
      <a href={path}>{route}</a>
    </li>
  );
};

export default NavbarRoute;
