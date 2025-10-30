import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "store";

export const Cart = () => {
  const count = useSelector((store: RootState) => store.cart.products.length);

  return (
    <p>
      <Link to="/cart" className="text-blue-600">
        Cart: {count}
      </Link>
    </p>
  );
};
