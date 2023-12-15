interface NavbarRouteProps {
  route: string;
  path: string;
}

const NavbarRoute = ({ route, path }: NavbarRouteProps) => {
  return (
    <ul>
      <li>
        <a href={path}>{route}</a>
      </li>
    </ul>
  );
};

export default NavbarRoute;
