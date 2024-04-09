import { Link, useLocation } from "react-router-dom";

import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";
import NavButton from "./navbutton";

const pages = [
  { index: "00", route: "home" },
  { index: "01", route: "destination" },
  { index: "02", route: "crew" },
  { index: "03", route: "technology" },
];

function Navbar() {
  const location = useLocation();

  return (
    <header className="z-50 flex w-full flex-row justify-between ps-6 md:mb-10 md:ps-9 lg:pt-[40px]">
      <Link to="/" className="py-6">
        <img className="h-[40px] w-[40px] md:h-[48px] md:w-[48px]" src={logo} />
      </Link>

      <div className="md:w-[60%]">
        {/* <div className="md:min-w-[450px]"> */}
        <input
          type="checkbox"
          id="drawer-toggle"
          className="peer fixed h-0 w-0 appearance-none opacity-0"
        />
        <label
          htmlFor="drawer-toggle"
          className="inline-flex appearance-none px-6 py-8 md:hidden"
        >
          <img className="mx-auto" src={iconHamburger} />
        </label>

        <nav className="fixed right-0 top-0 z-50 h-[100vh] w-[254px] translate-x-[100%] transform overflow-y-hidden overscroll-contain bg-white bg-opacity-[4%] py-12 text-start backdrop-blur-2xl transition-transform duration-200 peer-checked:translate-x-[0%] md:relative md:right-auto md:top-auto md:h-full md:w-full md:translate-x-0 md:px-12 md:py-0">
          <label
            htmlFor="drawer-toggle"
            className="absolute right-6 top-6 inline-flex h-[20px] w-[20px] md:hidden"
          >
            <img className="mx-auto" src={iconClose} />
          </label>

          <ul className="mt-16 flex flex-col gap-8 md:mt-0 md:flex-row  md:justify-between lg:ml-20 lg:gap-12">
            {pages.map((page) => (
              <NavButton
                key={`${page.index}-${page.route}`}
                index={page.index}
                label={page.route}
                isActive={
                  (location.pathname === "/" && page.route === "home") ||
                  location.pathname === `/${page.route}`
                }
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
