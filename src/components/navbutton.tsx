import { NavLink } from "react-router-dom";

type NavButtonProps = {
  index: string;
  label: string;
  isActive?: boolean;
};

function NavButton(props: NavButtonProps) {
  return (
    <li className="w-full font-condensed text-[16px] uppercase text-white md:w-auto">
      <NavLink
        to={`/${props.label === "home" ? "" : props.label}`}
        className={({ isActive }) => {
          let classes =
            "inline-block w-full py-1 pl-8 md:items-center md:py-9 md:pl-0";
          classes += isActive
            ? " border-r-4 border-white md:border-b-4 md:border-r-0"
            : " border-white border-opacity-0 transition ease-in hover:border-r-4 hover:border-opacity-50 md:hover:border-b-4 md:hover:border-r-0";
          return classes;
        }}
      >
        <span className="mr-2 font-bold md:hidden lg:inline">
          {props.index}
        </span>{" "}
        {props.label}
      </NavLink>
    </li>
  );
}

export default NavButton;
