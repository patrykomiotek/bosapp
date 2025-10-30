import { NavLink } from "react-router-dom";
import { ROUTE } from "../../../routes";
import { Cart } from "@/features/cart/components/Cart";

export const Menu = () => {
  return (
    <nav className="mb-8">
      <ul className="flex gap-2">
        <li>
          <NavLink to={ROUTE.HOME.path} className="text-blue-600">
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/registration" className="text-blue-600">
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/generator" className="text-blue-600">
            Generator
          </NavLink>
        </li>
        <li>
          <NavLink to="/auth" className="text-blue-600">
            Auth info
          </NavLink>
        </li>
        <li>
          <NavLink to="/stepper" className="text-blue-600">
            Stepper
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/stepper-redux" className="text-blue-600">
            Stepper Redux
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="text-blue-600">
            Products
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
        <li>
          <Cart />
        </li>
      </ul>
    </nav>
  );
};
