import { Link } from "react-router-dom";

import { Button, Header } from "@/ui";
import type { ProductDto } from "../contracts/Product.dto";
import { useAppDispatch } from "@/hooks/index";
import { add } from "@/features/cart/cartSlice";

type Props = {
  id: ProductDto["id"];
  product: {
    name: ProductDto["fields"]["name"];
    description: ProductDto["fields"]["description"];
    price: ProductDto["fields"]["price"];
  };
};

export const ProductCard = ({ id, product }: Props) => {
  const dispatch = useAppDispatch();
  const { name, description, price } = product;
  const productDto: ProductDto = {
    id,
    fields: {
      ...product,
      created_at: "",
      updated_at: "",
    },
  };

  return (
    <div className="m-4 p-4 outline rounded-md">
      <Header>
        <Link to={`/products/${id}`} className="text-blue-600">
          {name}
        </Link>
      </Header>
      <div>
        <p className="font-medium">{description}</p>
        <p className="text-sm text-slate-500">${price}</p>
        <Button
          bgColor="midnightBlue"
          onClick={() => dispatch(add(productDto))}
        >
          Add
        </Button>
      </div>
    </div>
  );
};
