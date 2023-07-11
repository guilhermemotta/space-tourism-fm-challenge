import { NavLink } from "react-router-dom";

type NavButtonProps = {
  index: string;
  label: string;
};

function NavButton(props: NavButtonProps) {
  return (
    <li className="font-condensed text-[16px] uppercase text-white">
      <NavLink to={`/${props.label === "home" ? "" : props.label}`}>
        <span className="mr-2 font-bold">{props.index}</span> {props.label}
      </NavLink>
    </li>
  );
}

export default NavButton;
