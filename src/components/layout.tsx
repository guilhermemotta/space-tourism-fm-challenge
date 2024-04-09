import { useLocation } from "react-router-dom";

import Navbar from "./navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const bgVariants = {
  home: "bg-home-mobile md:bg-home-tablet lg:bg-home-desktop",
  destination:
    "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop",
  crew: "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop",
  technology:
    "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop",
};

function Layout(props: LayoutProps) {
  const { pathname } = useLocation();
  const pageName = pathname.substring(1);
  const bgToRender = (
    pageName === "" ? "home" : pageName
  ) as keyof typeof bgVariants;

  return (
    <div
      className={`min-h-screen bg-cover text-center md:text-start lg:h-full ${bgVariants[bgToRender]} lg:pb-4`}
    >
      <Navbar />

      <main className="md:mx-[38px] lg:mx-[165px]">{props.children}</main>
    </div>
  );
}

export default Layout;
