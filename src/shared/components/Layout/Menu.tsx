import { Link } from "react-router-dom";
import { ROUTE } from "../../../routes";

export const Menu = () => {
  return (
    <nav className="mb-8">
      <ul className="flex gap-2">
        <li>
          <Link to={ROUTE.HOME.path} className="text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link to="/registration" className="text-blue-600">
            Registration
          </Link>
        </li>
      </ul>
    </nav>
  );
};
