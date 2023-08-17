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
    <section className={`h-screen bg-cover ${bgVariants[bgToRender]}`}>
      <Navbar />

      {props.children}
    </section>
  );
}

export default Layout;
