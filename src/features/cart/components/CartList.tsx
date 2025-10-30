import { useSelector } from "react-redux";

import { useAppDispatch } from "@/hooks/index";
import { Button } from "@/ui";
import type { RootState } from "store";
import { remove, clear } from "../cartSlice";

export const CartList = () => {
  const products = useSelector((store: RootState) => store.cart.products);
  const dispatch = useAppDispatch();

  console.log({ products });

  // clear() -> { type: 'cart/clear' } (action creator)
  // dispatch({ type: 'cart/clear' })
  return (
    <div>
      <Button onClick={() => dispatch(clear())}>Clear</Button>
      {products.map((elem) => (
        <div key={elem.id}>
          <h2>{elem.fields.name}</h2>
          <p>{elem.fields.description}</p>
          <p>{elem.fields.price}</p>
          <Button bgColor="carrot" onClick={() => dispatch(remove(elem.id))}>
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
};
