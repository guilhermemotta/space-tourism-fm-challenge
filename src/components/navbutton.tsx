import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

type NavButtonProps = {
  index: string;
  label: string;
  isActive?: boolean;
};

function NavButton(props: NavButtonProps) {
  return (
    <li className="w-full font-condensed text-[16px] uppercase text-white">
      <NavLink
        to={`/${props.label === "home" ? "" : props.label}`}
        className={({ isActive }) => {
          let classes =
            "inline-block w-full py-1 pl-8 md:items-center md:py-10 md:pl-0";
          classes += isActive
            ? " border-r-4 border-white md:border-b-4 md:border-r-0"
            : "";
          return classes;
        }}
      >
        <span className="mr-2 font-bold md:hidden">{props.index}</span>{" "}
        {props.label}
      </NavLink>
    </li>
  );
}

export default NavButton;
