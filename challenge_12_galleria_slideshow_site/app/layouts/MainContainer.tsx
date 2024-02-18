export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-20 lg:pt-28 xl:pt-40  lg:flex lg:flex-col lg:justify-between lg:gap-14 xl:gap-7 ">
      {children}
    </main>
  );
};
