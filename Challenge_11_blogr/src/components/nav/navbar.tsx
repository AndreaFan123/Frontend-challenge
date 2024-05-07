import Logo from "../../assets/images/logo.svg";
import MenuIcon from "../../assets/images/icon-hamburger.svg";

import { HeaderContainer } from "../layouts/header-container";
import { Button } from "../button-cva";

export const Navbar = () => {
  return (
    <HeaderContainer>
      <nav className="flex justify-between">
        <a href="/">
          <img src={Logo} alt="Blogr logo" />
        </a>
        <button>
          <img src={MenuIcon} alt="Click to open navbar" />
        </button>
      </nav>
      <section className="text-center sm:px-12 md:px-24">
        <h1 className="text-white text-4xl pb-4">
          A modern publishing platform
        </h1>
        <p className="text-white font-overpass-light text-xl pb-10">
          Grow your audience and build your outline brand
        </p>
        <div className="flex justify-between gap-4">
          <Button>Start for Free</Button>
          <Button intent="secondary">Learn More</Button>
        </div>
      </section>
    </HeaderContainer>
  );
};
