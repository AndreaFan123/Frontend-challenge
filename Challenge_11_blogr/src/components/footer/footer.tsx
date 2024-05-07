import footerBG from "../../assets/images/footer-bg.svg";
import footerBG768 from "../../assets/images/footer-768.svg";
import Logo from "../../assets/images/logo.svg";

const footerLinks = [
  {
    id: 1,
    mainLinkTitle: "Product",
    mainLink: "product",
    subLinks: [
      {
        id: 1,
        subTitle: "Overview",
        subLink: "overview",
      },
      {
        id: 2,
        subTitle: "Pricing",
        subLink: "pricing",
      },
      {
        id: 3,
        subTitle: "Marketplace",
        subLink: "marketplace",
      },
      {
        id: 4,
        subTitle: "Features",
        subLink: "features",
      },
      {
        id: 5,
        subTitle: "Integrations",
        subLink: "integrations",
      },
    ],
  },
  {
    id: 2,
    mainLinkTitle: "Company",
    mainLink: "company",
    subLinks: [
      {
        id: 1,
        subTitle: "About",
        subLink: "about",
      },
      {
        id: 2,
        subTitle: "Team",
        subLink: "team",
      },
      {
        id: 3,
        subTitle: "Blog",
        subLink: "blog",
      },
      {
        id: 4,
        subTitle: "Careers",
        subLink: "careers",
      },
    ],
  },
  {
    id: 3,
    mainLinkTitle: "Connect",
    mainLink: "connect",
    subLinks: [
      {
        id: 1,
        subTitle: "Contact",
        subLink: "contact",
      },
      {
        id: 2,
        subTitle: "Newsletter",
        subLink: "newsletter",
      },
      {
        id: 3,
        subTitle: "LinkedIn",
        subLink: "linkedin",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative text-white mt-[100px] w-full flex flex-col items-center">
      <a href="/" className="block w-[101px] h-[40px] my-[75px]">
        <img src={Logo} alt="Blogr logo" className="block w-full h-full" />
      </a>
      <ul className="text-lg flex flex-col gap-9 items-center">
        {footerLinks.map((footerLink) => (
          <li key={footerLink.id} className="flex flex-col gap-2 items-center">
            <h4 className="mb-[20px]">{footerLink.mainLinkTitle}</h4>
            <ul className="flex flex-col gap-2 items-center">
              {footerLink.subLinks.map((subLink) => (
                <li key={subLink.id}>
                  <a
                    href={`/${footerLink.mainLink}/${subLink.subLink}`}
                    className="
                    inline-block
                    font-extralight
                  text-white/60"
                  >
                    {subLink.subTitle}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <figure className="absolute -z-30 top-0 left-0 w-screen sm:hidden">
        <img src={footerBG} alt="footer bg" className="block w-full h-full" />
      </figure>
      <figure className="absolute -z-30 top-0 left-0 hidden sm:w-screen sm:block">
        <img src={footerBG768} alt="footer bg" className="w-full h-full" />
      </figure>
    </footer>
  );
}
