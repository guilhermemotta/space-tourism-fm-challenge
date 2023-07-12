import { useState } from "react";

import logo from "../assets/shared/logo.svg";
import iconHamburger from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";
import NavButton from "./navbutton";

// type NavbarProps = {
//   isDrawerOpen: boolean;

// }

const pages = [
  { index: "00", route: "home" },
  { index: "01", route: "destination" },
  { index: "02", route: "crew" },
  { index: "03", route: "technology" },
];

function Navbar() {
  // const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="flex w-full flex-row justify-between p-4">
      <div>
        <img className="h-[40px] w-[40px]" src={logo} />
      </div>

      <div>
        <input
          type="checkbox"
          id="drawer-toggle"
          className="peer fixed h-0 w-0 appearance-none opacity-0"
        />
        <label
          htmlFor="drawer-toggle"
          className="inline-flex appearance-none p-2"
        >
          <img className="mx-auto" src={iconHamburger} />
        </label>

        <nav className="fixed right-0 top-0 h-[100vh] w-[254px] translate-x-[100%] transform overflow-y-hidden overscroll-contain bg-white bg-opacity-[4%] px-4 py-12 backdrop-blur-2xl transition-transform duration-200 peer-checked:translate-x-[0%]">
          <label
            htmlFor="drawer-toggle"
            className="absolute right-6 top-6 inline-flex h-[20px] w-[20px] lg:hidden"
          >
            <img className="mx-auto" src={iconClose} />
          </label>

          <ul className="m-3 mt-16 flex flex-col gap-8 lg:flex-row">
            {pages.map((page) => (
              <NavButton index={page.index} label={page.route} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
