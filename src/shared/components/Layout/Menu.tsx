import { Link, NavLink } from "react-router-dom";
import { ROUTE } from "../../../routes";

export const Menu = () => {
  return (
    <nav className="mb-8">
      <ul className="flex gap-2">
        <li>
          <NavLink to={ROUTE.HOME.path} className="text-blue-600">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/registration" className="text-blue-600">
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-blue-600">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-blue-600">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
