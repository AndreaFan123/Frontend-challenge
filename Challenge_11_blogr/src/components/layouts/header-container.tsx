// import BgPattern from "../../assets/images/bg-pattern-intro-mobile.svg";

export const HeaderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <header className="relative bg-gradient-to-b from-bg-gradient-light-red to-bg-gradient-red w-full h-[550px] px-7 pt-12 rounded-bl-[112px] md:px-20 flex flex-col gap-24 sm:px-12">
      {children}
      {/* <div className="absolute">
        <img src={BgPattern} alt="" />
      </div> */}
    </header>
  );
};
