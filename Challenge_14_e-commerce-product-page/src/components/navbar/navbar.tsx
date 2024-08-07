import { useState } from "react";
import { createPortal } from "react-dom";

import closeIcon from "../../assets/images/icon-cart.svg";
import menuIcon from "../../assets/images/icon-menu.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import logo from "../../assets/images/logo.svg";

const links = [
  {
    id: "collections",
    link: "/collections",
    title: "Collections",
  },
  {
    id: "men",
    link: "/men",
    title: "Men",
  },
  {
    id: "women",
    link: "/women",
    title: "Women",
  },
  {
    id: "about",
    link: "/about",
    title: "About",
  },
  {
    id: "contact",
    link: "/contact",
    title: "Contact",
  },
];

const MobileNavbar = ({ onCloseMenu }: { onCloseMenu: () => void }) => {
  return (
    <div className="absolute pl-4 pt-9 flex flex-col gap-9 top-0 left-0 w-[60%] h-screen bg-pale-orange z-50">
      <button onClick={onCloseMenu}>
        <img src={closeIcon} alt="Click to close menu" />
      </button>
      <nav className="flex flex-col gap-5 font-semibold">
        {links.map((link) => (
          <a key={link.id} href={link.link}>
            {link.title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleShowMobileNavbar = () => {
    setShowMobileNav(true);
  };

  const handleCloseMobileNavbar = () => {
    setShowMobileNav(false);
  };

  return (
    <header className="px-4 py-5 md:py-11 md:border-b-[1px] md:border-gray-400/20 flex items-center justify-between">
      <div className="flex items-baseline gap-4">
        <button className="md:hidden" onClick={handleShowMobileNavbar}>
          <img src={menuIcon} alt="Click to open navbar" />
        </button>
        <div className="flex gap-11 items-center">
          <a className="heading" href="/">
            <img src={logo} alt="Sneakers logo, click to landing page" />
          </a>
          <nav className="hidden md:flex md:text-dark-grayish-blue md:gap-6">
            {links.map((link) => (
              <a key={link.id} href={link.link}>
                {link.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Cart & Avatar */}
      <div className="flex items-center gap-7">
        <a href="/cart">
          <img src={cart} alt="click to cart page" />
        </a>
        <a href="/profile">
          <img
            className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] self-center block"
            src={avatar}
            alt="click to profile page"
          />
        </a>
      </div>
      {showMobileNav &&
        createPortal(
          <MobileNavbar onCloseMenu={handleCloseMobileNavbar} />,
          document.body
        )}
    </header>
  );
}
