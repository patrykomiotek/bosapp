import { useSelector } from "react-redux";
import type { RootState } from "store";

export const Cart = () => {
  const count = useSelector((store: RootState) => store.counter.value);

  return <p>Cart: {count}</p>;
};
